import { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/posts";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Behold, my Barrage of Blog Posts!",
  description: "This is all the Blog Posts in my Barrage",
};

export default function PostsPage() {
  return (
    <div className="px-4 py-8 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-6">Posts Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          return (
            <div
              key={post.slug}
              className="bg-red-500 border-2 border-red-700 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <p className="text-gray-600 text-center">Date: {post.date}</p>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="flex justify-center items-center">
                  <div className="w-20 h-20">
                    <Image
                      src={post.img_url}
                      alt={post.img_url}
                      layout="responsive"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
