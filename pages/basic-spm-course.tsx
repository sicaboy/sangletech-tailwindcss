import React from "react";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import Layout from "../components/layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import Features from "../components/sections/feature-sections/centered_2x2_grid";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import * as Icon from "@heroicons/react/outline";
import ThreeColumnsFeatureList from "../components/three-columns-feature-list";
import { CourseJsonLd } from "next-seo";

const hero = {
  caption: "Khoá Học: SPM - Simple Planning Method",
  titleNormal: " với Notion",
  titleHighlight: "Cách Lên Kế Hoạch Đơn Giản",
  description: `**CẤP ĐỘ: CƠ BẢN**<br></br>Phương pháp SPM (Simple Planning Method) - Cách Lên Kế Hoạch Đơn Giản được tạo ra bởi Sang Lê sau gần 10 năm nghiên cứu và phát triển.`,
  imgSrc: "/assets/thumbnail-why-planning.jpg",
  videoSrc: "posts/video-why-planning",
  videoCaption: `Tại Sao Bạn Cần Lập Kế Hoạch?`,
  alt: "Hinh anh Sang Le Tech - Video Tai sao ban can lap ke hoach SPM",
};

const textOne = {
  leftCaption: "THỰC TẾ",
  leftTitle: "Bạn Có Biết?",
  leftDescription: `Năm 1950, có một nhóm các nhà nghiên cứu đến một lớp học tại trường Đại học Stanford. Ở đó, họ hỏi những sinh viên rằng các bạn ấy đã có kế hoạch sau khi ra trường chưa. **Chỉ 5% sinh viên có kế hoạch rõ ràng sau khi ra trường, còn lại 95% sinh viên vẫn chưa có định hướng gì cả**.<br></br>Nhóm nghiên cứu ghi lại những cái tên, và 10 năm sau, họ tìm lại những con người trong lớp học đó. Và bạn biết điều gì không? **5% người là 10 năm trước đã nói rằng họ đã có dự định trong cuộc sống lúc bấy giờ có mức thu nhập hơn tổng 95% những người còn lại.** Không gì khác, kế hoạch chính là thứ khiến họ làm được điều đó.`,
  leftImgSrc: "/assets/planning-img01.jpg",
  leftAlt: "Hinh anh minh hoa Khoa hoc SPM Basic 1 - Sang Le Tech",
};

const textTwo = {
  rightCaption: "VẤN ĐỀ",
  rightTitle:
    "Thất Bại trong việc Lên Kế Hoạch chính là Lên Kế Hoạch cho Sự Thất Bại",
  rightDescription: `Khi bạn không có kế hoạch, bạn bị chi phối hoàn toàn bởi những yếu tố xung quanh. Bạn không tự quyết định cái gì cả, bởi vì không có kế hoạch thì làm gì có hành động. Cuộc sống của bạn sẽ mãi mãi bị chi phối bởi những con người bạn tình cờ gặp, công việc bạn tình cờ được giới thiệu, người bạn đời mà bạn tình cờ quen. <br></br>Sẽ không có bất kỳ sự bứt phá nào được diễn ra, bởi vì bạn không có cái đích nào cả. Bạn sẽ sống qua ngày, làm công việc mà ai cũng làm, gặp gỡ bạn bè, có những thú vui cơ bản, chôn vùi ước mơ và hoài bão của mình. Bạn sống ở thể bị động nếu không có một kế hoạch.<br></br>Nhưng khi bạn có kế hoạch thì sao? Bộ não của bạn ngay lập tức được kích hoạt để giúp bạn làm được điều đó bằng mọi giá. **Khi bạn đã có một cái đích, bạn sẽ chủ động làm những điều mà bình thường bạn không bao giờ làm.**`,
  rightImgSrc: "/assets/planning-img02.jpg",
  rightAlt: "Hinh anh minh hoa Khoa hoc SPM Basic 2 - Sang Le Tech",
};

