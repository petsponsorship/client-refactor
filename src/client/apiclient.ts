'use client'
import { getCookie } from "@/util/cookies";
import axios from "axios"
import { getSession, useSession } from "next-auth/react"


export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
    }
})

    instance.interceptors.request.use((config)=> {
        if(!config.headers) return config;
        const accessToken = getCookie("Authorization");
        const refreshToken = getCookie("RefreshToken");

        if(accessToken && refreshToken && config.headers) {
            config.headers["Authorization"] = `${accessToken}`;
            config.headers["RefreshToken"] = `${refreshToken}`
        }
        return config;
    })
    
    instance.interceptors.response.use((response)=> {
        return response;
    },
    (error)=>{
       console.log(error)

    })



