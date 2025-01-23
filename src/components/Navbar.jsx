import Link from "next/link";

const Navbar = () => {
  const navbarLinks = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>

      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbarLinks}
            </ul>
          </div>
          <a className="text-2xl font-bold">Next Js</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
