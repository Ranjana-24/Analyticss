import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function EditPost({ posts, setPosts }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
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
        throw new Error("Failed to update post");
      }
      const data = await response.json();
      const updatedPosts = posts.map((post) => {
        if (post.id === Number(id)) {
          return {
            ...post,
            title,
            body,
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      navigate(`/posts/${id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const existingPost = posts.find((post) => post.id === Number(id));
    if (existingPost) {
      setTitle(existingPost.title);
      setBody(existingPost.body);
    }
  }, [id, posts]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex gap-2">
          <button type="submit">
            {loading ? "updating..." : "Save changes"}
          </button>
          <button type="button" onClick={() => navigate(`/posts/${id}`)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
