// Destructuring props
const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  return (
    <div className="mt-10 mx-5 md:mx-24 lg:mx-56">
      <h2 className="text-xl font-bold my-5">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* The arg can be called wtever */}
        {blogs.map((blogs) => (
          <button className="text-justify">
            <div
              className="flex flex-col mr-4 my-2 p-3 rounded-lg shadow-lg border"
              key={blogs.id}>
              <h4>
                Made by <span className="font-semibold text-red-500">{blogs.author}</span>
              </h4>
              <h3>
                <span className="font-semibold text-red-600 text-lg">{blogs.title}</span>
              </h3>
              <p>{blogs.body}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
