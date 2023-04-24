import { myNumData } from "@/client/mydata";
import MyNumData from "@/components/view/MyNumData";
import Myprofile from "@/components/view/Myprofile";
import { Session, UserData } from "@/model/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function Mypage() {
  const session: Session | null = await getServerSession(authOptions);

  const accessToken = session?.Authorization ?? "";

  const num: UserData = await myNumData(accessToken);

  const { userNmae, supportCnt, postCnt, likeCnt, supportTotalAmount } = num;

  return (
    <section className="h-full">
      <div className="flex gap-x-16 justify-center mt-12">
        <Myprofile username={userNmae} />
        <MyNumData supportCnt={supportCnt} postCnt={postCnt} likeCnt={likeCnt} />
      </div>
      <p className="mt-10 h-8 w-2/5 max-w-md mx-auto px-8">
        {userNmae}님은 현재까지 총 {supportTotalAmount}원을 후원하셨습니다
      </p>
    </section>
  );
}
