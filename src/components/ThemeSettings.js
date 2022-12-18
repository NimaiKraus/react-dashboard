import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { themeColors } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/stateContexts";

function ThemeSettings() {
  const {
    setIsSettingMenuOpen,
    setTheme,
    setColor,
    currentMode,
    currentColor,
  } = useStateContext();
  return (
    <div className="fixed nav-item top-0" style={{ zIndex: 9999 }}>
      <div className="fixed right-0 bg-white w-400 h-screen dark:bg-[#484B52] dark:text-gray-200">
        <div className="flex justify-between ml-4 p-4">
          <p className="font-bold text-2xl">Settings</p>
          <button
            className="text-2xl"
            onClick={() => setIsSettingMenuOpen(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col ml-4 p-4 mt-4 border-t-1 border-color">
          <p className="font-semibold text-xl">Theme Option</p>
          <div className="mt-4">
            <input
              type={"radio"}
              id={"light"}
              onChange={(e) => setTheme(e)}
              value="Light"
              checked={currentMode === "Light"}
            />
            <label className="ml-2 text-md cursor-pointer" htmlFor="light">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type={"radio"}
              id={"dark"}
              onChange={(e) => setTheme(e)}
              value="Dark"
              checked={currentMode === "Dark"}
            />
            <label className="ml-2 text-md cursor-pointer" htmlFor="dark">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col ml-4 p-4 mt-4 border-t-1 border-color">
          <p className="font-semibold text-xl">Theme Color</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => {
              return (
                <TooltipComponent key={index} content={item.name}>
                  <button
                    type="button"
                    style={{ backgroundColor: item.color }}
                    className="h-10 w-10 rounded-full cursor-pointer"
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </TooltipComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
