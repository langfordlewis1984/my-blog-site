import { posts } from "@/posts";
import Image from "next/image";

type PostParams = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: PostParams) {
  const post = getPost(params.slug);
  return {
    title: post?.title,
    date: "POST: " + post?.date,
  };
}

function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export default function PostPage({ params }: PostParams) {
  const post = getPost(params.slug);
  return (
    <div className="px-4 py-8 md:px-8">
      <article className="bg-red-500 border-2 border-red-700 flex p-6 rounded-lg shadow-md gap-8">
        <h2 className="text-3xl font-semibold mb-4 ">{post?.title}</h2>
        <p>{post?.content}</p>
        <Image
          src={post?.img_url}
          alt={post?.img_url}
          layout="responsive"
          width={100}
          height={100}
        />
        <p className="text-gray-600 mt-4">Date: {post?.date}</p>
      </article>
    </div>
  );
}
