import { useDetailedData } from "./hooks/useDetailedData";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEditPost } from "./hooks/useEditPost";

export default function EditPost({ posts = [] }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {
  post,
  isPostPending,
  postError,
} = useDetailedData(id);
  const { mutateAsync, isPending, isError, error } = useEditPost();

  useEffect(() => {
    if (post) {
      setTitle(post.title ?? "");
      setBody(post.body ?? "");
    }
  }, [post]);


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await mutateAsync({
        id: Number(id),
        title,
        body,
      });

      navigate(`/posts/${id}`);
    } catch (err) {
      console.error("Failed to edit post:", err);
    }
  }
  if (isPostPending) return <p>Loading post...</p>;

if (postError) {
  return <p>{postError.message}</p>;
}
  return (
    <div className="flex-1 border h-min border-gray-500 rounded-2xl p-8 shadow-sm 
    font-lato w-min m-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-xl font-bold ml-2 font-lato">Title</label>
          <input
          className="border rounded-2xl px-2 font-lato py-1 m-2"
            id="title"
            type="text"
            placeholder="Enter title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="body" className="text-xl font-bold font-lato ml-2">Description</label>
          <input
          className="border rounded-2xl px-2 py-1 m-2"
            id="body"
            type="text"
            placeholder="Enter Description"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {isError && (
          <p className="text-red-500">{error.message}</p>
        )}

        <div className="flex gap-2 mx-2 my-4">
          <button 
          className="border p-1 cursor-pointer rounded-xl hover:text-gray-500
          font-lato disabled:opacity-50"
          type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Save changes"}
          </button>

          <button
           className="border p-1 cursor-pointer rounded-xl hover:text-gray-500 font-lato disabled:opacity-50"
            type="button"
            onClick={() => navigate(`/posts/${id}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
