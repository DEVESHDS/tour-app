import { Activities, HighLight } from "@/types/apiTypes";
import Image from "next/image";
import styles from "../../styles/homePage.module.css";
import { FunctionComponent } from "react";
import { fetchActivities, fetchHighlights } from "@/services/tourismServices";
import noActivity from "../../../public/assets/images/no_activity.png";
import arrow_back from "../../../public/assets/icons/arrow_forward.svg";
import alohaBlack from "../../public/assets/images/aloha_black.png";
import Link from "next/link";
import FooterSection from "@/components/footer";
import HeaderBar from "@/components/headers";
import Banner from "@/components/banner";

interface ActivityDetailProps {
  act:Activities,
  highlights:Array<HighLight>
}

const ActivityDetails: FunctionComponent<ActivityDetailProps> = ({
  act,highlights
}) => {
  const {name,description,image,activities}=act;
  return (
    <div className="relative min-h-screen overflow-y-scroll">
      <HeaderBar highlightsArr={highlights} />
      {name ? (
        <div className="flex flex-col min-h-screen">
          {/* <div className="relative min-h-[460px] flex items-center justify-center text-center px-4 sm:px-36">
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
          </div> */}
          <Banner topMsg={name} bottomMsg="" url={image} />
          <div className="px-4 sm:px-36 mt-4">
            <div className="mb-4">
              <p className="text-kimo-green text-2xl font-bold mb-2">Description:</p>
              <p>{description}</p>
            </div>
            {activities && activities.length > 0 && (
              <div>
                <p className="text-kimo-green text-2xl font-bold mb-2 mt-4">Activities</p>
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



export async function getServerSideProps({resolvedUrl}:{
  resolvedUrl: string;
}) {
  let high:Array<HighLight>=[];
  let act:Activities={name:"",description:"",image:"",activities:[]};
  try {
    
    let pathArr = resolvedUrl.split("/");
    if (pathArr && pathArr.length < 3) {
      throw new Error("wrong parameter");
    }
    const results = await Promise.allSettled([
      fetchHighlights(),
      fetchActivities(pathArr[2])
    ]);
    const isFulfilled = <T,>(
      p: PromiseSettledResult<T>
    ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";
    

    results.filter(isFulfilled).forEach((p) =>{ 
      if(p.value.request.path==="/v1/highlights"){
        high=[...p.value.data as Array<HighLight>]
      }else{
        act={...p.value.data as Activities}
      }

      
      
    });
    return {
      props: {
        highlights: [...high],
        act:{...act}
      },
    }

    
  } catch (err) {
    return {
      props: {
        highlights: [],
        act:{},
      },
    };
  }

  
}
