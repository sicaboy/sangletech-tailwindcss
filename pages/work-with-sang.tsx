import HeroWithSocialNStats from "../components/hero-with-social-n-stats";
import CompanyAchivement from "../components/company-achivement";
import SimpleWithHeading from "../components/sections/logo-clouds/simple_with_heading";
import ThreeColumnsFeatureList from "../components/three-columns-feature-list";
import CoreValues from "../components/core-values";

import * as Icon from "@heroicons/react/outline";

const hero = {
  //TODO: Why can not see the titleNormal?
  //TODO: Delete the buttonNormal 
  //TODO: the HighlightButton will lead to Open Positions part below
  titleHighlight: "Are You Ready?",
  titleNormal: "**BECOME ONE OF THE COOLEST WARRIORS IN SANG LE TEAM**",
  description: `**Become one of the COOLEST WARRIORS in Sang's Team**`,
  buttonNormal: false,
  buttonNormalSrc: false,
  buttonHighlight: "Open Positions",
  buttonHighlightSrc: "#learn-more",
  imgSrc: "/assets/sang-team.png",
  alt: "Hinh anh Sang Le Team",
};

const coreValue = {
  //TODO: Add more Text from listSevenText -> listElevenText
  //TODO: Delete buttonName 
  //TODO: Change the title font "Core Values" to make it look the same as the the other titles
  title: "Core Values",
  description: `Our core values are the backbone of our company development and all our staffs and partners are always picked based on these values.`,
  buttonName: false,

  listOneText: "Deliver The Best Customer Experience",
  listTwoText: "Continuous Incremental Improvement",
  listThreeText: "Build a Sustainable Growth",
  listFourText: "Embrace and Drive Change",
  listFiveText: "Be Productive, Creative, and Open-Minded",
  listSixText: "Pursue Growth and Learning",
  listSevenText: "Build Open and Honest Relationships with Communication",
  listEightText: "Build a Positive Team and Family Spirit",
  listNineText: "Be Passionate and Determined",
  listTenText: "Do More with Less",
  listElevenText: "Be Humble",
};

const successFormula = {
  //TODO: Delete Caption and Description
  caption: false,
  title: "Our Success Formula",
  description: false,
  imgOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1633424963/Galatek.io%20Website/Sangletech.com/Screen_Shot_2021-10-05_at_4.07.22_PM_huvam8.png",
  imgTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1633424964/Galatek.io%20Website/Sangletech.com/Screen_Shot_2021-10-05_at_4.07.47_PM_krwu1i.png",
  imgThreeSrc:
    "/assets/team-smile.jpeg",
  
    //TODO: Delete listDescription
  listOneIconSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626079598/Galatek.io%20Website/3D_Illustration-Product_Development-Skin-01_f6gpbd.png",
  listOneTitle: "Technology",
  listOneDescription: false,

  listTwoIconSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626079584/Galatek.io%20Website/3D_Illustration-Collaborative-Skin-01_hdnobk.png",
  listTwoTitle: "Gamification",
  listTwoDescription: false,

  listThreeIconSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626079608/Galatek.io%20Website/3D_Illustration-Vision_Mission_Skin-01_lnbcgi.png",
  listThreeTitle: " Visualization",
  listThreeDescription: false,
};

const openPositions = {
  //TODO: Turn each list into button and creat buttonSrc
  //TODO: Can not see the listTitle
  caption: "Open Positions",
  title: "We Are Looking For",
  description: false,

  listOneTitle: "Front-end Developer",
  listOneDescription: `Senior`,

  listTwoTitle: "Digital Content Writer",
  listTwoDescription: `Senior`,

  listThreeTitle: "Video Editor",
  listThreeDescription: `Senior`,
};

const company = {
  title: "Mảng Kinh Doanh",

  logoOneName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171786/Galatek.io%20Website/updated-galatek-logo-300x101_ajkugi.png",

  logoOneAlt: "Galatek logo",

  logoTwoName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171832/Galatek.io%20Website/whitebg-cafes-logo011x-600x228-1.png_ubdsbd.webp",

  logoThreeName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171957/Galatek.io%20Website/print-spmet-logo.png_ex1cvm.webp",
};

function Home() {
  return (
    <>
      <HeroWithSocialNStats {...hero} />
      <CoreValues {...coreValue} />
      <CompanyAchivement {...successFormula} />
      <div>
            <h1 className="text-2xl font-bold text-center"> Application Steps </h1>
            <img
              className="w-full rounded-lg"
              src="/assets/hire-flow.jpg"
              alt="Galatek-Hire-Steps"
              width={1310}
              height={873}
            />
      </div>
      <ThreeColumnsFeatureList {...openPositions} />
      <SimpleWithHeading {...company} />
    </>
  );
}

export default Home;
