"use client";

const cardSt = "w-1/3 my-auto";

export default function MyNumData({ supportCnt, postCnt, likeCnt }) {
  return (
    <>
      <div className="flex bg-yellow-100 w-3/5 max-w-xl gap-20 rounded-xl text-center p-4">
        <div className={cardSt}>
          <p>{supportCnt}</p>
          <p>후원한</p>
        </div>
        <div className={cardSt}>
          <p>{likeCnt}</p>
          <p>응원한</p>
        </div>
        <div className={cardSt}>
          <p>{postCnt}</p>
          <p>작성글</p>
        </div>
      </div>
    </>
  );
}
