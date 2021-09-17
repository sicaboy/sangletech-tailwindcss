import React from "react";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import AlternatingWithOptionalTestimonial from "../components/sections/feature-sections/alternating_with_optional_testimonial";
import AlternativeSideBySideWithVideo from "../components/AlternativeSideBySideWithVideo";
import GalleryOne from "../components/gallery/gallery-1";
import GalleryTwo from "../components/gallery/gallery-2";
import GalleryThree from "../components/gallery/gallery-1";
import MyAchievement from "../components/sections/feature-sections/with_feature_list";
import Logos from "../components/sections/logo-clouds/simple_with_heading_on_brand";
import Certificates from "../components/gallery/gallery-3";
import CoreValues from "../components/CoreValues";
import OurTeam from "../components/OurTeam";
import CompanyAchivement from "../components/CompanyAchivement";
import Features from "../components/sections/feature-sections/centered_2x2_grid";
import SocialConnect from "../components/sections/cta-sections/simple_center_branded";
import MyCompanies from "../components/sections/logo-clouds/simple_with_heading";
import * as Icon from "@heroicons/react/outline";
import Layout from "../components/Layout";

const hero = {
  caption: "Sang Lê Là Ai?",
  titleNormal: "Công Nghệ Bằng Cả Trái Tim",
  titleHighlight: "",
  description: `Sang hiện là CEO của Công ty Công nghệ Galatek & là Phó Hiệu trưởng của trường Cao đẳng Kĩ thuật & Thiết bị y tế Miền Nam (SPMET). Giống như bao người, bản thân Sang cũng đã từng phải nếm trải những thất bại cay đắng trước khi tạo dựng sự nghiệp như ngày hôm nay. Những kinh nghiệm “xương máu” đó đã dạy cho Sang vô số bài học đắt giá để đến bây giờ, Sang có thể giúp đỡ cho rất nhiều khởi nghiệp, các doanh nghiệp vừa và nhỏ ở Việt Nam lẫn nước ngoài. Năm 2019, Sang bắt đầu tiếp cận với học sinh tại Việt Nam để dẫn dắt, rèn luyện cho các bạn trẻ về cách sống và làm việc trong thời đại Công nghiệp 4.0.`,
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631863511/Galatek.io%20Website/Sangletech.com/maxresdefault_qiw40s.jpg",
  videoSrc: "https://www.youtube.com/watch?v=ocKYZdShDgA",
  videoCaption: `Câu chuyện về Khoảnh Khắc "Lộc Xác" đời Sang Lê`,
  alt: "Sang Le - Video KKCD",
};

const galleryOne = {
  title: "Tham Dự Các Chương Trình",
  description: ``,
  imgSmallOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615104/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_rz9buk.jpg",
  imgSmallOneAlt: "Hinh anh Sang Le KKCD 1",
  imgSmallTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615062/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0004_pcscsm.jpg",
  imgSmallTwoAlt: "Hinh anh Sang Le KKCD 2",
  imgSmallThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627895653/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_lzc8ui.jpg",
  imgSmallThreeAlt: "Hinh anh Sang Le Livestream 1",
  imgSmallFourSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627895653/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_zxqtld.jpg",
  imgSmallFourAlt: "Hinh anh Sang Le Livestream 2",
  imgLargeOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615063/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0005_m0oymm.jpg",
  imgLargeOneAlt: "Hinh anh Sang Le - KKCD 1",
  imgLargeTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627895653/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_ralwqh.jpg",
  imgLargeTwoAlt: "Hinh anh Sang Le - SGFM",
};

const galleryTwo = {
  title: "Sang Đi Học",
  description: `**Từ Các Công Ty Startup Công nghệ Top Thế Giới**`,
  imgOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0003_f6hiix.jpg",
  imgOneAlt: "Sang Le - Pinterest Company",

  imgTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_nqixhm.jpg",
  imgTwoAlt: "Sang Le - Salesforce Company",

  imgThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_qovql2.jpg",
  imgThreeAlt: "Sang Le - Google Company",

  imgFourSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_f9cckm.jpg",
  imgFourAlt: "Sang Le - Apple Company",

  imgFiveSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0005_wseuue.jpg",
  imgFiveAlt: "Sang Le - Slack Company",

  imgSixSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800780/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0006_csfqzp.jpg",
  imgSixAlt: "Sang Le - Zappos Company",

  imgSevenSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800780/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0004_sjazaq.jpg",
  imgSevenAlt: "Sang Le - Facebook Company",

  imgEightSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802863/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_xvpmd7.jpg",
  imgEightAlt: "Sang Le - We Work Company",

  imgNineSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802600/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_chihny.jpg",
  imgNineAlt: "Sang Le - Uber Company",
};

