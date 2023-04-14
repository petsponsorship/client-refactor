"use client";
import { setCookie } from "@/util/cookies";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function AuthroizationHeader({ children }: Props) {
  const { status, data: session } = useSession();
  console.log(session);
  const isLogin = !!session && status === "authenticated";
  const accesstoken = isLogin ? session.Authorization : "";
  const refreshToken = isLogin ? session.RefreshToken : "";

  useEffect(() => {
    setCookie("Authroization", accesstoken);
    setCookie("RefreshToken", refreshToken);
  }, [isLogin]);
  return <>{children}</>;
}
