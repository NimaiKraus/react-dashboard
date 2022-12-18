import React from "react";
import {
  ChartComponent,
  Tooltip,
  Legend,
  Category,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
} from "@syncfusion/ej2-react-charts";
import {
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
  stackedCustomSeries,
} from "../../data/dummy";
import { StackingColumnSeries } from "@syncfusion/ej2-react-charts/src";
import { useStateContext } from "../../contexts/stateContexts";

function Stacked({ width, height }) {
  const { currentMode, currentColor } = useStateContext;
  const legendSettings = {
    textStyle: {
      size: "14px",
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
  };

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      legendSettings={
        legendSettings
      }
      // background={currentMode === 'Light' ? '#fff' : '#20232A'}
      // palettes={ ['gray', 'blue'] }
    >
      <Inject services={[Tooltip, Legend, Category, StackingColumnSeries]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
