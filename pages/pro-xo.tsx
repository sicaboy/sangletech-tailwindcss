import React from "react";
import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import Layout from "../components/layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import * as Icon from "@heroicons/react/outline";

const hero = {
  //TODO: Add buttonHighlightSrc to scroll down to the courses below
  titleHighlight: "PRO X.0",
  titleNormal: "Ứng Dụng Học Trực Tuyến 4.0",
  description: `**Trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê**`,
  buttonNormal: "Tìm Hiểu Thêm",
  buttonHighlight: "Xem Khoá Học",
  buttonNormalSrc: "#learn-more",
  buttonHighlightSrc: "",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085137/Galatek.io%20Website/3D-Freelancers-illustration0005_zjyclx.png",
  alt: "Hinh anh minh hoa Pro X.0 1",
};

const textOne = {
  leftCaption: "THỜI ĐẠI KỸ NĂNG",
  leftTitle: "Tại sao bạn phải bứt phá ngay thời điểm này?",
  leftDescription: `Nếu bạn đã xem qua **Hành Trình Làm Giàu X.0** của Sang, chắc chắn bạn đã hiểu được rằng: Thời đại 4.0 là **THỜI ĐẠI CỦA KỸ NĂNG**! 
  <br></br>Nếu bạn có trong tay những kỹ năng mà công ty nào cũng cần trong thời đại này, liệu bạn có là một trong những người bị bỏ lại phía sau? Chắc chắn là không! Khi quá nhiều người đã bị bỏ lại, thì người giỏi sẽ được ở lại. **Thậm chí, bạn không phải phụ thuộc vào bất cứ công ty nào, hoàn toàn làm chủ thời gian và tài chính của bản thân.**
  <br></br>Không ai sinh ra đã biết lập trình hay viết lách. Đã gọi là “kỹ năng” thì bạn hoàn toàn có thể học được. **Khi những kỹ năng này cho phép bạn tự do tài chính, bạn có thể tự do theo đuổi đam mê!**`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085142/Galatek.io%20Website/3D-Freelancers-illustration0027_gwtfhq.png",
  leftAlt: "Hinh anh minh hoa Proxo 2",
};

