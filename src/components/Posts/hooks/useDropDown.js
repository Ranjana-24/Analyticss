import { useQuery } from "@tanstack/react-query";
export const useDropDown = (userId) => {
  return useQuery({
    queryKey: ["posts", "user", userId],

    queryFn: async () => {
      const url = userId
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        : "https://jsonplaceholder.typicode.com/posts";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
