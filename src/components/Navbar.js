import React, { useEffect } from "react";
import { useStateContext } from "../contexts/stateContexts";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { FiShoppingCart as CartIcon } from "react-icons/fi";
import { BsChatLeft as ChatIcon } from "react-icons/bs";
import { RiNotification3Line as NotificationIcon } from "react-icons/ri";
import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Cart, Chat, UserProfile, Notification } from "./components_index";

import avatar from "../data/avatar.jpg";

const NavButton = ({ customFunc, color, dotColor, content, icon }) => {
  return (
    <TooltipComponent content={content}>
      <button
        className="rounded-full relative hover:bg-light-gray"
        onClick={customFunc}
        style={{ color: color }}
      >
        {icon}
        <span
          className="absolute rounded-full bottom-2 left-2.5 h-2 w-2"
          style={{ backgroundColor: dotColor }}
        />
      </button>
    </TooltipComponent>
  );
};

function Navbar() {
  const { isMenuActive, setIsMenuActive, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    screenSize <= 900 && setIsMenuActive(false);
  }, [screenSize])
  
  

  return (
    <div className="flex justify-between m-5 items-center">
      <NavButton
        className="text-2xl mt-3"
        customFunc={() =>
          setIsMenuActive((prevIsMenuActive) => !prevIsMenuActive)
        }
        icon={<MenuIcon />}
        content={"Toggle sidebar"}
        color={"blue"}
      />
      <div className="flex justify-evenly w-60 items-center ">
        <NavButton
          className="text-2xl mt-3"
          customFunc={() => handleClick('chat')}
          icon={<ChatIcon />}
          content={"Open chat"}
          dotColor={'red'}
          color={"blue"}
        />
        <NavButton
          className="text-2xl mt-3"
          customFunc={() => handleClick('notification')}
          icon={<NotificationIcon />}
          content={"Open notification"}
          dotColor={'red'}
          color={"blue"}
        />
        <NavButton
          className="text-2xl mt-3"
          customFunc={() => handleClick('cart')}
          icon={<CartIcon />}
          content={"Open cart"}
          color={"blue"}
        />
        <TooltipComponent content={"User profile"}>
          <div className="flex items-center">
            <img className="rounded-full h-8 w-8" src={avatar} alt="User avatar"/>
            <p>
              <span className="text-gray-400 text-14 ml-2">
                Hi,
              </span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <ArrowDownIcon />
          </div>
        </TooltipComponent>
        <div>
          { isClicked.cart && <Cart />}
          { isClicked.chat && <Chat />}
          { isClicked.notification && <Notification />}
          { isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
