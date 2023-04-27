import { Post } from "@/model/post";
import WritedCard from "./WritedCard";
import WriteExpiredCard from "./WriteExpiredCard";

export default function WritedPostGrid({
  posts,
  accessToken,
}: {
  posts: Post[];
  accessToken: string;
}) {
  return (
    <ul className="flex flex-col p-12 max-w-7xl mx-auto">
      {posts.map((post) => (
        <li key={post.id}>
          {post.expired === 0 ? (
            <WritedCard post={post} accessToken={accessToken} />
          ) : (
            <WriteExpiredCard post={post} />
          )}
        </li>
      ))}
    </ul>
  );
}
