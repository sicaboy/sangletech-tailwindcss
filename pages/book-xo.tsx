import React from "react";
import Layout from "../components/layout";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import AlternativeSideBySideWithImages from "../components/sections/feature-sections/alternative_side_by_side_with_images";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import * as Icon from "@heroicons/react/outline";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";

const hero = {
  caption: "BÍ MẬT LÀM GIÀU X.0",
  titleHighlight: "Sách Điện Tử Độc Quyền ",
  titleNormal: " từ Sang Lê",
  description: `**ĐÂY LÀ CUỐN SÁCH VỀ…**
  <br></br>***⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch.*** Xuất thân là dân công nghệ, Sang hiểu rõ những xu hướng công nghệ hiện tại và có thể phần nào phán đoán những xu thế của tương lai. Khi ai cũng nói về 4.0 và sự đổ bộ đáng sợ của các công nghệ mới, Sang sẽ cho bạn thấy thực sự thì 4.0 là gì và giúp bạn vững vàng trong kỷ nguyên này. Khi mọi người hoảng loạn vì sự tàn khốc của Đại dịch, Sang sẽ chỉ cho bạn thấy cơ hội mà bạn có thể nắm bắt trong chính cơn khủng hoảng đó.
  <br></br>***⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê.*** Vì Sang cũng từng là người bị “mắc kẹt” như bạn, cũng từng không biết bước tiếp theo mình cần làm là gì, nên Sang hiểu rất rõ tâm trạng của bạn hiện tại. Vì Sang đã thành công đi qua giai đoạn loay hoay tìm hướng đi cho cuộc đời mình, nên Sang hiểu rất rõ hiện tại bạn đang cần gì.
  <br></br>***⟐  Những ý tưởng và những chiến lược*** mà Sang rút ra từ những doanh nhân tiếng tăm nhất thế giới. Không có bài học nào trong cuốn sách này mà Sang chưa áp dụng vào thực tế đời sống cũng như công việc.`,
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632210115/Galatek.io%20Website/Sangletech.com/Untitled_design-4_sjr9wc.jpg",
  videoSrc: "/posts/video-book-xo",
  videoCaption: `3 điều thú vị BẠN CHƯA BIẾT về Cuốn sách "BÍ MẬT LÀM GIÀU X.0" của Sang Le`,
  alt: "Sang Le - Video Book X.0",
};

const textOne = {
  leftTitle: "CUỐN SÁCH NÀY LÀ…",
  leftDescription: "",

  leftIconOne: Icon.GlobeAltIcon,
  leftIconOneTitle: "Xấp Giấy Nhớ Đáng Tin Cậy.",
  leftIconOneDescription: `Cuốn sách sẽ liên tục nhắc bạn nhớ rằng bạn có một mục tiêu cần phải theo đuổi và bạn không được bỏ cuộc trên hành trình đó.`,

  leftIconTwo: Icon.ScaleIcon,
  leftIconTwoTitle: "Người Dẫn Đường Nhiệt Thành.",
  leftIconTwoDescription: `Trên từng chặng, bạn sẽ được chỉ dẫn rất kỹ lưỡng. Việc của bạn chỉ là đọc và thực hành theo, đồng thời theo sát tiến độ của mình đến cùng.`,

  leftIconThree: Icon.LightningBoltIcon,
  leftIconThreeTitle: "Lộ Trình Đi Đến Thành Công.",
  leftIconThreeDescription: `Bạn sẽ thấy rất rõ từng chặng mà mình đã, đang, sắp, và sẽ đi qua.`,

  leftButtonName: "",
  leftButtonSrc: "",
  leftAppleSrc: "",
  leftGoogleSrc: "",
  leftWebSrc: "",
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628221778/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_mtstfx.jpg",
  leftAlt: "Hinh anh Book Cover",
};

