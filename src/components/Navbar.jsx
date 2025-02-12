import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
      {/* LOGO  */}
      <div className="flex items-center gap-4 text-2xl font-bold ">
        <img src="./logo.png" className="w-8 h-8" alt="" />
        <span>Blogsphere </span>
      </div>
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
        <div></div>
      </div>
      {/* Desktop menu  */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};
