"use client";
import { addRecipe } from "@/utils/actions";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function FormForRecipe() {
  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addRecipe(title);
    setTitle("");
  }
  return (
    <Box
      bgcolor={"#f5f5f5"}
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{ width: 500, maxWidth: "100%" }}
      marginTop={4}
      marginLeft={4}
    >
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label="Enter Title"
        id="fullWidth"
      />
    </Box>
  );
}
