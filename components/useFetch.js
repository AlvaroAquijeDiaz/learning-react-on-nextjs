import { useState, useEffect } from 'react';

// Custom HOOK
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // This will run every time somethiing is rendered again, states
  useEffect(() => {
    console.log('use effect ran');
    console.log(data);
    setTimeout(() => {
      // Fetching data -- can't use ASYNC inside useEffect
      fetch(url)
        .then((res) => {
          if (res.status != 200) {
            throw Error('Event not handled');
          }
          return res.json();
        })

        // Loading messages and errors may show here
        .then((data) => {
          setData(data);
          console.log(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    // The empty array will make the function only to run on THE FIRST LOAD
  }, []);
  // When smth is passed into the array the hook will look for it on changes

  return { data, isPending, error };
};

export default useFetch;
