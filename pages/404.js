import Link from 'next/link';
const NotFound = () => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="font-bold text-2xl tracking-wide">Oops ...</h1>
      <h3>The page cannot be found</h3>
      <p>
        Go back to{' '}
        <Link href="/">
          <a className="text-lg font-bold">Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
