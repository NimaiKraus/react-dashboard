import React from "react";
import { chatData } from "../data/dummy";
import { MdOutlineCancel as CloseIcon } from "react-icons/md";
import { useStateContext } from "../contexts/stateContexts";
import Button from "../components/Button";

function Chat() {
  const { setIsChatOpen, currentColor } = useStateContext();
  return (
    <div
      className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 w-96 p-8 rounded-lg shadow-lg"
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="font-bold text-xl dark:text-gray-300">Messages</p>
          <p className="font-bold dark:text-gray-300 ml-4">3 new</p>
        </div>
        <CloseIcon
          className="font-bold text-2xl dark:text-gray-300 cursor-pointer"
          onClick={() => setIsChatOpen(false)}
        />
      </div>
      <div className="">
        {chatData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start p-3 mt-2 gap-5 cursor-pointer"
            >
              <img
                src={item.image}
                alt={`${item.message} img`}
                className="w-24 h-24"
                style={{ borderRadius: "10px" }}
              />
              <div>
                <p className="text-xl font-semibold mb-1">{item.message}</p>
                <p className="text-gray-400">{item.desc}</p>
                <p className="text-gray-400">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button
          color="white"
          bgColor={currentColor}
          size="md"
          text="See all messages"
          borderRadius="5px"
        />
      </div>
    </div>
  );
}

export default Chat;
