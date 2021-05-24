import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const States = ({ placeholder }) => {
  // ------------ useState takes the initial value than will be changed afterwards
  const [age, setAge] = useState(25);
  let [counter, setCounter] = useState(1);
  const [blogs, setBlogs] = useState([
    { title: 'A title', body: 'lorem ipsum dolor ...', author: 'Mario', id: '1' },
    { title: 'A title', body: 'lorem ipsum dolor ...', author: 'Luigi', id: '2' },
    { title: 'A title', body: 'lorem ipsum dolor ...', author: 'Gonzalo', id: '3' },
    { title: 'A title', body: 'lorem ipsum dolor ...', author: 'Aquije', id: '4' },
    { title: 'A title', body: 'lorem ipsum dolor ...', author: 'Alvaro', id: '5' },
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(newBlogs);
  };
  // This will run every time somethiing is rendered again, states
  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
    console.log(name);
    // The empry array will make the function only to run on THE FIRST LOAD
  }, [name]);
  // When smth is passed into the array the hook will look for it on changes

  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}></BlogList>

      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'Mario' || blog.author === 'mario')}
        title="Mario's Blogs"
        handleDelete={handleDelete}></BlogList>
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
};
export default States;
