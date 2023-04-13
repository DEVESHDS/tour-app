import Image from "next/image";
import React, { FunctionComponent } from "react";
import forwardIcon from "../../../../public/assets/icons/arrow_forward.svg";

interface CategoryProps {
  name: string;
}

const CategoryCard: FunctionComponent<CategoryProps> = ({ name }) => {
  return (
    <div className="bg-white rounded-lg flex justify-between items-center py-6 px-6 cursor-pointer">
      <p className="text-base font-normal text-dark">{name}</p>
        <Image src={forwardIcon} alt="icon" />
    </div>
  );
};

export default CategoryCard;
