import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  Inject,
  ColumnSeries,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  barPrimaryXAxis,
  barPrimaryYAxis,
  barCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/stateContexts";
import Header from "../../components/Header";

function Bar() {
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

  return (
    <div className="mt-24 m-4 md:m-10 p-10 rounded-3xl  bg-white dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category={"chart"} title="Medal count - RIO" />
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={
          legendSettings
        }
      >
        <Inject services={[Legend, ColumnSeries, Category, DataLabel]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => {
            return (
              <SeriesDirective key={index} {...item} animation={animation} />
            );
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Bar;
