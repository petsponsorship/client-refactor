import { Post } from "@/model/post";
import PostCard from "./PostCard";

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12 max-w-7xl mx-auto">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
