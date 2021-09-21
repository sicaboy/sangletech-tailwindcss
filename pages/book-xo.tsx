import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import Features from "../components/sections/feature-sections/centered_2x2_grid";

const hero = {
  caption: "Book X.0",
  titleNormal: "Sách Điện Tử Độc Quyền từ Sang Lê",
  titleHighlight: "BÍ MẬT LÀM GIÀU X.0",
  description: `**ĐÂY LÀ CUỐN SÁCH VỀ…**
  <br></br>***⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch.*** Xuất thân là dân công nghệ, Sang hiểu rõ những xu hướng công nghệ hiện tại và có thể phần nào phán đoán những xu thế của tương lai. Khi ai cũng nói về 4.0 và sự đổ bộ đáng sợ của các công nghệ mới, Sang sẽ cho bạn thấy thực sự thì 4.0 là gì và giúp bạn vững vàng trong kỷ nguyên này. Khi mọi người hoảng loạn vì sự tàn khốc của Đại dịch, Sang sẽ chỉ cho bạn thấy cơ hội mà bạn có thể nắm bắt trong chính cơn khủng hoảng đó.
  <br></br>***⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê.*** Vì Sang cũng từng là người bị “mắc kẹt” như bạn, cũng từng không biết bước tiếp theo mình cần làm là gì, nên Sang hiểu rất rõ tâm trạng của bạn hiện tại. Vì Sang đã thành công đi qua giai đoạn loay hoay tìm hướng đi cho cuộc đời mình, nên Sang hiểu rất rõ hiện tại bạn đang cần gì.
  <br></br>***⟐  Những ý tưởng và những chiến lược*** mà Sang rút ra từ những doanh nhân tiếng tăm nhất thế giới. Không có bài học nào trong cuốn sách này mà Sang chưa áp dụng vào thực tế đời sống cũng như công việc.`,
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632210115/Galatek.io%20Website/Sangletech.com/Untitled_design-4_sjr9wc.jpg",
  videoSrc: "https://youtu.be/onEkyUmiWJ8",
  videoCaption: `3 điều thú vị BẠN CHƯA BIẾT về Cuốn sách "BÍ MẬT LÀM GIÀU X.0" của Sang Le`,
  alt: "Sang Le - Video Book X.0",
};

const textOne = {
  caption: "",
  title: "CUỐN SÁCH NÀY LÀ…",
  description: ``,

  listOneIconSrc: "",
  listOneTitle: "Xấp Giấy Nhớ Đáng Tin Cậy.",
  listOneDescription: `Cuốn sách sẽ liên tục nhắc bạn nhớ rằng bạn có một mục tiêu cần phải theo đuổi và bạn không được bỏ cuộc trên hành trình đó.`,

  listTwoIconSrc: "",
  listTwoTitle: `Người Dẫn Đường Nhiệt Thành.`,
  listTwoDescription: `Trên từng chặng, bạn sẽ được chỉ dẫn rất kỹ lưỡng. Việc của bạn chỉ là đọc và thực hành theo, đồng thời theo sát tiến độ của mình đến cùng.`,

  listThreeIconSrc: "",
  listThreeTitle: "Lộ Trình Đi Đến Thành Công.",
  listThreeDescription: `Bạn sẽ thấy rất rõ từng chặng mà mình đã, đang, sắp, và sẽ đi qua.`,
};

function BookX0() {
  return (
    <Layout>
      <div>Book X.0 Page</div>
      <Hero {...hero} />
      <Features {...textOne} />
    </Layout>
  );
}

export default BookX0;
