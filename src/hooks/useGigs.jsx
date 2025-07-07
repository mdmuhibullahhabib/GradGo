import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useGigs =() => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {data: gigs = [], refetch} = useQuery({
        queryKey: ['gigs'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/gigs');
            console.log('gigs', res.data)
            return res.data;
        }
    })
    console.log(gigs)
    return [gigs, refetch]
};

export default useGigs;