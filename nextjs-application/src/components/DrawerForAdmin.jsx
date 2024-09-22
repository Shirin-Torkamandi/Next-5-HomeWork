"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import FastfoodTwoToneIcon from "@mui/icons-material/FastfoodTwoTone";
import PostAddTwoToneIcon from "@mui/icons-material/PostAddTwoTone";
import { useRouter } from "next/navigation";

export default function AnchorTemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    right: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Users", "Recipes", "Posts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => router.push(`/admin/${text.toLowerCase()}`)}
            >
              <ListItemIcon>
                {index === 0 && <AccountCircleTwoToneIcon />}
                {index === 1 && <FastfoodTwoToneIcon />}
                {index === 2 && <PostAddTwoToneIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ color: "white", position: "absolute", top: 15, right: 20 }}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
