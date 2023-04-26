import { myNumData } from "@/client/mydata";
import { Session, UserData } from "@/model/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const session : Session | null = await getServerSession(authOptions);

    const accessToken = session?.Authorization;
    const refreshToken = session?.RefreshToken;

    if(!accessToken){
        return new Response("Authentication Error!!!!!!!!!!!", {status: 401})
    }
    return await myNumData(accessToken).then(res=> NextResponse.json(res))
}