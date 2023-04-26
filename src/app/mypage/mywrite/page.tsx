"use client";
import { useSession } from "next-auth/react";

export default function MyWrite() {
  const session: any = useSession();

  return <>writeList</>;
}
