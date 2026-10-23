// import {useQuery, useQueryClient} from "@tanstack/react-query";
// export const useDetailedData = (id) => {
//     const queryClient = useQueryClient();
//     const fetchDetailedData = async () => {
//         // checking that the posts are already in the cache
//         const cachedPosts = queryClient.getQueryData(["posts"]);
//              const cachedPost = cachedPosts?.find(
//       (post) => Number(post.id) === Number(id)
//     );

//     if (cachedPost) {
//       return cachedPost;
//     }
//     // if the post is not in the cache, fetch it from the API
//         const response = await fetch(
//              `https://jsonplaceholder.typicode.com/posts/${id}`
//         );
   
//           if(!response.ok){
//               throw new Error("Failed to fetch post");
//           }
//           return response.json();
//     };

//     const fetchComments = async() => {
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//         );
//         if(!response.ok){
//             throw new Error("Failed to fetch comments");
//         }
//         return response.json();
//     }
//     const {
//         data: post,
//         isPending: isPostPending,
//         error: postError,
//     } = useQuery({
//         queryKey: ["post", id],
//         queryFn: fetchDetailedData,
//         enabled: !!id,
//         staleTime: 60 * 1000,
//     });

//     const {
//         data:comments = [],
//         isPending: isCommentsPending,
//         error: commentsError,
//     } = useQuery({
//         queryKey: ["comments", id],
//         queryFn: fetchComments,
//         enabled: !!id,
//         staleTime: 60 * 1000,
//     });
//     return{
//         post,
//         comments,
//         isPostPending,
//         isCommentsPending,
//         postError,
//         commentsError,
//     }
//     }


import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useDetailedData = (id) => {
  const queryClient = useQueryClient();

  const { data: post, isPending: isPostPending, error: postError } =
    useQuery({
      queryKey: ["post", id],
      queryFn: async () => {
        // Check individual post cache
        const cachedPost = queryClient.getQueryData([
          "post",
          String(id),
        ]);

        if (cachedPost) return cachedPost;

        // Check posts list cache
        const cachedPosts = queryClient.getQueriesData({
          queryKey: ["posts"],
        });

        for (const [, posts] of cachedPosts) {
          if (!Array.isArray(posts)) continue;

          const found = posts.find(
            (post) => Number(post.id) === Number(id)
          );

          if (found) return found;
        }

        // Fetch existing posts from API
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        return response.json();
      },
      enabled: !!id,
    });

  const {
    data: comments = [],
    isPending: isCommentsPending,
    error: commentsError,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }

      return response.json();
    },
    enabled: !!id,
  });

  return {
    post,
    comments,
    isPostPending,
    isCommentsPending,
    postError,
    commentsError,
  };
};
