import { Chart } from "react-google-charts";
import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Databubble from "./data";
const Googlecharts = () => {
  var csvdata = [
    [
      ["ID", "Publications", "Links", "number", "Number of mentions"],
      ["3d printing", 20.66, 1.67, "blue1", 1],
      ["4d printing", 69.84, 1.36, "orange", 2],
      ["nanotechnology", 88.6, 1.84, "LightOrange", 3],
      ["IoT", 82.73, 2.78, "Green", 10],
      ["Renewable energy", 90.05, 2, "Purple", 25],
      ["Transport", 32.49, 1.7, "Lightblue", 3],
      ["AI", 48.09, 4.77, "Pink", 7],
      ["nogwat", 21.55, 2.96, "8", 1],
      ["nogwat", 78.6, 1.54, "9", 3],
      ["nogwat", 18.09, 2.05, "10", 4],
    ],
    [
      ["ID", "Publications", "Links", "", "Number of mentions"],
      ["3d printing", 10.66, 1.67, "blue1", 1],
      ["4d printing", 79.84, 1.36, "orange", 2],
      ["nanotechnology", 78.6, 1.84, "LightOrange", 3],
      ["IoT", 52.73, 2.78, "Green", 10],
      ["Renewable energy", 20.05, 2, "Purple", 25],
      ["Transport", 42.49, 1.7, "Lightblue", 3],
      ["AI", 18.09, 4.77, "Pink", 7],
      ["nogwat", 41.55, 2.96, "8", 1],
      ["nogwat", 38.6, 1.54, "9", 3],
      ["nogwat", 28.09, 2.05, "10", 4],
    ],
    [
      ["ID", "Publications", "Links", "", "Number of mentions"],
      ["3d printing", 5.66, 1.67, "blue1", 1],
      ["4d printing", 9.84, 1.36, "orange", 2],
      ["nanotechnology", 8.6, 1.84, "LightOrange", 3],
      ["IoT", 2.73, 2.78, "Green", 10],
      ["Renewable energy", 90.05, 2, "Purple", 25],
      ["Transport", 32.49, 1.7, "Lightblue", 3],
      ["AI", 48.09, 4.77, "Pink", 7],
      ["nogwat", 21.55, 2.96, "8", 1],
      ["nogwat", 78.6, 1.54, "9", 3],
      ["nogwat", 18.09, 2.05, "10", 4],
    ],
    [
      ["ID", "Publications", "Links", "", "Number of mentions"],
      ["3d printing", 5.66, 11.67, "blue1", 1],
      ["4d printing", 9.84, 11.36, "orange", 2],
      ["nanotechnology", 8.6, 21.84, "LightOrange", 3],
      ["IoT", 2.73, 52.78, "Green", 10],
      ["Renewable energy", 90.05, 12, "Purple", 25],
      ["Transport", 32.49, 11.7, "Lightblue", 3],
      ["AI", 48.09, 7.77, "Pink", 7],
      ["nogwat", 21.55, 12.96, "8", 1],
      ["nogwat", 78.6, 1.54, "9", 3],
      ["nogwat", 18.09, 5.05, "10", 4],
    ],
    [
      ["ID", "Publications", "Links", "", "Number of mentions"],
      ["3d printing", 5.66, 2.67, "blue1", 1],
      ["4d printing", 9.84, 50.36, "orange", 2],
      ["nanotechnology", 8.6, 12.84, "LightOrange", 3],
      ["IoT", 2.73, 5.78, "Green", 10],
      ["Renewable energy", 90.05, 22, "Purple", 25],
      ["Transport", 32.49, 17, "Lightblue", 3],
      ["AI", 48.09, 4.7, "Pink", 7],
      ["nogwat", 21.55, 2.96, "8", 1],
      ["nogwat", 78.6, 1.54, "9", 3],
      ["nogwat", 18.09, 2.05, "10", 4],
    ],
  ];
  //  d3.csv("/publicatiescsv.csv").then(function (data) {
  //    console.log(data[0]);
  //  });

  //  useEffect(() => {
  //    csv("publicatiescsv.csv").then((data) => {
  //      console.log(data);
  //    });
  //  }, []);

  var [count, setCount] = useState(2000);
  //  const [timer, setTimer] = useState(false);
  const [counterIsLive, setCounterIsLive] = useState(false);

  useEffect(() => {
    if (counterIsLive & (count < 2004) /*csvdatalengte + 1999*/) {
      const timerInterval = setInterval(() => {
        setCount(count + 1);
      }, 1500);
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [count, counterIsLive]);

  const increment = () => {
    if (count < 2004) {
      setCount((count) => count + 1);
    }
  };
  const decrement = () => {
    if (count > 2000) {
      setCount((count) => count - 1);
    }
  };
  const handleCounter = () => {
    setCounterIsLive(!counterIsLive);
  };

  return (
    <div className="yearcounter">
      <data />
      <Chart
        className="bubble"
        width={"1200px"}
        height={"660px"}
        chartType="BubbleChart"
        loader={<div>Loading Chart</div>}
        data={
          (["ID", "Publications", "Links", "number", "Number of mentions"],
          csvdata[count - 2000])
        }
        options={{
          title: "Innovative technologies",
          hAxis: { title: "Publications", minValue: 0, maxValue: 100 },
          vAxis: { title: "Links", minValue: 0, maxValue: 60 },
          bubble: { textStyle: { fontSize: 11, color: "transparent" } },
          animation: { duration: 1500, easing: "inandout", startup: true },
          legend: "none",
        }}
        controls={[
          {
            controlType: "StringFilter",
            options: {
              filterColumnIndex: 0,

              matchType: "any", // 'prefix' | 'exact',
              ui: {
                label: "Search by name",
              },
            },
          },
        ]}
        //        rootProps={{ "data-testid": "1" }}
      />
      <div className="counter">
        <button className="button" onClick={handleCounter}>
          {counterIsLive ? "Stop" : "Start"}
        </button>
        <button className="button" onClick={() => setCount(2000)}>
          Reset
        </button>
        <button className="incrdecr" onClick={increment}>
          +
        </button>
        <button className="incrdecr" onClick={decrement}>
          -
        </button>
        <h1 className="number">{count}</h1>
      </div>
    </div>
  );
};

export default Googlecharts;
