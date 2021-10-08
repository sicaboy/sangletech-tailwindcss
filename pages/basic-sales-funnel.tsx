import React from "react";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import Layout from "../components/layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import Features from "../components/sections/feature-sections/centered_2x2_grid";
import MyAchievement from "../components/sections/feature-sections/with_feature_list";
import ThreeColumnCards from "../components/sections/blog-sections/3_column_cards";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";
import * as Icon from "@heroicons/react/outline";
import ThreeColumnsFeatureList from "../components/three-columns-feature-list";
import { CourseJsonLd } from "next-seo";

const hero = {
  caption: "Khoá Học: Phễu Bán Hàng (Cơ Bản)",
  titleNormal: " được xây dựng như thế nào?",
  titleHighlight: "Phễu Bán Hàng Online Đẻ Ra Tiền",
  description: `**Bạn có biết Vũ khí Chốt Đơn Hàng Online chính là Phễu Marketing?**`,
  imgSrc: "/assets/thumbnail-sales-funnel.jpg",
  videoSrc: "posts/video-sales-funnel",
  videoCaption: `Làm sao xây dựng Phễu Bán Hàng Online Đẻ Ra Tiền?`,
  alt: "Video Pheu Ban Hang - Sang Le Tech",
};

const textOne = {
  leftCaption: "THỰC TẾ",
  leftTitle: "Bạn Có Biết?",
  leftDescription: `Bạn có biết: **Chỉ có 7% – 10% số lượng khách hàng đưa ra quyết định mua hàng ngay lần đầu tiên họ nhìn thấy sản phẩm của bạn qua quảng cáo.** Vậy hơn 90% số lượng khách còn lại thì như thế nào? <br></br> Làm cách nào để bạn có thể đứng ngoài số liệu thống kê này và tạo ra Phễu Marketing tốt nhất có thể cho doanh nghiệp của mình?`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627466088/Galatek.io%20Website/Financial_Access_3_mha0jp.png",
  leftAlt: "Hinh anh minh hoa Khoa hoc Pheu Ban Hang 1 - Sang Le Tech",
};

const textTwo = {
  rightCaption: "VẤN ĐỀ",
  rightTitle: "BẠN phải đối mặt với Covid-19 & Thời đại 4.0",
  rightDescription: `⟐  Hiện tại lượng tiêu thụ hàng Online tăng đột b-iến, nhưng nhiều doanh nghiệp đã phải đóng cửa vì không có một kênh bán hàng Online phù hợp, hoặc kinh doanh Online mà không biết cách marketing hiệu quả.<br></br>**Hãy tưởng tượng nếu Covid-19 kéo dài thêm vài tháng nữa, thì liệu doanh nghiệp của bạn có thể trụ nổi không? Nếu không, thì bạn phải bắt tay vào hành động ngay từ bây giờ!**`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627466323/Galatek.io%20Website/os0019_1_13_Converted_viuwxc.png",
  rightAlt: "Hinh anh minh hoa Khoa hoc Pheu Ban Hang 2 - Sang Le Tech",
};

