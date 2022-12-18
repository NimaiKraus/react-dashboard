import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/stateContexts";
import Header from "../../components/Header";

const date1 = new Date("2017, 1, 1");

// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

function Financial() {
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
  const FinancialPrimaryXAxis = {
    valueType: "DateTime",
    minimum: new Date("2016, 12, 31"),
    maximum: new Date("2017, 9, 30"),
    crosshairTooltip: { enable: true },
    majorGridLines: { width: 0 },
    labelStyle: {
      size: "14px",
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
  };

  const FinancialPrimaryYAxis = {
    title: "Price",
    minimum: 100,
    maximum: 180,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    labelStyle: {
      size: "14px",
      color: currentMode === "Dark" ? "white" : "gray",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
  };

  return (
    <div className="mt-24 m-4 md:m-10 p-10 rounded-3xl  bg-white dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category={"chart"} title="AAPPLE historical" />
      <ChartComponent
        id="financial-chart"
        height="420px"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        labelStyle={{ enable: true, color: "white" }}
        legendSettings={
          legendSettings
        }
      >
        <Inject services={[HiloSeries, Tooltip, DateTime]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            low="low"
            high="high"
            yName="low"
            type="Hilo"
            animation={animation}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Financial;
