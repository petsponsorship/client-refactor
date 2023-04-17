import Link from "next/link";
import { Post } from "./PostGrid";
import Image from "next/image";
import ProgressBar from "../ui/ProgressBar";

type Props = {
  post: Post;
};
//post img 임의 string값 들어가있는 문제 해결 필요
export default function PostCard({ post }: Props) {
  return (
    <Link href={`posts/${post.id}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl p-4">
        <Image
          src={"https://sponsorsimg.s3.ap-northeast-2.amazonaws.com/1680524215594_darkspace.png"}
          alt={`title ${post.id}`}
          width={150}
          height={300}
        />
        <div className="flex p-4 gap-1">
          <h3>{post.name}</h3>
          <p className="text-xs mt-1 ml-2">
            {post.sex === 0 ? "남아" : "여아"} {post.age}세
          </p>
        </div>
        <div className="flex-row w-full">
          <ProgressBar value={50} />
          <span className="text-xs float-right pt-1">{post.targetAmount}만원</span>
        </div>
        <div className="w-full  mt-8 mr-[-8px]">
          <p className="float-right">{post.sponsor}명 참여</p>
        </div>
      </article>
    </Link>
  );
}
