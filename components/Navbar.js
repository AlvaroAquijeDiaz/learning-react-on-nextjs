import Link from 'next/link';
const Navbar = () => {
  const placeholder = { 1: 'Go home', 2: 'About' };
  return (
    <div className="py-5">
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

        <div className="ml-auto mr-5 sm:visible">
          <h1 className="text-3xl font-bold text-red-600 text-right">
            Welcome to the BlogApp
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
