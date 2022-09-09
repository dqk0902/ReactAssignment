import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ContainedButtons({ note }) {
  return (
    <div>
      <Link to={`/${note.id}`} key={note.id} style={{ textDecoration: "none" }}>
        <Button
          type="submit"
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightIcon />}
        >
          More Details
        </Button>
      </Link>
    </div>
  );
}
