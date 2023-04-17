import PostCard from "./PostCard";

export type Post = {
  name: string;
  adopt: number;
  age: number;
  amound: number;
  createdAt: string;
  etcDetail: null | string;
  expired: 0 | 1;
  expiredAt: string;
  expiredDesc: null | string;
  id: number;
  isExtend: 0 | 1;
  neutered: number;
  purpose: string;
  sex: 0 | 1;
  species: "강아지" | "고양이" | "기타";
  sponsor: number;
  targetAmount: number;
  thumbnail: string;
};

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
