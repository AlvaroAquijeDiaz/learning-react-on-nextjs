import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="m-3">
      <nav className="flex  space-x-10">
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
        <Link href="/">
          <a className="navButton">
            <p>Add New</p>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
