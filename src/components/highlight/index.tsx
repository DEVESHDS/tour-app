import { HighLight } from "@/types/apiTypes";
import styles from "../../styles/homePage.module.css"
import React, { FunctionComponent } from "react";
import HighLightCard from "./components/highLightCard";

interface HighLightCompProps {
  highlightsArr: Array<HighLight>;
}

const HighLight: FunctionComponent<HighLightCompProps> = ({
  highlightsArr,
}) => {
  return (
    <div className="px-4 sm:px-36 bg-white py-10">
      <h3 className="mb-4">Highlights</h3>
      <div className={`flex gap-x-4 ${styles.scrollbar_hide} overflow-x-auto py-2 px-2 -mx-2`}>
        {highlightsArr &&
          highlightsArr.length > 0 &&
          highlightsArr.map((hl) => {
            return (
              <HighLightCard
                key={hl.title}
                name={hl.title}
                image={hl.image}
                description={hl.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HighLight;
