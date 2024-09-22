"use client";
import { editUser, deleteUser } from "@/utils/actions";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";

export default function UsersList({ users }) {
  function handleEdit(e, id) {
    editUser(id, e.target.value);
  }

  return (
    <List sx={{ backgroundColor: "#A9D9A7", my: "2rem" }}>
      {users.map((el) => (
        <ListItem key={el.id}>
          <ListItemText>
            <TextField
              onChange={(e) => handleEdit(e, el.id)}
              size="small"
              defaultValue={el.title}
            />
          </ListItemText>

          <Button
            onClick={() => deleteUser(el.id)}
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
