import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Legend,
  Inject,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/stateContexts";
import Header from "../../components/Header";

function Area() {
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
  const AreaPrimaryXAxis = {
    valueType: "DateTime",
    labelFormat: "y",
    majorGridLines: { width: 0 },
    intervalType: "Years",
    edgeLabelPlacement: "Shift",
    labelStyle: {
      size: "14px",
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
  };

  const AreaPrimaryYAxis = {
    labelFormat: "{value}%",
    lineStyle: { width: 0 },
    maximum: 4,
    interval: 1,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelStyle: {
      size: "14px",
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
  };


  return (
    <div className="mt-24 m-4 md:m-10 p-10 rounded-3xl  bg-white dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category={"chart"} title="Inflation rate in percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={AreaPrimaryXAxis}
        primaryYAxis={AreaPrimaryYAxis}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={
          legendSettings
        }
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => {
            return (
              <SeriesDirective key={index} {...item} animation={animation} />
            );
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Area;
