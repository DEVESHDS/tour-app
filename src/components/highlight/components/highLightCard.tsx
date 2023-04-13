import Image from "next/image";
import styles from "../../../styles/homePage.module.css";
import React, { FunctionComponent, useCallback } from "react";
import forwardIcon from "../../../../public/assets/icons/arrow_forward.svg";
import { useRouter } from "next/router";

interface HighLightProps {
  name: string;
  description: string;
  image: string;
}

const HighLightCard: FunctionComponent<HighLightProps> = ({
  name,
  description,
  image,
}) => {
    const router=useRouter();
    const handleCardClick=useCallback(()=>{
        router.push(`/activities/${name}`);
    },[])
  return (
    <div
      className={`${styles.highlight_box_card_shadow} rounded-lg flex flex-col flex-1 min-w-[260px] sm:min-w-[200px] relative pb-12  `}
      onClick={handleCardClick}
    >
      <Image
        src={`${image}`}
        alt="highlight-bg"
        className="w-full rounded-tl-lg rounded-tr-lg"
        width={100}
        height={100}
        priority
      />
      <div className="px-4">
        <p className="text-kimo-green font-bold text-2xl my-2">{name}</p>
        <p className={`${styles.general_font_class} text-base text-dark font-normal`}>{description}</p>

        <div className="w-10 h-10 rounded-full bg-kimo-lightgreen flex items-center justify-center ml-auto absolute bottom-2 right-2 cursor-pointer">
          <Image src={forwardIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default HighLightCard;
