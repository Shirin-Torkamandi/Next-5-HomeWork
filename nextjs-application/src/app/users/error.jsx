"use client";
import { Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
export default function error() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h3" component={"h1"} color={pink[400]}>
        {" "}
        An error accurred: You are putting numbers more than 8 after /users
      </Typography>
      <h2>Please try 1 to 8</h2>
      <Button sx={{ bgcolor: pink[200] }} variant="contained" href="/users">
        Want to go back?
      </Button>
    </div>
  );
}
