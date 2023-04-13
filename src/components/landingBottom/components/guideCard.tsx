import Image, { StaticImageData } from "next/image";
import React, { FunctionComponent } from "react";

interface GuideCardProps {
  name: string;
  joiningYear: string;
  image: StaticImageData;
}

const GuideCard: FunctionComponent<GuideCardProps> = ({
  name,
  joiningYear,
  image,
}) => {
  return (
    <div className="flex bg-white justify-between items-center rounded-lg	p-4 sm:p-6 max-w-[560]">
      <div className="flex flex-col justify-between h-full gap-y-3 sm:gap-y-0">
        <div>
          <p className="text-2xl text-dard font-bold">{name}</p>
          <p className="text-base text-dark font-normal">Guide since {joiningYear}</p>
        </div>
        <button className="text-kimo-green hover:text-white hover:bg-kimo-green text-base font-bold rounded-lg border border-kimo-green px-2 py-1 sm:px-6 py-2 w-fit">Contact</button>
      </div>
      <div >
        <Image src={image} alt="icon" className="w-74 h-74 sm:w-32 sm:h-32  rounded-full" />
      </div>
    </div>
  );
};

export default GuideCard;
