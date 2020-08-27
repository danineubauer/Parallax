import React from "react";
import Grid from "@material-ui/core/Grid";
import Plx from "react-plx";
import ParallaxComponent from "../ParallaxComponent";
import Container from "../Container";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Flower } from "../../assets/flower.svg";
import { ReactComponent as FlowerTwo } from "../../assets/flowertwo.svg";
import { ReactComponent as FlowerThree } from "../../assets/flowerthree.svg";
import Frame from "../Frame";
const useStyles = makeStyles({
  flower: {
    position: "fixed",
    bottom: "-250px",
    left: "20px",
  },
  flowerone: {
    position: "fixed",
    bottom: "-250px",
    right: "20px",
  },
  flowertwo: {
    position: "fixed",
    bottom: "0",
    right: "0",
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
    end: 100,
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
    end: 100,
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

export default function Component() {
  const classes = useStyles();
  return (
    <>
      <Plx className="MyAwesomeParallax" parallaxData={backgroundcolor}>
        <Container>
          <Plx className="MyAwesomeParallax" parallaxData={smaller}>
            <h1>Welcome</h1>
          </Plx>
          <br></br>
          <Plx parallaxData={bigger}>
            <h2>To the world of</h2>
          </Plx>
          <br></br>
          <br></br>
          <Plx parallaxData={fadeIn}>
            <h2>Parallax</h2>
          </Plx>
          <Frame />
          {/* <Grid className={classes.flower}>
            <Plx parallaxData={rotateleft}>
              <Flower />
            </Plx>
          </Grid>

          <Grid className={classes.flowerone}>
            <Plx parallaxData={rotate}>
              <Flower />
            </Plx>
          </Grid> */}
          {/* 
          <Grid className={classes.flowertwo}>
            <Plx parallaxData={rotate}>
              <FlowerTwo />
            </Plx>
          </Grid>

          <Grid className={classes.yellowflower}>
            <Plx parallaxData={rotate}>
              <FlowerTwo />
            </Plx>
          </Grid>

          <Grid className={classes.flowermovetwo}>
            <Plx parallaxData={rotate}>
              <FlowerThree />
            </Plx>
          </Grid>
          <Grid className={classes.flowermovethree}>
            <Plx parallaxData={rotate}>
              <FlowerThree />
            </Plx>
          </Grid> */}
        </Container>
      </Plx>
    </>
  );
}
