import { Button } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <Button onClick={()=> handleDeleteNote(id)}>
          <DeleteOutlineIcon style={{ color: "red" }} />
        </Button>
      </div>
    </div>
  );
}

export default Note;
