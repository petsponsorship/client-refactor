import { myNumData } from "@/client/mydata";
import MyNumData from "@/components/view/MyNumData";
import Myprofile from "@/components/view/Myprofile";
import { Session, UserData } from "@/model/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { read } from "fs";
import { getServerSession } from "next-auth/next";

export default async function Mypage() {
  const decoder = new TextDecoder("utf-8");
  // const data = await fetch(`${process.env.NEXTAUTH_URL}/api/my`).then((res) => {
  //   res.body
  //     ?.getReader()
  //     .read()
  //     .then(({ value, done }) => console.log(decoder.decode(value)));
  // });

  // console.log(data);
  const session: Session | null = await getServerSession(authOptions);

  const accessToken = session?.Authorization ?? "";
  const refreshToken = session?.RefreshToken;
  // const num: UserData = await myNumData(accessToken);
  // console.log("서비스로직 분리 안함", num);

  // const { userNmae, supportCnt, postCnt, likeCnt, supportTotalAmount } = num;
  const data = await axios.get(`${process.env.NEXTAUTH_URL}/api/my`);
  console.log(data);
  return (
    <section className="h-full">
      {/* <div className="flex gap-x-16 justify-center mt-12">
        <Myprofile username={userNmae} />
        <MyNumData supportCnt={supportCnt} postCnt={postCnt} likeCnt={likeCnt} />
      </div>
      <p className="mt-10 h-8 w-2/5 max-w-md mx-auto px-8">
        {userNmae}님은 현재까지 총 {supportTotalAmount}원을 후원하셨습니다
      </p> */}
    </section>
  );
}
