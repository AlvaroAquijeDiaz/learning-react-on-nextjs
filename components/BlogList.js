// Destructuring props
const BlogList = ({ blogs, title, handleDelete }) => {
  // const blogs = props.blogs;
  return (
    <div>
      <h2 className="text-xl font-bold my-4 mx-1">{title}</h2>
      <div className="grid grid-cols-2">
        {/* The arg can be called wtever */}
        {blogs.map((blogs) => (
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
            <button
              className="rounded-lg border mt-2 bg-red-400 text-white hover:bg-white hover:text-red-700 transition-colors"
              onClick={() => {
                handleDelete(blogs.id);
              }}>
              Delete me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;