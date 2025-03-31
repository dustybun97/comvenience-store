import React from "react";
import { useState } from "react";
import DropdownSelect from "./DropdownSelect";
import SearchInput from "./SearchInput";
import { Button } from "@mui/material";
import { Badge, IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';

function HeaderSearch() {
  const [catergory, setCatergory] = useState("all");
  const [cartCount, setCartCount] = useState(12);

  return (
    <>
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
        <Button variant="contained"><SearchIcon></SearchIcon></Button>
        {/* Cart */}
        <IconButton color="primary">
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {/* Login */}
        <Button><LoginIcon></LoginIcon></Button>
      </div>
    </>
  );
}

export default HeaderSearch;
