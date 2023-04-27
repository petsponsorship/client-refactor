import { Post } from "@/model/post";
import WritedCard from "./WritedCard";

export default function WritedPostGrid({ posts }: { posts: Post[] }) {
  console.log("하위컴포넌트호출", posts);
  return (
    <ul className="flex flex-col p-12 max-w-7xl mx-auto">
      {posts.map((post) => (
        <li key={post.id}>{post.expired === 0 ? <WritedCard post={post} /> : <>종료된후원</>}</li>
      ))}
    </ul>
  );
}
