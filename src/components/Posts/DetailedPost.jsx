import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function DetailedPost({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function detailedPost() {
      const existingPost = posts.find((post) => post.id === Number(id));
      if (existingPost) {
        setPost(existingPost);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        if (!data || !data.id) {
          setPost(null);
          return;
        }

        setPost(data);
      } catch (err) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    detailedPost();
  }, [id, posts]);

  //comments
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }

        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Comments error:", error);
      }
    }

    fetchComments();
  }, [id]);
  if (loading) {
    return <p>Loading post...</p>;
  }
  if (!post) {
    return <p>Post not found.</p>;
  }
  return (
    <div className="flex-1 border border-gray-500 rounded-2xl p-6 shadow-sm font-lato m-14">
      <button
        onClick={() => navigate("/posts")}
        className="border border-gray-400 rounded-2xl font-lato px-2 py-1"
      >
        Go back
      </button>
      <h1>{post.title}</h1>
      <p>Post ID: {post.id}</p>
      <p>{post.body}</p>

      <div className="mt-8 border-t pt-6">
        <h2 className="mb-4 text-2xl font-bold">
          Comments ({comments.length})
        </h2>

        {comments.length === 0 ? (
          <p className="text-gray-500">No comments found.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="rounded-xl border bg-white p-4">
                <h3 className="font-semibold">{comment.name}</h3>

                <p className="mt-1 text-sm text-gray-500">{comment.email}</p>

                <p className="mt-3 text-gray-700">{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
