import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Legend,
  Inject,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/stateContexts";

function LineChart() {
  const { currentMode } = useStateContext();
  const animation = { enable: true, duration: 1200, delay: 100 };
  const legendSettings = {
    textStyle: {
      size: "14px",
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
  };
  const LinePrimaryXAxis = {
    valueType: "DateTime",
    labelFormat: "y",
    intervalType: "Years",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 },
    background: "white",
    labelStyle: { 
      size: '14px', 
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: 'Segoe UI', 
      fontWeight: 'bold' 
    }, 
  };
  
  const LinePrimaryYAxis = {
    labelFormat: "{value}%",
    rangePadding: "None",
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelStyle: { 
      size: '14px', 
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: 'Segoe UI', 
      fontWeight: 'bold' 
    }, 
  };

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={
        legendSettings
      }
    >
      <Inject services={[DateTime, Legend, LineSeries]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => {
          return (
            <SeriesDirective key={index} {...item} animation={animation} />
          );
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default LineChart;
