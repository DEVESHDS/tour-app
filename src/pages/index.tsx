import WelcomeBanner from "@/components/banner";
import FooterSection from "@/components/footer";
import HeadersComponent from "@/components/headers/components/commonHeaderComponent";
import HighLightComponent from "@/components/highlight";
import BottomSection from "@/components/landingBottom";
import { fetchCategories, fetchHighlights } from "@/services/tourismServices";
import { Categories, HighLight } from "@/types/apiTypes";
import { FunctionComponent, useEffect, useState } from "react";
import HeaderBar from "@/components/headers";

import Banner from "@/components/banner";

interface HomePageProps {
  highlights: Array<HighLight>;
  categories: Array<Categories>;
}



const Home: FunctionComponent<HomePageProps> = ({ highlights, categories }) => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderBar highlightsArr={highlights} />
    <Banner topMsg="Welcome" bottomMsg="to Hawaii" url={`/assets/images/hawaii-bg.webp`}  />
      <HighLightComponent highlightsArr={highlights} />
      <BottomSection categoryArr={categories} />
      <FooterSection />
    </div>
  );
};

export default Home;





export async function getServerSideProps() {
  let high:Array<HighLight>=[];
  let cats:Array<Categories>=[];
  try {
    const results = await Promise.allSettled([
      fetchCategories(),
      fetchHighlights(),
    ]);
    const isFulfilled = <T,>(
      p: PromiseSettledResult<T>
    ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";
    const isRejected = <T,>(
      p: PromiseSettledResult<T>
    ): p is PromiseRejectedResult => p.status === "rejected";

    results.filter(isFulfilled).forEach((p) =>{ 
      if(p.value.request.path==="/v1/highlights"){
        high=[...p.value.data as Array<HighLight>]
      }else{
        cats=[...p.value.data as Array<Categories>]
      }
      
    });
    return {
      props: {
        highlights: [...high],
        categories: [...cats],
      },
    }

    
  } catch (err) {
    return {
      props: {
        highlights: [],
        categories: [],
      },
    };
  }

  
}
