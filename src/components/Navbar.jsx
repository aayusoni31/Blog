import { useState } from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
      {/* LOGO  */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold ">
        <Image src="/logo.png" alt="Blog-logo" w={32} h={32} />
        <span>Blogsphere </span>
      </Link>
      {/* Mobile menu  */}
      <div className="md:hidden">
        {/* mobile button  */}
        <div
          className="cursor-pointer text-3xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "≡"}
        </div>
        {/* mobile link list  */}
        <div
          style={{ backgroundColor: "#EFB6C8" }}
          className={`w-full h-screen flex flex-col items-center justify-center font-medium gap-8 text-lg  transition-all ease-in-out absolute top-16 ${
            open ? "-right-0" : "-right-[100%]"
          } `}
        >
          <Link to="/">Home </Link>
          <Link to="/">Trending </Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About </Link>
          <Link to="/">
            <button
              style={{ backgroundColor: "#8174A0" }}
              className="py-2 px-4 rounded-3xl  text-white"
            >
              Login 🖐
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop menu  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home </Link>
        <Link to="/">Trending </Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About </Link>
        <Link to="/">
          <button className="py-2 px-4 rounded-3xl bg-slate-800 text-white">
            Login 🖐
          </button>
        </Link>
      </div>
    </div>
  );
};
