import { HighLight } from "@/types/apiTypes";
import styles from "../../styles/homePage.module.css";
import React, { FunctionComponent } from "react";
import HeadersComponent from "../headers";

const WelcomeBanner: FunctionComponent<{}> = ({}) => {
  return (
    <div className={`bg-kimo-bg relative flex justify-center items-center min-h-[480px]  sm:min-h-[460px]`}>
        
        <h1 className={`${styles.welcome_msg} text-semilarge sm:text-7xl md:text-large`}>Welcome <br />to Hawaii</h1>
    </div>
  );
};

export default WelcomeBanner;
