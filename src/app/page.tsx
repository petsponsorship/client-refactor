import Banner from "@/components/ui/Banner";
import CategoryTag from "@/components/view/CategoryTag";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  const getData = () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/posts?species=전체`)
      .then((res) => console.log(res));
  };

  getData();

  return (
    <main>
      <Banner />
      <CategoryTag />
    </main>
  );
}
