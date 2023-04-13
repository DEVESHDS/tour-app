import styles from "../../styles/homePage.module.css";
import React, { FunctionComponent } from "react";
import Image from "next/image";



interface BannerProps {
  topMsg:string,
  bottomMsg:string,
  url:string
  
}

const Banner: FunctionComponent<BannerProps> = ({topMsg,bottomMsg,url}) => {
  return (
    <div className={`relative flex justify-center items-center min-h-[480px]  sm:min-h-[560px]`}> 
        <Image src={url} alt="bg-img"  className="absolute w-full h-full -z-1 object-cover " width={1000} height={100} />
        <h1 className={`${styles.welcome_msg} text-semilarge sm:text-7xl md:text-large`}>{topMsg} <br />{bottomMsg}</h1>
    </div>
  );
};

export default Banner;
