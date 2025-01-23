const page = async ({ params }) => {
  const { blogId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );
  const blog = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-5 my-10">
      <h1 className="text-2xl font-semibold ">{blog.title}</h1>
      <p className="text-gray-600 mt-4">{blog.body}</p>
    </div>
  );
};

export default page;
