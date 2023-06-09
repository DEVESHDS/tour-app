import { HighLight } from "@/types/apiTypes";
import Link from "next/link";
import { FunctionComponent } from "react";

const CommonHeaderComponent: FunctionComponent<{
    highlightsArr: Array<HighLight>;
  isNav: boolean;
}> = ({ highlightsArr, isNav }) => {
  return (
    <div className={`flex ${isNav ? "flex-col" : "flex-row items-center flex-1"}`}>
      <div
        className={`flex ${isNav ? "flex-col gap-y-4 " : "flex-row gap-x-6 flex-wrap flex-1"}`}
      >
        <Link  href={`/`} className="hover:text-kimo-green">
                {"Home"}
              </Link>
        {highlightsArr &&
          highlightsArr.length > 0 &&
          highlightsArr.map((hl) => {
            return (
              <Link key={hl.title} href={`/activities/${hl.title}`} className="hover:text-kimo-green">
                {hl.title}
              </Link>
            );
          })}
      </div>
      <button
        className={`bg-kimo-green text-white border ${
          isNav ? "mr-auto mt-4" : "ml-auto "
        } px-6 py-4 rounded-lg hover:bg-white hover:text-kimo-green border-kimo-green hover:border`}
      >
        Book a trip
      </button>
    </div>
  );
};

export default CommonHeaderComponent;
