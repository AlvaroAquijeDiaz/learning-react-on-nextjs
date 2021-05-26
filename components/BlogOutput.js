import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const States = ({ placeholder }) => {
  // ------------ useState takes the initial value than will be changed afterwards
  //Null bc we are using an API
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // ----------------- THIS IS INTO A CUSTOM HOOK

  // *********** <key> : <somthing> means it will be called something

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  return (
    <div>
      {/* Conditional templating, ONLY SHOWS RIGHT IF LEFT IS TRUE */}
      {error && <div>{error}</div>}
      {/* FIXME Next API handler is giving an error dunno why */}
      {isPending && (
        <div className="text-center items-center text-lg font-semibold animate-ping translate-y-10">
          Loading ...
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}{' '}
      {blogs && (
        <BlogList
          blogs={blogs.filter(
            (blogs) => blogs.author === 'Mario' || blogs.author === 'mario'
          )}
          title="Mario's Blogs"></BlogList>
      )}
    </div>
  );
};
export default States;
