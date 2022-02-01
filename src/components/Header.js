import React from "react";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>
        Reviews Corner <ReviewsIcon />
      </h1>
      <Button
        onClick={() => {
          handleToggleDarkMode((prev) => !prev);
        }}
        className="save"
      >
        <Brightness4Icon />
      </Button>
    </div>
  );
}

export default Header;
