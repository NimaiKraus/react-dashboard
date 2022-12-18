import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from "../components/components_index";
import { earningData, dropdownData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/stateContexts";

function Ecommerce() {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center bg-hero-pattern">
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="text-sm text-gray-600">Earnings</p>
              <p className="text-2xl dark:text-gray-800">$63.326,12</p>
              <Button
                className="mt-3"
                color="white"
                bgColor={currentColor}
                size="md"
                text="Download"
                borderRadius="5px"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 justify-center items-center gap-1 m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className=" bg-white h-44 md:w-56 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl text-2xl p-3 m-1 flex flex-col items-center justify-center"
            >
              <button
                type="button"
                className="rounded-full p-3 hover:drop-shadow-xl w-12 mb-2"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
              >
                {item.icon}
              </button>
              <p>
                <span className="font-semibold">{item.amount}</span>
                <span className={`ml-1 text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 rounded-2xl bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4">
        <div className="flex flex-wrap justify-between">
          <p className="font-semibold text-xl">Revenue Updates</p>
          <div className="flex justify-center items-center gap-4">
            <p className="flex items-center hover:drop-shadow-xl gap-2 text-gray-600 dark:text-gray-400">
              <GoPrimitiveDot />
              Expense
            </p>
            <p className="flex items-center hover:drop-shadow-xl gap-2 text-green-600">
              <GoPrimitiveDot />
              Budget
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 gap-10 justify-center">
        <div>
          <div>
            <p className="flex items-center">
              <span className="font-semibold text-3xl dark:text-gray-200">$93,438</span>
              <span className="text-sm text-white bg-green-600 rounded-2xl p-1 ml-1">
                23%
              </span>
            </p>
            <p className="text-gray-500 mt-1 dark:text-gray-400">Budget</p>
          </div>
          <div>
            <p>
              <span className="font-semibold text-3xl dark:text-gray-200">$48,208</span>
            </p>
            <p className="text-gray-500 mt-1 dark:text-gray-400">Expense</p>
          </div>
          <div className="mt-5">
            <SparkLine
              height="80px"
              width="250px"
              data={SparklineAreaData}
              id="line-sparkline"
              color={currentColor}
              currentColor={currentColor}
              type="Line"
            />
          </div>
          <div className="mt-5">
            <Button
              color={"white"}
              bgColor={currentColor}
              text={"Download report"}
              borderRadius={"5px"}
              size={"md"}
            />
          </div>
        </div>
        <div>
          <Stacked width="320px" height="360px" />
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