const galleryThree = {
  title: "Nơi Đã Sống & Làm Việc",
  description: ``,
  imgSmallOneSrc: "",
  imgSmallOneAlt: "",
  imgSmallTwoSrc: "",
  imgSmallTwoAlt: "",
  imgSmallThreeSrc: "",
  imgSmallThreeAlt: "",

  imgSmallFourSrc: "",
  imgSmallFourAlt: "",

  imgLargeOneSrc: "",
  imgLargeOneAlt: "",

  imgLargeTwoSrc: "",
  imgLargeTwoAlt: "",
};

const giaiDoanDauDoi = {
  leftIconName: (
    <Icon.BookOpenIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  leftTitle: "Giai Đoạn Đầu Đời",
  leftDescription: `**Một Chàng Trai Nghiện Game**
  <br><br> Nếu bạn nhìn vào Sang của thời điểm hiện tại, bạn sẽ không thể nghĩ được rằng trước đây, Sang cũng từng là một học sinh cá biệt, một “con nghiện” game chính hiệu, sống không có mục đích. Cho đến khi Sang 18 tuổi, một sự kiện khủng khiếp trong cuộc đời như muốn đẩy Sang đến gần với cái chết từ tầng 13 tại một khách sạn ở Malaysia. Bạn biết không, trải nghiệm cận tử đó dường như đã tạo ra một “chiến binh” trong Sang và đã khiến cuộc đời của Sang thay đổi hoàn toàn kể từ đó.
`,
  leftButtonName: "",
  leftButtonSrc: "",
  leftAppleSrc: "2",
  leftGoogleSrc: "2",
  leftWebSrc: "2",
  leftTestimonial: ``,
  leftAuthor: "",
  leftAuthorImgSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627896818/Galatek.io%20Website/1936102_139724759226_7973379_n_ahhfrx.jpg",
  leftAlt: "Hinh anh Sang Le - Giai Doan Dau Doi",
};

const giaoduc = {
  rightIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  rightTitle: "Giáo Dục",
  rightDescription: `**Không Gì Là Không Thể**
  <br></br> Sau sự kiện cận kề cái chết, Sang như được tái sinh một lần nữa. Sang bắt đầu hành trình du học của mình một cách nghiêm túc tại **3 quốc gia: Singapore, Hong Kong và Hoa Kỳ**. Và vì thế ngoài tiếng mẹ đẻ của mình, Sang có thể giao tiếp tốt bằng 2 thứ tiếng khác đó là: **tiếng Anh & tiếng Hoa**.<br></br> Nhưng trong lúc đang học tại nước ngoài, Sang bất ngờ nhận một cuộc gọi từ ba. Ba nói răng do khủng hoảng kinh tế toàn cầu năm 2008, nên tình hình kinh tế gia đình cũng gặp khó khăn và rất có thể Sang phải dừng lại việc học của mình bất cứ lúc nào! Sau cú điện thoại đó, Sang quyết định là Sang phải nỗ lực gấp trăm lần để gấp rút hoàn thành việc học của mình và lấy được **bằng cấp 3 Canada tại Hong Kong** (lớp 11 & 12) trong **9 tháng (thay vì 2 năm)** và nhận **bằng Đại học tại Mỹ** chỉ sau **2 năm 9 tháng (thay vì 4-5 năm)**.`,
  rightButtonName: "",
  rightButtonSrc: "",
  rightAppleSrc: "ss",
  rightGoogleSrc: "ss",
  rightWebSrc: "ss",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  rightAlt: "Hinh anh Sang Le - Giao Duc",
};

const hanhtrinh = {
  leftCaption: "Chương Trình Hành Trình X.0 của Sang Lê",
  leftTitleNormal: "Áp Dụng Công Nghệ Vào Cuộc Sống",
  leftTitleHighlight: "",
  leftDescription: `Với nhiều năm kinh nghiệm làm việc trong ngành công nghệ, Sang mong muốn tạo ra khoá học: Industrial X.0 – Đây là không gian dành cho CEO – những người chủ doanh nghiệp, các bạn học sinh trung học và sinh viên đại học nhằm trang bị tốt các kỹ năng cho họ và sẵn sàng bước vào thời đại Công nghiệp 4.0.`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631869650/Galatek.io%20Website/Sangletech.com/Screen_Shot_2021-09-17_at_4.07.11_PM_bd9qvw.png",
  leftVideoSrc: "https://www.youtube.com/watch?v=kLGPH0B9b6o",
  leftVideoCaption: `Thành Công Thời Đại 4.0`,
  leftAlt: "Sang Le - Video Thanh Cong Thoi Dai 4.0",
};

const spmet = {
  rightCaption: "Trường Cao Đẳng Kỹ Thuật Thiết Bị Y Tế Miền Nam",
  rightTitleNormal: "Công Nghệ & Giáo Dục Là Cuộc Sống Của Sang!",
  rightTitleHighlight: "",
  rightDescription: `Sang luôn tin vào giáo dục. **Trường Cao đẳng Kỹ thuật và Thiết bị y tế miền Nam (SPMET)** được Sang thành lập nhằm tạo ra những cơ hội mới trong ngành Y tế tại Việt Nam. Hàng ngàn sinh viên tại trường SPMET với 100% số lượng sinh viên đều có cơ hội nghề nghiệp phong phú và đạt được mức thu nhập cao sau khi các bạn ra trường.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631871209/Galatek.io%20Website/Sangletech.com/Screen_Shot_2021-09-17_at_4.33.14_PM_huehhz.png",
  rightVideoSrc: "https://www.youtube.com/watch?v=bPr2-DZk97E",
  rightVideoCaption: `Bạn có biết sự tồn tại của ngành học này với 99% sinh viên ra trường SẼ CÓ VIỆC LÀM?`,
  rightAlt: "Sang Le - Video SPMET",
};

const galatek = {
  leftCaption: "Công Ty Công Nghệ GALATEK",
  leftTitleNormal: "Đam mệ công nghệ từ nhỏ!",
  leftTitleHighlight: "",
  leftDescription: `Công nghệ luôn là niềm đam mê của Sang. Sang đã đTn Hồng Kông và thành lập Galatek vào năm 2015 nhằm mang đến những giải pháp thực tế về marketing và công nghệ cho rất nhiều công ty khởi nghiệp, những doanh nghiệp vừa và nhỏ.`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802599/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_vzdxhu.jpg",
  leftVideoSrc: "https://www.youtube.com/watch?v=ocKYZdShDgA",
  leftVideoCaption: `Câu chuyện "Lộc Xác" đời Sang Lê`,
  leftAlt: "Sang Le - Video KKCD",
};

const cafes = {
  rightCaption: "CafeS – Ươm Mầm Ý Tưởng",
  rightTitleNormal: "Vườn Ươm Khởi Nghiệp",
  rightTitleHighlight: "",
  rightDescription: `Năm 2019, Sang quyết định mở rộng kinh doanh sang Việt Nam. Với mong muốn mang đến một sân chơi cho các bạn trẻ vẫn đang ngồi trên ghế nhà trường, các doanh nhân đang khao khát sự thay đổi lớn và các cá nhân có ý chí vươn ra thế giới. CafeS được thành lập với sứ mệnh xây dựng một cộng đồng cùng chung tay vì một tương lai tốt đẹp hơn cho cộng đồng khởi nghiệp Việt Nam.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631871947/Galatek.io%20Website/Sangletech.com/Screen_Shot_2021-09-17_at_4.45.01_PM_zllsqy.png",
  rightVideoSrc: "https://www.youtube.com/watch?v=z1wyZ7_xn6A",
  rightVideoCaption: `CafeS Intro`,
  rightAlt: "Sang Le - Video CafeS",
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

const myAchivement = {
  caption: "Thanh Tựu",
  title: "Từ Sang Lê",
  description: ``,

  listOneTitle: "",
  listOneDescription: `Học, sống và làm việc tại Singapore, Hồng Kông, Mỹ và Trung Quốc.`,

  listTwoTitle: "",
  listTwoDescription: `Hoàn thành lớp 11-12 với tấm bằng Canada trong 9 tháng thay vì 2 năm.`,

  listThreeTitle: "",
  listThreeDescription: `Tốt nghiệp đại học Mỹ trong vòng 2 năm 9 tháng thay vì 4-5 năm.`,

  listFourTitle: "",
  listFourDescription: `Có thể nói tiếng Anh, tiếng Trung Quốc và tiếng Hồng Kông.`,

  listFiveTitle: "",
  listFiveDescription: `Đồng sáng lập và là CEO Công ty Công nghệ Galatek Hồng Kông và Việt Nam.`,

  listSixTitle: "",
  listSixDescription: `Đồng sáng lập và là Phó Hiệu Trưởng trường Cao đẳng Kỹ Thuật Thiết Bị Y Tế Miền Nam.`,

  listSevenTitle: "",
  listSevenDescription: `Nhà sáng lập trang báo CafeS.vn.`,

  listEightTitle: "",
  listEightDescription: `Đưa các giải pháp công nghệ và quản lý cho công ty khởi nghiệp, vừa và nhỏ trong nước và quốc tế.`,

  listNineTitle: "",
  listNineDescription: `Làm việc với các lập trình viên tầm cỡ thế giới trên nền tảng Topcoders.`,

  listTenTitle: "",
  listTenDescription: `Được Mentor là 1 triệu phú người Singapore huấn luyện từ năm 19 tuổi.`,

  listElevenTitle: "",
  listElevenDescription: `Đã từng làm việc và gặp mặt với nhiều triệu phú và ngay cả tỷ phú ở nước ngoài và trong nước.`,

  listTwelveTitle: "",
  listTwelveDescription: `Xuất hiện trên các kênh của đài Saigon FM, Đài Truyền Hình Bình Dương, Bắc Ninh, HTV9, Yan News, truyền thông Khang và VIVU TV.`,
};

const logos = {
  title: "",
  description: "",

  logoOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631872823/Galatek.io%20Website/Sangletech.com/20210322002340_Yantv_ehn2jn.png",
  logoOneAlt: "Yantv Logo",

  logoTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631872985/Galatek.io%20Website/Sangletech.com/HTV9__282016-nay_29_o1bdfl.webp",
  logoTwoAlt: "Htv9 Logo",

  logoThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873061/Galatek.io%20Website/Sangletech.com/69dda2def8ca1b5e9d8d1bc98d9d1e0f_uv1ylj.png",
  logoThreeAlt: "Kmedia Logo",

  logoFourSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873525/Galatek.io%20Website/Sangletech.com/10547129_1466047213649700_265444754095979044_o-removebg-preview_ubc7v9.png",
  logoFourAlt: "SaigonFm Logo",

  logoFiveSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873674/Galatek.io%20Website/Sangletech.com/unnamed-removebg-preview_qzjw11.png",
  logoFiveAlt: "Vivutv Logo",

  logoSixSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873719/Galatek.io%20Website/Sangletech.com/BTV_tw6qlw.png",
  logoSixAlt: "Btv Logo",

  logoSevenSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873777/Galatek.io%20Website/Sangletech.com/HTV7Logomoi_pmzlar.png",
  logoSevenAlt: "Htv7 Logo",
};

const certificates = {
  certificateOneImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627969581/Galatek.io%20Website/sangle-graduation-certificate0000.jpg_fxgjky.webp",
  certificateOneImgAlt: "Sang Le - Bang Cap 3",
  certificateOneTitle: "Bằng Cấp 3 của Canada",
  certificateOneDescription: ``,

  certificateTwoImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627969582/Galatek.io%20Website/sangle-graduation-certificate0001.jpg_mm9rpt.webp",
  certificateTwoImgAlt: "Sang Le - Bang Dai Hoc",
  certificateTwoTitle: "Bằng Đại học của Mỹ",
  certificateTwoDescription: ``,
};

const coreValue = {
  title: "Giá Trị Cốt Lõi",
  description: `*Từ Sang Lê & Đội ngũ*`,
  buttonName: false,

  listOneTitle: "Cải tiến nhỏ một cách liên tục.",
  listTwoTitle: "Tăng trưởng một cách bền vững.",
  listThreeTitle: "Luôn học hỏi và trao dồi thêm kinh nghiệm.",
  listFourTitle: "Hăng hái và đam mê trong công việc.",
  listFiveTitle: "Làm việc hiệu quả, sáng tạo và cởi mở.",
  listSixTitle: "Khách quan và trung thực trong giao tiếp.",
  listSevenTitle: "Đi tiên phong trong công việc.",
  listEightTitle: "Xây dựng một đội ngũ tích cực và có tinh thần gia đình.",
  listNineTitle: "Tiết kiệm nhưng hiệu quả.",
  listTenTitle: "Khiêm tốn.",
};

const teams = {
  title: "Các Chiến Binh Ngầu Nhất",
  description: `Đang đồng hành cùng Sang`,

  personOneImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719157/Galatek.io%20Website/galatek-qunhuang_w2sffp.jpg",
  personOneImgAlt: "Sang Le Teams - Qun",
  personOneName: "Huang Qun",
  personOnePosition: "Co-founder & CTO",
  personOneDescription: `Tốt nghiệp khoa học vi tính tại Đại Học Trung Sơn, Quảng Châu, Trung Quốc.
  <br></br>Đã làm việc tại **Tập đoàn Tencent**
  <br></br>Đạt giải 4 cuộc thi **” TopCoder Open Software Component Design World Final”** năm 2008.
  <br></br>Đạt giải **“Best Project Manager Award”** 4 năm liên tục ( 2013-2016) trong cuộc thi **“TopCoder Open World Finals”.**`,

  personTwoImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719155/Galatek.io%20Website/galatek-semi_s3pznx.jpg",
  personTwoImgAlt: "Sang Le Teams - Semi",
  personTwoName: "Xu JieZhou",
  personTwoPosition: "Giám Đốc Phát Triển",
  personTwoDescription: `Tốt nghiệp khoa học vi tính tại Đại Học Trung Sơn, Quảng Châu, Trung Quốc. 
  <br></br>Đã làm việc tại **Tập đoàn Tencent, Ngân hàng HSBC** và **Tập đoàn GF Holdings**.
  <br></br>**Kĩ sư thiết kế phần mềm hàng đầu** trên nền tảng TopCoder.`,

  personThreeImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719156/Galatek.io%20Website/galatek-kk_u2j8wo.jpg",
  personThreeImgAlt: "Sang Le Teams - KK",
  personThreeName: "Wang JingGang",
  personThreePosition: "Giám Đốc Phát Triển",
  personThreeDescription: `Tốt nghiệp Thạc Sĩ Toán học Đại Học Trung Sơn, Quảng Châu, Trung Quốc.
  <br></br>Đã làm việc tại **Tập đoàn Baidu** và **Tencent**.
  <br></br>Đoạt **huy chương vàng** cuộc thi ACM-ICPC 2005 khu vực châu Á và thế giới.
  <br></br>**Đứng thứ 2** tại giải **“TopCoder Open Development World Finals”** trong hai năm 2015 và 2016.`,

  personFourImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719155/Galatek.io%20Website/galatek-team0005_dknmvz.jpg",
  personFourImgAlt: "Sang Le Teams - Yoanne",
  personFourName: "Yoanne Lau",
  personFourPosition: "Co-Founder & COO",
  personFourDescription: `Tốt nghiệp đại học North Texas – ngành Xã Hội Học.
  <br></br>**Tổng giám đốc khu vực Châu Á** Hiệp Hội Hàn Khoan của Mỹ ( American Welding Society): kiểm soát tiêu chuẩn hàn khoan công nghiệp, huấn luyện và cấp chứng chỉ cho thị trường châu Á.
  <br></br>**Tổng giám đốc khu vực Châu Á** của World Engineering Xchange (Mỹ): phát triển thông tin kĩ thuật, ứng dụng và cấp chứng chỉ.
  <br></br>**Tổng giám đốc khu vực Châu Á** của Informartion Handling Services ( Mỹ): quản lý cơ sở dữ liệu và hệ thống kỹ thuật toàn cầu.`,

  personFiveImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625720704/Galatek.io%20Website/MicrosoftTeams-image-e1584716928497-1024x925-1.jpg_qls2eo.webp",
  personFiveImgAlt: "Sang Le Teams - Carmen",
  personFiveName: "Carmen Wong",
  personFivePosition: "PR & Social Marketing",
  personFiveDescription: `Tốt nghiệp Trường Quản trị Khách sạn Quốc tế Les Roches.
  <br></br>Sống tại thành phố phát triển nhất Châu Á với nền giáo dục hàng đầu thế giới về ngành khách sạn, điều đó giúp Carmen phát huy khả năng của mình trong việc kết nối và chăm sóc khách hàng quốc tế. `,

  personSixImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625720703/Galatek.io%20Website/IMG_4430-1.jpg_qtzcgh.webp",
  personSixImgAlt: "Sang Le Teams - Yunnie",
  personSixName: "Yunnie Nguyen",
  personSixPosition: "CEO Assistant",
  personSixDescription: `Với nền tảng từ rất sớm trong vai trò MC truyền hình (HTV7, HTV9, TodayTV,...) và trên sân khấu, điều đó giúp Yunnie phát triển những kỹ năng tuyệt vời trong việc chăm sóc khách hàng của chúng tôi.`,
};

const companyAchivement = {
  title: "Thành Tựu",
  description: `**Từ Đội ngũ**`,
  imgOneSrc: "",
  imgTwoSrc: "",
  imgThreeSrc: "",

  listOneIconSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626079598/Galatek.io%20Website/3D_Illustration-Product_Development-Skin-01_f6gpbd.png",
  listOneTitle: "> 250 Dự Án",
  listOneDescription: `đã hoàn thành Đa Quốc Gia`,

  listTwoIconSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626079584/Galatek.io%20Website/3D_Illustration-Collaborative-Skin-01_hdnobk.png",
  listTwoTitle: "> 10 Giải Thưởng",
  listTwoDescription: `Trao Tặng Bởi TopCoders (nền tảng lập trình và thiết kế viên top thế giới)`,

  listThreeIconSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626079608/Galatek.io%20Website/3D_Illustration-Vision_Mission_Skin-01_lnbcgi.png",
  listThreeTitle: "> 13 Năm",
  listThreeDescription: `Kinh Nghiệm`,
};

const features = {
  caption: "",
  title: "Bảo Đảm",
  description: `**Chất lượng dịch vụ`,

  listOneIconSrc: "",
  listOneTitle: "Dịch Vụ Khách Hàng.",
  listOneDescription: `Giá trị cốt lõi của Sang và đội ngũ là mang lại cho bạn sự hài lòng tuyệt đối. Bạn sẽ cảm thấy hoàn toàn yên tâm trong suốt quá trình làm việc.`,

  listTwoIconSrc: "",
  listTwoTitle: `Chi Phí "Hỗ Trợ Đến 50% Mùa Covid-19".`,
  listTwoDescription: `Hầu hết các thành viên trong đội ngũ của Sang đều đang ở Châu Á. Vì vậy bạn có thể tận hưởng một chi phí hợp lý với chất lượng dịch vụ.`,

  listThreeIconSrc: "",
  listThreeTitle: "Đội Ngũ Chuyên Nghiệp.",
  listThreeDescription: `Đội ngũ chuyên nghiệp trên nhiều lĩnh vực từ khắp nơi trên thế giới để đảm bảo doanh nghiệp của bạn được chăm sóc tốt và giao đúng hạn.`,

  listFourIconSrc: "",
  listFourTitle: "Bảo Mật Thông Tin.",
  listFourDescription: `Ý tưởng và thông tin kinh doanh của bạn sẽ được bảo mật an toàn.`,

  listFiveIconSrc: "Thanh Toán Linh Hoạt.",
  listFiveTitle: "",
  listFiveDescription: ``,

  listSixIconSrc: "",
  listSixTitle: "Kinh Nghiệm.",
  listSixDescription: `Kinh nghiệm làm việc phong phú với hàng trăm doanh nghiệp vừa & nhỏ cả trong lẫn ngoài nước. Sang và đội ngũ sẽ mang đến cho bạn những trải nghiệm dịch vụ chuyên nghiệp nhất.`,
};

function About() {
  return (
    <Layout>
      <Hero {...hero} />
      <AlternatingWithOptionalTestimonial {...giaiDoanDauDoi} {...giaoduc} />
      <GalleryOne {...galleryOne} />
      <GalleryTwo {...galleryTwo} />
      <GalleryThree {...galleryThree} />
      <AlternativeSideBySideWithVideo {...hanhtrinh} {...spmet} />
      <AlternativeSideBySideWithVideo {...galatek} {...cafes} />
      <MyAchievement {...myAchivement} />
      <Logos {...logos} />
      <Certificates {...certificates} />
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
