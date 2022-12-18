import React from "react";
import { cartData } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel as CloseIcon } from "react-icons/md";
import { useStateContext } from "../contexts/stateContexts";
import Button from "./Button";

function Cart() {
  const { setIsCartOpen, currentColor } = useStateContext();
  return (
    <div
      className=" w-full fixed nav-item top-0 right-0 shadow-lg"
      style={{ zIndex: 9999 }}
    >
      <div className="fixed w-600 h-screen right-0 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 p-8">
        <div className="flex justify-between m-3 p-3">
          <p className="font-bold text-2xl">Shopping Cart</p>
          <TooltipComponent content="Close cart">
            <CloseIcon
              className="text-2xl mr-2 mt-1.5 cursor-pointer"
              onClick={() => {
                setIsCartOpen(false);
              }}
            />
          </TooltipComponent>
        </div>
        {cartData.map((item, index) => {
          return (
            <div key={index} className="flex justify-start m-2 p-6 gap-5">
              <img
                src={item.image}
                alt={`${item.name} img`}
                className="w-24 h-24"
                style={{ borderRadius: "10px" }}
              />
              <div>
                <p className="text-xl font-semibold mb-1">{item.name}</p>
                <p className="text-gray-500 mb-3">{item.category}</p>
                <p className="text-2xl">{item.price}</p>
              </div>
            </div>
          );
        })}
        <div className="mt-3 flex justify-center">
          <Button
            color="white"
            bgColor={currentColor}
            size="xl"
            text="Buy now"
            borderRadius="5px"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
