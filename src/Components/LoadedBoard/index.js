import React, { useState, useEffect } from "react";

//matertial
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

//style
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "50%",
  },
}));
export function LoadedBoard() {
  const classes = useStyles();

  const userName = useSelector(state => state.user);
  
  const [date, setDate] = useState(new Date())
 console.log(date)
  return (
    <div className={classes.wrapper}>
      <h2>Loaded Board</h2>
      <div>
        {userName.map((name) => (
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary={name} />
              <ListItemText edge="end" primary='' />
            </ListItem>
            <Divider />
          </List>
        ))}
      </div>
    </div>
  );
}
