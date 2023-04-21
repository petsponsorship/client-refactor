import Banner from "@/components/ui/Banner";
import CategoryTag from "@/components/view/CategoryTag";
import axios from "axios";

export default async function Home() {
  //전체데이터는 서버에서 먼저 불러오기.
  //카테고리 선택시 클라이언트 사이드 렌더링
  // const data = axios.get("/api/posts").then((res) => console.log(res));
  return (
    <main>
      <Banner />
      <CategoryTag />
      {/* <PostGrid /> */}
    </main>
  );
}
