import React from "react";
import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import Layout from "../components/layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";

const hero = {
  titleHighlight: "YOU X.0",
  titleNormal: "Ứng Dụng Thần Số Học Đầu Tiên Tại Việt Nam",
  description: `**Trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê**`,
  buttonNormal: "Tìm Hiểu Thêm",
  buttonNormalSrc: "#read-more",
  buttonHighlight: "Xem Thông tin Thần Số Học",
  buttonHighlightSrc: "/form",
  imgSrc: "/assets/youoxo-25-iphone-mockup-1.png",
  alt: "Hinh anh You x.0 Download",
};

const textOne = {
  leftCaption: "Câu Chuyện",
  leftTitle: "Tại sao Sang tin vào Thần Số Học?",
  leftDescription: `Khi Sang mới ra đời, ba mẹ Sang đã nhờ một người thầy chuyên về kinh dịch viết hết diễn biến cuộc đời Sang vào một cuốn sổ nhỏ, giống như tiểu sử và tóm tắt cuộc đời vậy. Thú vị không? 
  <br></br>Sang không đọc cuốn sổ đó cho đến mãi gần đây, vì cơ bản là Sang không tin rằng vận mệnh của mình được ai đó sắp đặt trước. Sang tự cảm thấy mình mới là người quyết định và lên kế hoạch cho tất cả những gì diễn ra trong cuộc sống. 
  <br></br>Cho đến cách đây khoảng vài năm, Sang thử lật cuốn sổ ra đọc. Sang đọc chơi thôi chứ không có ý định tìm hiểu cuộc đời mình qua cuốn sổ này. Kết quả không như Sang nghĩ. Cuốn sổ, về cơ bản, đã nói đúng khá nhiều về cuộc đời Sang. Đến hôm nay Sang vẫn không hiểu chuyện gì đã xảy ra...`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498043/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0004_gp79yv.jpg",
  leftAlt: "Hinh anh minh hoa Youxo 1",
};

