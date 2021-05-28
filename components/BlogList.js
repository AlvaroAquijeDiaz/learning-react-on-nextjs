// Destructuring props
const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  return (
    <div className="pt-5 mx-5 md:mx-24 lg:mx-56">
      <h2 className="text-xl font-bold my-5 text-gray-50">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* The arg can be called wtever */}
        {blogs.map((blogs) => (
          <button className="text-justify">
            <div
              //TODO Clean up classes
              //FIXME on hover, the selected card is behind the others
              className="flex text-sm flex-col mr-4 my-2 p-3 rounded-lg hover:ring-1 hover:ring-offset-1 hover:-m-14 hover:-my-10 hover:transform hover:scale-110 transition-all border-gray-400 text-gray-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 bg-white"
              key={blogs.id}>
              <h4>
                Made by{' '}
                <span className="font-semibold text-yellow-400">{blogs.author}</span>
              </h4>
              <h3 className="font-semibold text-[#fd7f2c] text-xl mt-3">{blogs.title}</h3>
              <p>{blogs.body}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
