import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    setPosts([newPost, ...posts]);
    navigate("/posts/postList");
  };

  return (
    <div className=" flex-1 min-h-screen bg-linear-to-b from-gray-50 to-blue-50  p-4 sm:p-8">
   <form
        onSubmit={handleSubmit}
        className=" space-y-5 rounded-lg border border-gray-200 
        bg-white p-5 sm:p-8"
      >
        

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

        <div className="flex justify-end gap-3 border-t border-gray-100 pt-4">
          <button
            type="button"
            onClick={() => navigate(`/posts/postList`)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}