const textTwo = {
  rightCaption: "Thay Đổi Tư Duy",
  rightTitle: "Mở rộng nhận thức - Khám phá bản thân",
  rightDescription: `Là một người tin vào khoa học, từ nhỏ Sang đã không tin vào những gì mà khoa học chưa giải thích được. Thế giới của Sang đã từng rất hợp lý, logic, sáng rõ, cho đến khi Sang lật cuốn sổ kia ra đọc. Thế giới quan của Sang đột nhiên được mở rộng ra thêm. Đương nhiên, một câu chuyện lạ không khiến niềm tin của Sang đối với khoa học và công nghệ giảm đi. Nhưng Sang không thể giả vờ rằng cuốn sổ đó chỉ là sự tình cờ. Sang chỉ chấp nhận một sự thật rằng: Có lẽ đôi khi chúng ta nên chấp nhận sự mơ hồ, không rõ ràng của một số thứ. 
  <br></br>Đôi khi, có những điều mà khoa học cũng không thể lý giải, vì thế, chúng ta cũng chưa đủ tầm để lý giải. Khi bạn thấu suốt sự minh bạch của khoa học, đồng thời chấp nhận rằng vẫn có những vùng đất ta không biết, không nhìn thấy, bạn sẽ học được nhiều bài học hơn.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498045/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0006_jrclze.jpg",
  rightAlt: "Hinh anh minh hoa Youxo 2",
};

const textThree = {
  leftCaption: "Thay Đổi Tư Duy",
  leftTitle: "Góc Nhìn về Phong Thuỷ",
  leftDescription: `Công việc cho phép Sang được đi đây đi đó rất nhiều, và do đó Sang cũng có khá nhiều cơ hội quan sát. Sang được nhìn thấy cách làm việc của những nhà nghiên cứu về Phong thủy và cũng tận tai nghe những câu chuyện phong thủy đã thay đổi sự nghiệp và cuộc sống của một người như thế nào. Phong là gió, và thủy là nước. Nói nôm na, phong thủy là cách mà năng lượng vận hành trên Trái Đất. Và những nhà phong thủy tin rằng những đồ vật xung quanh bạn, hướng của chúng, màu sắc của chúng có thể hấp dẫn nguồn năng lượng tích cực hoặc tiêu cực.
  <br></br>Rất nhiều những nhà lãnh đạo trên thế giới đã tìm đến bậc thầy phong thủy là **Marie Diamond**. Họ đã trải nghiệm và cảm nhận rằng phong thủy có sức tác động đáng kể lên đời sống của họ. Có ý kiến cho rằng phong thủy là tâm linh, nhưng cũng có ý kiến cho rằng phong thủy liên quan đến vật lý lượng tử. Sang chưa nghiên cứu đủ sâu để có thể cho ra kết luận, nhưng Sang đã trải nghiệm và thật sự bất ngờ vì những gì phong thủy mang lại.`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802599/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_vzdxhu.jpg",
  leftAlt: "Hinh anh minh hoa Youxo 3",
};

const textFour = {
  rightCaption: "Thay Đổi Tư Duy",
  rightTitle: "Góc Nhìn về Thần Số Học",
  rightDescription: `Thần số học cũng là công cụ đến với Sang khá tình cờ, và Sang thấy rằng đây là một công cụ xứng đáng để chúng ta thử. Sang tin rằng trước khi một phương pháp được chứng minh là đúng, nó cũng từng tồn tại dưới dạng phương pháp thử nghiệm. Nếu vì chưa được chứng minh mà không ai thử nghiệm, rốt cuộc, nhân loại cũng không thể biết phương pháp đó có đúng hay không. Trên tinh thần đó, Sang cũng đã thử Thần số học. **Sang không chắc chắn Thần số học có đúng với bạn không, nhưng Sang đã thử, và nó rất đúng với Sang. Về cơ bản, Thần số học hàm chứa những điều mà Sang tin, nhưng dưới dạng một ngôn ngữ khác.**`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498043/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0008_mcjuxq.jpg",
  rightAlt: "Hinh anh minh hoa Youxo 4",
};

const textFive = {
  leftCaption: "Thay Đổi Tư Duy",
  leftTitle: "Ngôn ngữ của Thần Số Học là gì?",
  leftDescription: `⟐  Theo ngôn ngữ của Sang, Sang tin rằng chúng ta được sinh ra với những thiên phú khác nhau và những điều bất lợi khác nhau. **Theo ngôn ngữ của Thần số học, trong biểu đồ ngày sinh, bạn có con số nào và thiếu con số nào?**
  <br></br>⟐  Theo ngôn ngữ của Sang, cuộc đời của mỗi người phải trải qua nhiều cột mốc. **Theo ngôn ngữ của Thần số học, bạn đạt đến “đỉnh cao” của mình vào năm bao nhiêu tuổi, và con số chủ đạo ở đỉnh cao ấy là gì?**
  <br></br>⟐  Theo ngôn ngữ của Sang, không gì trên đời là không tự học được. **Theo ngôn ngữ của Thần số học, bạn thiếu con số nào, hãy cố gắng bổ sung con số đó để cân bằng biểu đồ ngày sinh.**`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498044/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0009_lcb99l.jpg",
  leftAlt: "Hinh anh minh hoa Youxo 5",
};

const textSix = {
  rightCaption: "Khám Phá Chính Bạn",
  rightTitle: "Bạn là ai khi được sinh ra trong cuộc đời này?",
  rightDescription: `Sang biết rằng, việc phổ biến Thần số học và Phong thủy khi bản thân chưa có khẳng định chắc chắn trong tay sẽ thu về khá nhiều tranh cãi. Nhưng Sang cảm thấy thật đáng tiếc nếu như mình phải bỏ lỡ công cụ này chỉ vì sự không chắc chắn hoặc khó lý giải của nó. 
  <br></br>Khác với công nghệ, Sang sẽ không nói nhiều về chủ đề này vì Sang chưa hiểu hết về nó. Nhưng đôi khi bạn cần phải thử để biết nó có đúng với bạn hay không. Đương nhiên, Sang không tin rằng có một bàn tay nào đó ngoài kia đang thao túng cuộc sống của tất cả chúng ta. **Rốt cuộc thì, ta không biết những gì ta không biết. Người ta thường sợ những thứ mà mình chưa hiểu hết. Sang thì không. Đúng là Sang chưa hiểu hết thật đó, nhưng Sang không ngại thử.**`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498043/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0003_judg3s.jpg",
  rightAlt: "Hinh anh minh hoa Youxo 6",
};

const textSeven = {
  titleFirst: "Sao Bạn Không Thử Xem?",
  titleSecond: "Khám phá bản thân với Thần Số Học",
  description: `Ứng dụng **YOU X.0** của Sang sẽ từng bước, từng bước giúp bạn tìm hiểu thêm về chính mình thông qua **Thần Số Học** và đề xuất cho bạn những giải pháp **Phong thủy** thích hợp nhất để bạn có thể bắt đầu xây dựng cho mình một cuộc sống thịnh vượng và giàu có trong thời đại 4.0!`,
  buttonName: "Xem thông tin Thần Số Học của Tôi",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1633357982/Galatek.io%20Website/maxresdefault_aclyzs.jpg",
  alt: "Video Sang Le & Galatek Success",
  videoSrc: "https://youtu.be/E_4epjA6wyo",
};

const textEight = {
  title: "Tại sao cuốn sách của Sang được gọi là BÍ MẬT LÀM GIÀU X.0?",
  description: `**BẠN CÓ MUỐN ĐỌC THỬ SÁCH ĐIỆN TỬ ĐỘC QUYỀN TỪ SANG?**
    <br><br>⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch?
    <br><br>⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê?
    <br></br>⟐  Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?
`,
  buttonName: "Tìm hiểu thêm về Sách",
  buttonSrc: "/book-xo",
  imgSrc:
    "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/c2a88c54-5779-493d-83ec-1d2d5429021f.jpg?w=240&f=webp",
  alt: "Hinh anh Book Cover",
};

function YouXO() {
  return (
    <Layout>
      <HeroWithAngelImageOnRight {...hero} />
      <div id="read-more" />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
      <AlternativeSideBySideWithVideoOrImg {...textFive} {...textSix} />
      <BrandPanelWithAppScreenShot {...textSeven} />
      <BrandPanelWithOverlappingImage {...textEight} />
    </Layout>
  );
}

export default YouXO;
