
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DeletePost from "./DeletePost";
import ErrorMessage from "../../pages/ErrorMessage.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function DetailedPost({ posts, setPosts }) {
  const [confirmDlt, setConfirmDlt] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  if (posts === null) {
    return <p className="p-6">Loading post...</p>;
  }    

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <ErrorMessage />;
  }

  const handleDelete = () => {
    const newPostsData = posts.filter(
      (post) => post.id !== Number(id)
    );

    setPosts(newPostsData);
    navigate("/posts/postList");
  };

  return (
    <div className="flex-1 bg-linear-to-b from-gray-50 to-blue-100 ">
      {confirmDlt && (
        <DeletePost
          confirmDlt={confirmDlt}
          setConfirmDlt={setConfirmDlt}
          handleDelete={handleDelete}
        />
      )}

      {/* Top buttons */}
      <div className="flex justify-between items-center p-4 ">
        <button
          className="border border-gray-500 rounded-2xl px-2 py-1 cursor-pointer"
          onClick={() => navigate("/posts/postList")}
        >
          <IoMdArrowRoundBack />
        </button>

        <div className="flex gap-2">
          <button
            className="border border-gray-500 cursor-pointer rounded-2xl px-2 py-1
             hover:bg-red-400 hover:scale-102 text-sm"
            onClick={() => setConfirmDlt(true)}
          >
            Delete
          </button>

          <button
            className="border border-gray-500 cursor-pointer rounded-2xl 
            text-sm hover:scale-102 px-2 py-1"
            onClick={() => navigate(`/posts/${post.id}/edit`)}
          >
            Edit
          </button>
        </div>
      </div>

      {/* Post data below the buttons */}
      <div className="p-6">
        <h1 className="text-3xl font-bold font-lato">{post.title}</h1>
        <p className="mt-4 text-gray-500 font-lato">{post.body}</p>
      </div>
    </div>
  );
}
