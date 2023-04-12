import { Activities } from "@/types/apiTypes";
import Image from "next/image";
import styles from "../../styles/homePage.module.css";
import { FunctionComponent } from "react";
import { fetchActivities } from "@/services/tourismServices";
import noActivity from "../../../public/assets/images/no_activity.png";
import arrow_back from "../../../public/assets/icons/arrow_forward.svg";
import alohaBlack from "../../public/assets/images/aloha_black.png";
import Link from "next/link";
import FooterSection from "@/components/footer";

const ActivityDetails: FunctionComponent<Activities> = ({
  activities,
  description,
  name,
  image,
}) => {
  return (
    <div className="relative min-h-screen overflow-y-scroll">
      {name ? (
        <div className="flex flex-col min-h-screen">
          <div className="relative min-h-[460px] flex items-center justify-center text-center px-4 sm:px-36">
            <Image
              src={image}
              alt="icon"
              width={100}
              height={100}
              className="absolute w-full h-full -z-10 rounded-full w-72 h-72 sm:w-96 sm:h-96"
            />
            <p className={`${styles.welcome_msg} text-3xl break-words`}>
              {name}
            </p>
          </div>
          <div className="px-4 sm:px-36">
            <div className="mb-4">
              <p className="text-kimo-green text-2xl font-bold">Description:</p>
              <p>{description}</p>
            </div>
            {activities && activities.length > 0 && (
              <div>
                <p className="text-kimo-green text-2xl font-bold mb-2">Activities</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                {activities.map((act) => {
                  return (
                    <div
                      key={act.name}
                      className="bg-white rounded-lg flex justify-between items-center py-6 px-6 cursor-pointer"
                    >
                      <p className="text-base font-normal text-dark">
                        {act.name}
                      </p>
                    </div>
                  );
                })}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Image src={noActivity} className="w-72 h-72 mx-auto" alt="bg-img" />
      )}
      <FooterSection />
    </div>
  );
};

export default ActivityDetails;

export async function getServerSideProps({
  resolvedUrl,
}: {
  resolvedUrl: string;
}) {
  try {
    console.log("req res and url is ", resolvedUrl);
    let pathArr = resolvedUrl.split("/");
    if (pathArr && pathArr.length < 3) {
      throw new Error("wrong parameter");
    }
    console.log("param is ", pathArr);
    const results = await fetchActivities(pathArr[2]);
    const activityData: Activities = { ...results.data };
    console.log("results are ", results.data);
    return {
      props: { ...results.data },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}
