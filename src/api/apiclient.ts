import axios from "axios"
import { getSession } from "next-auth/react"

export const ApiClient = () => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
        }
    })
    instance.interceptors.request.use(async(request)=> {
        const session = await getSession();

        if(session) {
            request.headers.common = {
                Authorization: `${session.user.Authorization}`,
                RefreshToken: `${session.user.refreshToken}`
            }
        }
        return request;
    })
    
    instance.interceptors.response.use((response)=> {
        return response;
    },
    (error)=>{
       console.log(error)

    })
}


