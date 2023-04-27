import { Session } from "@/model/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios"
import { getServerSession } from "next-auth";

const getToken = async () => {
 const session: Session | null =await getServerSession(authOptions);

const accessToken = session?.Authorization;
const refreshToken = session?.RefreshToken;
    return {accessToken, refreshToken}
}



export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
    }
})

    instance.interceptors.request.use((config)=> {
        if(!config.headers) return config;
        const accessToken = getToken().then(res=>res.accessToken);
        const refreshToken = getToken().then(res=>res.refreshToken)

        if(accessToken && refreshToken && config.headers) {
            console.log("토큰있음")
            config.headers["Authorization"] = `${accessToken}`;
            config.headers["RefreshToken"] = `${refreshToken}`
        }
        return config;
    })
    
    instance.interceptors.response.use((response)=> {
        return response;
    },
    (error)=>{
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
    
            axios.get(`${process.env.NEXTAUTH_URL}/auth/token`).then((res) => {
              if (res.status === 200) {
                console.log("Access token refreshed");
                return axios(originalRequest);
              }
            });
    
          } else {
            return Promise.reject(error);
          }

    })



