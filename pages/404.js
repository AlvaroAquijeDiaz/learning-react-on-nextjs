import Link from 'next/link';
const NotFound = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Oops ..</h1>
      <h3>The page cannot be found</h3>
      <p>
        Go back to <span className="font-semibold text-purple-700"></span>
      </p>
    </div>
  );
};

export default NotFound;
