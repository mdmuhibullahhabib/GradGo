import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useGuide =() => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {data: guides = [], refetch} = useQuery({
        queryKey: ['consultant'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/users/consultant');
            console.log('consultant', res.data)
            return res.data;
        }
    })
    console.log(guides)
    return [consultant, refetch]
};

export default useGuide;