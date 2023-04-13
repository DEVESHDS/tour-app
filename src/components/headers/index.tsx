import { HighLight } from "@/types/apiTypes";
import alohaBlack from "../../../public/assets/images/aloha_black.png";
import menuIcon from "../../../public/assets/icons/menu.png";
import closeIcon from "../../../public/assets/icons/close.png";
import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import CommonHeaderComponent from "./components/commonHeaderComponent";

const HeaderBar: FunctionComponent<{
  highlightsArr: Array<HighLight>;
  
}> = ({ highlightsArr }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  useEffect(() => {
    if (openNav) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else if (window !== undefined) {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  }, [openNav]);
  return (
    <div className="md:px-36 md:absolute md:top-4 z-500 w-full">
      <div className="hidden md:flex bg-white rounded-lg w-full flex items-center py-3 px-4">
        <Image src={alohaBlack} alt="title" className="w-24 h-9 mr-4" />
        <CommonHeaderComponent isNav={false} highlightsArr={highlightsArr} />
      </div>
      <div className="flex md:hidden justify-between items-center absolute z-[100] bg-white items-center w-full left-0 px-4 py-2">
        <Image src={alohaBlack} alt="title" className="w-24 h-9" />
        <Image
          src={menuIcon}
          alt="icon"
          className="w-10 h-10"
          onClick={() => {
            setOpenNav(true);
          }}
        />
      </div>
      {openNav && (
        <div className="fixed h-screen w-screen z-400 bg-lightblack"></div>
      )}
      <div
        className={`fixed ${
          openNav ? "right-0" : "-right-full"
        } w-11/12 bg-white transition ease-in-out top-0 z-500 p-4 h-screen`}
      >
        <Image
          src={closeIcon}
          alt="icon"
          className="w-8 h-8 ml-auto mb-4"
          onClick={() => {
            setOpenNav(false);
          }}
        />
        <CommonHeaderComponent isNav={true} highlightsArr={highlightsArr} />
      </div>
    </div>
  );
};

export default HeaderBar;
