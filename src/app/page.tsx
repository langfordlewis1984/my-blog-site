import Blogzilla from "../../public/Giant-Godzilla.jpg";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        style={{
          backgroundImage: `url(${Blogzilla.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 px-4 py-8">
          This is the Homepage for my-blog-site
        </h2>
      </div>
    </main>
  );
}
