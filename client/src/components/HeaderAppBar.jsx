import React from "react";
import { LogIn } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import DropdownSelect from "./DropdownSelect";
import SearchInput from "./SearchInput";
function HeaderAppBar() {
  return (
    <div className="flex justify-center items-center p-2 shadow-md gap-5">
      {/* logo */}
      <div className="logo flex items-center">
        <img src="/ComvenienceLogo.jpg" alt="Logo" className="h-12" />
        Comvenience Store
      </div>
      {/* Dropdown */}
      <DropdownSelect />
      {/* Search */}
      <SearchInput />
      {/* Search button */}
      {/* <Button variant="contained"><SearchIcon></SearchIcon></Button> */}
      {/* Cart */}
      <button className="relative p-2 text-gray-700 hover:text-blue-500">
        <ShoppingCart size={24} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          3
        </span>
      </button>
      {/* Login */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
        <LogIn size={20} />
        Login
      </button>
    </div>
  );
  <div>HeaderAppBar</div>;
}

export default HeaderAppBar;
