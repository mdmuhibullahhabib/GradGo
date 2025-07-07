import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useConsultant =() => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {data: consultant = [], refetch} = useQuery({
        queryKey: ['consultant'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/users/consultant');
            console.log('consultant', res.data)
            return res.data;
        }
    })
    console.log(consultant)
    return [consultant, refetch]
};

export default useConsultant;