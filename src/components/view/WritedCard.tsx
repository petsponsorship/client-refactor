"use client";
import { Post } from "@/model/post";
import Link from "next/link";
import ProgressBar from "../ui/ProgressBar";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function WritedCard({ post }: Props) {
  const { thumbnail, name, age, sex, sponsor, targetAmount, amount, id, expired } = post;

  return (
    <Link
      href={`/post/${id}`}
      className="w-4/6 h-[18rem] flex flex-row p-4 rounded-2xl border-solid border-2 border-slate-200 mx-auto"
    >
      <Image
        className="rounded-xl w-[30%] h-[98%]  object-cover max-w-10rem"
        alt="대표사진"
        src={thumbnail}
        width={200}
        height={200}
      />
      <div className="ml-6 p-2 w-full">
        <div className="flex flex-row gap-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm mt-1">
            {age}세, {sex === 0 ? "남아" : "여아"}
          </p>
        </div>
        <div className="mt-16 w-full h-auto flex flex-col gap-2">
          <p className="text-md font-semibold">{sponsor}명 참여</p>
          <ProgressBar value={50} />
          <span className="ml-auto text-gray-400">{targetAmount} 원</span>
        </div>
        <div className="w-full gap-4 flex mt-8">
          <button
            className="w-1/2 h-10 bg-gray-300 rounded-md "
            //  onClick={()=>sponsorEnd(id)}
          >
            후원 종료하기
          </button>
          <button
            className="w-1/2 h-10 bg-red-200 rounded-md "
            //  onClick={()=>extendSpon(id)}
          >
            후원 연장하기
          </button>
        </div>
      </div>
    </Link>
  );
}
