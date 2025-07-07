import React from 'react'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from './useAuth';

const useUserdata = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: userData = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user.email}`)
            return res.data;
        }
    })
    return [userData, refetch]
};


export default useUserdata