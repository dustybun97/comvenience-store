import React from "react";

import { useEffect } from "react";


function Navbar() {
  return (
    <>
      <nav className="flex justify-center items-center gap-x-48 bg-[#2E67B1] w-full">
        {/* leftmenu */}
        <div className=" text-white flex gap-5 p-2">
          <a href="/home">Home</a>
          <a href="/products">Product</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/review">Review/Article</a>
          <a href="/po">Purchase Order</a>
          <a href="/contact">Contact</a>
        </div>
        {/* rightmenu */}
        <div className="text-white">
          <a href="/specs">Customized PC</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
