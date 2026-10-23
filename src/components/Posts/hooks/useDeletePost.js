import { useMutation } from "@tanstack/react-query";
import {useQueryClient} from "@tanstack/react-query";
export const useDeletePost = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                {
                    method: "DELETE",
                },
            );
            if (!response.ok) {
                throw new Error("Failed to delete post");
            }
            return id;
        },
    //     onSuccess: (id) => {
    //         queryClient.setQueryData(["posts"], (oldPosts) => 
    //             oldPosts?.filter((post) => Number(post.id) !== Number(id)
    //     ));
    //      // Remove the individual post from the cache
    //   queryClient.removeQueries({
    //     queryKey: ["post", String(id)],
    //     exact: true,
    //   });
    // }

onSuccess: (id) => {
  // Update all posts lists, including dropdown lists
  queryClient.setQueriesData(
    { queryKey: ["posts"] },
    (oldPosts) => {
      if (!Array.isArray(oldPosts)) return oldPosts;

      return oldPosts.filter(
        (post) => Number(post.id) !== Number(id)
      );
    }
  );

  // Remove the individual post from the cache
  queryClient.removeQueries({
    queryKey: ["post", String(id)],
    exact: true,
  });
},

});
}