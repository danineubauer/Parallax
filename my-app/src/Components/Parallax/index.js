import React, { Component } from "react";
import Plx from "react-plx";
import ParallaxComponent from "../ParallaxComponent";
import Container from "../Container";

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 0,
        endValue: 2,
        property: "blur",
      },
    ],
  },
];

const parallaxData2 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: "skew",
      },
    ],
  },
];
const parallaxData3 = [
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
const parallaxData4 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: 0,
        endValue: 4,
        property: "scale",
      },
    ],
  },
];
const parallaxData5 = [
  {
    start: 0,
    end: 100,
    properties: [
      {
        startValue: "#3cb99c",
        endValue: "rgba(50,50,200,0.8)",
        property: "backgroundColor",
      },
    ],
  },
];

export default class Example extends Component {
  render() {
    return (
      <>
        <ParallaxComponent
          start="0"
          end="3"
          startValue="#B6DCE1"
          endValue="F5D9CF"
          property="backgroundColor"
          title="hello"
        />

        <ParallaxComponent
          start="0"
          end="5"
          startValue="0"
          endValue="4"
          property="scale"
          title="title"
        />

        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <h1>Blur</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>

        <ParallaxComponent
          start="0"
          end="100"
          startValue="10"
          endValue="100"
          property="rotate"
          title="hello"
        />

        <Plx className="MyAwesomeParallax" parallaxData={parallaxData3}>
          <h1>Rotate</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData4}>
          <h1>Scale</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData5}>
          <h1>Color</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
          <h1>Skew to left</h1>
        </Plx>
        <Plx
          className="MyAwesomeParallax"
          parallaxData={{
            start: 0,
            end: 100,
            properties: [
              {
                startValue: "#3cb99c",
                endValue: "rgba(50,50,200,0.8)",
                property: "backgroundColor",
              },
            ],
          }}
        >
          <h1>Skew to left</h1>
        </Plx>
      </>
    );
  }
}
