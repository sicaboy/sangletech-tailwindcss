import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import AlternatingWithOptionalTestimonial from "../components/sections/feature-sections/alternating_with_optional_testimonial";
import AlternativeSideBySideWithImages from "../components/sections/feature-sections/alternative_side_by_side_with_images";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";

import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import SimpleCenterBranded from "../components/sections/cta-sections/simple_center_branded";
import SimpleWithHeading from "../components/sections/logo-clouds/simple_with_heading";
import * as Icon from "@heroicons/react/outline";
import { getAllPosts } from "../utils/api";
import Post from "../types/post";

// import Blog from "../components/post/3_column_cards";

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

type Props = {
  allPosts: Post[];
};

const hero = {
  titleHighlight: "VƯƠN TẦM BẢN THÂN",
  titleNormal: "Sang Le Tech",
  description: `Giúp Bạn Bước Đi Tự Tin Trên **Hành Trình 4.0**`,
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
  videoSrc: "#",
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
  rightAppleSrc: "ss",
  rightGoogleSrc: "ss",
  rightWebSrc: "ss",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629429447/Galatek.io%20Website/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post-3_emlzak.png",
  rightAlt: "",
};

const fin = {
  //TODO: Add a button "Tìm Hiểu Thêm"
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

  leftButtonName: "Tìm Hiểu Thêm",
  leftButtonSrc: "",
  leftAppleSrc: "",
  leftGoogleSrc: "",
  leftWebSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629428694/Galatek.io%20Website/Sangletech.com/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post_wfssti.png",
  leftAlt: "",
};

const pro = {
  //TODO: Add a button "Tìm Hiểu Thêm"
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

const startup = {
  title: "Startup X.0",
  description: `Sau hơn 10 năm hoạt động kinh doanh ở nhiều lĩnh vực khác nhau, tổn thất hàng trăm ngàn đô la và nhiều đêm mất ngủ, Sang Lê đã học được vô số bài học đắt giá và đưa vào chương trình Startup X.0 để có thể giúp bạn **XÂY DỰNG ƯỚC MƠ KHỞI NGHIỆP**, và bước trên **CON ĐƯỜNG NGẮN NHẤT đến THÀNH CÔNG** trong thời đại 4.0 này.`,
  buttonName: "Tìm Hiểu Ngay",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625651836/Galatek.io%20Website/IMG_8057-1024x682_fa7z6z.jpg",
  alt: "Hinh anh Sang va Royal Wedding",
};

const youtube = {
  title: "Video Youtube Nổi Bật",
  description: `Nếu bạn muốn đi nhanh thì đi một mình, nếu bạn muốn đi xa thì hãy đi cùng nhau!`,
  buttonName: "Theo Dõi Ngay",
  buttonLink: "",

  videoOneThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631780175/Galatek.io%20Website/Sangletech.com/maxresdefault_cztyhf.jpg",
  videoOneLink: "https://www.youtube.com/watch?v=BmY-ye6j12k",
  videoOneAlt: "Sang Le Tech - 3 ly do ban nen but pha ngay thoi diem nay",

  videoTwoThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631780254/Galatek.io%20Website/Sangletech.com/maxresdefault_r6poir.jpg",
  videoTwoLink: "https://www.youtube.com/watch?v=TnJErB8dwA4",
  videoTwoAlt: "Sang Le Tech - 3 buoc giup ban ban san pham online thanh cong",

  videoThreeThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631779915/Galatek.io%20Website/Sangletech.com/Artboard_2_copy-100_e6ruzq.jpg",
  videoThreeLink: "https://www.youtube.com/watch?v=fDhBKfIsUx4",
  videoThreeAlt: "Sang Le Tech - Lam sao xay dung pheu ban hang de ra tien",
};

const blog = {
  title: "Sang Le Blog",
  description: `Đây là nơi Sang muốn chia sẻ những câu chuyện, kinh nghiệm mà Sang có được trên Hành trình làm giàu X.0`,
  buttonIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  buttonName: "Đọc thêm",

  blogOneThumbnail: "",
  blogOneLink: "",
  blogOneCategory: "Startup",
  blogOneTitle: "Làm thế nào thiết kế Website bán được hàng?",
  blogOneDescription: `"Hầu hết các doanh nghiệp cho rằng Website chỉ để làm cảnh và ngốn rất nhiều chi phí. Nhưng bạn biết không, với một website được xây dựng hiệu quả thì khách hàng sẽ xuống tiền và đặt hàng nhanh hơn bất cứ nền tảng nào khác."`,
  blogOneAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogOneAuthorName: "Sang Le",
  blogOneReadingTime: "5 min",

  blogTwoThumbnail: "",
  blogTwoLink: "",
  blogTwoCategory: "Marketing",
  blogTwoTitle: "Có phải THƯƠNG HIỆU chỉ đơn giản là LOGO?",
  blogTwoDescription: `"Bạn có biết những thương hiệu "khổng lồ" trên thế giới như Apple, Google, Starbucks,.. đã phải liên tục "lột xác" bằng cách thay đổi Logo để tồn tại?"`,
  blogTwoAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogTwoAuthorName: "Sang Le",
  blogTwoReadingTime: "2 min",

  blogThreeThumbnail: "",
  blogThreeLink: "",
  blogThreeCategory: "Marketing",
  blogThreeTitle: "Quảng cáo Facebook & Google đã đủ chưa?",
  blogThreeDescription: `"Mặc dù online marketing bắt đầu phát triển từ những năm 1995, khi các công ty công nghệ bắt đầu bùng nổ trong đó có Ebay, Amazon, Google và nhiều công ty công nghệ khác nữa... Nhưng khi Sang làm việc với các chủ doanh nghiệp, thì họ hầu như chưa nắm rõ định nghĩa về Online Marketing là gì hoặc nói nôm na là Quảng cáo Online."`,
  blogThreeAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogThreeAuthorName: "Sang Le",
  blogThreeReadingTime: "4 min",
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

function Home({ allPosts }: Props) {
  const test = {
    title: "test",
    description: `testing`,
    allPosts: allPosts,
  };

  return (
    <>
      <HeroWithAngelImageOnRight {...hero} />
      <BrandPanelWithAppScreenShot {...jow} />
      <AlternatingWithOptionalTestimonial {...sow} {...projectYou} />
      <AlternativeSideBySideWithImages {...fin} {...pro} />
      <BrandPanelWithOverlappingImage {...startup} />
      <ThreeColumnCards {...blog} />
      {/* <Blog {...test} /> */}
      <SimpleCenterBranded {...social} />
      <SimpleWithHeading {...company} />
    </>
  );
}

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  console.log(`allPosts: ${JSON.stringify(allPosts)}`);

  return {
    props: { allPosts },
  };
};
