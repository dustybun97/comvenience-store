import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function DropdownSelect() {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => (selected ? selected : "Select Category")}
        >
          <MenuItem value="CPU">CPU</MenuItem>
          <MenuItem value="VGA">VGA</MenuItem>
          <MenuItem value="RAM">RAM</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
