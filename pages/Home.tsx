import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import AlternatingWithOptionalTestimonial from "../components/sections/feature-sections/alternating_with_optional_testimonial";
import AlternativeSideBySideWithImages from "../components/sections/feature-sections/alternative_side_by_side_with_images";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import Youtube from "../components/Youtube";
import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import SimpleCenterBranded from "../components/sections/cta-sections/simple_center_branded";
import SimpleWithHeading from "../components/sections/logo-clouds/simple_with_heading";

function Home() {
  return (
    <div>
      <HeroWithAngelImageOnRight />
      <BrandPanelWithAppScreenShot />
      <AlternatingWithOptionalTestimonial />
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
