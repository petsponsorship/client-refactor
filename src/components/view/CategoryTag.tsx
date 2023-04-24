"use client";
import { useEffect, useState } from "react";
import PostGrid from "./PostGrid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fetchCategoryData, fetchMainData } from "@/client/mainpost";
import { useSession } from "next-auth/react";

const categories = [
  { name: "all", text: "전체" },
  { name: "dog", text: "강아지" },
  { name: "cat", text: "고양이" },
  { name: "etc", text: "기타" },
];

export default function CategoryTag() {
  const [posts, setPosts] = useState<any>([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuery = searchParams?.get("selected") ? searchParams?.get("selected") : "전체";

  useEffect(() => {
    fetchCategoryData(currentQuery ? currentQuery : "전체").then((res) => setPosts(res));
  }, [currentQuery]);

  const onSelect = (categoryname: string) => {
    const current = new URLSearchParams();
    current.set("selected", categoryname);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <>
      <nav className="flex ml-2 max-w-xs">
        {categories.map((cate) => (
          <button
            className={`w-14 h-8 ml-2 rounded-lg ${
              currentQuery === cate.text ? "bg-red-100" : "bg-gray-200"
            } `}
            key={cate.name}
            onClick={() => onSelect(cate.text)}
          >
            {cate.text}
          </button>
        ))}
      </nav>
      <PostGrid posts={posts} />
    </>
  );
}
