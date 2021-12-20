import React from "react";
import * as Icon from "@heroicons/react/outline";

import Hero from "../components/course/hero";
import CallToAction from "../components/course/call-to-action-bar";

import Solution from "../components/course/solution";
import Problem from "../components/course/problem";
import MeetYourCoach from "../components/course/meet-you-coach";
import Stories from "../components/course/stories";
import WhatWillYouLearn from "../components/course/what-you-will-learn";
import Requirement from "../components/course/requirement";
import Curriculum from "../components/course/curriculum";
import Bonus from "../components/course/bonus";
import Testimonial from "../components/course/testimonials";
import Guarantee from "../components/course/guarantee";
import Summary from "../components/course/summary";
import ProXOFeatures from "../components/course/proxo-feature";
import Pricing from "../components/course/pricing";
import FAQ from "../components/course/faq";
import FreeLesson from "../components/course/free-lesson";
import Countdown from "../components/course/countdown";
import BuyerToastify, {
  showAlternativeToast,
} from "../components/course/buyer-toastify";
import ButtonPurchaseNow from "../components/button";
import Layout from "../components/layout";
import IsThisCourseForYou from "../components/course/is-this-course-for-you";

const hero = {
  caption: "Sách Điện Tử Độc Quyền từ Sang Lê",
  headline: "BÍ MẬT LÀM GIÀU X.0",
  shockingStatement: `**Dành Cho Những Người Sống Có Hoài Bão & Đam Mê**<br></br> Cuốn sách điện tử này không nói về cách kiếm tiền và làm giàu một cách nhanh chóng mà là một **Tấm bản đồ thực sự để bạn có thể cầm trong tay trước khi "đi ra biển lớn" và làm giàu cho chính bản thân mình**.<br></br>✪ Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch?<br></br>✪ Làm sao để giải phóng tiềm năng của những người trẻ có đam mê?<br></br>✪ Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân thành công và tiếng tăm nhất thế giới.<br></br>**Tất cả câu trả lời sẽ được tìm thấy trong cuốn sách đầu tay của Sang - Bí Mật Làm Giàu X.0!**`,
  imgSrc: "/assets/thumbnail-book-xo.jpg",
  videoSrc: "/posts/video-book-xo",
  videoCaption: `3 điều thú vị BẠN CHƯA BIẾT về Cuốn sách "BÍ MẬT LÀM GIÀU X.0" của Sang Le`,
  alt: "Sang Le Tech - Video Book X.0",
};

const callToAction = {
  courseLength: "Bạn muốn đọc thử sách Bí Mật Làm Giàu X.0?",
  dateStart: "Đừng vội bỏ qua một cuốn sách có khả năng thay đổi một đời của bạn.",
  buttonName: "Đọc Thử Ngay",
};

const countDownMins = 10; // mins

