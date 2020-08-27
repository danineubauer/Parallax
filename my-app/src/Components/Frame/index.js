import React from "react";
import Grid from "@material-ui/core/Grid";
import Plx from "react-plx";
import ParallaxComponent from "../ParallaxComponent";
import Container from "../Container";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Flower } from "../../assets/flower.svg";
import { ReactComponent as FlowerTwo } from "../../assets/flowertwo.svg";
import { ReactComponent as FlowerThree } from "../../assets/flowerthree.svg";

const useStyles = makeStyles({
  flower: {
    position: "fixed",
    bottom: "-250px",
    left: "20px",
  },
  redflowertop: {
    position: "fixed",
    top: "-200px",
    right: "-150px",
  },
  redflowertopleft: {
    position: "fixed",
    top: "-200px",
    left: "-150px",
  },
  flowerone: {
    position: "fixed",
    bottom: "-250px",
    right: "20px",
  },
  yellow: {
    position: "fixed",
    bottom: "-250px",
    right: "20px",
  },
});

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 100,
        endValue: 2,
        property: "shrink",
      },
    ],
  },
];

const smaller = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 5,
        endValue: 0,
        property: "scale",
      },
    ],
  },
];

const fadeIn = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "blur",
      },
    ],
  },
];
const rotate = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: "rotate",
      },
    ],
  },
];
const rotateleft = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "rotate",
      },
    ],
  },
];
const bigger = [
  {
    start: 0,
    end: 50,
    properties: [
      {
        startValue: 0,
        endValue: 4,
        property: "scale",
      },
    ],
  },
];
const backgroundcolor = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: "#B6DCE1",
        endValue: "#F5D9CF",
        property: "backgroundColor",
      },
    ],
  },
];

export default function Frame() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.yellow}>
        <Plx parallaxData={rotate}>
          <FlowerTwo />
        </Plx>
      </Grid>
      <Grid className={classes.flower}>
        <Plx parallaxData={rotateleft}>
          <Flower />
        </Plx>
      </Grid>

      <Grid className={classes.flowerone}>
        <Plx parallaxData={rotate}>
          <Flower />
        </Plx>
      </Grid>

      <Grid className={classes.redflowertop}>
        <Plx parallaxData={rotate}>
          <FlowerThree />
        </Plx>
      </Grid>

      <Grid className={classes.redflowertopleft}>
        <Plx parallaxData={rotate}>
          <FlowerThree />
        </Plx>
      </Grid>
    </>
  );
}
