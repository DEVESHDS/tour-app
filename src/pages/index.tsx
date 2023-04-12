import WelcomeBanner from "@/components/banner";
import FooterSection from "@/components/footer";
import HeadersComponent from "@/components/headers/components/commonHeaderComponent";
import HighLightComponent from "@/components/highlight";
import BottomSection from "@/components/landingBottom";
import { fetchCategories, fetchHighlights } from "@/services/tourismServices";
import { Categories, HighLight } from "@/types/apiTypes";
import Image from "next/image";
import alohaBlack from "../../public/assets/images/aloha_black.png";

import { FunctionComponent, useEffect, useState } from "react";
import CommonHeaderComponent from "@/components/headers/components/commonHeaderComponent";
import HeaderBar from "@/components/headers";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['IBM Plex Mono'] })

interface HomePageProps {
  highlights: Array<HighLight>;
  categories: Array<Categories>;
}

let high = [
  // {
  //   title: "Surfing",
  //   description: "Best Hawaiian islands for surfing.",
  //   image:
  //     "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png",
  // },
  // {
  //   title: "Traditional Festivals",
  //   description: "Best places to attend traditional festivals in Hawaii",
  //   image:
  //     "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png",
  // },
  // {
  //   title: "Volcanoes",
  //   description: "Volcanic conditions can change at any time.",
  //   image:
  //     "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png",
  // },
  {
    title: "Surfing",
    description: "Best Hawaiian islands for surfing.",
    image:
      "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png",
  },
  {
    title: "Traditional Festivals",
    description: "Best places to attend traditional festivals in Hawaii",
    image:
      "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png",
  },
  {
    title: "Volcanoes",
    description: "Volcanic conditions can change at any time.",
    image:
      "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png",
  },
];

let cat=[{"name":"Adventure","activities":[{"title":"Surfing in the waves of Waikiki"},{"title":"Hiking the Diamond Head trail in Oahu"},{"title":"Exploring Hawaii Volcanoes National Park"},{"title":"Snorkeling at the beaches of Maui"},{"title":"Taking a helicopter tour to see the active volcanoes and waterfalls"}]},{"name":"Culinary","activities":[{"title":"Taking a Hawaiian cooking class"},{"title":"Trying Poke at a local restaurant"},{"title":"Going on a coffee tasting tour in the Big Island"},{"title":"Attending a Hawaiian luau dinner show"},{"title":"Visiting a local market to taste exotic fruits and other local products"}]},{"name":"Eco-tourism","activities":[{"title":"Hiking in the lush forests of the Big Island"},{"title":"Kayaking through the mangroves of Maui"},{"title":"Whale watching during the winter months"},{"title":"Snorkeling with sea turtles at the Turtle Bay on Oahu"},{"title":"Visiting the Akaka Falls State Park on the Big Island to see the stunning waterfall"}]},{"name":"Family","activities":[{"title":"Visiting the Waikiki Aquarium in Oahu"},{"title":"Going on a scenic drive to see the Road to Hana on Maui"},{"title":"Exploring the Polynesian Cultural Center on Oahu"},{"title":"Taking a sunset dinner cruise along the coast of Maui"},{"title":"Attending a hula show or a Hawaiian music concert as a family"}]},{"name":"Sport","activities":[{"title":"Playing golf on one of Hawaii's world-famous courses"},{"title":"Going on a deep-sea fishing excursion"},{"title":"Participating in a beach volleyball game on Waikiki Beach"},{"title":"Hiking the challenging trails of the Koko Head Crater on Oahu"},{"title":"Surfing lessons on the North Shore of Oahu"}]}]

const Home: FunctionComponent<HomePageProps> = ({ highlights, categories }) => {
  
  return (
    <div className="flex flex-col h-screen">
      
      <HeaderBar highlightsArr={high} />
      <WelcomeBanner />
      <HighLightComponent highlightsArr={high} />
      <BottomSection categoryArr={[]} />
      <FooterSection />
      
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const results = await Promise.allSettled([
      fetchCategories(),
      fetchHighlights(),
    ]);
    console.log("results are ", results);
    const [catResult, highResult] = results;
    // if(results[0].status==="fulfilled")
  } catch (err) {
    return {
      props: {
        highlights: [],
        categories: [],
      },
    };
  }

  return { props: {} };
}
