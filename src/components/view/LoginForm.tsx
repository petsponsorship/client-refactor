"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface Login {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [form, setForm] = useState<Login>({ email: "", password: "" });
  const router = useRouter();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginBtn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = form.email;
    const password = form.password;
    const response = await signIn("user-credentials", {
      email,
      password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        const url = res.url ?? "/";
        const urlParams = new URL(url).searchParams;
        const name = urlParams.get("callbackUrl");
        return router.push(name ?? "/");
      } else {
        alert(`${res?.error}! 존재하지 않는 회원이거나 아이디와 비밀번호가 일치하지 않습니다.`);
      }
    });
  };

  return (
    <section className="w-full max-w-md mx-auto mt-16 ">
      <form onSubmit={handleLoginBtn} className="w-full flex flex-col gap-2 my-4 p-4">
        <input
          type="email"
          name="email"
          required
          autoFocus
          placeholder="이메일 입력"
          onChange={onChange}
          className="w-full mb-4 h-12 border-2 rounded-md border-gray-300 p-4 "
        />
        <input
          type="password"
          name="password"
          value={form.password}
          required
          placeholder="비밀번호 입력"
          onChange={onChange}
          className="w-full mb-4 h-12 border-2 rounded-md border-gray-300 p-4 mb-16"
        />
        <button className="w-full h-12 bg-red-200 rounded-xl">로그인</button>
      </form>
      <p className="text-center text-sm text-slate-500">
        아직 댕도네냥 계정이 없나요?&nbsp;&nbsp;
        <Link
          href="/signup"
          className="underline decoration-1 decoration-red-200 text-red-300 hover:font-semibold"
        >
          회원가입
        </Link>
      </p>
    </section>
  );
}
