"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Forward, MessageCircle } from "lucide-react";
import ButtonComponent from "./ButtonComponent";
import { CaretUpFilled } from "@ant-design/icons";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  pic: StaticImageData;
  title: string;
  description: string;
  upvotes: number;
  comments: number;
  categories: string[];
};

const ProductCard = ({
  pic,
  title,
  description,
  upvotes,
  comments,
  categories,
}: ProductCardProps) => {
  const [vote, setVote] = useState(false);
  const [value, setValue] = useState(upvotes);

  const handleClick = () => {
    setVote(!vote);
    setValue(vote ? value - 1 : value + 1);
    console.log(vote);
  };

  return (
    <div className="transition ease-in-out delay-300 md:hover:bg-gradient-to-tr from-white via-white to-orange-100 rounded-md mt-5">
      <div className="flex z-1 justify-between items-center p-4  hover:cursor-pointer">
        <div className="flex items-start space-x-4 z-0">
          <Image
            src={pic}
            alt="Product Logo"
            className="w-10 h-10 rounded"
            width={40}
            height={40}
          />
          <div>
            <div className="flex text-sm md:text-base">
              <span className="font-semibold px-1">
                {title}{" "}
                <span className="font-normal text-gray-800">
                  {" "}
                  — {description}
                </span>
              </span>

              <Forward className="invisible md:visible h-4 text-gray-500 hover:text-orange-600 flex items-center justify-center" />
            </div>
            <div className="hidden md:flex space-x-2 text-gray-500 text-xs mt-2">
              <span className="flex">
                <MessageCircle className="h-3" />
                {comments}
              </span>

              {categories.map((category, index) => (
                <div key={index}>
                  <span key={index}>{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ButtonComponent upvotes={value} value={vote} onClick={handleClick} />
      </div>
    </div>
  );
};

export default ProductCard;
