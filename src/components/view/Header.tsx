"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { BsBell } from "react-icons/bs";
import { useSession } from "next-auth/react";

const ITME_PADDING = "px-2 font-bold";
export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center p-4 bg-red-100 border-b-2 border-red-200">
      <Link href="/">
        <Image src={logo} width={150} height={100} alt="logo" />
      </Link>
      <nav className="flex mt-10">
        <Link href="/" className={ITME_PADDING}>
          Home
        </Link>
        {session ? (
          <Link href="/logout" className={ITME_PADDING}>
            로그아웃
          </Link>
        ) : (
          <Link href="/login" className={ITME_PADDING}>
            로그인
          </Link>
        )}
        <Link href="/mypage" className={ITME_PADDING}>
          마이페이지
        </Link>
        <Link href="/" className={ITME_PADDING}>
          <BsBell className="mt-1" />
        </Link>
      </nav>
    </header>
  );
}