const textTwo = {
  rightTitle: "…CHỨ KHÔNG PHẢI LÀ…",
  rightDescription: "",

  rightIconOne: "",
  rightIconOneTitle: "Điều Ước Của Bà Tiên.",
  rightIconOneDescription: `Cuốn sách này không dành cho những người chỉ mơ mộng và tưởng tượng về thành công. Cuốn sách này dành cho những người dám đứng lên và hành động.`,

  rightIconTwo: "",
  rightIconTwoTitle: "Thần Dược Trị Bách Bệnh",
  rightIconTwoDescription: `Cuốn sách này sẽ không giải quyết được tất cả những vấn đề trong cuộc sống của bạn.`,

  rightIconThree: "",
  rightIconThreeTitle: "Lý Thuyết Suông.",
  rightIconThreeDescription: `Đây là một cuốn sách rất thực tế, đi thẳng vào vấn đề. Bạn sẽ thực hành theo những gì được chỉ dẫn trong sách để có thể thành công trong bối cảnh hiện tại.`,

  rightIconFour: "",
  rightIconFourTitle: "Bài Diễn Thuyết Đầy Cảm Xúc.",
  rightIconFourDescription: `Đây là một cuốn sách rất thực tế, đi thẳng vào vấn đề. Bạn sẽ thực hành theo những gì được chỉ dẫn trong sách để có thể thành công trong bối cảnh hiện tại.`,

  rightIconFive: "",
  rightIconFiveTitle: "Một Câu Chuyện Cổ Tích.",
  rightIconFiveDescription: `Sang sẽ không kể bạn nghe những câu chuyện thành công “như trong mơ”, “như được định sẵn”.`,

  rightButtonName: "",
  rightButtonSrc: "",
  rightAppleSrc: "",
  rightGoogleSrc: "",
  rightWebSrc: "",
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627531052/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0007_yukh3x.png",
  rightAlt: "",
};

const textThree = {
  title: "SANG LÀ...",
  description: `**⟐ Vai “ác” trong đời bạn.** Có thể bạn sẽ không thích Sang đâu, vì Sang sẽ không ngọt ngào, không soái ca với bạn, cũng sẽ không dỗ dành, không an ủi bạn. Sang sẽ thách thức bạn, như cách mà các vị huấn luyện viên võ thuật “hành” học trò của mình cho đến khi chúng chịu được đau và phản đòn. Bạn sẽ KHÔNG thấy thoải mái và dễ dàng đâu.
  <br></br>**⟐ Người “báo tin” cho bạn.** Sang sẽ kể bạn nghe thực sự thì chuyện gì đang xảy ra ngoài kia và nói cho bạn biết bạn cần làm gì.
  <br></br>**⟐ Góc nhìn thứ hai của bạn.** Sang ở đây để chỉ cho bạn thấy những gì bạn đang bỏ lỡ, hướng dẫn bạn cách để nghĩ khác đi, hành động khác đi, từ đó bạn sẽ thiết lập được tư duy mới về doanh nghiệp cũng như cách để làm giàu.`,
  buttonName: "Tôi Muốn Thử Đọc Sách Của Sang",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615098/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_omi5pu.jpg",
  alt: "Hinh anh Sang tham gia KKCD",
};

//TODO: Add testimonial part after "textThree" later on

const textFour = {
  titleFirst: "Khám Phá Bản Thân",
  titleSecond: "Cùng You X.0",
  description: `**Bạn có muốn khám phá bản thân và sứ mệnh cuộc đời mình thông qua Ứng dụng THẦN SỐ HỌC ĐẦU TIÊN tại Việt Nam?**
  <br><br>⟐  Tìm hiểu về những bí ẩn của các con số trong Ngày tháng năm sinh và Họ tên của Bạn để biết bạn thật sự là ai và sứ mệnh của bạn là gì. 
  <br><br>⟐  Nhìn nhận thế giới xung quanh Bạn từ một góc độ khác và cho phép Bạn tập trung phát triển những mặt tích cực ở bản thân.`,
  buttonName: "Xem ngay thông tin Thần Số Học",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628236893/Galatek.io%20Website/logo-04_r3vutm.png",
  alt: "Logo You X.0",
};

function BookX0() {
  return (
    <Layout>
      <Hero {...hero} />
      <AlternativeSideBySideWithImages {...textOne} {...textTwo} />
      <BrandPanelWithOverlappingImage {...textThree} />
      <BrandPanelWithAppScreenShot {...textFour} />
    </Layout>
  );
}

export default BookX0;
