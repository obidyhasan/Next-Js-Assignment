import TitleSection from "@/components/TitleSection";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div>
        <TitleSection
          title={"The Knowledge Hub"}
          description={
            "A collection of articles to expand your knowledge, enhance your skills, and keep you updated on trends."
          }
        ></TitleSection>

        <div className="my-16">
          {blogs.map((blog) => (
            <h2
              key={blog.id}
              className="font-medium text-lg my-3 hover:text-blue-600 hover:underline"
            >
              <Link href={`/blog/${blog.id}`}>
                {blog.id}. {blog.title}
              </Link>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
