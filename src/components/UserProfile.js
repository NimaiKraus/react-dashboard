import React from "react";
import { userProfileData } from "../data/dummy";
import Button from "./Button";
import { useStateContext } from "../contexts/stateContexts";
import { MdOutlineCancel as CloseIcon } from "react-icons/md";
import avatar from "../data/avatar.jpg";

function UserProfile() {
  const { setIsUserProfileOpen } = useStateContext();
  return (
    <div
      className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 w-96 p-8 rounded-lg shadow-lg"
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-between">
        <p className="font-bold text-xl dark:text-gray-300">UserProfile</p>
        <CloseIcon
          className="font-bold text-2xl dark:text-gray-300 cursor-pointer"
          onClick={() => setIsUserProfileOpen(false)}
        />
      </div>
      <div className="flex gap-2 items-center mt-3">
        <img
          src={avatar}
          alt="user avatar"
          className="rounded-full w-24 h-2w-24"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Michael Roberts
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400 mb-1">
            Administrator
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            info@shop.com
          </p>
        </div>
      </div>
      {userProfileData.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-start m-2 p-6 gap-5 cursor-pointer"
          >
            <div
              className="px-4 py-2 flex items-center rounded-lg"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xl font-semibold mb-1">{item.title}</p>
              <p className="text-gray-400">{item.desc}</p>
              <p className="text-gray-400">{item.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserProfile;