const courseDescript = {
  caption: "Mô Tả",
  title: "Khoá Học Xây Dựng Phễu Bán Hàng (Level: Cơ Bản)",
  description: `*Chào mừng Bạn đến với Khoá học SPM Basic - Cách Lên Kế Hoạch Đơn Giản với Notion (Cấp độ: Cơ Bản), nơi mà Sang sẽ hướng dẫn Bạn cách lên kế hoạch và quản lý công việc cũng như cuộc sống cá nhân hằng ngày của Bạn một cách đơn giản và dễ dàng nhất thông qua công cụ Notion.*<br></br>**SPM là phương pháp lên kế hoạch được Sang tạo ra sau gần 10 năm nghiên cứu, học hỏi và sử dụng hàng trăm cách lên kế hoạch hay nhất trên thế giới.**`,

  listOneTitle: false,
  listOneDescription: `Bạn đang tìm kiếm một công cụ năng suất có thể thay thế hàng chục công cụ khác, giúp bạn quản lý cuộc sống cá nhân và công việc của mình và hơn thế nữa trong một phần mềm dễ sử dụng?`,

  listTwoTitle: false,
  listTwoDescription: `Notion là một không gian làm việc đa năng để quản lí cuộc sống hàng ngày của bạn.`,

  listThreeTitle: false,
  listThreeDescription: `Đây là ứng dụng năng suất phong phú và linh hoạt nhất hiện có.`,

  listFourTitle: false,
  listFourDescription: `Bạn có thể sử dụng nó để quản lý công việc, học tập, dự án, ghi chú, sở thích và mục tiêu cuộc sống...`,

  listFiveTitle: false,
  listFiveDescription: `Khám phá cách lên kế hoạch để bạn có thể làm việc hiệu quả hơn, có tổ chức và tập trung hơn với Notion.`,

  listSixTitle: false,
  listSixDescription: `Những người thành công trên thế giới mà Sang biết là những người luôn lập kế hoạch cho cuộc đời của mình, vì họ sẽ không bỏ phí bất kỳ giây phút nào cả.`,

  listSevenTitle: false,
  listSevenDescription: `Bạn sẽ tìm hiểu lý do tại sao hơn một triệu người đã chuyển từ các ứng dụng như Evernote, Todoist, Trello, One Note và Google Keep và hiện đang sử dụng Notion.`,

  listEightTitle: false,
  listEightDescription: `Khóa học này được thiết kế dành cho những ai đã chán nản với thói quen trì hoãn, trễ deadline công việc, về những sự kiện ngoài ý muốn làm hỏng kế hoạch của bạn.`,

  listNineTitle: false,
  listNineDescription: `Đã đến lúc trở nên sống có tổ chức và cải thiện việc lập kế hoạch của bạn bằng công cụ tốt nhất hiện có - Notion.`,

  listTenTitle: false,
  listTenDescription: `Khi ai đó hỏi Sang, vì sao Sang có được ngày hôm nay, câu trả lời luôn là 3 thứ: biết mình muốn gì, sống có kế hoạch và tinh thần chiến binh.`,

  listElevenTitle: false,
  listElevenDescription: `Nghĩa là, đầu tiên bạn phải xác định được mục tiêu của đời mình, sau đó lập kế hoạch để đạt được mục tiêu ấy, và cuối cùng là trau dồi một tinh thần thép để không bỏ cuộc giữa chừng dù chuyện gì xảy ra.`,

  listTwelveTitle: false,
  listTwelveDescription: `Tất cả những gì Sang đang có hôm nay đều là từ kế hoạch mà ra.`,

  listThirteenTitle: false,
  listThirteenDescription: `Sang không tình cờ thành lập một công ty công nghệ, không tình cờ gặp người bạn đời lý tưởng, cũng không tình cờ cho ra mắt khóa học.`,

  listFourteenTitle: false,
  listFourteenDescription: `Tất cả đều là kế hoạch và nỗ lực không ngừng nghỉ của Sang để hiện thực hóa kế hoạch đó.`,

  listFifteenTitle: false,
  listFifteenDescription: `Kế hoạch có thể không đúng với thực tế, nhưng đó không phải là lý do để bạn lao vào một cuộc hành trình mà không biết tiếp theo mình nên làm gì.`,
};

