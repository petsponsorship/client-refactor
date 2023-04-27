import { getMyWriteList } from "@/client/mydata";
import WritedPostGrid from "@/components/view/WritedPostGrid";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function MyWrite() {
  const session: any = await getServerSession(authOptions);

  const accessToken = session.Authorization;
  const userId = session.userId;

  const data = await getMyWriteList(userId, accessToken);

  return <WritedPostGrid posts={data} accessToken={accessToken} />;
}