const courseDescription = {
  caption: "Mô Tả",
  title: "Khoá Học Xây Dựng Phễu Bán Hàng (Level: Cơ Bản)",
  description: `*Chào mừng Bạn đến với Khoá học Xây dựng Phễu Bán Hàng (Cấp độ: Cơ Bản), nơi bạn sẽ tìm hiểu công cụ, kỹ thuật để giúp bạn "bỏ túi" thêm một kỹ năng mới trong cách tạo ra Phễu Bán Hàng thành công cho doanh nghiệp của chính mình.*<br></br>Lợi ích từ Khoá học này là giúp cho doanh nghiệp của bạn thu hút cả ngàn lượt khách ghé thăm website mỗi ngày, **tăng số đơn hàng** lên gấp nhiều lần và đây là công cụ giúp bạn chuyển hoá khách hàng tiềm năng thành khách mua hàng. Đặc biệt, bạn sẽ có **toàn quyền nắm giữ thông tin và sở thích khách hàng** để **khai thác tối đa lợi nhuận của mình**.`,

  listOneTitle: false,
  listOneDescription: `Sự khác biệt giữa một doanh nghiệp thành công và không thành công là những chiến lược mà các doanh nghiệp đó thực hiện để đưa một khách hàng tiềm năng bước vào kênh bán hàng của họ.`,

  listTwoTitle: false,
  listTwoDescription: `Bạn không biết làm sao để cải thiện lưu lượng khách truy cập vào website của mình?`,

  listThreeTitle: false,
  listThreeDescription: `Làm thế nào để chuyển đổi khách "qua đường" thành "fan cuồng" của Bạn?`,

  listFourTitle: false,
  listFourDescription: `Liệu có cách nào để khắc phục tình trạng này hay không?`,

  listFiveTitle: false,
  listFiveDescription: `Nếu bạn nghĩ rằng việc thu hút và thuyết phục khách hàng tiềm năng quyết định mua hàng xảy ra ngay lập tức, thì bạn đã LẦM TO!`,

  listSixTitle: false,
  listSixDescription: `Điều mà hầu hết các doanh nghiệp thực sự gặp phải đó là vấn đề về "Phễu Bán Hàng".`,

  listSevenTitle: false,
  listSevenDescription: `Phễu Bán Hàng của bạn là quá trình trực tuyến mà bạn sẽ đưa khách hàng tiềm năng của mình đi qua để biến họ thành khách hàng trung thành thực thụ.`,

  listEightTitle: false,
  listEightDescription: `Mọi người đều có một Phễu Bán Hàng (ngay cả khi họ không nhận ra điều đó) và Phễu Bán Hàng của bạn hoặc là mang lại nhiều khách hàng hơn cho bạn hoặc là đẩy khách hàng ra khỏi tầm tay của bạn.`,

  listNineTitle: false,
  listNineDescription: `87% người tiêu dùng chọn mua hàng ở những nơi liên tục cung cấp nội dung có giá trị cho họ ở tất cả các giai đoạn của quá trình mua hàng.`,

  listTenTitle: false,
  listTenDescription: `63% người tiêu dùng cần nghe các đề xuất giá trị của nơi bán hàng ít nhất từ 3-5 lần trước khi họ tin tưởng những lời mời gọi mua hàng này.`,

  listElevenTitle: false,
  listElevenDescription: `Khách hàng tiềm năng được nuôi dưỡng sẽ thực hiện mua hàng nhiều hơn 47% so với khách hàng tiềm năng không được nuôi dưỡng.`,

  listTwelveTitle: false,
  listTwelveDescription: `Mục tiêu cuối cùng không phải là bán hàng. Mà mục tiêu của bạn là tạo ra lượng khách hàng luôn quay trở lại với bạn để họ có thể nhận được giá trị từ bạn một cách lâu dài.`,

  listThirteenTitle: false,
  listThirteenDescription: `Nếu trước đây, những cách thức phát triển doanh nghiệp online của bạn bắt đầu trở nên lỗi thời trong thời đại công nghệ luôn thay đổi với tốc độ chóng mặt này.`,

  listFourteenTitle: false,
  listFourteenDescription: `Khi Google hoặc Facebook bất ngờ thay đổi một thuật toán mới, nhiều chiến thuật bán hàng mà trước đây bạn đã sử dụng sẽ đột nhiên trở nên lỗi thời và mất tác dụng.`,

  listFifteenTitle: false,
  listFifteenDescription: `Tất cả những gì bạn học được trong Khoá học này sẽ được sử dụng mãi mãi trong lĩnh vực kinh doanh online.`,
};

