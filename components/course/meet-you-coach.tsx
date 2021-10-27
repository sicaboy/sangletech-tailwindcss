/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import Hero from "../../components/sections/heroes/with_sign_up_and_media_content";
import MyAchievement2 from "../../components/sections/feature-sections/with_feature_list";
import Logos from "../../components/sections/logo-clouds/simple_with_heading_on_brand";
import Certificates from "../../components/gallery/gallery-3";
import MyAchievement from "./solution";
import * as Icon from "@heroicons/react/outline";
import GalleryTwo from "../../components/gallery/gallery-2";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

const hero = {
  caption: "Công Nghệ Bằng Cả Trái Tim",
  titleNormal: "Là Ai?",
  titleHighlight: "Sang Lê ",
  description: `Sang Lê – Một con người đã từng nghiện game và sống không có mục đích để trở thành một doanh nhân công nghệ và giáo dục như ngày hôm nay. Sang Lê muốn trao lại cho những con người có khát vọng và đam mê một cơ hội mới cho chính bản thân họ.<br></br>

Với cơ hội làm việc với những người thành đạt tại Việt Nam và nước ngoài – từ các CEO đến những nhà triệu phú – cuối cùng Sang đã giải mã được những bí mật mà Sang tin là sẽ giúp cho bạn đạt được thành công như họ.<br></br>

**Đây là những bí mật mà có lẽ bạn chưa từng được nghe đến, về là cách để tìm ra con người thật sự của chính bạn.**`,
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631863511/Galatek.io%20Website/Sangletech.com/maxresdefault_qiw40s.jpg",
  videoSrc: "/posts/video-khoanh-khac-cuoc-doi",
  videoCaption: `Câu chuyện về Khoảnh Khắc "Lộc Xác" đời Sang Lê`,
  alt: "Sang Le Tech - Video Khoanh Khac Cuoc Doi",
};

const myAchivement = {
  general: {
    caption: "Cách Giải Quyết",
    title: "",
    description: `Descrition here`,
  },
  details: [
    {
      name: "Title 1",
      description: "Description 1",
      icon: Icon.FilterIcon,
    },
    {
      name: "Title 2",
      description: "Description 2",
      icon: Icon.LightBulbIcon,
    },
    {
      name: "Title 3",
      description: "Description 3",
      icon: Icon.EyeIcon,
    },
    {
      name: "Title 4",
      description: "Description 4",
      icon: Icon.EmojiHappyIcon,
    },
    {
      name: "Title 5",
      description: "Description 5",
      icon: Icon.PresentationChartBarIcon,
    },
    {
      name: "Title 6",
      description: "Title 6",
      icon: Icon.SparklesIcon,
    },
  ],
};

// const myAchivement2 = {
//   caption: "Thành Tựu",
//   title: "Từ Sang Lê",
//   description: ``,

//   listOneTitle: false,
//   listOneDescription: `Học, sống và làm việc tại Singapore, Hồng Kông, Mỹ và Trung Quốc.`,

//   listTwoTitle: false,
//   listTwoDescription: `Hoàn thành lớp 11-12 với tấm bằng Canada trong 9 tháng thay vì 2 năm.`,

//   listThreeTitle: false,
//   listThreeDescription: `Tốt nghiệp đại học Mỹ trong vòng 2 năm 9 tháng thay vì 4-5 năm.`,

//   listFourTitle: false,
//   listFourDescription: `Có thể nói tiếng Anh, tiếng Trung Quốc và tiếng Hồng Kông.`,

//   listFiveTitle: false,
//   listFiveDescription: `Đồng sáng lập và là CEO Công ty Công nghệ Galatek Hồng Kông và Việt Nam.`,

//   listSixTitle: false,
//   listSixDescription: `Đồng sáng lập và là Phó Hiệu Trưởng trường Cao đẳng Kỹ Thuật Thiết Bị Y Tế Miền Nam.`,

//   listSevenTitle: false,
//   listSevenDescription: `Nhà sáng lập trang báo CafeS.vn.`,

//   listEightTitle: false,
//   listEightDescription: `Đưa các giải pháp công nghệ và quản lý cho công ty khởi nghiệp, vừa và nhỏ trong nước và quốc tế.`,

//   listNineTitle: false,
//   listNineDescription: `Làm việc với các lập trình viên tầm cỡ thế giới trên nền tảng Topcoders.`,

//   listTenTitle: false,
//   listTenDescription: `Được Mentor là 1 triệu phú người Singapore huấn luyện từ năm 19 tuổi.`,

//   listElevenTitle: false,
//   listElevenDescription: `Đã từng làm việc và gặp mặt với nhiều triệu phú và ngay cả tỷ phú ở nước ngoài và trong nước.`,

//   listTwelveTitle: false,
//   listTwelveDescription: `Xuất hiện trên các kênh của đài Saigon FM, Đài Truyền Hình Bình Dương, Bắc Ninh, HTV9, Yan News, truyền thông Khang và VIVU TV.`,
// };

