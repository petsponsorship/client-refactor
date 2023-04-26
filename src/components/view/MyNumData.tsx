"use client";

import Link from "next/link";

const cardSt = "w-1/3 my-auto";

type Props = {
  supportCnt: number;
  postCnt: number;
  likeCnt: number;
};

export default function MyNumData({ supportCnt, postCnt, likeCnt }: Props) {
  return (
    <>
      <div className="flex bg-yellow-100 w-3/5 max-w-xl gap-20 rounded-xl text-center p-4">
        <Link href={"/mypage/support"} className={cardSt}>
          <p>{supportCnt}</p>
          <p>후원한</p>
        </Link>
        <Link href={"/mypage/like"} className={cardSt}>
          <p>{likeCnt}</p>
          <p>응원한</p>
        </Link>
        <Link href={"mypage/mywrite"} className={cardSt}>
          <p>{postCnt}</p>
          <p>작성글</p>
        </Link>
      </div>
    </>
  );
}
