import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Mypage() {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return <p>마이페이지</p>;
}