const logos = {
  title: "Các Kênh Truyền Thông Đã Tham Gia",
  description: "",

  logoOneSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631872823/Galatek.io%20Website/Sangletech.com/20210322002340_Yantv_ehn2jn.png",
  logoOneAlt: "Yantv Logo",

  logoTwoSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631872985/Galatek.io%20Website/Sangletech.com/HTV9__282016-nay_29_o1bdfl.webp",
  logoTwoAlt: "Htv9 Logo",

  logoThreeSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873061/Galatek.io%20Website/Sangletech.com/69dda2def8ca1b5e9d8d1bc98d9d1e0f_uv1ylj.png",
  logoThreeAlt: "Kmedia Logo",

  logoFourSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873525/Galatek.io%20Website/Sangletech.com/10547129_1466047213649700_265444754095979044_o-removebg-preview_ubc7v9.png",
  logoFourAlt: "SaigonFm Logo",

  logoFiveSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873674/Galatek.io%20Website/Sangletech.com/unnamed-removebg-preview_qzjw11.png",
  logoFiveAlt: "Vivutv Logo",

  logoSixSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873719/Galatek.io%20Website/Sangletech.com/BTV_tw6qlw.png",
  logoSixAlt: "Btv Logo",

  logoSevenSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1631873777/Galatek.io%20Website/Sangletech.com/HTV7Logomoi_pmzlar.png",
  logoSevenAlt: "Htv7 Logo",
};

const certificates = {
  certificateOneImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627969581/Galatek.io%20Website/sangle-graduation-certificate0000.jpg_fxgjky.webp",
  certificateOneImgAlt: "Sang Le - Bang Cap 3",
  certificateOneTitle: "Bằng Cấp 3 của Canada",
  certificateOneDescription: `**Bằng cấp 3 Canada tại Hong Kong** (lớp 11 & 12) trong vòng **9 tháng** (thay vì 2 năm)`,

  certificateTwoImgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1627969582/Galatek.io%20Website/sangle-graduation-certificate0001.jpg_mm9rpt.webp",
  certificateTwoImgAlt: "Sang Le Tech - Bang Dai Hoc",
  certificateTwoTitle: "Bằng Đại học của Mỹ",
  certificateTwoDescription: `**Bằng Đại học tại Mỹ** chỉ sau **2 năm 9 tháng** (thay vì 4-5 năm)`,
};

const galleryOne = {
  info: {
    title: "Sang Đi Học",
    description: `Từ Các Công Ty Startup Công Nghệ Top Thế Giới`,
    caption: "Hình Ảnh",
  },
  imgs: [
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0003_f6hiix.jpg",
      alt: "Sang Le Tech - Pinterest Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_nqixhm.jpg",
      alt: "Sang Le Tech - Salesforce Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_qovql2.jpg",
      alt: "Sang Le Tech - Google Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800779/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0001_f9cckm.jpg",
      alt: "Sang Le Tech - Apple Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800780/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0006_csfqzp.jpg",
      alt: "Sang Le Tech - Zappos Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627800780/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0004_sjazaq.jpg",
      alt: "Sang Le Tech - Facebook Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802863/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0000_xvpmd7.jpg",
      alt: "Sang Le Tech - We Work Company",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627802600/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_chihny.jpg",
      alt: "Sang Le Tech - Uber Company",
    },
  ],
};
const galleryTwo = {
  info: {
    title: "Tham Dự Các Chương Trình",
    description: `Truyền hình & Sự kiện`,
    caption: "Hình Ảnh",
  },
  imgs: [
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615062/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0004_pcscsm.jpg",
      alt: "Hinh anh Sang Le Tech - Khoanh Khac Cuoc Doi 2",
    },
    {
      src: "https://res.cloudinary.com/sang-le-tech/image/upload/v1627895653/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0002_lzc8ui.jpg",
      alt: "Hinh anh Sang Le Tech - Livestream 1",
    },
    {
      src: "/assets/seo-kkcd-talk.jpg",
      alt: "inh anh Sang Le Tech - Khoanh Khac Cuoc Doi 1",
    },

    {
      src: "/assets/seo-kkcd-badge.jpg",
      alt: "Hinh anh Sang Le Tech - Khoanh Khac Cuoc Doi 1",
    },
    {
      src: "/assets/seo-saigonfm.jpg",
      alt: "Hinh anh Sang Le Tech - SaigonFM",
    },
  ],
};

export default function MeetYouTrainer() {
  const description = hero.description
    ? `<div class="note">

${hero.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;

  const SwiperCards = (props) => (
    <Swiper effect={"cards"} grabCursor={true} className="my-16 mySwiper">
      {props.imgs.map((img) => (
        <SwiperSlide>
          <img src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
      <p className="mt-1 text-sm text-center text-gray-500 dark:text-content-base">
        Kéo trái hoặc phải để xem
      </p>
    </Swiper>
  );

  return (
    <div>
      <Hero {...hero} />
      {/* <MyAchievement2 {...myAchivement2} /> */}
      <MyAchievement
        caption={myAchivement.general.caption}
        title={myAchivement.general.title}
        description={myAchivement.general.description}
        features={myAchivement.details}
      />
      <Logos {...logos} />

      {/* Images joining events */}
      <SwiperCards {...galleryTwo} />

      {/* Images in the states */}
      <SwiperCards {...galleryOne} />

      <Certificates {...certificates} />
    </div>
  );
}
