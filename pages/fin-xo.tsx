import React from "react";
import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import Layout from "../components/layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";

const hero = {
  titleHighlight: "FIN X.0",
  titleNormal: "Ứng Dụng Hỗ Trợ Quản Lý Tài Chính Cá Nhân",
  description: `**Trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê**`,
  buttonNormal: "Tìm Hiểu Thêm",
  buttonNormalSrc: "#read-more",
  buttonHighlight: "Truy Cập Ngay",
  buttonHighlightSrc: "/form",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629428694/Galatek.io%20Website/Sangletech.com/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post_wfssti.png",
  alt: "Hinh anh Fin X.0 Download",
};

const textOne = {
  leftCaption: "Câu Hỏi Lớn",
  leftTitle: "Tại sao chúng ta khó đi được đến cùng?",
  leftDescription: `Có bao giờ tình huống này xảy đến trong đời bạn: Bạn rõ ràng đã xác định được mục tiêu mà mình muốn đạt được và làm những gì có thể để biến mục tiêu đó thành hiện thực, song, bằng một cách nào đó, bạn luôn loay hoay trong vòng lẩn quẩn, cảm thấy nản lòng, thiếu tự tin, và rồi cuối cùng cũng bỏ cuộc. Đã bao nhiêu lần bạn bỏ cuộc đối với dự định của mình rồi?
  <br></br>Sang cũng từng đặt ra câu hỏi đó. Và Sang đã tìm ra câu trả lời, thậm chí là một công thức để từ nay về sau, bạn không bao giờ bỏ cuộc nữa.
  <br></br>Nếu đã đi đến đây cùng Sang, có lẽ bạn đã phần nào hiểu được rằng: **Dù hành động rất quan trọng trong việc thực hiện ước mơ, nhưng kết quả luôn đóng vai trò quan trọng hơn**. Dù thế nào đi nữa, bạn cũng không bao giờ được quên mục tiêu cuối cùng. 
  <br></br>**X (Action) = Y (Why)**
  <br></br>Bạn phải luôn nhớ rằng **Hành Động = Lý Do** - những điều mà bạn muốn đạt được sẽ quyết định hành động của bạn. Khi bạn có đủ lý do, hành động sẽ tự đến với bạn. Bạn sẽ tự động nỗ lực nhiều hơn và ngọn lửa động lực đó sẽ tiếp tục được duy trì.`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632388562/Galatek.io%20Website/IMG_6519_1_dd5iaq.jpg",
  leftAlt: "Hinh anh minh hoa Finxo 1",
};

const textTwo = {
  rightCaption: "Động Lực & Hành Động",
  rightTitle: "Mục tiêu sẽ quyết định động lực và hành động của bạn.",
  rightDescription: `Vậy thế nào mới là một lý do đủ lớn? Thế nào mới là một mục tiêu sẽ giúp bạn duy trì động lực? 
  <br></br>Sang đã nghiên cứu, trải nghiệm rất nhiều và cuối cùng rút ra được kết luận rằng: **Sự cụ thể của mục tiêu sẽ quyết định động lực và hành động của bạn**. Nói cách khác, đôi khi, bạn từ bỏ không phải vì mục tiêu của bạn quá nhỏ bé, mà là nó quá mơ-hồ. Bạn cần biến nó thành con số - thứ mà bạn có thể đo lường được và chia nhỏ nó ra được.
  <br></br>Đó cũng là bí mật thành công của những tỷ phú tự thân. Không ai thành công khi tầm nhìn của họ chưa rõ ràng. Chỉ khi có một mục tiêu đủ cụ thể, chỉ khi họ biết rất rõ họ đang tranh đấu cho cái gì, họ mới có thể tạo ra một môi trường khắc nghiệt để không ngừng nỗ lực trong đó. 
  <br></br>Bạn sẽ không bao giờ nản lòng khi bạn biết rằng mình nỗ lực đến đâu là đủ, khi bạn kiểm soát rất chặt chẽ số giờ làm việc, khi bạn có thể quy từng giây làm việc của mình ra tiền. Chúng ta vốn dĩ không sợ hãi việc cố gắng, chúng ta chỉ sợ rằng mình không biết phải cố gắng bao nhiêu cho đủ. **Vì thế, để gia tăng động lực trong bạn, để bạn không bao giờ bỏ cuộc nữa, bạn buộc phải cụ thể hóa mục tiêu của mình và nếu được, hãy biểu diễn nó thành con số.**`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802600/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_ikmqaj.jpg",
  rightAlt: "Hinh anh minh hoa Finxo 2",
};

