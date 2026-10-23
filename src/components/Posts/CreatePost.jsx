import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
export default function CreatePost({ setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
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
    try {
      const data = await createPostMutation.mutateAsync({
        title,
        body,
        userId: 1,
      });
      const newPost = {
        ...data,
        id: Date.now(),
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      navigate("/posts");
    } catch (err) {
      //setError(err);
      console.log(err);
    }
  }
  const createPostMutation = useMutation({
    mutationFn: async (newPost) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      return response.json();
      // above line sends the api's response to the mutation.
    },
  });
  const { isPending, isError, error } = createPostMutation;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
        {isError && <p className="text-red-500">{error.message}</p>}
        <div className="flex gap-2">
          <button type="submit">
            {isPending ? "creating..." : "Create Post"}
          </button>
          <button type="button" onClick={() => navigate("/posts")}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
