import { fetchMainData } from "@/client/mainpost";
import { NextResponse } from "next/server";

export async function GET() {
 return fetchMainData().then((data)=>NextResponse.json(data))
}
