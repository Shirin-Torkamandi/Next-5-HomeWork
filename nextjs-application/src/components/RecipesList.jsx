"use client";
import { editRecipe, deleteRecipe } from "@/utils/actions";
import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";

export default function RecipesList({ recipes }) {
  function handleEdit(e, id) {
    editRecipe(id, e.target.value);
  }

  return (
    <List sx={{ backgroundColor: "#88CF", my: "2rem" }}>
      {recipes.map((el) => (
        <ListItem key={el.id}>
          <ListItemText>
            <TextField
              onChange={(e) => handleEdit(e, el.id)}
              size="small"
              defaultValue={el.title}
            />
          </ListItemText>

          <Button
            onClick={() => deleteRecipe(el.id)}
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