const textTwo = {
  rightCaption: "SANG LE PROGRAM",
  rightTitle: "PRO X.0 là gì?",
  rightDescription: `**PRO X.0** là 1 nền tảng học trực tuyến mới đầy thú vị được tạo ra bởi Sang Lê. Với các chương trình giảng dạy từ phát triển cá nhân đến kinh doanh online, giúp bạn **bước đi tự tin trong thời đại 4.0**. 
  <br></br>Tất cả đều được cung cấp trên một nền tảng học tập trực tuyến mang tính giải trí, học cùng một cộng đồng và hành động nhỏ mỗi ngày để **tạo ra những kết quả mới cho bản thân và công việc kinh doanh của bạn** theo những cách mà chương trình học truyền thống không thể làm được.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085142/Galatek.io%20Website/3D-Freelancers-illustration0026_axgh6x.png",
  rightAlt: "Hinh anh minh hoa Proxo 3",
};

const coursesOne = {
  title: "KHOÁ HỌC PRO X.0",
  description: `Sau hơn 10 năm làm việc với các doanh nghiệp lớn nhỏ cũng như nhiều khởi nghiệp trong và ngoài nước, Sang luôn mong muốn chia sẻ lại cho bạn tất cả những kinh nghiệm mà Sang có được thông qua **PRO X.0** để giúp bạn **nắm vững những Kỹ năng cần thiết trong thời đại 4.0 và tự tin đứng vững trên chính đôi chân của mình!**`,
  buttonIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  buttonName: "",

  blogOneThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632471036/Galatek.io%20Website/Sangletech.com/1_m3tlvj.jpg",
  blogOneLink: "/retargeting-course",
  blogOneCategory: "KHOÁ HỌC: QUẢNG CÁO RETARGETING",
  blogOneTitle:
    "Nhắm Lại Khách Hàng Mục Tiêu Của Bạn Bằng Quảng Cáo Retargeting",
  blogOneDescription: `Bạn sẽ học được gì từ khoá học này?
    <br></br>⟐  Làm thế nào để **đưa những khách truy cập trang web đã rời đi quay lại trang web của bạn** vào đúng thời điểm và với đúng thông điệp?
    <br></br>⟐  **Quảng cáo Retargeting là gì? Nó hoạt động như thế nào?**
    <br></br>⟐  Làm thế nào **xây dựng & phát triển thành công một chiến dịch quảng cáo Retargeting** cho doanh nghiệp của Bạn?`,
  blogOneAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogOneAuthorName: "Sang Le",
  blogOneReadingTime: "",

  blogTwoThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625651836/Galatek.io%20Website/IMG_8057-1024x682_fa7z6z.jpg",
  blogTwoLink: "/startupxo-course",
  blogTwoCategory: "KHOÁ HỌC: STARTUP X.0",
  blogTwoTitle:
    "7 Tuần Xây Dựng Khởi Nghiệp Của Bạn Từ A-Z & Marketing Ra Thị Trường",
  blogTwoDescription: `Sau hơn 10 năm hoạt động kinh doanh ở nhiều lĩnh vực khác nhau, tổn thất hàng trăm ngàn đô la và nhiều đêm mất ngủ, Sang đã học được vô số bài học đắt giá để có thể giúp **XÂY DỰNG ƯỚC MƠ KHỞI NGHIỆP của bạn, và bước trên CON ĐƯỜNG NGẮN NHẤT đi đến thành công trong thời đại 4.0**!`,
  blogTwoAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogTwoAuthorName: "Sang Le",
  blogTwoReadingTime: "",

  blogThreeThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629366557/Galatek.io%20Website/galatekgame-37-38-39-0000_tskv95.png",
  blogThreeLink: "/website-course",
  blogThreeCategory: "KHOÁ HỌC: XÂY DỰNG WEBSITE BẰNG WORDPRESS",
  blogThreeTitle:
    "Thiết Kế & Xây Dựng Website Bằng Wordpress Dành Cho Người Mới Bắt Đầu",
  blogThreeDescription: `Bạn có một ý tưởng kinh doanh tuyệt vời?
    <br></br>Bạn đang băn khoăn không biết làm thế nào để biến ý tưởng kinh doanh online của mình thành hiện thực?
    <br></br>**Nếu vậy, khóa học này là dành cho bạn!**`,
  blogThreeAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogThreeAuthorName: "Sang Le",
  blogThreeReadingTime: "",
};

const coursesTwo = {
  title: "",
  description: ``,
  buttonIconName: (
    <Icon.InboxInIcon className="w-6 h-6 text-white" aria-hidden="true" />
  ),
  buttonName: "",

  blogOneThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632479964/Galatek.io%20Website/CHIENBINHX0t.jpg_jk8wja.jpg",
  blogOneLink: "/chienbinhxo-course",
  blogOneCategory: "CHƯƠNG TRÌNH: CHIẾN BINH X.0",
  blogOneTitle:
    "Trở Thành Một Chiến Binh X.0 Bước Đi Tự Tin Trên Hành Trình 4.0",
  blogOneDescription: `**Chương trình Chiến Binh X.0** là tất cả những cách thức mà Sang đã sử dụng để từ một tên nghiện game trở thành một người thành đạt như ngày hôm nay – chỉ có thể được định nghĩa bằng 4 từ đơn giản:<br></br>**Tinh Thần Chiến Binh!**
    <br></br>Chỉ cần 1 vài tuần ngắn ngủi với các thói quen tích cực hằng ngày, Sang Lê sẽ **đánh thức “thiên tài” bên trong bạn**, đồng thời giúp bạn **“xây dựng” lại con người mà bạn thật sự muốn tạo ra trong sự nghiệp và cuộc sống của mình**.`,
  blogOneAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogOneAuthorName: "Sang Le",
  blogOneReadingTime: "",

  blogTwoThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632385535/Galatek.io%20Website/IMG_4434_qpajd4.jpg",
  blogTwoLink: "/basic-spm-course",
  blogTwoCategory: "KHOÁ HỌC: SPM - Simple Planning Method",
  blogTwoTitle: "SPM - Phương Pháp Lên Kế Hoạch Đơn Giản (Level: Cơ Bản)",
  blogTwoDescription: `Bạn học được gì từ khoá học này?
    <br></br>⟐  Khám phá cách để bạn có thể **làm việc hiệu quả hơn, có tổ chức và tập trung hơn** với Notion.
    <br></br>⟐  **Cách xây dựng các nhiệm vụ, thói quen, dự án và mục tiêu cuộc sống cá nhân và công việc của bạn** với Phương pháp Lên kế hoạch Đơn giản được Sang xây dựng riêng cho bạn trên Notion.`,
  blogTwoAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogTwoAuthorName: "Sang Le",
  blogTwoReadingTime: "",

  blogThreeThumbnail:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632388562/Galatek.io%20Website/IMG_6519_1_dd5iaq.jpg",
  blogThreeLink: "/basic-sales-funnel",
  blogThreeCategory: "KHOÁ HỌC: XÂY DỰNG PHỄU MARKETING",
  blogThreeTitle:
    "Thiết Kế & Xây Dựng Phễu Marketing Đẻ Ra Tiền (Level: Cơ Bản)",
  blogThreeDescription: `Trong khoá học này, Sang sẽ **"bật mí những bí mật"** mà Sang đã nghiên cứu, học hỏi và áp dụng thành công cho doanh nghiệp của mình từ các Chuyên gia Marketing nổi tiếng thế giới và bạn có thể áp dụng ngay vào việc kinh doanh online của mình!`,
  blogThreeAuthorImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625719158/Galatek.io%20Website/sangle-profilePic_k2xxkw.jpg",
  blogThreeAuthorName: "Sang Le",
  blogThreeReadingTime: "",
};

const textFinxo = {
  titleFirst: "Đã Đến Lúc Bắt Tay Vào Hành Động",
  titleSecond: "Lên Kế Hoạch & Kiểm Soát Tài Chính",
  description: `Người Eskimo có câu: **"Bão là thời gian thích hợp để đi bắt cá"**. Trong tình trạng mọi hoạt động trên thế giới dường như đều đóng băng do COVID, đây là lúc bạn rèn luyện bản thân để bứt phá. Hãy tranh thủ thời gian này để học và phát triển các kỹ năng. Hãy cụ thể hóa những mục tiêu để bạn có thể dễ dàng đạt được chúng hơn. Khi mọi thứ bình thường trở lại, bạn sẽ thấy, bạn đã đi xa hơn một đoạn rất dài so với các đối thủ của mình.
  <br></br>**Để hỗ trợ bạn thiết lập mục tiêu, cụ thể hóa mục tiêu và review mỗi ngày, Sang đã phát triển một công cụ tài chính có tên là Financial Calculator. Công cụ này sẽ đồng hành cùng bạn trên chặng đường chinh phục mục tiêu. Sang đã hướng dẫn nhiều người thực hiện theo công thức và ai cũng gặt hái thành công.**`,
  buttonName: "Tìm Hiểu Thêm",
  buttonSrc: "/fin-xo",
  imgSrc: "/assets/thumbnail-glt-success.jpg",
  alt: "Video Sang Le & Galatek Success",
  videoSrc: "/posts/video-galatek-success",
};

const textBookxo = {
  title: "Tại sao cuốn sách của Sang được gọi là BÍ MẬT LÀM GIÀU X.0?",
  description: `**BẠN CÓ MUỐN ĐỌC THỬ SÁCH ĐIỆN TỬ ĐỘC QUYỀN TỪ SANG?**
    <br><br>⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch?
    <br><br>⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê?
    <br></br>⟐  Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?`,
  buttonName: "Tìm hiểu thêm về Sách",
  buttonSrc: "/book-xo",
  imgSrc:
    "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/c2a88c54-5779-493d-83ec-1d2d5429021f.jpg?w=240&f=webp",
  alt: "Hinh anh Book Cover",
};

function ProX0() {
  return (
    <Layout>
      <HeroWithAngelImageOnRight {...hero} />
      <div id="learn-more" />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <ThreeColumnCards {...coursesOne} />
      <ThreeColumnCards {...coursesTwo} />
      <BrandPanelWithAppScreenShot {...textFinxo} />
      <BrandPanelWithOverlappingImage {...textBookxo} />
    </Layout>
  );
}

export default ProX0;
