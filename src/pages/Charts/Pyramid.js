import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  Inject,
  PyramidSeries,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/stateContexts";
import Header from "../../components/Header";

function Pyramid() {
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
      <Header category={"chart"} title="food comparison chart" />
      <AccumulationChartComponent
        id="pyramid-chart"
        height="420px"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={
          legendSettings
        }
      >
        <Inject
          services={[AccumulationLegend, PyramidSeries, AccumulationDataLabel]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            animation={animation}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
}

export default Pyramid;
