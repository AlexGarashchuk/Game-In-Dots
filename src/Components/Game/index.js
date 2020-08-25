import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getUserPoint, getComputerPoint } from "./../../Redux/Actions";

const squaresArrJson = require("./../squares.json");

const Square = ({ name, onClick, className, style, point }) => {
  return (
    <input
      type="button"
      name={name}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: 250,
    border: "0.5px solid grey",
    display: "flex",
    flexWrap: "wrap",
  },
  buttonsWrp: {
    width: 50,
    height: 50,
    boxSizing: "border-box",
    cursor: "pointer",
    outline: "none",
    border: "0.5px solid grey",
    position: "relative",
  },
  btn: {
    width: 50,
    height: 50,
    boxSizing: "border-box",
    cursor: "pointer",
    outline: "none",
    border: "0.5px solid grey",
    background: "transparent",
  },
  actibeBtn: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    outline: "none",
    border: "0.5px solid grey",
    background: "red",
  },
  caughtButton: {
    position: "absolute",
    background: "#00E871",
    width: "100%",
    height: "100%",
    border: 0,
    bottom: 0,
    left: 0,
  },
  unCaughtButton: {
    position: "absolute",
    background: "#E8595E",
    width: "100%",
    height: "100%",
    border: 0,
    bottom: 0,
    left: 0,
  },
}));
export function BoxContainer() {
  const dispatch = useDispatch();
  const [squaresArr, setSquareArray] = useState(squaresArrJson);

  const classes = useStyles();

  const active = useSelector((state) => state.active);
  // const delay = useSelector((state) => state.delay);

  const [randomSq, setRandomSq] = useState(
    Math.floor(Math.random() * squaresArr.length)
  );

  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomSq(Math.floor(Math.random() * squaresArr.length));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function onСhooseItem(id) {
    if (id === randomSq) {
      squaresArr[id - 1].caught = true;
      setUserPoint(userPoint + 1);
      dispatch(getUserPoint({ userPoint }));
    } else {
      squaresArr[id - 1].uncaught = true;
      setComputerPoint(computerPoint + 1);
      dispatch(getComputerPoint({computerPoint}));
    }
  }

  return (
    <Box className={classes.wrapper}>
      {active ? (
      <Box className={classes.container}>
        {squaresArr.map((value) => (
          <div
            className={classes.buttonsWrp}
            key={value.id}
            style={
              randomSq === value.id
                ? { background: "#43D8E7" }
                : { background: "white" }
            }
          >
            <Square
              className={value.caught ? classes.caughtButton : classes.btn}
              onClick={() => onСhooseItem(value.id)}
            />
          </div>
        ))}
      </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
