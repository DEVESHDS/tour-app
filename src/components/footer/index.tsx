import React, { FunctionComponent } from "react";
import Image from "next/image";

const FooterSection: FunctionComponent<{}> = () => {
  return (
    <div className="bg-dark w-full  bottom-0 px-4 sm:px-36 py-4">
      <Image
        src="/assets/images/aloha_white.png"
        alt="icon"
        width={96}
        height={36}
        className="h-9 w-24"
      />
    </div>
  );
};

export default FooterSection;
