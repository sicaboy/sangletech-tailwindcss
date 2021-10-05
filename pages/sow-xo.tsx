import React from "react";
import Hero from "../components/sections/heroes/with_sign_up_and_media_content";
import AlternativeSideBySideWithVideoOrImg from "../components/alternative-side-by-side-with-video-img";
import Layout from "../components/layout";
import BrandPanelWithAppScreenShot from "../components/sections/cta-sections/brand_panel_with_app_screenshot";
import BrandPanelWithOverlappingImage from "../components/sections/cta-sections/brand_panel_with_overlapping_image";

function SowXO() {
  const hero = {
    caption: "Câu Chuyện",
    titleNormal: " Là Gì?",
    titleHighlight: "Hành Trình Làm Giàu X.0",
    description: `*Ba ơi, làm sao học dở mà vẫn giàu hả ba?* 
    <br></br>Sang tự thấy rằng trong cuộc đời mình, có rất nhiều khoảnh khắc làm thay đổi tất cả. Một trong những cột mốc đó là lúc Sang hỏi ba của mình câu hỏi trên. Một câu hỏi buồn cười đúng không? Nhưng hồi đó Sang thắc mắc như thế thật. Không chỉ học dở, Sang còn nghiện chơi game nữa. Nhưng mà còn nhỏ mà, nên Sang ngang ngược lắm. Học dở thì học dở, nghiện game thì nghiện game, chứ vẫn muốn giàu.
    <br></br>Bạn biết ba trả lời Sang thế nào không?
    <br></br>**- Con tự đi tìm con đường đó đi. Chỉ cần đừng bỏ cuộc là được!**
    <br></br>Lúc đó còn nhỏ, Sang chỉ thấy thật kỳ lạ khi ba không đưa cho mình một câu trả lời rõ ràng, trong khi không hề biết rằng, trong câu nói lấp lửng nửa đùa nửa thật đó của ba đã có sẵn đáp án.`,
    imgSrc:
      "https://res.cloudinary.com/sang-le-tech/image/upload/v1628152808/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_ucdad0.png",
    videoSrc: "posts/video-hanh-trinh-lam-giau",
    videoCaption: `Hành Trình Làm Giàu X.0`,
    alt: "Sang Le - Video JOW",
  };

  const textOne = {
    leftCaption: "Khoảnh Khắc Lột Xác",
    leftTitle: "Giây Phút Quyết Định Cuộc Đời Sang",
    leftDescription: `Bẵng đi một thời gian, Sang vẫn... học dở, và vẫn là học sinh cá biệt như ngày nào. Sang không nói quá lên đâu. Ký ức mà Sang nhớ nhất từ lớp Sáu tới lớp Mười là vô phòng thi được các bạn chỉ bài – tất cả các môn, bao gồm cả môn máy tính. Giữa năm lớp 12, Sang được ba cho qua Singapore để học tiếng Anh, một bước chuẩn bị trước khi đi Mỹ du học. **30 ngày ở Singapore, Sang chơi game hết 30 ngày.** Ngày cuối cùng, cô chủ nhà hốt hoảng, hỏi Sang tại sao qua Singapore 30 ngày rồi mà vẫn chưa đi xin giấy nhập học để kéo dài thời hạn visa. Sang thảng thốt. <br></br>Như mọi khi, Sang nghĩ rằng luôn có người ở đó lo cho mình. **Kết quả là Sang bị "đuổi" về Việt Nam.** 30 ngày ở Singapore, Sang chẳng làm được gì cả. Ý tưởng về cái chết đến với Sang như một lựa chọn hiển nhiên. Sang không dám đối diện với ba mẹ và bạn bè. Sang bước ra ban công, suýt nữa đã nhảy xuống. **Nhưng có tiếng nói bên trong giữ Sang lại.** Sang gọi điện về cho ba, xin lỗi ba, và hứa sẽ trở thành một con người khác. Sau khi bị "đuổi" về Việt Nam, Sang bay lại qua Singapore...`,
    leftImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/30eee9fd-601a-484f-9acc-38cc9c05d0e1.png?w=1500&f=webp",
    leftAlt: "Hinh anh Sang Le voi xe o to",
  };

  const textTwo = {
    rightCaption: "Cuộc Lội Ngược Dòng Của Sang",
    rightTitle: "Xuất Phát Sau Cũng Không Sao. Chạy Nhanh Hơn Là Được",
    rightDescription: `Có một câu mà Sang thấy rất hay và rất đúng với cuộc đời mình, đó là: **Khi rơi xuống vực thẳm, bạn chỉ còn một đường duy nhất, đó là leo lên. Nói cách khác, khi bạn đã chạm đáy, bạn chỉ có duy nhất một sự lựa chọn, đó là tìm cách trèo lên.** <br></br>Thời gian ở Sing và Hồng Kông, Sang cắm mặt vào những cuốn sách, kéo "vali" đi học vì phải đựng quá nhiều sách vở, và học miệt mài từ sáng đến tối. Sang luôn giữ trong mình ý nghĩ: *"Mình không giỏi, vì thế mình phải cố gắng hơn người khác, nghiêm khắc với bản thân hơn người khác."* Cứ thế, sau nhiều năm, Sang tham gia biết bao nhiêu chương trình, đọc biết bao nhiêu sách, đi biết bao nhiêu nước. Cho đến khi có một người khen Sang, với những tính từ mà thậm chí Sang còn không nghĩ rằng những điều đó đang mô tả về mình. **Thì ra, Sang đã không còn là cậu nhóc học dở, sống không mục đích và nghiện game ngày nào nữa.**
    <br></br>Sang bất giác nhận ra một điều, rằng **khi bạn siêng năng và không bỏ cuộc, điểm xuất phát của bạn trở nên ít quan trọng.** Bởi vì bạn sẽ sớm bỏ xa điểm xuất phát ấy khi đã có đủ quyết tâm. Sang tin rằng, có lẽ ba của Sang đã biết trước điều này, nên ông mới bảo Sang tự đi tìm con đường, "chỉ cần không bỏ cuộc là được". Hóa ra khi bạn không bỏ cuộc, khi bạn đủ quyết tâm, thì con đường mà bạn chọn và trạng thái hiện tại của bạn chỉ trở thành điều thứ yếu. <br></br>Xuất phát sau cũng không sao. Chạy nhanh hơn là được!
    <br></br>Điều thú vị là, khi Sang đi tìm câu trả lời cho câu hỏi: *"Ba ơi, làm sao học dở mà vẫn giàu hả ba?"*, Sang lại thu hoạch được những thành quả khác. Sang mường tượng toàn bộ quá trình mà mình đã đi qua giống như một hành trình đi tìm kho báu – ở đó, người ta đồn rằng, có rất nhiều vàng. Nhưng khi đến nơi, Sang không chỉ tìm thấy vàng, mà còn nhìn thấy rất nhiều kim cương – thứ đáng giá hơn vàng rất nhiều.
    <br></br>***Đó là câu trả lời cho một câu hỏi thậm chí còn quan trọng hơn.***
`,
    rightImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/d508c9e1-75af-4c14-bcd4-eb63b26317f5.png?w=1500&f=webp",
    rightAlt: "Hinh anh Sang Le voi laptop",
  };

  const textThree = {
    leftCaption: "Tấm Bản Đồ Dành Cho Bạn",
    leftTitle:
      "Liệu Có Một Tấm Bản Đồ Dẫn Đến Một Cuộc Sống Thịnh Vượng Không?",
    leftDescription: `Nếu bạn có trong tay tấm bản đồ ấy thì sao? Có cách nào để bạn – người không trải qua những chuyện như Sang – có được kết quả như Sang đang có hay không?
    <br></br>Sang thường nói rằng, **nếu có tấm bản đồ đó trong tay, con đường dẫn đến thành công của bạn sẽ giống như đường cao tốc.** Bạn sẽ không phải đụng ổ gà như Sang, đạp trúng đinh tán như Sang, bị xẹp lốp xe giữa đường và phải loay hoay đi tìm tiệm sửa xe như Sang. Vì Sang đã trải qua và đã trả giá, nên cái giá mà bạn phải trả sẽ “rẻ” hơn rất nhiều.
    <br></br>Và Sang gọi hành trình đó – hành trình mà bạn sắp đi qua;
    <br></br>Đó chính là: 
    <br></br>**Hành Trình Làm Giàu X.0.**`,
    leftImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/ac4ca78f-1555-4abd-8bff-315ec71e1f67.png?w=288&f=webp",
    leftAlt: "Hinh anh Logo Hanh Trinh Lam Giau X.0",
  };

  const textFour = {
    rightCaption: "Viên Kim Cương X.0",
    rightTitle: "4 Chặng Đường - Hành Trình Làm Giàu X.0",
    rightDescription: `Hành trình này gồm có 4 chặng đường: 
    <br></br>◈   **Tư Duy**
    <br></br>◈   **Kỹ Năng**
    <br></br>◈   **Sự Nghiệp**
    <br></br>◈   **Đầu Tư**
    <br></br>4 chặng đường này liên kết chặt chẽ với nhau như một viên kim cương giúp bạn làm giàu trong Thời đại 4.0 một cách bền vững nhất! 
    <br></br>VÀ, Sang sẽ là người đồng hành cùng bạn xuyên suốt Hành trình này.`,
    rightImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/8e3cf606-6154-4ea5-993f-643ca4b9312a.png?w=240&f=webp",
    rightAlt: "Logo Hanh Trinh Lam Giau Chu Thich Tung Chang Duong",
  };

  const textFive = {
    leftCaption: "Chặng #1",
    leftTitle: "TƯ DUY",
    leftDescription: `Tư duy cũng như nền móng của một căn nhà: Nhà càng cao, nền móng phải càng vững. Sang luôn quan niệm rằng, **tư duy của một người cao đến đâu thì tài chính của họ cũng cao đến đó**. 
    <br></br>Và hãy nhớ rằng, đây là mối quan hệ suy ra, không phải mối quan hệ tương đương. Có nghĩa, tư duy quyết định tài chính, chứ không phải ngược lại. Nếu tài chính của bạn hiện đang ở mức 5, nhưng bạn đã đọc nhiều sách, tiếp xúc với những bộ não hàng đầu, có trí thông minh vượt trội, vì thế, tư duy đã ở mức 7; thì đến một lúc nào đó, tài chính của bạn cũng sẽ tự động tăng lên mức 7. Ngược lại, nếu tư duy của bạn ở mức 4, nhưng vì may mắn mà trúng số, tài chính đột ngột tăng lên mức 8; thì một thời gian sau, tài chính của bạn chắc chắn cũng sẽ trở về mức 4 như ban đầu nếu bạn không chịu trau dồi tư duy.
    <br></br> **Trong Chặng 1 này, Sang sẽ liệt kê và hướng dẫn bạn cách tư duy như người thành công. Họ có những thói quen gì? Mối quan tâm của họ là gì? Và với họ, điều gì làm nên sự thịnh vượng của một người?**`,
    leftImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/6cf4a796-b37e-4de5-8792-726d4ff6d7c2.png?w=192&f=webp",
    leftAlt: "Logo Chang Duong 1",
  };

  const textSix = {
    rightCaption: "Chặng #2",
    rightTitle: "KỸ NĂNG",
    rightDescription: `Như đã nói ở những phần trước, **Sang tin rằng Thời đại 4.0 này là Thời đại của kỹ năng**. Sự xuất hiện của đại dịch lại càng tô đậm thêm đặc điểm của kỷ nguyên mới này. Hàng loạt người mất việc đã chứng minh một điều rằng, trong Thời đại kỹ năng, đặc biệt là khi các doanh nghiệp lâm vào khó khăn, thị trường lao động không thể khoan hồng cho những người thiếu-kỹ-năng như trước.
    <br></br>Nghe thật đáng sợ, đúng không? Nhưng hãy tưởng tượng xem, nếu bạn có trong tay những kỹ năng mà công ty nào cũng cần trong thời đại này, liệu bạn có là một trong những người bị bỏ lại phía sau? Chắc chắn là không! Khi quá nhiều người đã bị bỏ lại, thì người giỏi sẽ được ở lại. Thậm chí, bạn không phải phụ thuộc vào bất cứ công ty nào, hoàn toàn làm chủ thời gian và tài chính của bản thân.
    <br></br>**Không ai sinh ra đã biết lập trình hay viết lách. Đã gọi là “kỹ năng” thì bạn hoàn toàn có thể học được. Khi những kỹ năng này cho phép bạn tự do tài chính, bạn có thể tự do theo đuổi đam mê!**`,
    rightImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/d6fc4b85-b264-4a44-8fd2-4c761b2bfd14.png?w=192&f=webp",
    rightAlt: "Logo Chang Duong 2",
  };

  const textSeven = {
    leftCaption: "Chặng #3",
    leftTitle: "SỰ NGHIỆP",
    leftDescription: `Khi đã có Tư duy và Kỹ năng, đây là lúc bạn đứng giữa ngã ba đường. Bạn phải quyết định, rốt cuộc mình muốn làm chủ hay sẽ cống hiến cho một tổ chức nào đó. Sang sẽ không là người quyết định chuyện này thay bạn, vì chỉ có bạn biết rốt cuộc mình muốn gì. Như Sang đã nói, chỉ cần bạn đủ giỏi, bạn sẽ có được sự tự do và sự tự tin. 
    <br></br>Trở thành một ông chủ không có nghĩa là bạn hoàn toàn làm chủ, vì nếu thiếu tư duy và kỹ năng, bạn vẫn phải phụ thuộc vào những người có tư duy cao hơn bạn, kỹ năng chắc hơn bạn. Làm thuê không “ai oán” như những gì người ta thường nói, làm thuê không có nghĩa là ai đó thuê bạn xây ước mơ của riêng họ. **Vì nếu bạn đủ Tư duy và Kỹ năng, bạn có sự tự do để rời đi khi cảm thấy không còn đồng điệu về mặt giá trị**.`,
    leftImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/603e2ecf-ee76-4c6a-87d7-84fcd735d74d.png?w=192&f=webp",
    leftAlt: "Logo Chang Duong 3",
  };

  const textEight = {
    rightCaption: "Chặng #4",
    rightTitle: "ĐẦU TƯ",
    rightDescription: `Rất nhiều người nghĩ rằng, chỉ khi bạn giàu có, bạn mới nên đầu tư. Nhưng Sang không nghĩ vậy. Sang lại nghĩ rằng, chỉ khi đầu tư, thì bạn mới giàu có.
    <BR></BR>Rốt cuộc thì, nếu không có Chặng 4 này, mọi thứ sẽ kết thúc ở Chặng 3, khi bạn nghĩ rằng có được sự nghiệp là có được tất cả. Nhưng nếu bạn đi tiếp đến Chặng 4, dùng 20 - 30% những gì tích lũy được ở Chặng 3 để đầu tư ngược lại vào những khía cạnh mà bạn quan tâm như giáo dục cho bản thân, tài chính, sức khỏe… thì bạn sẽ lặp lại quá trình trên: Bạn sẽ có tư duy mới, kỹ năng mới, sự nghiệp lên đến một tầm cao mới, và lại một lần nữa đầu tư để có tư duy mới, kỹ năng mới,… Cứ thế.`,
    rightImgSrc:
      "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/4510334a-00b8-463c-a320-b0bd52b50ba8.png?w=192&f=webp",
    rightAlt: "Logo Chang Duong 4",
  };

  const textNine = {
    titleFirst: "Khám Phá Bản Thân",
    titleSecond: "Cùng You X.0",
    description: `**Bạn có muốn khám phá bản thân và sứ mệnh cuộc đời mình thông qua Ứng dụng THẦN SỐ HỌC ĐẦU TIÊN tại Việt Nam?**
    <br><br>⟐  Tìm hiểu về những bí ẩn của các con số trong Ngày tháng năm sinh và Họ tên của Bạn để biết bạn thật sự là ai và sứ mệnh của bạn là gì. 
    <br><br>⟐  Nhìn nhận thế giới xung quanh Bạn từ một góc độ khác và cho phép Bạn tập trung phát triển những mặt tích cực ở bản thân.`,
    buttonName: "Xem ngay thông tin Thần Số Học",
    buttonSrc: "/you-xo",
    imgSrc:
      "https://res.cloudinary.com/sang-le-tech/image/upload/v1628236893/Galatek.io%20Website/logo-04_r3vutm.png",
    alt: "Logo You X.0",
  };

  const textTen = {
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

  return (
    <Layout>
      <Hero {...hero} />
      <AlternativeSideBySideWithVideoOrImg {...textOne} {...textTwo} />
      <AlternativeSideBySideWithVideoOrImg {...textThree} {...textFour} />
      <AlternativeSideBySideWithVideoOrImg {...textFive} {...textSix} />
      <AlternativeSideBySideWithVideoOrImg {...textSeven} {...textEight} />
      <BrandPanelWithAppScreenShot {...textNine} />
      <BrandPanelWithOverlappingImage {...textTen} />
    </Layout>
  );
}

export default SowXO;
