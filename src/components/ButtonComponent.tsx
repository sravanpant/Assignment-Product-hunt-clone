import { CaretUpFilled } from "@ant-design/icons";
import React from "react";
import { Button } from "@mantine/core";

type ButtonProps = {
  upvotes: number;
  value: boolean;
  onClick: () => void;
};

const ButtonComponent = ({ upvotes, value, onClick }: ButtonProps) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className={`relative transition ease-in delay-150 md:hover:border-[#fe6557] bg-white px-3 py-2 md:rounded-md mb-2 grid grid-rows-2 border-l md:border border-1 ${
          value ? "text-[#fe6557]" : "text-gray-500"
        }`}
      >
        <CaretUpFilled
          size={24}
          className="transition duration-200 animate-bounce flex justify-center items-center"
        />
        <span className="text-gray-700 font-bold text-xs">{upvotes}</span>
      </button>
    </div>
  );
};

export default ButtonComponent;
