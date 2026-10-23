import { useMutation } from "@tanstack/react-query";
import {useQueryClient} from "@tanstack/react-query";
export const useCreatePost = () => {
    const queryClient = useQueryClient();
     return useMutation({
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
        // onSuccess: (data, variables) => {
        //     const newPost = {
        //         ...data,
        //         id: Date.now(),
        //         ...variables,
        //     }
        //     queryClient.setQueryData(["posts"], (prev) => [
        //         newPost,
        //         ...prev,
        //     ]);
        // }

onSuccess: (data, variables) => {
  const newPost = {
    ...data,
    ...variables,
    id: Date.now(),
  };

 
queryClient.setQueriesData(
  { queryKey: ["posts"] },
  (prev) => {
    if (!Array.isArray(prev)) return prev;

    return [newPost, ...prev];
  }
);

  // Storing the new post using its  ID
  queryClient.setQueryData(
    ["post", String(newPost.id)],
    newPost
  )
}
     })
    }