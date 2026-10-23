import { useState } from "react";
import { useNavigate } from "react-router-dom";
  import {useCreatePost} from "./hooks/useCreatePost";
export default function CreatePost({ setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const {
    mutateAsync,
    isPending,
    isError,
    error,
  } = useCreatePost();
  const navigate = useNavigate();

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     setError("");
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           title,
  //           body,
  //         }),
  //       },
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to create post");
  //     }
  //     const data = await response.json();
  //     const newPosts = {
  //       ...data,
  //       id: Date.now(),
  //       userId: 1,
  //       title,
  //       body,
  //     };
  //     setPosts((prevPosts) => [newPosts, ...prevPosts]);
  //     navigate("/posts");
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    //setError("");
    // try {
    //   const data = await mutateAsync({
    //     title,
    //     body,
    //     userId: 1,
    //   }); 
    //   const newPost = {
    //     ...data,
    //     id: Date.now(),
    //   };
    //   setPosts((prevPosts) => [newPost, ...prevPosts]);
    //   navigate("/posts");
    // } catch (err) {
    //   //setError(err);
    //   console.log(err);
    // }
    try{
      await mutateAsync({
        title,
        body,
        userId: 1,
      });
      navigate("/posts");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <div className="flex-1 border h-min border-gray-500 rounded-2xl p-8 shadow-sm 
    font-lato w-min m-6">
      <form onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="title"
          className="text-xl font-bold font-lato ml-2"
          >Title : </label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border rounded-2xl  px-2 py-1 m-2"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="body"
           className="text-xl font-bold font-lato ml-2">Description:</label>
          <input
            type="text"
            placeholder="Enter Description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
           className="border rounded-2xl  px-2 py-1 m-2"
          />
        </div>
        {isError && <p className="text-red-500">{error.message}</p>}
        <div className="flex gap-2 mx-2 mt-2">
          <button type="submit"
          className="cursor-pointer px-2 py-1 hover:text-gray-500 border rounded-2xl">
            {isPending ? "creating..." : "Create Post"}
          </button>
          <button type="button" onClick={() => navigate("/posts")}
             className="cursor-pointer px-2 py-1 hover:text-gray-500 border rounded-2xl">
            Cancel
          </button>
        </div>
      </form>
      </div>
    </>
  );
}
