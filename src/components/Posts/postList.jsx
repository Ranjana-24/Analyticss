import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCreate } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

import DeletePost from "../Posts/DeletePost.jsx";
import { useQuery } from "@tanstack/react-query";
export default function postList({ setPosts }) {
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState("");
  const [confirmDlt, setConfirmDlt] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const {
    data: posts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      return data;
    },
    staleTime: 60 * 1000,
  });
  if (isPending) {
    return <p className="p-6">Loading posts...</p>;
  }

  if (isError) {
    return <p className="p-6 text-red-500">{error.message}</p>;
  }

  if (posts.length === 0) {
    return <p className="p-6">No posts found.</p>;
  }

  async function handleDelete() {
    if (!selectedPost) return;

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== selectedPost.id),
      );

      setConfirmDlt(false);
      setSelectedPost(null);
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  // filter fnx
  async function handleFilter(e) {
    const userId = e.target.value;
    setSelectedUserId(userId);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Filter error:", error);
    }
  }
  return (
    <div className="flex-1 bg-gray-50 p-4">
      <div className="mb-4 flex justify-between">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <div className="flex gap-2">
          <select value={selectedUserId} onChange={handleFilter}>
            <option>All posts</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <button
            onClick={() => navigate("/posts/create")}
            className="cursor-pointer text-xl text-gray-700"
          >
            <IoCreate />
          </button>
        </div>
      </div>

      <div className="font-lato">
        {posts.map((post) => (
          <div key={post.id} className="mb-2 flex">
            <div className="flex w-full justify-between gap-2 rounded-2xl border p-4 hover:bg-gray-100">
              <h2>{post.title}</h2>
              <div className="flex gap-2">
                <button onClick={() => navigate(`/posts/${post.id}/edit`)}>
                  <MdModeEditOutline />
                </button>
                <button
                  onClick={() => {
                    setSelectedPost(post);
                    setConfirmDlt(true);
                  }}
                >
                  <MdDelete />
                </button>
                <button
                  onClick={() => navigate(`/posts/${post.id}`)}
                  className="cursor-pointer"
                >
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
          </div>
        ))}
        <DeletePost
          confirmDlt={confirmDlt}
          setConfirmDlt={setConfirmDlt}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
