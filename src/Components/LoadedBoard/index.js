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
  
  const [dateTime, setDateTime] = useState(new Date());
  const userPoint = useSelector(state => state.userPoint)
  const computerPoint = useSelector(state => state.computerPoint)

  useEffect(() => {

  }, [userPoint, computerPoint])

  return (
    <div className={classes.wrapper}>
      <h2>Loaded Board</h2>
      <div>
        {userName.map((name, id) => (
          <List component="nav" aria-label="secondary mailbox folders" key={id}>
            {userPoint > 0 ? (
              <ListItem button>
              <ListItemText primary={name} />
              <ListItemText primary={userPoint}/>
            </ListItem>
            ) : ''}
            {computerPoint >0 ? (
              <ListItem button>
              <ListItemText primary="Computer" />
              <ListItemText primary={computerPoint}/>
            </ListItem>
            ) : ''}
            <Divider />
          </List>
        ))}
      </div>
    </div>
  );
}
