import React from "react";
import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import Layout from "../components/Layout";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";

const hero = {
  titleHighlight: " PRO X.0",
  titleNormal: "Ứng Dụng Học Trực Tuyến 4.0",
  description: `**Trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê**`,
  buttonNormal: "Tìm Hiểu Thêm",
  buttonHighlight: "Truy Cập Ngay",
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
  rightDescription: `Sau hơn 10 năm làm việc với các doanh nghiệp lớn nhỏ cũng như nhiều khởi nghiệp trong và ngoài nước, Sang luôn mong muốn chia sẻ lại cho bạn tất cả những kinh nghiệm mà Sang có được thông qua **PRO X.0**.
  <br></br>**PRO X.0** là 1 nền tảng học trực tuyến mới đầy thú vị được tạo ra bởi Sang Lê. Với các chương trình giảng dạy từ phát triển cá nhân đến kinh doanh online, giúp bạn **bước đi tự tin trong thời đại 4.0**. 
  <br></br>Tất cả đều được cung cấp trên một nền tảng học tập trực tuyến mang tính giải trí, học cùng một cộng đồng và hành động nhỏ mỗi ngày để **tạo ra những kết quả mới cho bản thân và công việc kinh doanh của bạn** theo những cách mà chương trình học truyền thống không thể làm được.`,
  rightImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1626085142/Galatek.io%20Website/3D-Freelancers-illustration0026_axgh6x.png",
  rightAlt: "Hinh anh minh hoa Proxo 3",
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
  buttonName: "Xem thông tin Thần Số Học của Tôi",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1628152810/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_c2ukh5.png",
  alt: "Video Demo Fin X.0",
  videoSrc: "#",
};

const textSix = {
  title: "Tại sao cuốn sách của Sang được gọi là BÍ MẬT LÀM GIÀU X.0?",
  description: `**BẠN CÓ MUỐN ĐỌC THỬ SÁCH ĐIỆN TỬ ĐỘC QUYỀN TỪ SANG?**
    <br><br>⟐  Làm sao để đứng vững trong Kỷ nguyên 4.0 và Hậu Đại dịch?
    <br><br>⟐  Làm sao để giải phóng tiềm năng của những người trẻ có đam mê?
    <br></br>⟐  Những ý tưởng và những chiến lược mà Sang rút ra từ những doanh nhân tiếng tăm nhất trên thế giới?`,
  buttonName: "Tìm hiểu thêm về Sách",
  imgSrc:
    "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/c2a88c54-5779-493d-83ec-1d2d5429021f.jpg?w=240&f=webp",
  alt: "Hinh anh Book Cover",
};

function FinX0() {
  return (
    <Layout>
      <HeroWithAngelImageOnRight {...hero} />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
      <BrandPanelWithAppScreenShot {...textFive} />
      <BrandPanelWithOverlappingImage {...textSix} />
    </Layout>
  );
}

export default FinX0;
