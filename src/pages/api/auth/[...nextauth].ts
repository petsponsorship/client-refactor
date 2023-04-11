import { NextApiRequest } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export  const authOptions: NextAuthOptions ={
    providers: [
        CredentialsProvider({
            id: "user-credentials",
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "아이디를 입력하세요" },
                password: { label: "Password", type: "password" }
            },
            
            async authorize(credentials: Record<any, any> | undefined, req: NextApiRequest | undefined) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {"Content-Type": "application/json"}
                });
                const user = await res.json();

                if(res.ok && user) {
                    return user
                }
            }
        })
    ],
    callbacks: {
        async jwt({user, token, account}){
            if(user) {
                token.Authorization = user?.accessToken
                token.refreshToken = user.refreshToken
            }
            return token;
        },
        async session({token, session}){
            session.Authorization = token.Authorization
            session.RefreshToken = token.refreshToken
                        console.log(session)
            return session;

        }
    },
    pages: {
        signIn: '/login',
    }
}

export default NextAuth(authOptions)