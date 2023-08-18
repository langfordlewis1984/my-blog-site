import { getPosts, getPostBySlug } from "@/lib/posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { kv } from "@vercel/kv";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export function generateMetadata({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);
  return {
    title: post?.title,
    date: "POST: " + post?.date,
  };
}

export default async function IndividualPostPage({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);
  const pageViews = await kv.incr(`${post?.slug}: views`);

  if (!post) {
    notFound();
  }

  return (
    <div className="px-4 py-8 md:px-8">
      <article className="bg-red-500 border-2 border-red-700 flex p-6 rounded-lg shadow-md gap-8">
        <h2 className="text-3xl font-semibold mb-4 ">{post.title}</h2>
        <p>{post.content}</p>
        <Image
          src={post.img_url}
          alt={post.img_url}
          layout="responsive"
          width={100}
          height={100}
        />
        <p className="text-gray-600 mt-4">Date: {post.date}</p>
        <p>{`category: ${post.category}`}</p>
        <p>
          <p>
            This Post has been viewed by{" "}
            <span className="text-bold ">{pageViews}</span> humungous pairs of
            abominable eyeholes
          </p>
        </p>
      </article>
    </div>
  );
}