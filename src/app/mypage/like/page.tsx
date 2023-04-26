"use client";
import { getMylikeApi } from "@/client/mydata";
import { useSession } from "next-auth/react";

export default function MyLike() {
  const session: any = useSession();

  const accessToken = session.data.Authorization;

  const data = getMylikeApi(accessToken).then((res) => console.log(res));

  return;
}
