import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useCollection = () => {
  const {
    data: collection = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["collection"],
    queryFn: async () => {
      try {
        const data = await axios.get(
          "https://api.pewds.vercel.app/prothomalo/collection/latest?start_from=0&per_page=15"
        );
        return data?.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });
  return [collection, isLoading, refetch];
};

export default useCollection;
