import React from "react";
import Plx from "react-plx";

export default function Example(props) {
  const parallaxData = [
    {
      start: `${props.start}`,
      end: `${props.end}`,
      properties: [
        {
          startValue: "0",
          endValue: "100",
          property: "scale",
        },
      ],
    },
  ];

  return (
    <>
      <Plx parallaxData={parallaxData} className="MyAwesomeParallax">
        {props.title}
      </Plx>
    </>
  );
}
