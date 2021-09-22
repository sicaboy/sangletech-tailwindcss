import React from "react";
import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import Layout from "../components/Layout";
import AlternativeSideBySideWithVideoOrImg from "../components/AlternativeSideBySideWithVideo";

const hero = {
  titleHighlight: "YOU X.0",
  titleNormal: "Ứng Dụng Thần Số Học Đầu Tiên Tại Việt Nam",
  description: `**Trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê**`,
  buttonNormal: "Tìm Hiểu Thêm",
  buttonHighlight: "Xem Thông tin Thần Số Học",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629429447/Galatek.io%20Website/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post-3_emlzak.png",
  alt: "Hinh anh Sang Le",
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
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498050/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0005_hej10l.jpg",
  rightAlt: "Hinh anh minh hoa Youxo 2",
};

const textThree = {
  leftCaption: "Thay Đổi Tư Duy",
  leftTitle: "Góc Nhìn về Phong Thuỷ",
  leftDescription: `Công việc cho phép Sang được đi đây đi đó rất nhiều, và do đó Sang cũng có khá nhiều cơ hội quan sát. Sang được nhìn thấy cách làm việc của những nhà nghiên cứu về Phong thủy và cũng tận tai nghe những câu chuyện phong thủy đã thay đổi sự nghiệp và cuộc sống của một người như thế nào. Phong là gió, và thủy là nước. Nói nôm na, phong thủy là cách mà năng lượng vận hành trên Trái Đất. Và những nhà phong thủy tin rằng những đồ vật xung quanh bạn, hướng của chúng, màu sắc của chúng có thể hấp dẫn nguồn năng lượng tích cực hoặc tiêu cực. 
  <br></br>Rất nhiều những nhà lãnh đạo trên thế giới đã tìm đến bậc thầy phong thủy là ***Marie Diamond***. Họ đã trải nghiệm và cảm nhận rằng phong thủy có sức tác động đáng kể lên đời sống của họ. Có ý kiến cho rằng phong thủy là tâm linh, nhưng cũng có ý kiến cho rằng phong thủy liên quan đến vật lý lượng tử. Sang chưa nghiên cứu đủ sâu để có thể cho ra kết luận, nhưng Sang đã trải nghiệm và thật sự bất ngờ vì những gì phong thủy mang lại.
  <br></br>Đôi khi, có những điều mà khoa học cũng không thể lý giải, vì thế, chúng ta cũng chưa đủ tầm để lý giải. Khi bạn thấu suốt sự minh bạch của khoa học, đồng thời chấp nhận rằng vẫn có những vùng đất ta không biết, không nhìn thấy, bạn sẽ học được nhiều bài học hơn.`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802599/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_vzdxhu.jpg",
  leftAlt: "Hinh anh minh hoa Youxo 3",
};

const textFour = {
  rightCaption: "Thay Đổi Tư Duy",
  rightTitle: "Góc Nhìn về Thần Số Học",
  rightDescription: `Thần số học cũng là công cụ đến với Sang khá tình cờ, và Sang thấy rằng đây là một công cụ xứng đáng để chúng ta thử. Sang tin rằng trước khi một phương pháp được chứng minh là đúng, nó cũng từng tồn tại dưới dạng phương pháp thử nghiệm. Nếu vì chưa được chứng minh mà không ai thử nghiệm, rốt cuộc, nhân loại cũng không thể biết phương pháp đó có đúng hay không. Trên tinh thần đó, Sang cũng đã thử Thần số học. **Sang không chắc chắn Thần số học có đúng với bạn không, nhưng Sang đã thử, và nó rất đúng với Sang. Về cơ bản, Thần số học hàm chứa những điều mà Sang tin, nhưng dưới dạng một ngôn ngữ khác.**`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628498050/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0005_hej10l.jpg",
  rightAlt: "Hinh anh minh hoa Youxo 2",
};

function YouXO() {
  return (
    <Layout>
      <div>You X.0 Page</div>
      <HeroWithAngelImageOnRight {...hero} />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
    </Layout>
  );
}

export default YouXO;
