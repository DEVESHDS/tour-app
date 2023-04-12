import Image from "next/image";
import React, { FunctionComponent } from "react";

interface CategoryProps {
  name: string;
}

const CategoryCard: FunctionComponent<CategoryProps> = ({ name }) => {
  return (
    <div className="">
      <p>{name}</p>
      <Image src={"/assets/icon/arrow_forward.svg"} alt="icon" />
    </div>
  );
};

export default CategoryCard;
