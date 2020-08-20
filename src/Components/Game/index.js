import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const Square = ({ name, onClick, className }) => {
  return (
    <Button name={name} onClick={onClick} className={className} />
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
    background: "white",
  },
  actibeBtn: {
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
  const [color, setColor] = useState("btn");
  const mode = useSelector((state) => state.mode);
  const active = useSelector((state) => state.active);

  useEffect(() => {
    const interval = setInterval(() => {
      onChangeRandomSquare();
    }, mode || 5000);
    return () => clearInterval(interval);
  }, []);

  function arrayRandElement() {
    var rand = Math.floor(Math.random() * squareArr.length);
     return squareArr[rand];

   
  }

  function onClickButton(id) {
    // console.log(id);
    setColor("actibeBtn");
  }

  function onChangeRandomSquare() {
    const randomSquareId = arrayRandElement(squareArr);
    console.log(randomSquareId);
  }

  return (
    <Box className={classes.wrapper}>
      {active ? (
        <Box className={classes.container}>
          {squareArr.map((value) => (
            <Square
              key={value}
              className={clsx(classes.paper, classes[color])}
              onClick={() => onClickButton(value)}
            />
          ))}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
