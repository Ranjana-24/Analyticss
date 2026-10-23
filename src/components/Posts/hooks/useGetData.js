import { useQuery } from "@tanstack/react-query";
export const useGetData = () => {
    const fetchdata = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    };
    const { data, isPending, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchdata,
        // staleTime: 60 * 1000,
    });
     return { data, isPending, error };
    }
   