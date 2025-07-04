// import axios from 'axios'
// import React from 'react'

//  const axiosPublic = axios.create({
//     baseURL: 'https://tourism-management-server-ten.vercel.app'
// })

// const useAxiosPublic = () => {
//   return axiosPublic
// }

import axios from 'axios'
import React from 'react'
const axiosPublic = axios.create({
    baseURl: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;