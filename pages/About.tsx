import React from "react";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import AlternatingWithOptionalTestimonial from "../components/sections/feature-sections/alternating_with_optional_testimonial";
import AlternativeSideBySideWithImages from "../components/sections/feature-sections/alternative_side_by_side_with_images";
import GalleryOne from "../components/gallery/gallery-1";
import GalleryTwo from "../components/gallery/gallery-2";
import GalleryThree from "../components/gallery/gallery-1";
import MyAchievement from "../components/sections/feature-sections/with_feature_list";
import Logos from "../components/sections/logo-clouds/simple_with_heading_on_brand.jsx";
import Certificates from "../components/gallery/gallery-3";
import CoreValues from "../components/CoreValues";
import OurTeam from "../components/OurTeam";
import CompanyAchivement from "../components/CompanyAchivement";
import Features from "../components/sections/feature-sections/centered_2x2_grid.jsx";
import SocialConnect from "../components/sections/cta-sections/simple_center_branded";
import MyCompanies from "../components/sections/logo-clouds/simple_with_heading";
import * as Icon from "@heroicons/react/outline";
import Layout from "../components/Layout";

const giaiDoanDauDoi = {
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
  leftAppleSrc: "2",
  leftGoogleSrc: "2",
  leftWebSrc: "2",
  leftTestimonial: ``,
  leftAuthor: "",
  leftAuthorImgSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628236747/Galatek.io%20Website/galatekgame-37-38-39-0000_crdalj.png",
  leftAlt: "Hinh anh Sach SOW",
};

const giaoduc = {
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
  rightAppleSrc: "ss",
  rightGoogleSrc: "ss",
  rightWebSrc: "ss",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629429447/Galatek.io%20Website/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post-3_emlzak.png",
  rightAlt: "",
};

const hanhtrinh = {
  leftTitle: "FIN X.0",
  leftDescription: `Cho dù bạn đang tiết kiệm cho kỳ nghỉ mơ ước, lên kế hoạch cho tài chính trong tương lai của mình hay chỉ đơn giản là mong muốn quản lý tốt tài chính của bản thân - Fin X.0 là dành cho bạn.`,

  leftIconOne: Icon.GlobeAltIcon,
  leftIconOneTitle: "Lập kế hoạch",
  leftIconOneDescription: `Suy nghĩ lớn để bạn có thể đặt ra các mục tiêu thực tế, lập kế hoạch, theo dõi tiến trình của mình từng ngày và bắt tay vào hành động cho đến khi ước mơ của bạn trở thành hiện thực.`,

  leftIconTwo: Icon.ScaleIcon,
  leftIconTwoTitle: "Thực hiện ước mơ",
  leftIconTwoDescription: `Phát triển một con đường rõ ràng để đạt được ước mơ phù hợp với giá trị của bản thân, sử dụng dữ liệu thực tế từ cuộc sống của bạn (không chỉ là hy vọng và ước mơ).`,

  leftIconThree: Icon.LightningBoltIcon,
  leftIconThreeTitle: "Xây dựng sự giàu có",
  leftIconThreeDescription: `Tập trung vào việc tạo ra các mục tiêu và xây dựng sự giàu có thông qua sự đơn giản và minh bạch của công cụ này.`,

  leftButtonName: "",
  leftButtonSrc: "",
  leftAppleSrc: "",
  leftGoogleSrc: "",
  leftWebSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629428694/Galatek.io%20Website/Sangletech.com/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post_wfssti.png",
  leftAlt: "",
};

const spmet = {
  rightIconOne: "",
  rightIconOneTitle: "Bạn Có Biết?",
  rightIconOneDescription: `Pro X.0 là chuương trình được trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê và Galatek`,

  rightIconTwo: "",
  rightIconTwoTitle: "Pro X.0 Là Gì?",
  rightIconTwoDescription: `**PRO X.0** là 1 nền tảng học trực tuyến mới đầy thú vị được tạo ra bởi Sang Lê. Với các chương trình giảng dạy từ phát triển cá nhân đến kinh doanh online, **giúp bạn bước đi tự tin trong thời đại 4.0**.`,

  rightIconThree: "",
  rightIconThreeTitle: "Vừa Học Vừa Chơi",
  rightIconThreeDescription: `Tất cả đều được cung cấp trên 1 nền tảng học tập trực tuyến mang tính giải trí, học cùng 1 cộng đồng và hành động nhỏ mỗi ngày để **tạo ra những kết quả mới cho bản thân và công việc kinh doanh của bạn** theo những cách mà chương trình học truyền thống không thể làm được.`,

  rightTitle: "PRO X.0",
  rightDescription: `KHÁM PHÁ NGAY ỨNG DỤNG HỌC TRỰC TUYẾN 4.0`,
  rightButtonName: "",
  rightButtonSrc: "",
  rightAppleSrc: "",
  rightGoogleSrc: "",
  rightWebSrc: "",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085141/Galatek.io%20Website/3D-Freelancers-illustration0023_srsafb.png",
  rightAlt: "",
};

const galatek = {
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
  leftAppleSrc: "2",
  leftGoogleSrc: "2",
  leftWebSrc: "2",
  leftTestimonial: ``,
  leftAuthor: "",
  leftAuthorImgSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628236747/Galatek.io%20Website/galatekgame-37-38-39-0000_crdalj.png",
  leftAlt: "Hinh anh Sach SOW",
};

const cafes = {
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
  rightAppleSrc: "ss",
  rightGoogleSrc: "ss",
  rightWebSrc: "ss",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629429447/Galatek.io%20Website/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post-3_emlzak.png",
  rightAlt: "",
};

const social = {
  titleMain: "Kết nối",
  titleSecondary: "Hãy kết nối ngay với Sang!",
  description: `☞ Click để đăng ký tham gia miễn phí cùng hàng ngàn người theo dõi khác ngay trên Facebook Messenger. 
  <br></br>☞ Bạn sẽ nhận các thông tin và bí quyết từ Sang mỗi tuần để giúp bạn bước đi tự tin trên hành trình 4.0!`,

  buttonFacebookLink: "https://www.facebook.com/sangletech/",
  buttonYoutubeLink: "http://youtube.sangletech.com",
  buttonLinkedinLink: "http://linkedin.sangletech.com",
  buttonInstagramLink: "http://instagram.sangletech.com",
};

const company = {
  title: "Mảng Kinh Doanh",

  logoOneName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  logoOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626171786/Galatek.io%20Website/updated-galatek-logo-300x101_ajkugi.png",

  logoOneAlt: "",

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
function About() {
  return (
    <Layout>
      <Hero />
      <AlternatingWithOptionalTestimonial {...giaiDoanDauDoi} {...giaoduc} />
      <GalleryOne />
      <GalleryTwo />
      <GalleryThree />
      <AlternativeSideBySideWithImages {...hanhtrinh} {...spmet} />
      <AlternatingWithOptionalTestimonial {...galatek} {...cafes} />
      <MyAchievement />
      <Logos />
      <Certificates />
      <CoreValues />
      <OurTeam />
      <CompanyAchivement />
      <Features />
      <SocialConnect {...social} />
      <MyCompanies {...company} />
    </Layout>
  );
}

export default About;
