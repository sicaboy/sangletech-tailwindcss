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

/* 
Learn how to use available markdown and HTML 
https://github.com/rehypejs/rehype-raw
https://github.com/remarkjs/remark-gfm
https://commonmark.org/help/

Examples
`
  A mix of **Markdown** and <u>HTML</u>.
  ## Tasklist

* [ ] to do
* [x] done

## Autolink literals

www.example.com, https://example.com, and contact@example.com.
 `
*/

/* For Icons
https://heroicons.com/ 

(
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  )
*/

const hero = {
  titleHighLight: "From",
  titleNormal: "Sang",
  description: `It's a description`,
  buttonNormal: "I Dont like",
  buttonHighlight: "Watch",
  imgSrc: "",
  alt: "",
};

const jow = {
  titleFirst: "",
  titleSecond: "",
  description: ``,
  buttonName: "",
  imgSrc: "",
  alt: "",
};

const sow = {
  leftIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  leftTitle: "",
  leftDescription: ``,
  leftButtonName: "",
  leftButtonSrc: "",
  leftAppleSrc: "",
  leftGoogleSrc: "",
  leftWebSrc: "",
  leftTestimonial: ``,
  leftAuthor: "",
  leftAuthorImgSrc: "",
  leftImgSrc: "",
  leftAlt: "",
};

const projectYou = {
  rightIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  rightTitle: "",
  rightDescription: ``,
  rightButtonName: "",
  rightButtonSrc: "",
  rightAppleSrc: "",
  rightGoogleSrc: "",
  rightWebSrc: "",
  rightImgSrc: "",
  rightAlt: "",
};

const finProSection = { mainTitle: "", mainDescription: `` };
const fin = {
  leftIconOne: Icon.GlobeAltIcon,
  leftIconOneTitle: "",
  leftIconOneDescription: ``,

  leftIconTwo: Icon.ScaleIcon,
  leftIconTwoTitle: "",
  leftIconTwoDescription: ``,

  leftIconThree: Icon.LightningBoltIcon,
  leftIconThreeTitle: "",
  leftIconThreeDescription: ``,

  leftTitle: "",
  leftDescription: ``,
  leftButtonName: "",
  leftButtonSrc: "",
  leftAppleSrc: "",
  leftGoogleSrc: "",
  leftWebSrc: "",
  leftImgSrc: "",
  leftAlt: "",
};

const pro = {
  rightIconOne: "",
  rightIconOneTitle: "",
  rightIconOneDescription: ``,

  rightIconTwo: "",
  rightIconTwoTitle: "",
  rightIconTwoDescription: ``,

  rightIconThree: "",
  rightIconThreeTitle: "",
  rightIconThreeDescription: ``,

  rightTitle: "",
  rightDescription: ``,
  rightButtonName: "",
  rightButtonSrc: "",
  rightAppleSrc: "",
  rightGoogleSrc: "",
  rightWebSrc: "",
  rightImgSrc: "",
  rightAlt: "",
};

const startup = {
  title: "",
  description: ``,
  buttonName: "",
  imgSrc: "",
  alt: "",
};

const youtube = {
  title: "",
  description: ``,
  buttonName: "",
  buttonSrc: "",

  videoOneThumbnail: "",
  videoOneSrc: "",
  videoOneAlt: "",

  videoTwoThumbnail: "",
  videoTwoSrc: "",
  videoTwoAlt: "",

  videoThreeThumbnail: "",
  videoThreeSrc: "",
  videoThreeAlt: "",
};

const blog = {
  title: "",
  description: ``,
  buttonIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  buttonName: "",

  blogOneThumbnail: "",
  blogOneTag: "",
  blogOneTitle: "",
  blogOneDescription: ``,
  blogOneAuthorImgSrc: "",
  blogOneAuthorName: "",
  blogOneAuthorCaption: "",

  blogTwoThumbnail: "",
  blogTwoTag: "",
  blogTwoTitle: "",
  blogTwoDescription: ``,
  blogTwoAuthorImgSrc: "",
  blogTwoAuthorName: "",
  blogTwoAuthorCaption: "",

  blogThreeThumbnail: "",
  blogThreeTag: "",
  blogThreeTitle: "",
  blogThreeDescription: ``,
  blogThreeAuthorImgSrc: "",
  blogThreeAuthorName: "",
  blogThreeAuthorCaption: "",
};

const social = {
  title: "",
  desctiption: ``,

  buttonFacebookLink: "",
  buttonYoutubeLink: "",
  buttonLinkedinLink: "",
  buttonInstagramLink: "",
};

const company = {
  logoOneName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoOneSrc: "",

  logoTwoName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoTwoSrc: "",

  logoThreeName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoThreeSrc: "",
};

function Home() {
  return (
    <div>
      <HeroWithAngelImageOnRight {...hero} />
      <BrandPanelWithAppScreenShot {...jow} />
      <AlternatingWithOptionalTestimonial {...sow} {...projectYou} />
      <AlternativeSideBySideWithImages {...finProSection} {...fin} {...pro} />
      <BrandPanelWithOverlappingImage {...startup} />
      <Youtube {...youtube} />
      <ThreeColumnCards {...blog} />
      <SimpleCenterBranded {...social} />
      <SimpleWithHeading {...company} />
    </div>
  );
}

export default Home;
