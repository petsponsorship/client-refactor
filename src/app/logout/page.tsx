"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signout() {
  const session = useSession();
  const router = useRouter();

  return (
    <section className="border-2 border-solid flex flex-col w-3/5 h-1/4 border-neutral-200 mx-auto mt-24 items-center p-16 rounded-xl">
      <span>로그아웃 하시겠습니까?</span>
      <div className="flex gap-8 mt-16">
        <button
          className="bg-red-200 w-16 rounded-md p-1 text-sm"
          onClick={() => signOut({ redirect: false })}
        >
          확인
        </button>
        <button
          className="border-2 border-solid border-red-200 w-16 rounded-md p-1 text-sm"
          onClick={() => router.push("/")}
        >
          취소
        </button>
      </div>
    </section>
  );
}
