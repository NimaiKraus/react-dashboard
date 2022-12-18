import React from "react";
import { links } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel as CloseIcon } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { useStateContext } from "../contexts/stateContexts";

function Sidebar() {
  const { isMenuActive, setIsMenuActive, screenSize, currentColor } = useStateContext();
  const handleCloseSidebar = () => {
    if (isMenuActive && screenSize <= 900) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }

  return (
    <>
      <div id="sidebar-div" className="flex justify-between items-center dark:text-gray-200">
        <Link
          className="flex mt-3 ml-3 font-extrabold items-center text-2xl"
          to={"/"}
          onClick={handleCloseSidebar}
        >
          <SiShopware />
          <span className="ml-1"> Shoppy</span>
        </Link>
        <TooltipComponent content={"close menu"}>
          <CloseIcon
            className="text-2xl mr-3 mt-3 cursor-pointer"
            onClick={() => {
              setIsMenuActive(false);
            }}
          />
        </TooltipComponent>
      </div>
      <div className="mt-10 overflow-auto h-screen md:overflow-hidden md:hover:overflow-auto pb-10 pl-3">
        {links.map((item) => {
          return (
            <div key={item.title}>
              <p className="ml-3 font-semibold my-3 text-gray-500 uppercase">
                {item.title}
              </p>
              {item.links.map((link) => {
                return (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={({isActive}) => ({
                      backgroundColor: isActive ? currentColor : ""
                    })}
                    className="flex items-center rounded-md p-1 ml-3 mr-3 my-3 font-semibold capitalize hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-500"
                    onClick={handleCloseSidebar}
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