const textThree = {
  leftCaption: "YÊU CẦU",
  leftTitle: "Bạn Cần Chuẩn Bị Gì Để Tham Gia Khóa Học?",
  leftDescription: `**✓**  Bạn phải có máy tính kết nối Internet.
  **✓**  Bạn phải sẵn sàng sử dụng máy tính để lập kế hoạch hoặc quản lý các khía cạnh trong cuộc sống của mình.
    <br></br>**✓**   Bạn phải đăng ký tài khoản Notion (Có các tuỳ chọn miễn phí & trả phí).
    <br></br>**✓**   Bạn phải có tinh thần sẵn sàng học hỏi những điều mới trong khoá học này và thực hành Lên Kế Hoạch cho cuộc sống của chính bạn trong xuyên suốt quá trình tham gia khóa học.
    <br></br>**✓**   Bạn phải sẵn sàng đặt câu hỏi nếu bạn không hiểu điều gì đó khi tham gia khoá học.`,
  leftImgSrc: "/assets/planning-img04.jpg",
  leftAlt: "Hinh anh minh hoa Khoa hoc SPM Basic 3 - Sang Le Tech",
};

const textFour = {
  rightCaption: "Bạn Có Phù Hợp?",
  rightTitle: "Khoá Học Này Dành Cho Những Ai?",
  rightDescription: `**✓   Nếu Bạn là Chủ doanh nghiệp hoặc Chuyên gia trong một lĩnh vực nào đó** đang cảm thấy quá tải với hàng đống dự án lớn nhỏ khác nhau và đang cố gắng tìm cách tổ chức và quản lý chúng một cách hiệu quả nhất. 
  <br></br>**✓   Nếu bạn là người làm nghề tự do (Freelancer) hoặc là một người sáng lập một mình** đang mong muốn tổ chức công việc kinh doanh của bạn.
  <br></br>**✓   Nếu Bạn là một Học sinh** đang muốn tìm ra một công cụ và phương pháp lên kế hoạch tốt để học tập hiệu quả.
  <br></br>**✓   Nếu Bạn và Đội ngũ trong doanh nghiệp của mình** đang tìm kiếm một công cụ để lên kế hoạch, làm việc và quản lý đội nhóm hiệu quả trong các dự án hợp tác. 
  <br></br>**✓   Nếu Bạn đang quan tâm đến việc cải thiện thói quen làm việc** để trở nên tập trung hơn, có tổ chức và năng suất hơn.
  <br></br>**✓   Nếu Bạn đang quan tâm đến việc có một hệ thống lên kế hoạch** được cá nhân hoá cho riêng mình.
  <br></br>**✓   Nếu Bạn chỉ đơn giản là một người đang hứng thú và muốn khám phá SPM** - Phương pháp Lên Kế Hoạch Đơn Giản của Sang.
  <br></br> **THÌ ĐÂY LÀ KHOÁ HỌC DÀNH CHO BẠN!**
  <br></br>*‼️ Khóa học này KHÔNG dành cho Bạn nếu Bạn không nghiêm túc trong việc lên kế hoạch, xác định mục tiêu trong cuộc sống để hướng đến sự phát triển và thành công cho bản thân mình*.`,
  rightImgSrc: "/assets/planning-img03.jpg",
  rightAlt: "Hinh anh minh hoa Khoa hoc SPM Basic 4 - Sang Le Tech",
};

