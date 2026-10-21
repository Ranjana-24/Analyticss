import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();

      //console.log("Created post:", data);
      setPosts((prevPosts) => [data, ...prevPosts]);
      navigate("/posts");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-w-0 flex-1 bg-gray-50 p-6">
      <div className="mx-auto max-w-xl rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Create Post</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-medium">Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Body</label>

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter post description"
              rows={5}
              required
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Post"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/posts")}
              className="rounded-lg border px-5 py-3 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
