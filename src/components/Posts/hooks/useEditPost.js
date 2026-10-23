
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, title, body }) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      return response.json();
    },

    onSuccess: (data, variables) => {
      const { id, title, body } = variables;

      queryClient.setQueryData(["posts"], (oldPosts) =>
        oldPosts?.map((post) =>
          Number(post.id) === Number(id)
            ? { ...post, ...data, id: Number(id), title, body }
            : post
        )
      );

      queryClient.setQueryData(["post", String(id)], (oldPost) => ({
        ...(oldPost ?? {}),
        ...data,
        id: Number(id),
        title,
        body,
      }));
    },
  });
};
