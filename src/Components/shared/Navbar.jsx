import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <Image src="/logo.svg" width={72} height={72} alt="log" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal space-x-9 text-[#444444]  px-1">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-2  mr-3">
        <CiShoppingCart className="font-bold" size={26}/>
        <CiSearch className="font-bold" size={26}/>
        </div>
        <a className="border-2 border-primary text-primary px-4 py-2 rounded-md">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
