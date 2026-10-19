
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPost({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts?.find(
    (post) => post.id === Number(id)
  );

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post?.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...post,
      title,
      body,
    };

    setPosts((previousPosts) =>
      previousPosts.map((item) =>
        item.id === Number(id) ? updatedPost : item
      )
    );

    navigate(`/posts/${id}`);
  };

  if (posts === null) {
    return <p className="p-6">Loading post...</p>;
  }

  if (!post) {
    return <p className="p-6">Post not found.</p>;
  }

  return (
    <div className=" flex-1 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50  p-4 sm:p-8">
      <form
        onSubmit={handleSubmit}
        className=" space-y-5 rounded-lg border border-gray-200 
        bg-white p-5 sm:p-8"
      >
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Edit Post
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Update your post details.
          </p>
        </div>

        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="body"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            id="body"
            rows={6}
            className="w-full  rounded-md border border-gray-300 px-3 py-2 text-sm "
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end gap-3   pt-4">
          <button
            type="button"
            onClick={() => navigate(`/posts/${id}`)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm 
            cursor-pointer text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm cursor-pointer font-medium text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
