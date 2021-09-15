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
  titleHighlight: "VƯƠN TẦM BẢN THÂN",
  titleNormal: "Sang Le Tech",
  description: `Bước Đi Tự Tin Trên **Hành Trình 4.0**`,
  buttonNormal: "Sang Lê là ai?",
  buttonHighlight: "Xem Video",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615071/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0006_mbnffl.jpg",
  alt: "Hinh anh Sang Le",
};

const jow = {
  titleFirst: "HÀNH TRÌNH LÀM GIÀU X.0",
  titleSecond: "Cứ Đi Là Bạn Sẽ Đến!",
  description: `**Liệu có một Tấm Bản Đồ dẫn đến một Cuộc sống thịnh vượng cho Bạn hay không?**
  <br><br>
  Nếu bạn có trong tay tấm bản đồ  chỉ đường cho mình thì sao? Có cách nào để bạn gặt hái được những kết quả mà mình mong muốn như Sang hay không?`,
  buttonName: "Tìm hiểu thêm",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628152810/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_c2ukh5.png",
  alt: "Hinh anh SL Hanh Trinh Lam Giau X.0",
};

const sow = {
  leftIconName: (
    <Icon.BookOpenIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  leftTitle: "BÍ MẬT LÀM GIÀU X.0",
  leftDescription: `**CẢNH BÁO:** ĐỪNG ĐỌC CUỐN SÁCH NÀY NẾU BẠN LÀ NGƯỜI DỄ-TỔN-THƯƠNG!!
  <br><br>  **Đây Là Cuốn Sách Về...**
  <br><br> **⟐**  Làm sao để **đứng vững trong Kỷ nguyên 4.0** và **Hậu Đại dịch**?

  **⟐**  Làm sao để **giải phóng tiềm năng của những người trẻ có đam mê**?
  
  **⟐  Những ý tưởng và những chiến lược** mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?
`,
  leftButtonName: "Tìm hiểu thêm",
  leftButtonSrc: "",
  leftAppleSrc: "",
  leftGoogleSrc: "",
  leftWebSrc: "",
  leftTestimonial: ``,
  leftAuthor: "",
  leftAuthorImgSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628236747/Galatek.io%20Website/galatekgame-37-38-39-0000_crdalj.png",
  leftAlt: "Hinh anh Sach SOW",
};

const projectYou = {
  rightIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  rightTitle: "YOU X.0",
  rightDescription: `Bạn được sinh ra vào một ngày cụ thể vì một lý do và mục đích trên Trái đất này. Mỗi người trong chúng ta đều có một mục đích mà chúng ta cần phải tìm ra trước khi quá muộn. Bạn có thể đạt được sự vĩ đại và thực hiện vai trò của mình trong cuộc đời, miễn là bạn biết cách hoặc có một công cụ để làm được điều đó.
  <br><br> **Công Cụ YOU X.0 Sẽ Giúp Bạn..**
  <br><br> **⟐**  Tìm hiểu về những bí ẩn của các con số trong Ngày tháng năm sinh và Họ tên của Bạn để biết bạn thật sự là ai và sứ mệnh của bạn là gì. 

  **⟐**  Nhìn nhận thế giới xung quanh Bạn từ một góc độ khác và cho phép Bạn tập trung phát triển những mặt tích cực ở bản thân.
  <br><br> _**Việc hiểu được con người thực sự của bạn là điều cơ bản nhất để bắt đầu bước đi trên Hành Trình Làm Giàu X.0. Bạn cần biết bạn là ai và bạn có thể làm gì tốt nhất cho cuộc sống của bản thân, gia đình và xã hội.**_ `,
  rightButtonName: "Tìm hiểu thêm",
  rightButtonSrc: "",
  rightAppleSrc: "",
  rightGoogleSrc: "",
  rightWebSrc: "",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629429447/Galatek.io%20Website/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post-3_emlzak.png",
  rightAlt: "",
};

const finProSection = {
  mainTitle: "FIN X.0",
  mainDescription: `Cho dù bạn đang tiết kiệm cho kỳ nghỉ mơ ước, lên kế hoạch cho tài chính trong tương lai của mình hay chỉ đơn giản là mong muốn quản lý tốt tài chính của bản thân - Fin X.0 là dành cho bạn.`,
};
const fin = {
  leftTitle: "",
  leftDescription: ``,

  leftIconOne: Icon.GlobeAltIcon,
  leftIconOneTitle: "",
  leftIconOneDescription: ``,

  leftIconTwo: Icon.ScaleIcon,
  leftIconTwoTitle: "",
  leftIconTwoDescription: ``,

  leftIconThree: Icon.LightningBoltIcon,
  leftIconThreeTitle: "",
  leftIconThreeDescription: ``,

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