const textThree = {
  leftCaption: "Hiện Thực Hoá Ước Mơ",
  leftTitle: "Đặt Mục Tiêu Bằng Con Số Cụ Thể",
  leftDescription: `Sang lấy một ví dụ đơn giản mà bạn có thể áp dụng: 
  <br></br>Giả sử, bạn đặt mục tiêu mình phải kiếm được **10 triệu/tháng**. Bạn nghĩ con số này đủ cụ thể để phấn đấu chưa? Chưa đâu. **Bạn phải chia nhỏ con số 10 triệu ra thành từng ngày**.
  <br></br>Giả sử bạn có **4 ngày nghỉ/tháng**, như vậy bạn chỉ làm việc **26 ngày**. Khi đó, mỗi ngày bạn phải kiếm được đâu đó **385.000 VNĐ**. Đủ cụ thể chưa? Vẫn chưa. Bạn phải chia nhỏ con số này thêm nữa. 
  <br></br>Bạn làm việc trung bình **8 tiếng/ngày**, như vậy bạn phải kiếm được ít nhất **48.000 VNĐ/giờ** thì mới có thể có mức thu nhập **10 triệu/tháng**. 
  <br></br>Song, không phải lúc nào bạn cũng có thể tập trung làm việc trong 8 tiếng. Nếu như vậy, bạn phải **kiếm nhiều hơn 48.000 VNĐ/giờ** để đảm bảo mức lương. Sang lấy **48.000 VNĐ x 3**, như vậy bạn phải kiếm được khoảng **145.000 VNĐ/giờ**. 
  <br></br>Tại sao Sang nhân 3? Bởi vì khi bạn đặt mục tiêu mỗi ngày, mỗi giờ cao hơn, thì mục tiêu sau cùng của bạn sẽ luôn nằm trong tầm tay. Cuộc sống luôn chứa đầy những biến số. **Khi đặt mục tiêu cao hơn, kết quả chung cuộc sẽ bớt bị những biến số này ảnh hưởng**.
  <br></br>**Vậy là bạn đã biết mình cần kiếm được 145.000 VNĐ/giờ làm việc để đạt được mục tiêu**. Một con số quá cụ thể. Nhìn vào con số này, bạn biết ngay mình cần phải làm gì. Đây là lúc bạn đi tìm những công việc, ngành nghề có thể giúp bạn kiếm được 145.00 VNĐ/giờ. Bên cạnh đó, bạn cũng có thể học thêm các kỹ năng mới, các kỹ năng cần thiết trong thời đại 4.0 mà bất kỳ công ty nào cũng cần như kỹ năng Marketing, xây dựng Phễu Marketing,...`,
  leftImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1632385535/Galatek.io%20Website/IMG_4434_qpajd4.jpg",
  leftAlt: "Hinh anh minh hoa Finxo 3",
};

const textFour = {
  rightCaption: "Câu Chuyện",
  rightTitle: "Can Đảm Nhìn Thẳng Vào Mục Tiêu",
  rightDescription: `**Quy luật là: Khi bạn đã có một mục tiêu cụ thể, bạn sẽ ngay lập tức biết được mình cần phải làm gì.**
  <br></br>Sang có một người bạn là CEO, anh ấy đến than thở với Sang rằng anh thực sự muốn tổ chức một lễ cưới trang trọng, hoàng tráng, nhưng anh không biết phải bắt đầu từ đâu và phải cố gắng bao nhiêu để có được hôn lễ trong mơ của mình. 
  <br></br>Lời khuyên của Sang dành cho người bạn này là: Đầu tiên, anh ấy phải tính được tổng chi phí cho hôn lễ trong mơ đó, từ đầu tới cuối, là bao nhiêu. **Bạn phải nhìn thẳng vào mục tiêu của mình, sẵn sàng đối diện dù cho con số có khổng lồ và khiến bạn e sợ. Nếu bạn không rõ về những gì mình muốn đạt được, không bao giờ bạn đạt được điều đó**. Nghe Sang, anh ấy đã làm theo, và khi gặp lại, anh đã nói với Sang rằng: *"Bây giờ em mới hiểu tại sao anh nói em làm vậy"*. 
  <br></br>**Khi bạn có một con số, bạn có thể review nó mỗi ngày, mỗi tuần, mỗi tháng. Bạn có tín hiệu để biết rằng mình đang đến gần với mục tiêu**. Sau khi tổ chức xong đám hỏi, người bạn CEO của Sang rất tự tin nói với Sang rằng lễ cưới trong mơ đó sẽ trở thành hiện thực. Vì đã có con số để kiểm soát, người bạn của Sang không còn gì phải lo lắng nữa, do đó, anh có nhiều thời gian hơn dành cho gia đình và bản thân.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1625651836/Galatek.io%20Website/IMG_8057-1024x682_fa7z6z.jpg",
  rightAlt: "Hinh anh minh hoa Finxo 4",
};

const textFive = {
  titleFirst: "Đã Đến Lúc Bắt Tay Vào Hành Động",
  titleSecond: "Lên Kế Hoạch & Kiểm Soát Tài Chính",
  description: `Người Eskimo có câu: **"Bão là thời gian thích hợp để đi bắt cá"**. Trong tình trạng mọi hoạt động trên thế giới dường như đều đóng băng do COVID, đây là lúc bạn rèn luyện bản thân để bứt phá. Hãy tranh thủ thời gian này để học và phát triển các kỹ năng. Hãy cụ thể hóa những mục tiêu để bạn có thể dễ dàng đạt được chúng hơn. Khi mọi thứ bình thường trở lại, bạn sẽ thấy, bạn đã đi xa hơn một đoạn rất dài so với các đối thủ của mình.
  <br></br>**Để hỗ trợ bạn thiết lập mục tiêu, cụ thể hóa mục tiêu và review mỗi ngày, Sang đã phát triển một công cụ tài chính có tên là Financial Calculator. Công cụ này sẽ đồng hành cùng bạn trên chặng đường chinh phục mục tiêu. Sang đã hướng dẫn nhiều người thực hiện theo công thức và ai cũng gặt hái thành công.**`,
  buttonName: "Truy Cập Ngay",
  buttonSrc: "/form",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1633357982/Galatek.io%20Website/maxresdefault_aclyzs.jpg",
  alt: "Video Sang Le & Galatek Success",
  videoSrc: "https://youtu.be/E_4epjA6wyo",
};

const textSix = {
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

function FinX0() {
  return (
    <Layout>
      <HeroWithAngelImageOnRight {...hero} />
      <div id="read-more" />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
      <BrandPanelWithAppScreenShot {...textFive} />
      <BrandPanelWithOverlappingImage {...textSix} />
    </Layout>
  );
}

export default FinX0;
