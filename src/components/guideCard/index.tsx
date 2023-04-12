import Image from "next/image";
import React, { FunctionComponent } from "react";

interface GuideCardProps {
  name: string;
  joiningYear: string;
  image: string;
}

const GuideCard: FunctionComponent<GuideCardProps> = ({
  name,
  joiningYear,
  image,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between">
        <div>
          <p>{name}</p>
          <p>Guide since {joiningYear}</p>
        </div>
        <button className="text-kimo-green">Contact</button>
      </div>
      <div>
        <Image src={image} alt="icon" className="w-32 h-32  rounded-full" />
      </div>
    </div>
  );
};

export default GuideCard;
