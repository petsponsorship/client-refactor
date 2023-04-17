import { instance } from "@/api/apiclient";
import Banner from "@/components/ui/Banner";
import CategoryTag from "@/components/view/CategoryTag";
import PostGrid from "@/components/view/PostGrid";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default function Home() {
  //전체데이터는 서버에서 먼저 불러오기.
  //카테고리 선택시 클라이언트 사이드 렌더링

  return (
    <main>
      <Banner />
      <CategoryTag />
      {/* <PostGrid /> */}
    </main>
  );
}
