import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const States = ({ placeholder }) => {
  // ------------ useState takes the initial value than will be changed afterwards
  //Null bc we are using an API
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // -----------------
  const [name, setName] = useState('mario');

  // This will run every time somethiing is rendered again, states
  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
    console.log(name);
    setTimeout(() => {
      // Fetching data -- can't use ASYNC inside useEffect
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          return res.status == 200 ? res.json() : console.log('Failed to fetch');
        })

        // Loading messages and errors may show here
        .then((data) => {
          setBlogs(data);
          console.log(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }, 1000);

    // The empty array will make the function only to run on THE FIRST LOAD
  }, []);
  // When smth is passed into the array the hook will look for it on changes

  return (
    <div>
      {/* Conditional templating, ONLY SHOWS RIGHT IF LEFT IS TRUE */}
      {isPending && (
        <div className="text-center items-center text-lg font-semibold animate-ping translate-y-10">
          Loading ...
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
      {blogs && (
        <BlogList
          blogs={blogs.filter(
            (blog) => blog.author === 'Mario' || blog.author === 'mario'
          )}
          title="Mario's Blogs"></BlogList>
      )}
    </div>
  );
};
export default States;
