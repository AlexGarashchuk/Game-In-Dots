import React, { useEffect, useState } from "react";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { addUserName } from "../../Redux/Actions";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import { BoxContainer } from "../Game";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "50%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export function Enter() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    userName: '',
    dataTime: new Date(),
    activeSquare: false
  });
  const [mode, setMode] = useState('')

  const onChangeMode = (e) => {
    setMode(e.target.value)
  }
  const [data, setData] = useState();

  const handleChange = (event) => {
    setState({ 
      ...state, 
      [event.target.id]: event.target.value,
     });
  };
  const handleAddPerson = () => {
    const { userName } = state;
   
    dispatch(addUserName({userName, mode}));
    
  };



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://starnavi-frontend-test-task.herokuapp.com/game-settings"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.wrapper}>
      {data !== undefined ? (
        <div className={classes.formHeader}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={4}>
              <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel id="demo-simple-select-outlined-label">
                  Pick game mode
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="mode"
                  value={mode}
                  onChange={onChangeMode}
                >
                  <MenuItem
                    value={data.easyMode.field}
                    dalay={data.easyMode.dalay}
                  >
                    {data.easyMode.field}
                  </MenuItem>
                  <MenuItem
                    value={data.normalMode.field}
                    dalay={data.normalMode.dalay}
                  >
                    {data.normalMode.field}
                  </MenuItem>
                  <MenuItem
                    value={data.hardMode.field}
                    dalay={data.hardMode.dalay}
                  >
                    {data.hardMode.field}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="userName"
                label="Enter your name"
                variant="outlined"
                // value={name}
                // onChange={() => onDispatchName(name)}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddPerson}
              >
                PLAY
              </Button>
            </Grid>
            <Grid item xs={12}>
              Some message
            </Grid>
            <Grid item xs={12}>
              <BoxContainer />
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