const courseValues = {
  general: {
    caption: "GIÁ TRỊ ",
    title: "Bạn Sẽ Học Được Gì Từ Khoá Học Này?",
    description: `*Trong khoá học này, Sang sẽ hướng dẫn Bạn cách thức Lên kế hoạch mà Sang đã nghiên cứu và áp dụng thành công cho việc quản lý cuộc sống cá nhân và công việc của Sang.*<br></br>⟐  Phương pháp Lên Kế Hoạch Đơn Giản SPM này được Sang kết hợp giữa cách thức lên kế hoạch truyền thống và công nghệ hiện đại với sự "hỗ trợ đắc lực" của phần mềm Notion.<br></br>**SPM Basic** sẽ giúp bạn hoạch định kế hoạch một cách toàn diện nhất trong cả công việc và cuộc sống cá nhân!`,
  },
  details: [
    {
      name: "Quản Lý Cuộc Sống Bằng Thư Mục & Cuốn Tập SPM",
      description:
        "Để Bạn làm quen với một cách thức lên kế hoạch mới lạ của Sang thông qua những Cuốn tập và Thư mục, rất đơn giản như cách mà bạn đã từng làm khi còn ngồi trên ghế nhà trường.",
      icon: Icon.FilterIcon,
    },
    {
      name: "Cá Nhân Hoá Hệ Thống Lên Kế Hoạch",
      description:
        "Để Bạn nắm rõ cách xây dựng những nhiệm vụ, thói quen, dự án và mục tiêu cuộc sống được cá nhân hóa bằng cách sử dụng Notion, từ đó có thể biến đổi năng suất và giúp ích cho các lĩnh vực khác trong cuộc sống của bạn.",
      icon: Icon.LightBulbIcon,
    },
    {
      name: "Lập Kế Hoạch Ngày & Tuần SPM",
      description:
        "Để Bạn học cách lên kế hoạch từ ví dụ thực tế được áp dụng trong cuộc sống cá nhân cũng như công việc hằng ngày, hằng tuần của Sang, từ đó giúp Bạn chủ động thực hiện các kế hoạch mà mình đã đề ra, duy trì động lực và không còn trì hoãn giữa chừng.",
      icon: Icon.EyeIcon,
    },
    {
      name: "Tổ Chức Dự Án SPM.",
      description:
        "Để Bạn không còn cảm thấy quá tải với hàng trăm công việc lớn nhỏ từ nhiều dự án khác nhau trong công việc cho đến cuộc sống cá nhân, từ đó Bạn có thể làm chủ thời gian và biết cách cân bằng cuộc sống.",
      icon: Icon.EmojiHappyIcon,
    },
  ],
};

const textPayment = {
  titleFirst: "Tham Gia Khoá Học SPM Basic - Lên Kế Hoạch Đơn Giản",
  titleSecond: "Không Yêu Cầu Kinh Nghiệm",
  description: ` Sự khác nhau giữa người thành công và người thất bại là cách mà họ sử dụng 24 tiếng trong ngày.<br></br>Với mức giá thấp hơn nhiều so với một bữa tối cùng gia đình, bạn sẽ nhận được **hơn 3 giờ video bài giảng, quyền truy cập vào diễn đàn thảo luận dành cho các Chiến binh X.0 của Sang và bạn có thể hỏi Sang bất kỳ câu hỏi nào trong xuyên suốt khóa học**.
  <br></br>Hơn hết, bạn nhận được quyền truy cập trọn đời và 3 ngày đảm bảo hoàn tiền 100%!`,
  buttonName: "THAM GIA KHOÁ HỌC",
  buttonSrc: "/form",
  imgSrc: "/assets/thumbnail-why-planning.jpg",
  alt: "Sang Le Tech - Hinh anh video Tai sao can len ke hoach SPM",
  videoSrc: "posts/video-why-planning",
};

const textBookxo = {
  //TODO: Add buttonSrc
  title: "Tại sao cuốn sách của Sang được gọi là BÍ MẬT LÀM GIÀU X.0?",
  description: `**BẠN CÓ MUỐN ĐỌC THỬ SÁCH ĐIỆN TỬ ĐỘC QUYỀN TỪ SANG?**
    <br><br>⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch?
    <br><br>⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê?
    <br></br>⟐  Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?`,
  buttonName: "Tìm hiểu thêm về Sách",
  buttonSrc: "/form",
  imgSrc:
    "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/c2a88c54-5779-493d-83ec-1d2d5429021f.jpg?w=240&f=webp",
  alt: "Sang Le Tech - Anh bia sach Bi Mat Lam Giau X.0",
};

function SPMBasicCourse() {
  return (
    <Layout>
      <CourseJsonLd
        courseName="SPM Basic - Cách Lên Kế Hoạch Đơn Giản với Notion"
        providerName="Pro X.0"
        providerUrl="https//www.sangletech.com/basic-spm-course"
        description="Phương pháp Lập kế hoạch đơn giản với phần mềm Notion được tạo ra bởi Sang Lê."
      />
      <Hero {...hero} />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <ThreeColumnsFeatureList {...courseDescript} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
      <Features
        caption={courseValues.general.caption}
        title={courseValues.general.title}
        description={courseValues.general.description}
        features={courseValues.details}
      />
      <BrandPanelWithAppScreenShot {...textPayment} />
      <BrandPanelWithOverlappingImage {...textBookxo} />
    </Layout>
  );
}

export default SPMBasicCourse;
