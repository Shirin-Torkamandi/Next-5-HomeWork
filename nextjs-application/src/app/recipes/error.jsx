"use client";
import { Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import Button from "@mui/material/Button";
export default function error() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h3" component={"h1"} color={brown[400]}>
        {" "}
        An error accurred: You are putting numbers more than 8 after /recipes
      </Typography>
      <h2>Please try 1 to 8</h2>
      <Button sx={{ bgcolor: brown[200] }} variant="contained" href="/posts">
        Want to go back?
      </Button>
    </div>
  );
}
