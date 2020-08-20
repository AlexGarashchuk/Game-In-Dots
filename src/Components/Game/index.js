import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSelector } from "react-redux";

const Square = ({ name, onClick, className }) => {
  return (
    <input type='button' name={name} onClick={onClick} className={className} />
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
  },
  paper: {
    width: 50,
    height: 50,
    boxSizing: "border-box",
    cursor: "pointer",
    outline: "none",
    border: "0.5px solid grey",
  },
  btn: {
    width: 50,
    height: 50,
    boxSizing: "border-box",
    cursor: "pointer",
    outline: "none",
    border: "0.5px solid grey",
    background: "white",
  },
  actibeBtn: {
    width: 50,
    height: 50,
    boxSizing: "border-box",
    cursor: "pointer",
    outline: "none",
    border: "0.5px solid grey",
    background: "#43D8E7",
  },
}));
export function BoxContainer() {
  let squareArr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];
  const classes = useStyles();
  const mode = useSelector((state) => state.mode);
  const active = useSelector((state) => state.active);
  const delay = useSelector((state) => state.delay)
  const [randomSq, setRandomSq ] = useState(Math.floor(Math.random() * squareArr.length))


  function onCatchTheButton(value){
    randomSq === value ? console.log('Catch Catch Catch') :  console.log('Luser')
 
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomSq(Math.floor(Math.random() * squareArr.length))
    }, delay);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <Box className={classes.wrapper}>
      {/* {active ? ( */}
        <Box className={classes.container}>
          {squareArr.map((value) => (
            <Square
              key={value}
              // className={clsx(classes.paper, classes[color])}
              className={randomSq === value ? classes.actibeBtn : classes.btn}
              onClick={() => onCatchTheButton(value)}
             
            />
          ))}
        </Box>
      {/* ) : (
        ""
      )} */}
    </Box>
  );
}
