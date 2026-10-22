import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreatePost({ setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      const data = await response.json();
      const newPosts = {
        ...data,
        id: Date.now(),
        userId: 1,
        title,
        body,
      };
      setPosts((prevPosts) => [newPosts, ...prevPosts]);
      navigate("/posts");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Description</label>
          <input
            type="text"
            placeholder="Enter Description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-2">
          <button type="submit">
            {loading ? "creating..." : "Create Post"}
          </button>
          <button type="button" onClick={() => navigate("/posts")}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
