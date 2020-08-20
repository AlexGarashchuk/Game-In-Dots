import React, { useState } from "react";

//material
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { addUserName } from "../../Redux/Actions";

export function EntryField() {
  const [name, setName] = useState("");

  function onDispatchName(name){
    dispatch(addUserName(name))
  }
//вытаскиваем имя
  // const userName = useSelector(state => state.user);
//добавляем имя
const dispatch = useDispatch()
  return (
    <Grid item xs={4}>
      <TextField
        id="outlined-basic"
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={() => onDispatchName(name)}
      />
    </Grid>
  );
}

