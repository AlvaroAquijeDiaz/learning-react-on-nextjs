import Link from 'next/link';
const Navbar = () => {
  const placeholder = { 1: 'Go home', 2: 'About' };
  return (
    <div className="grid grid-cols-2 min-w-full items-center justify-center p-5">
      <nav className="">
        <Link href="/">
          <a className="max-w-[50%] text-sm font-medium ">
            <p>Go Home</p>
          </a>
        </Link>
        <Link href="/addBlog">
          <a className="text-sm">
            <p>Add New</p>
          </a>
        </Link>
      </nav>

      <div className="">
        <h1 className="text-3xl font-bold text-red-600 text-right">
          Welcome to the BlogApp!
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
