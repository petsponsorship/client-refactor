"use client";
import { setCookie } from "@/util/cookies";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

type SessionData = {
  Authorization: string;
  RefreshToken: string;
  expires: string;
};

type SessionType = {
  data: SessionData | any;
  status: string;
  update: any;
};

export default function AuthroizationHeader({ children }: Props) {
  const { status, data: session }: SessionType = useSession();

  const isLogin = !!session && status === "authenticated";
  const accesstoken = isLogin ? session.Authorization : "";
  const refreshToken = isLogin ? session.RefreshToken : "";

  useEffect(() => {
    setCookie("Authroization", accesstoken);
    setCookie("RefreshToken", refreshToken);
  }, [isLogin]);
  return <>{children}</>;
}
