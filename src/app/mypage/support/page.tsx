"use client";

import { getMySupportList } from "@/client/mydata";
import { useSession } from "next-auth/react";

export default function MySupport() {
  const session: any = useSession();
  const accessToken = session.data.Authorization;

  const data = getMySupportList(accessToken).then((res) => console.log(res));

  return <p>후원</p>;
}