const problem = {
  defineTheProblem: {
    direction: "left", // left or right
    caption: "VẤN ĐỀ GÌ ĐANG XẢY RA VỚI CHÚNG TA?",
    title: "Bạn cũng từng là một người bình thường, cho đến khi biến cố xảy ra..",
    description: `✪ Đại dịch COVID làm đảo lộn cuộc sống của bạn và buộc tất cả những thanh niên như bạn **phải thích ứng một cách gấp rút và vội vã với Thời đại 4.0** – điều mà vốn dĩ, bạn dự định mình sẽ thích ứng từ từ. Bạn chới với khi không nắm công nghệ trong tay. Bạn trở nên lúng túng khi người ta bắt đầu đòi hỏi ở mình những kỹ năng khác – rất khác so với những gì mà bạn từng hình dung.<br></br>✪ Covid-19 khiến **bạn sợ hãi và không biết làm thế nào để tồn tại, kiếm tiền và lo cho gia đình.** Chứng kiến hàng loạt người bị mất việc, bạn lo sợ người tiếp theo sẽ là bạn, hoặc tệ hơn, chính bạn cũng đang lao đao vì thất nghiệp.<br></br>✪ Khi tìm đến sự trợ giúp từ bên ngoài, **không ai có thể giúp bạn**. Họ nói về những thứ chung chung, những định hướng mơ hồ, hoặc chính họ cũng đang hoang mang.`,
    imgSrc: "/assets/old-book-cover.jpg",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
  agitate: {
    direction: "right", // left or right
    caption: "BẠN ĐANG PHẢI ĐỐI MẶT VỚI ĐIỀU GÌ?",
    title: "Chạm đáy tuyệt vọng và khao khát mãnh liệt một điều gì đó..",
    description: `✪ Bạn dần mất niềm tin vào một tương lai tươi đẹp. Bạn dần dần chỉ nhìn thấy những điều tiêu cực trong cuộc sống. **Bạn lạc lối, mất phương hướng.**<br></br>✪ Cuộc sống không còn là nơi để bạn trải nghiệm, thực hiện ước mơ, mà ở đó, **bạn chỉ nhìn thấy hai chữ "mưu sinh" đang đè nặng trên vai.**<br><br>✪ Bạn quyết định thay đổi. Nhưng bạn lại sợ mình thay đổi không đúng, làm mất thời gian của bản thân và tốn thêm nhiều tiền. **Bạn muốn thay đổi nhưng không biết bắt đầu từ đâu.**<br></br>✪ Không nắm công nghệ trong tay, bạn cảm giác như mình chỉ đang **giậm chân tại chỗ.**`,
    imgSrc: "/assets/book-not-about.png",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
};

const solution = {
  //TODO: ADD the image of SOW diamond logo
  general: {
    caption: "Sách điện tử độc quyền từ Sang Lê",
    title: "Bí Mật Làm Giàu X.0",
    description: `Hơn bao giờ hết, bạn khao khát ai đó đưa tay ra giúp đỡ bạn. Hình ảnh của con người này hiện rõ trước mắt bạn - một người thành công, có kiến thức, đáng tin cậy, là chuyên gia trong lĩnh vực công nghệ và có trong tay nhiều kiến thức, kỹ năng để dẫn dắt bạn đi trong thời đại 4.0, trong và hậu covid-19.<br></br>Sang thấu hiểu những khó khăn mà bạn đang phải trải qua vì Sang là người Việt Nam và từng làm việc với rất nhiều những người có hoài bão, đam mê cũng như những bạn đang ngồi trên ghế nhà trường. Bên cạnh đó, **Sang đã từng khởi nghiệp thất bại rất nhiều lần**, vì vậy, Sang biết những hành động nào sẽ dẫn đến thất bại. Quan trọng hơn cả, **Sang là người có hoài bão và đam mê, đã đứng lên đi con đường của riêng mình để có được ngày hôm nay**. Sau hơn 10 năm hoạt động kinh doanh ở nhiều lĩnh vực, tổn thất hàng trăm ngàn đô la và nhiều đêm mất ngủ, Sang đã học được vô số bài học đắt giá. Vì thế, Sang là người hiểu bạn hơn ai hết.<br></br>**Liệu có một tấm bản đồ dẫn đến một cuộc sống thịnh vượng không?**<br></br>Nếu bạn có trong tay tấm bản đồ ấy thì sao? Có cách nào để bạn – người không trải qua những chuyện như Sang – có được kết quả như Sang đang có hay không?
    <br></br>Sang thường nói rằng, **nếu có tấm bản đồ đó trong tay, con đường dẫn đến thành công của bạn sẽ giống như đường cao tốc.** Bạn sẽ không phải đụng ổ gà như Sang, đạp trúng đinh tán như Sang, bị xẹp lốp xe giữa đường và phải loay hoay đi tìm tiệm sửa xe như Sang. Vì Sang đã trải qua và đã trả giá, nên cái giá mà bạn phải trả sẽ “rẻ” hơn rất nhiều.
    <br></br>Và Sang gọi hành trình đó – hành trình mà bạn sắp đi qua;
    <br></br>Đó chính là: 
    <br></br>**HÀNH TRÌNH LÀM GIÀU X.0.**
    <br></br>Xuyên suốt nội dung của cuốn sách này nói về **4 Chặng đường lớn trong Hành Trình Làm Giàu X.0**, chúng liên kết chặt chẽ với nhau như một **viên kim cương** giúp bạn làm giàu trong Thời đại 4.0 một cách bền vững nhất. 
    <br></br>**Và Sang là người sẽ đồng hành cùng bạn xuyên suốt chặng đường này.**`,
  },
  details: [
    {
      name: "",
      description: "Tư Duy",
      icon: Icon.LightBulbIcon,
    },
    {
      name: "",
      description: "Kỹ Năng",
      icon: Icon.EyeIcon,
    },
    {
      name: "",
      description: "Sự Nghiệp",
      icon: Icon.EmojiHappyIcon,
    },
    {
      name: "",
      description: "Đầu Tư",
      icon: Icon.PresentationChartBarIcon,
    },
  ],
};

const whatWillYouLearn = {
  general: {
    caption: "Giá trị",
    title: "CUỐN SÁCH NÀY LÀ…",
    description: `**Tấm bản đồ để bạn bước đi tự tin trên Hành Trình Làm Giàu X.0**<br></br>Nắm tấm bản đồ trong tay, bạn đã sẵn sàng ra chiến trường. Nắm trong tay “bí kíp”, bạn có thể đương đầu với mọi khó khăn, thậm chí xoay chuyển tình thế để biến cố covid-19 trở thành lợi thế cạnh tranh của bạn.`,
  },
  details: [
    {
      name: "Xấp Giấy Nhớ Đáng Tin Cậy.",
      description: "Cuốn sách sẽ liên tục nhắc bạn nhớ rằng bạn có một mục tiêu cần phải theo đuổi và bạn không được bỏ cuộc trên hành trình đó.",
      icon: Icon.FilterIcon,
    },
    {
      name: "Người Dẫn Đường Nhiệt Thành.",
      description: "Trên từng chặng, bạn sẽ được chỉ dẫn rất kỹ lưỡng. Việc của bạn chỉ là đọc và thực hành theo, đồng thời theo sát tiến độ của mình đến cùng.",
      icon: Icon.LightBulbIcon,
    },
    {
      name: "Lộ Trình Đi Đến Thành Công.",
      description: "Bạn sẽ thấy rất rõ từng chặng mà mình đã, đang, sắp, và sẽ đi qua.",
      icon: Icon.EyeIcon,
    },
  ],
};

const isThisCourseForYou = {
  direction: "left", // left or right
  caption: "BẠN CÓ PHÙ HỢP?",
  title: "CUỐN SÁCH NÀY KHÔNG PHẢI LÀ…",
  description: `**✪ Điều Ước Của Bà Tiên:** Cuốn sách này không dành cho những người chỉ mơ mộng và tưởng tượng về thành công. Cuốn sách này dành cho những người dám đứng lên và hành động.<br></br>**✪ Thần Dược Trị Bách Bệnh:** Cuốn sách này sẽ không giải quyết được tất cả những vấn đề trong cuộc sống của bạn.<br></br>**✪ Lý Thuyết Suông:** Đây là một cuốn sách rất thực tế, đi thẳng vào vấn đề. Bạn sẽ thực hành theo những gì được chỉ dẫn trong sách để có thể thành công trong bối cảnh hiện tại.`,
  imgSrc: "",
  videoSrc: "",
  videoCaption: "",
  alt: "",
};

const requirement = {
  direction: "right", // left or right
  caption: "Tại sao bạn đọc sách của Sang?",
  title: "SANG LÀ…",
  description: `**✪ Vai “ác” trong đời bạn:** Có thể bạn sẽ không thích Sang đâu, vì Sang sẽ không ngọt ngào, không soái ca với bạn, cũng sẽ không dỗ dành, không an ủi bạn. Sang sẽ thách thức bạn, như cách mà các vị huấn luyện viên võ thuật “hành” học trò của mình cho đến khi chúng chịu được đau và phản đòn. Bạn sẽ KHÔNG thấy thoải mái và dễ dàng đâu.<br></br>**✪ Người “báo tin” cho bạn:** Sang sẽ kể bạn nghe thực sự thì chuyện gì đang xảy ra ngoài kia và nói cho bạn biết bạn cần làm gì.<br></br>**✪ Góc nhìn thứ hai của bạn:** Sang ở đây để chỉ cho bạn thấy những gì bạn đang bỏ lỡ, hướng dẫn bạn cách để nghĩ khác đi, hành động khác đi, từ đó bạn sẽ thiết lập được tư duy mới về doanh nghiệp cũng như cách để làm giàu.`,
  imgSrc: "/assets/sang-la.jpg",
  videoSrc: "",
  videoCaption: "",
  alt: "",
};

const bonuses = {
  title: `Mua Sách Ngay Hôm Nay Để Nhận Những Phần Phần Quà Hấp Dẫn`,
  list: [
    {
      caption: "Bonus #1 - Khoá học Quảng cáo Retargeting",
      title: "Hướng Dẫn Cách Chạy Quảng Cáo Retargeting Từ A-Z", 
      description:
        "**TỔNG GIÁ TRỊ: 1.999.000đ**<br></br>Khi bạn chọn mua cuốn sách điện tử đầu tay Bí Mật Làm Giàu X.0, Sang sẽ gửi tặng đến bạn hơn **4+ giờ training từ Khoá học Quảng cáo Retargeting/Remarketing** với nội dung video chất lượng và hướng dẫn chi tiết để **giúp bạn thiết lập Chiến lược Quảng cáo nhắm lại 95% những khách hàng đã rời khỏi trang web của bạn và chuyển đổi thành khách mua hàng.**<br></br>**‼️ HOÀN TOÀN MIỄN PHÍ KHI BẠN ĐẶT MUA CUỐN SÁCH BÍ MẬT LÀM GIÀU X.0 NGAY HÔM NAY ‼️**",

      imgSrc: "/assets/thumbnail-retargeting-explainer.jpg",
      alt: "Sang Le Tech - Video Retargeting La Gi",
    },
    {
      caption: "Bonus #2 - Khoá học Phễu Bán Hàng Basic",
      title: "Làm Thế Nào Xây Dựng Phễu Bán Hàng Đẻ Ra Tiền?",
      description:
        `**TỔNG GIÁ TRỊ: 999.000đ**<br></br>Tiếp theo, bạn sẽ nhận được **Khoá học Xây Dựng Phễu Bán Hàng Cơ Bản** của Sang - Tại đây Sang sẽ **bật mí những bí mật từ Chuyên gia xây dựng Phễu Bán Hàng nổi tiếng thế giới Russell Brunson để áp dụng thành công cho việc kinh doanh online của bạn**.<br></br>Với các video training và hướng dẫn chi tiết những Chiến lược mà chính Sang đã áp dụng thành công cho doanh nghiệp của mình — ngay cả khi công nghệ luôn liên tục thay đổi, để bạn có thể **tạo ra Phễu Bán Hàng "Đẻ Ra Tiền" giúp tăng doanh số kinh doanh Online theo cấp số nhân**.<br></br>**‼️ HOÀN TOÀN MIỄN PHÍ KHI BẠN ĐẶT MUA CUỐN SÁCH BÍ MẬT LÀM GIÀU X.0 NGAY HÔM NAY ‼️**`,

      imgSrc: "/assets/thumbnail-sales-funnel.jpg",
      alt: "Video Pheu Ban Hang - Sang Le Tech",
    },
    {
      caption: "Bonus #3 - Khoá học Lập Kế Hoạch Đơn Giản SPM",
      title: "Cách Lên Kế Hoạch Đơn Giản với Notion - Cấp độ Cơ bản",
      description:
        `**TỔNG GIÁ TRỊ: 999.000đ**<br></br>Phần quà Bonus tiếp theo là **Khoá học Lập Kế Hoạch Đơn Giản SPM** được tạo ra bởi Sang sau gần 10 năm nghiên cứu và phát triển. Trong khoá học này, Sang sẽ hướng dẫn Bạn **cách thức Lên kế hoạch mà Sang đã nghiên cứu và áp dụng thành công cho việc quản lý cuộc sống cá nhân và công việc của Sang**.<br></br>Phương pháp Lên Kế Hoạch Đơn Giản SPM này được Sang kết hợp giữa cách thức lên kế hoạch truyền thống và công nghệ hiện đại với sự "hỗ trợ đắc lực" của phần mềm Notion. SPM Basic sẽ giúp bạn **hoạch định kế hoạch một cách toàn diện nhất trong cả công việc và cuộc sống cá nhân!**<br></br>**‼️ HOÀN TOÀN MIỄN PHÍ KHI BẠN ĐẶT MUA CUỐN SÁCH BÍ MẬT LÀM GIÀU X.0 NGAY HÔM NAY ‼️**`,
      imgSrc: "https://sangletech.com/assets/thumbnail-why-planning",
      alt: "ang Le Tech - Hinh anh video Tai sao can len ke hoach SPM",
    },
  ],
};

const curriculum = {
  general: {
    direction: "left", // left or right
    caption: "",
    title: "ĐÂY LÀ CUỐN SÁCH VỀ…",
    description: `**✪ Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch.** Xuất thân là dân công nghệ, Sang hiểu rõ những xu hướng công nghệ hiện tại và có thể phần nào phán đoán những xu thế của tương lai. Khi ai cũng nói về 4.0 và sự đổ bộ đáng sợ của các công nghệ mới, Sang sẽ cho bạn thấy thực sự thì 4.0 là gì và giúp bạn vững vàng trong kỷ nguyên này. Khi mọi người hoảng loạn vì sự tàn khốc của Đại dịch, Sang sẽ chỉ cho bạn thấy cơ hội mà bạn có thể nắm bắt trong chính cơn khủng hoảng đó.<br></br>**✪ Làm sao để giải phóng tiềm năng của những người trẻ có đam mê**. Vì Sang cũng từng là người bị “mắc kẹt” như bạn, cũng từng không biết bước tiếp theo mình cần làm là gì, nên Sang hiểu rất rõ tâm trạng của bạn hiện tại. Vì Sang đã thành công đi qua giai đoạn loay hoay tìm hướng đi cho cuộc đời mình, nên Sang hiểu rất rõ hiện tại bạn đang cần gì.<br></br>**✪ Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân tiếng tăm nhất thế giới**. Không có bài học nào trong cuốn sách này mà Sang chưa áp dụng vào thực tế đời sống cũng như công việc.`,
    imgSrc:
      "https://storyblok-cdn.mindvalley.com/f/60579/2068x1110/37b76048b1/sb_sp_devices_curriculum.png?trans?quality=30&dpr=2&width=752",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
  details: [
    {
      section: `**Cột mốc Khởi Động:** Bí Mật Bật Mí`,
      topic: `<span className="text-lg text-indigo-500">**Highlight:** </span><br></br>
      <span className="mr-3 text-indigo-500">✓</span>   **Làm Nóng #1:** Bí Mật Hành Trình Làm Giàu X.0<br></r><span className="mr-3 text-indigo-500">✓</span>   **Làm Nóng #2:** Bí Mật Bạn Là Ai?<br></r><span className="mr-3 text-indigo-500">✓</span>   **Làm Nóng #3:** Bí Mật Suy Nghĩ SAI LẦM về Làm Giàu`,
    },
    {
      section: `**Cột mốc #1:** Bí Mật Tư Duy Làm Giàu X.0`,
      topic: `<span className="text-lg text-indigo-500">**Highlight:** </span><br></br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #1:** Bí Mật về Hành Động của Người Giàu<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #2:** Bí Mật về Tư Duy của Người Giàu<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #3:** Bí Mật Tinh Thần Chiến Binh<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #4:** Bí Mật về Châm Ngôn Xưa`,
    },
    {
      section: `**Cột mốc #2:** Bí Mật Kỹ Năng Làm Giàu X.0`,
      topic: `<span className="text-lg text-indigo-500">**Highlight:** </span><br></br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #5:** Bí Mật Tăng Hiệu Quả Công Việc cùng SPM<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #6:** Bí Mật Tự Học<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #7:** Bí Mật Nhớ Nhanh & Lâu<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #8:** Bí Mật Rèn Luyện Tinh Thần Thép & Tính Kỷ Luật<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #9:** Bí Mật Sức Khỏe Cho Cơ Thể<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #10:** Bí Mật Kỹ Năng Thu Nhập Cao`,
    },
    {
      section: `**Cột mốc #3:** Bí Mật Sự Nghiệp Làm Giàu X.0`,
      topic: `<span className="text-lg text-indigo-500">**Highlight:** </span><br></br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #11:** Bí Mật Freelancer<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #12:** Bí Mật Tư Duy Kinh Doanh 4.0`,
    },
    {
      section: `**Cột mốc #4:** Bí Mật Đầu Tư Làm Giàu X.0`,
      topic: `<span className="text-lg text-indigo-500">**Highlight:** </span><br></br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #13:** Bí Mật Đầu Tư Như Thế Nào Là Đúng?<br></r><span className="mr-3 text-indigo-500">✓</span>   **Chặng #14:** Bí Mật Đầu Tư Vào Bản Thân</br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #15:** Bí Mật Đầu Tư Chứng Khoán</br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #16:** Bí Mật Đầu Tư Tiền Ảo</br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #17:** Bí Mật Đầu Tư Đất Đai</br>
      <span className="mr-3 text-indigo-500">✓</span>   **Chặng #18:** Bí Mật Kinh Doanh Online`,
    },
  ],
};

const guarantee = {
  //TODO: Add button to free reading trial
  description: `<span className="text-3xl">**Trải Nghiệm Đọc Thử Sách Bí Mật Làm Giàu X.0**</span>
<br></br>**Bí Mật Làm Giàu X.0** là bản đồ bạn cần trong thời đại 4.0 và hậu Covid: Cách xây dựng sự giàu có bền vững và sống theo phong cách bạn muốn. Trên chuyến hành trình làm giàu chông gai và gian nan, bạn đã có một người bạn đồng hành - Tác giả Sang Lê sẽ dẫn dắt bạn vượt qua thử thách và cho bạn thấy việc trở thành một phần của “Cuộc cách mạng công nghiệp” này trở nên dễ dàng hơn như thế nào.<br></br>Tôi chắc chắn 100% bạn sẽ yêu thích cuốn sách điện tử này, bởi vì đây không phải là cuốn sách giấy bình thường mà nó còn được tích hợp các công cụ phần mềm khác nhau để hỗ trợ và đồng hành cùng bạn trong hành trình phát triển lâu dài của bản thân bạn.<br></br>Bạn không cần chọn mua cuốn sách ngay. Bạn chỉ cần cho mình một cơ hội mới để thử khám phá một vài điều thú vị được bật mí trong cuốn sách: Hãy đọc thử sách điện tử Bí Mật Làm Giàu X.0. Để biết cuốn sách có phù hợp với bạn hay không.<br></br>Không có ai khám phá một cuốn sách mới mà vẫn là con người cũ. Chắc chắn, anh ấy/cô ấy đã có những thay đổi đáng kể trong quan điểm, cách hành động, hoặc tư duy. Vậy tại sao bạn không thử một lần?`,
  name: "Yunnie Nguyen",
  position: "Customer Happiness Manager",
  listItems: [
    {
      title: "Truy Cập Trọn Đời",
      description:
        "Chọn sách một lần, sở hữu sách suốt đời, đọc lại và sử dụng các phần mềm thường xuyên nếu bạn muốn.",
    },
    {
      title: "Nâng Cấp Miễn Phí",
      description: "Sang & đội ngũ liên tục nâng cấp các phiên bản mới của Sách và các phần mềm mỗi tháng. Tất cả các tính năng được nâng cấp đều miễn phí.",
    },
    {
      title: "Ưu Đãi Có Hạn",
      description:
        "Bạn có thể mua sách ngay hôm nay để nhận được ưu đãi đặc biệt so với giá thông thường.",
    },
  ],
};

const proxoFeatures = {
  main: {
    direction: "left", // left or right
    caption: "Tính năng đặc biệt Book X.0",
    title: "Xây dựng dựa trên hệ thống Gamification – Vừa đọc vừa chơi",
    description: `✪ Cuốn sách này là tập hợp của 3 thứ: **Tư duy, tinh thần và công cụ**. Sang không chỉ cho bạn tư duy làm giàu, nói về vai trò của Tinh thần Chiến Binh mà còn cho bạn những phần mềm, công cụ,... vô cùng thiết thực để hỗ trợ bạn tại từng Cột Mốc xuyên suốt hành trình khám phá cuốn sách **Bí Mật Làm Giàu X.0**.<br></br>✪ Cuốn sách điện tử này được **ứng dụng công nghệ hóa, hình ảnh hóa và game hóa** để hành trình thành công của bạn với sự đồng hành của Sang sẽ không nhàm chán như nhiều người thường nghĩ.`,
    imgSrc: "",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
  features: [
    "Ứng dụng Tra cứu Thần Số Học - You X.0",
    "Ứng dụng Hỗ trợ Quản lý Tài chính Cá nhân - Fin X.0",
    "Ứng dụng Học Trực tuyến 4.0 - Pro X.0",
    "Ứng dụng Đầu tư - Invest X.0"
  ],
};

const courseSummary = {
  heading: {
    caption: "Cam Kết",
    title: "Kết Quả Bạn Sẽ Nhận Được",
    description: `Nếu bạn nghiêm túc đọc và thực hành theo những gì Sang hướng dẫn trong cuốn sách này, sự lột xác tương tự sẽ diễn ra với bạn. Từ một người không biết làm thế nào để kiếm tiền và có một cuộc sống thành công, bạn sẽ tự tin bước đi trong thời đại 4.0, trong và hậu Covid-19.`,
  },

  features: [
    {
      name: "Nâng Cao Sự Tự Tin",
      description:
        "Cảm thấy tự tin hơn trong thời đại 4.0 & sau Covid-19, lấy lại quyền kiểm soát cuộc đời mình và sống được với hoài bão, ước mơ của mình.",
    },
    {
      name: "Nội Dung Thực Tế",
      description:
        "Sự bảo chứng đến từ kinh nghiệm của chính Sang - người đã đi học ở nhiều nơi trên thế giới và có chỗ đứng nhất định trong lĩnh vực công nghệ và khởi nghiệp.",
    },
    {
      name: "Nâng tầm Tư Duy",
      description:
        "Nhận được các công cụ phần mềm và cách thức thay đổi tư duy từ Sang để vượt ra khỏi vùng an toàn của bạn và đặt sự phát triển lên ưu tiên hàng đầu.",
    },
    {
      name: "Đọc Sách Như Chơi Game",
      description:
        "Ứng dụng công nghệ hóa, hình ảnh hóa và game hóa để hành trình thành công không nhàm chán như nhiều người thường mô tả.",
    },
    {
      name: "Tương Tác Dễ Dàng",
      description:
        "Bạn có thể tìm đến Sang bất cứ lúc nào qua các kênh như Facebook, Instagram, Youtube,... và các phần mềm từ Galatek và Sang Le Tech.",
    },
    {
      name: "Tư Duy Người Giàu",
      description:
        "Khám phá cách thức của những nhà triệu phú, tỷ phú hàng đầu thế giới nhằm thiết kế lối sống hàng ngày, tập trung vào hiệu suất, năng suất, sức ảnh hưởng và tất nhiên là niềm vui – sau đó với sự trợ giúp của Sang Lê, hãy thiết kế phong cách của riêng bạn.",
    },
    {
      name: "Cách Mạng Hóa Thói Quen",
      description:
        "Thoát khỏi những thói quen cứng đầu đang kéo bạn xuống, lập trình lại tâm trí của bạn với những thói quen thúc đẩy khả năng phát triển của bản thân lên tầm cao mới – và xem cách mà Sang biến chúng thành một phần dễ dàng trong cuộc sống hàng ngày của bạn.",
    },
    {
      name: "Làm Giàu Cho Bản Thân",
      description:
        "Đẩy nhanh con đường hướng tới các mục tiêu cá nhân và sự nghiệp quan trọng nhất của bạn: Có sức khoẻ tốt. Có được tư duy của người giàu, sống tích cực. Kiếm được tiền ngay cả khi ngồi ở nhà. Có sự nghiệp ổn định. Biết đầu tư đúng cách đúng chỗ để tích góp làm giàu.",
    },
  ],
};

const stories = {
  general: {
    caption: "Stories",
    title: "Câu Chuyện Khách Hàng",
    description: ``,
  },
  details: [
    {
      name: "Student 1",
      title: "CEO",
      quote:
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
      img: "/assets/sangle-profilePic.jpg",
      alt: "sang le tech",
    },
    {
      name: "Student 1",
      title: "CEO",
      quote:
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
      img: "/assets/sangle-profilePic.jpg",
      alt: "sang le tech",
    },
    {
      name: "Student 1",
      title: "CEO",
      quote:
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
      img: "/assets/sangle-profilePic.jpg",
      alt: "sang le tech",
    },
  ],
};

const pricing = {
  header: {
    caption: "",
    primaryTitle: "Truy cập mọi lúc mọi nơi",
    primaryDescription: "Nhận quyền truy cập online toàn bộ cuốn sách và các phần mềm trên tất cả các thiết bị: Android, iOS, Máy tính để bàn và máy tính bảng.",
    imgSrc: "",
    alt: "",
    secondaryTitle: "Thành Viên Trọn Đời",
    secondaryDescription: "Bí Mật Làm Giàu X.0 không phải là cuốn sách giấy bình thường. Mà đây là quyển Guideline điện tử giúp bạn bước đi tự tin trên Hành Trình Làm Giàu X.0!",
    listTitle: "Bao gồm",
  },

  includedBoth: [
    "Quyền truy cập trọn đời vào Sách Điện tử và tất cả các Ứng dụng hỗ trợ.",
    "Ứng dụng điện thoại (Apple hoặc Android) để đọc sách mọi lúc mọi nơi.",
    "Phiên bản dành cho máy tính để bàn, máy tính bảng.",
    "Tham gia và kết nối trọn đời với Cộng đồng Chiến Binh X.0 trên nền tảng mạng xã hội.",
  ],
  single: {
    title: "Đăng Ký Đọc Theo Chương",
    description: "Mua đọc & Truy cập từng Chương của Sách.",
    imgSrc: "",
    alt: "",
    promotedPrice: "99k",
    originalPrice: "159k",
    buttonName: "Đặt Mua",
    list: [
      "Truy cập & Đọc từng Chương của Sách tương ứng với từng Cột Mốc của Bí Mật Làm Giàu X.0.",
      "Truy cập & Sử dụng từng ứng dụng hỗ trợ ứng với mỗi Chương của Sách.",
      "Nhận được nội dung hướng dẫn và tương tác hàng tuần của tác giả Sách - Sang Lê.",
    ],
  },

  membership: {
    title: "Truy Cập & Đọc Toàn Bộ Sách Điện Tử",
    description: "Mua đọc & Truy cập toàn bộ nội dung sách điện tử Bí Mật Làm Giàu X.0. Sử dụng tất cả ứng dụng hỗ trợ trong suốt hành trình khám phá cuốn sách. Và dĩ nhiên, bạn sẽ nhận được các bonus quà tặng là các khoá học để Kinh doanh online trong thời đại 4.0 (hoàn toàn miễn phí) từ Sang Lê.",
    imgSrc: "",
    alt: "",
    promotedPrice: "299k",
    originalPrice: "699k",
    valueCaption: "SUPER HOT PROGRAM",
    buttonName: "Đặt Mua Ngay",
    list: [
      "Toàn quyền truy cập và đọc toàn bộ nội dung Sách điện tử Bí Mật Làm Giàu X.0, cộng với các khoá học đào tạo của Sang Lê trong ứng dụng Học Trực Tuyến - Pro X.0. (Tổng trị giá lên đến: 4.000.000đ+)",
      "Nâng cấp miễn phí tất cả những phiên bản mới với các tính năng mới của Sách và các ứng dụng hỗ trợ: You X.0, Fin X.0 & Pro X.0 mỗi tháng.",
      "Nhận được nội dung hướng dẫn, cố vấn và tương tác hàng tuần của tác giả Sách - Sang Lê.",
      "Cơ hội tham gia và kết nối với các thành viên của Cộng đồng Chiến Binh X.0 để học hỏi, trao đổi kiến thức và ý tưởng với những người có hoài bão lớn và đam mê giống bạn.",
      "Toàn quyền truy cập và sử dụng Ứng dụng Tra cứu Thần Số Học - YOU X.0 & và nhận được 10 👑 - tương ứng với 30 ❤️ để bạn có thể tra cứu thông tin Thần Số Học cho bản thân và nhiều người khác trong 30 lượt tra cứu miễn phí. (Trị giá 100.000đ+)",
      "Toàn quyền truy cập và sử dụng miễn phí FIN X.0 - Ứng dụng Hỗ trợ Quản lý Tài Chính Cá nhân.",
      "Chứng nhận từ Galatek và trường SPMET khi hoàn thành các khoá học Pro X.0, điều đó có nghĩa là bạn sẽ có được một khởi đầu suôn sẻ, tạo được ấn tượng với các nhà tuyển dụng.",
    ],
  },
  membershipPrograms: [
    { src: "/assets/thumbnail-sales-funnel.jpg", alt: "sang le tech program" },
    { src: "/assets/thumbnail-planning.png", alt: "sang le tech program" },
    { src: "/assets/thumbnail-retargeting-explainer.jpg", alt: "sang le tech program" },
    { src: "/assets/bookxo-logo.jpg", alt: "sang le tech program" },
    { src: "/assets/finxo-logo.jpg", alt: "sang le tech program" },
    { src: "/assets/youxo-logo.png", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
  ],
};

const faqs = {
  general: {
    title: "Câu Hỏi Thường Gặp",
    videoSrc: "",
    videoCaption: "",
    imgSrc: "",
    alt: "",
  },
  details: [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ],
};

const freeLession = {
  title: "",
  description: ``,
  buttonName: "",
  imgSrc: "",
  alt: "",
  buttonSrc: "",
};

const toasts = ["Sang Le", "Carmen Wong", "Yunnie Nguyen"];

function CoursePageTemplate() {
  React.useEffect(() => {
    showAlternativeToast(toasts);
  }, []);

  const Divider = () => <div className="my-16" />;

  return (
    <Layout>
      <Hero {...hero} />
      <Countdown expiryTimestamp={countDownMins} />
      <CallToAction {...callToAction} />

      <Problem defineTheProblem={problem.defineTheProblem} agitate={problem.agitate} />
      <Solution
        caption={solution.general.caption}
        title={solution.general.title}
        description={solution.general.description}
        features={solution.details}
      />
      <ProXOFeatures
        main={proxoFeatures.main}
        features={proxoFeatures.features}
      />
      <MeetYourCoach />
      <Stories stories={stories} />
      <ButtonPurchaseNow />
      <WhatWillYouLearn
        caption={whatWillYouLearn.general.caption}
        title={whatWillYouLearn.general.title}
        description={whatWillYouLearn.general.description}
        features={whatWillYouLearn.details}
      />
      <IsThisCourseForYou {...isThisCourseForYou} />
      <Requirement {...requirement} />

      <Curriculum general={curriculum.general} details={curriculum.details} />
      <Divider />
      <Bonus bonuses={bonuses} />
      <Divider />
      <ButtonPurchaseNow />

      {/* <Testimonial /> */}
      <Guarantee guarantee={guarantee} />
      {/* I am here */}

      <Summary
        features={courseSummary.features}
        heading={courseSummary.heading}
      />
      <Pricing pricing={pricing} />
      <Stories stories={stories} />
      <FAQ
        faqs={faqs.details}
        title={faqs.general.title}
        videoSrc={faqs.general.videoSrc}
        videoCaption={faqs.general.videoCaption}
        imgSrc={faqs.general.imgSrc}
        alt={faqs.general.alt}
      />
      {/* <Pricing /> */}
      <FreeLesson {...freeLession} />
      <BuyerToastify />

      {/* <ToastContainer
        limit={1}
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      /> */}
    </Layout>
  );
}

export default CoursePageTemplate;
