import React from 'react'
import { AppBar, Toolbar, Typography, Button } from "@mui/material";


function Navbar() {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Store Navbar
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Cart</Button>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar