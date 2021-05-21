import Link from 'next/link';
const Navbar = () => {
  const placeholder = { 1: 'Go home', 2: 'About' };
  return (
    <div className="py-5">
      <nav className="flex flex-row gap-10 items-center justify-center flex-auto">
        <Link href="/">
          <a className="navButton">
            <p>Go Home</p>
          </a>
        </Link>

        <Link href="/">
          <a className="navButton">
            <p>Blogs</p>
          </a>
        </Link>
        <Link href="/create">
          <a className="navButton bg-red-600 text-white hover:text-black hover:bg-white">
            <p>Add New</p>
          </a>
        </Link>

        <div className="ml-auto mr-5">
          <h1 className="text-2xl font-bold text-red-600">Welcome to the BlogApp</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
