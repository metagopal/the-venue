import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function SideDrawer(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log("Venue NFO")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