const textThree = {
  leftCaption: "YÊU CẦU",
  leftTitle: "Bạn Cần Chuẩn Bị Gì Để Tham Gia Khóa Học?",
  leftDescription: `**✓**  Bạn phải có kết nối Internet với đường truyền tốt.
    <br></br>**✓**   Bạn phải có nơi để ghi chú và thực hành bài tập.
    <br></br>**✓**   Bạn phải có tinh thần sẵn sàng học hỏi những điều mới trong khoá học này và thực hành chúng trong các chiến lược Xây dựng Phễu Bán Hàng của chính bạn trong xuyên suốt quá trình tham gia khóa học.
    <br></br>**✓**   Bạn phải sẵn sàng đặt câu hỏi nếu bạn không hiểu điều gì đó khi tham gia khoá học.`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627482536/Galatek.io%20Website/1_iudpkg.png",
  leftAlt: "Hinh anh minh hoa Khoa hoc Pheu Ban Hang 3 - Sang Le Tech",
};

const textFour = {
  rightCaption: "Bạn Có Phù Hợp?",
  rightTitle: "Khoá Học Này Dành Cho Những Ai?",
  rightDescription: `**✓   Nếu Bạn là doanh nhân muốn kinh doanh sản phẩm Online** thông qua Phễu Bán Hàng.
  <br></br>**✓   Nếu Bạn là một dân Marketing** muốn tự động hóa hoạt động kinh doanh Online của mình.
  <br></br>**✓   Nếu Bạn là một người đang quan tâm đến Phễu Bán Hàng** và phân tích dữ liệu khách hàng.
  <br></br>**✓   Nếu Bạn là một chủ doanh nghiệp nhỏ và là một người kinh doanh muốn sử dụng Phễu Bán Hàng** để tăng doanh số bán hàng online của mình theo cấp số nhân.
  <br></br>**✓   Nếu Bạn là một người làm việc cho doanh nghiệp có sản phẩm kỹ thuật số**, cửa hàng thương mại điện tử, doanh nghiệp truyền thống, doanh nghiệp dựa trên dịch vụ… miễn là bạn có thứ gì đó để bán!
  <br></br>**✓   Nếu Bạn mong muốn "bỏ túi" một kỹ năng mới để có thể trở thành một Freelancer chuyên nghiệp** (người làm việc tự do chuyên nghiệp) cho các doanh nghiệp đang có nhu cầu xây dựng và phát triển Phễu Bán Hàng bền vững và thành công cho họ.
  <br></br>**✓   Nếu Bạn đã nghe nói về Phễu Bán Hàng** và bạn muốn tìm hiểu thêm về những Chiến lược Xây dựng Phễu B.
  <br></br> **THÌ ĐÂY LÀ KHOÁ HỌC DÀNH CHO BẠN!**
  <br></br>*‼️ Khóa học này KHÔNG dành cho bạn nếu bạn không nghiêm túc về việc cung cấp những giá trị lâu dài cho khách hàng của mình*.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627466906/Galatek.io%20Website/os0019_1_5_Converted_ubnsvc.png",
  rightAlt: "Hinh anh minh hoa Khoa hoc Pheu Ban Hang 4 - Sang Le Tech",
};

const courseValues = {
  general: {
    caption: "GIÁ TRỊ ",
    title: "Bạn Sẽ Học Được Gì Từ Khoá Học Này?",
    description: `*Trong khoá học này, Sang sẽ **"bật mí những bí mật"** mà Sang đã nghiên cứu, học hỏi và áp dụng thành công cho doanh nghiệp của mình từ **Chuyên gia xây dựng Phễu Bán Hàng nổi tiếng thế giới Russell Brunson** và bạn có thể áp dụng ngay vào việc kinh doanh online của mình!*<br></br>⟐  Khoá học này như là một **Cuốn Cẩm nang Trọn đời** để bạn có thể tạo ra Phễu Bán Hàng giúp tăng doanh số kinh doanh Online theo cấp số nhân. <br></br>⟐  Sang chỉ tập trung hướng dẫn bạn **những chiến lược mà chính Sang đã áp dụng thành công cho doanh nghiệp của mình** — ngay cả khi công nghệ luôn liên tục thay đổi.`,
  },
  details: [
    {
      name: "Phễu Bán Hàng Là Gì?",
      description:
        "Tìm hiểu rõ Phễu Bán Hàng là gì? Và 7 Giai đoạn quan trọng nhất trong Phễu Bán Hàng để  dẫn dắt khách hàng chưa biết đến những dịch vụ/sản phẩm của Bạn trở thành khách mua hàng thực sự.",
      icon: Icon.FilterIcon,
    },
    {
      name: "Phân Định Rõ Nguồn Gốc Khách Hàng.",
      description:
        "Để Bạn có thể cung cấp đúng thông tin và sản phẩm cho từng loại khách hàng, có nghĩa là khách hàng sẽ xem được sản phẩm họ cần mua từ đó Bạn sẽ bán được nhiều sản phẩm hơn.",
      icon: Icon.LightBulbIcon,
    },
    {
      name: "Nghiên Cứu Đối Thủ Cạnh Tranh Trực Tiếp & Gián Tiếp.",
      description:
        "Để Bạn biết vì sao đối thủ cạnh tranh đã đạt được thành công, nghĩa là Bạn sẽ nắm rõ khách hàng của họ là ai, ở đâu, nhu cầu của họ là gì, từ đó thu hút khách hàng đến với Bạn cũng như giúp Bạn giảm thiểu rủi ro thất bại đến mức thấp nhất.",
      icon: Icon.EyeIcon,
    },
    {
      name: "Định Nghĩa Khách Hàng Mơ Ước.",
      description:
        "Để biết được khách hàng của Bạn là ai và họ muốn gì, vì điều này sẽ giúp cho Bạn tiết kiệm hàng chục đến hàng trăm triệu đồng tiền chi phí khi quảng cáo lâu dài.",
      icon: Icon.EmojiHappyIcon,
    },
    {
      name: "Xây Dựng Nấc Thang Giá Trị.",
      description:
        "Để khách hàng dễ dàng trải nghiệm sản phẩm của Bạn, từ đó Bạn sẽ bán được nhiều sản phẩm hơn và tăng lợi nhuận cho doanh nghiệp của mình.",
      icon: Icon.PresentationChartBarIcon,
    },
    {
      name: "Danh Sách Mơ Ước 100.",
      description:
        "Để tìm hiểu và biết được Khách Hàng Mơ Ước của bạn đang tụ tập ở đâu, từ đó sẽ dễ dàng đưa thông điệp, nội dung của Bạn trước mắt họ và dẫn dắt họ vào Phễu Bán Hàng của Bạn.",
      icon: Icon.SparklesIcon,
    },
  ],
};

const textPayment = {
  titleFirst: "Tham Gia Khoá Học Xây Dựng Phễu Bán Hàng Cơ Bản",
  titleSecond: "Không Yêu Cầu Kinh Nghiệm",
  description: `Với mức giá thấp hơn nhiều so với một bữa tối cùng gia đình, bạn sẽ nhận được **hơn 2 giờ video bài hướng dẫn từ Yunnie Nguyen - Trợ lý của Sang, quyền truy cập vào diễn đàn thảo luận dành cho các Chiến binh X.0 của Sang và bạn có thể hỏi Sang bất kỳ câu hỏi nào trong xuyên suốt khóa học**.
  <br></br>Hơn hết, bạn nhận được quyền truy cập trọn đời và 3 ngày đảm bảo hoàn tiền 100%!`,
  buttonName: "THAM GIA KHOÁ HỌC",
  imgSrc: "/assets/thumbnail-sales-funnel.jpg",
  alt: "Hinh anh minh hoa Khoa hoc Pheu Ban Hang 5 - Sang Le Tech",
  videoSrc: "posts/video-sales-funnel",
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

function SalesFunnelCourse() {
  return (
    <Layout>
      <CourseJsonLd
        courseName="Xây dựng Phễu Bán Hàng cơ bản"
        providerName="Pro X.0"
        providerUrl="https//www.sangletech.com/basic-sales-funnel"
        description="Bật mí những bí mật từ Chuyên gia xây dựng Phễu Bán Hàng nổi tiếng thế giới để áp dụng thành công cho việc kinh doanh Online của Bạn!"
      />
      <Hero {...hero} />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <ThreeColumnsFeatureList {...courseDescription} />
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

export default SalesFunnelCourse;
