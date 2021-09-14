import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import AlternatingWithOptionalTestimonial from "../components/sections/feature-sections/alternating_with_optional_testimonial";
import AlternativeSideBySideWithImages from "../components/sections/feature-sections/alternative_side_by_side_with_images";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import Youtube from "../components/Youtube";
import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import SimpleCenterBranded from "../components/sections/cta-sections/simple_center_branded";
import SimpleWithHeading from "../components/sections/logo-clouds/simple_with_heading";
import * as Icon from "@heroicons/react/outline";

const hero = {
  titleHighLight: "From",
  titleNormal: "Sang",
  description: "It's a description",
  buttonNormal: "I Dont like",
  buttonHighlight: "Watch",
  imgSrc: "",
  alt: "",
};

const jow = {
  titleFirst: "",
  titleSecond: "",
  description: "",
  buttonName: "",
  imgSrc: "",
  alt: "",
};

const sow = {
  iconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  title: "",
  description: "",
  buttonName: "",
  buttonSrc: "",
  appleSrc: "",
  googleSrc: "",
  webSrc: "",
  testimonial: "",
  author: "",
  imgSrc: "",
  alt: "",
};

function Home() {
  return (
    <div>
      <HeroWithAngelImageOnRight {...hero} />
      <BrandPanelWithAppScreenShot {...jow} />
      <AlternatingWithOptionalTestimonial {...sow} />
      <AlternativeSideBySideWithImages />
      <BrandPanelWithOverlappingImage />
      <Youtube />
      <ThreeColumnCards />
      <SimpleCenterBranded />
      <SimpleWithHeading />
    </div>
  );
}

export default Home;
