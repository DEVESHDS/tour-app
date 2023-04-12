import React, { FunctionComponent } from "react";
import Image from "next/image";
import GuideCard from "./components/guideCard";
import guideImage from "../../../public/assets/images/guide_img.webp";
import { Categories } from "@/types/apiTypes";
import CategoryCard from "./components/categoryCard";
import noHighlights from "../../../public/assets/images/no_category.svg"

interface BottomSectionProps {
  categoryArr: Array<Categories>;
}

const BottomSection: FunctionComponent<BottomSectionProps> = ({
  categoryArr,
}) => {
  return (
    <div className="bg-kimo-lightgreen grid grid-cols-1 gap-y-4 sm:grid-cols-2 py-10 px-4 sm:px-36 gap-x-6">
      <div className="flex flex-col">
        <p className="mb-4">Categories</p>
        <div className="flex flex-col gap-y-2">
          {categoryArr &&
            categoryArr.length > 0 &&
            categoryArr.map((ct) => {
              return <CategoryCard key={ct.name} name={ct.name} />;
            })}
             {categoryArr && categoryArr.length===0 && <Image src={noHighlights} className="w-72 h-72 mx-auto" alt="bg-img" />}
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="mb-4">Travel Guide</p>

        <GuideCard name="Hadwin Malone" image={guideImage} joiningYear="2012" />
      </div>
    </div>
  );
};

export default BottomSection;
