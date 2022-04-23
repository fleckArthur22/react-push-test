import * as React from "react";
import { TextField } from "@mui/material";
import "./search.css";

function Search() {
  return (
    <TextField
      className="search-input"
      id="fullWidth"
      placeholder="Search Pokemon"
    />
  );
}

export default Search;
