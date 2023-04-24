import { fetchCategoryData, fetchMainData } from "@/client/mainpost";
import Banner from "@/components/ui/Banner";
import CategoryTag from "@/components/view/CategoryTag";


export default function Home() {

export default async function Home() {
  //전체데이터는 서버에서 먼저 불러오기.
  const data = await fetchCategoryData("전체");
  return (
    <main>
      <Banner />
      <CategoryTag />
    </main>
  );
}
