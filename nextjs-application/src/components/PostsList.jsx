"use client";
import { editPost, deletePost } from "@/utils/actions";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";

export default function PostsList({ posts }) {
  function handleEdit(e, id) {
    editPost(id, e.target.value);
  }

  return (
    <List sx={{ backgroundColor: "#88CFCD", my: "2rem" }}>
      {posts.map((el) => (
        <ListItem key={el.id}>
          <ListItemText>
            <TextField
              onChange={(e) => handleEdit(e, el.id)}
              size="small"
              defaultValue={el.title}
            />
          </ListItemText>

          <Button
            onClick={() => deletePost(el.id)}
            size="small"
            variant="contained"
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
