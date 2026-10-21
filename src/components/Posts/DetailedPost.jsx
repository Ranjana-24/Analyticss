// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import DeletePost from "./DeletePost";
// import ErrorMessage from "../../pages/ErrorMessage.jsx";
// import { IoMdArrowRoundBack } from "react-icons/io";

// export default function DetailedPost({ posts, setPosts }) {
//   const [confirmDlt, setConfirmDlt] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   if (posts === null) {
//     return <p className="p-6">Loading post...</p>;
//   }

//   const post = posts.find((post) => post.id === Number(id));

//   if (!post) {
//     return <ErrorMessage />;
//   }

//   const handleDelete = () => {
//     const newPostsData = posts.filter(
//       (post) => post.id !== Number(id)
//     );

//     setPosts(newPostsData);
//     navigate("/posts/postList");
//   };

//   return (
//     <div className="flex-1 bg-linear-to-b from-gray-50 to-blue-100 ">
//       {confirmDlt && (
//         <DeletePost
//           confirmDlt={confirmDlt}
//           setConfirmDlt={setConfirmDlt}
//           handleDelete={handleDelete}
//         />
//       )}

//       {/* Top buttons */}
//       <div className="flex justify-between items-center p-4 ">
//         <button
//           className="border border-gray-500 rounded-2xl px-2 py-1 cursor-pointer"
//           onClick={() => navigate("/posts/postList")}
//         >
//           <IoMdArrowRoundBack />
//         </button>

//         <div className="flex gap-2">
//           <button
//             className="border border-gray-500 cursor-pointer rounded-2xl px-2 py-1
//              hover:bg-red-400 hover:scale-102 text-sm"
//             onClick={() => setConfirmDlt(true)}
//           >
//             Delete
//           </button>

//           <button
//             className="border border-gray-500 cursor-pointer rounded-2xl
//             text-sm hover:scale-102 px-2 py-1"
//             onClick={() => navigate(`/posts/${post.id}/edit`)}
//           >
//             Edit
//           </button>
//         </div>
//       </div>

//       {/* Post data below the buttons */}
//       <div className="p-6">
//         <h1 className="text-3xl font-bold font-lato">{post.title}</h1>
//         <p className="mt-4 text-gray-500 font-lato">{post.body}</p>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailedPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPost() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getPost();
  }, [id]);

  if (loading) {
    return (
      <main className="min-w-0 flex-1 p-6">
        <p>Loading post...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-w-0 flex-1 p-6">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => navigate("/posts")}
          className="mt-4 rounded-lg border px-4 py-2"
        >
          Back to Posts
        </button>
      </main>
    );
  }

  if (!post || !post.id) {
    return (
      <main className="min-w-0 flex-1 p-6">
        <p>Post not found.</p>
        <button
          onClick={() => navigate("/posts")}
          className="mt-4 rounded-lg border px-4 py-2"
        >
          Back to Posts
        </button>
      </main>
    );
  }

  return (
    <main className="min-w-0 flex-1 bg-gray-50 p-6">
      <div className="mx-auto max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
        <button
          onClick={() => navigate("/posts")}
          className="mb-5 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          Back to Posts
        </button>

        <p className="mb-2 text-sm text-gray-500">Post ID: {post.id}</p>

        <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>

        <p className="leading-7 text-gray-700">{post.body}</p>
      </div>
    </main>
  );
}
