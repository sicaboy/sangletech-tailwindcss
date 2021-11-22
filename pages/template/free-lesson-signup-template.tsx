import React from "react";
import Layout from "../../components/layout";
import * as Icon from "@heroicons/react/outline";
import CallToAction from "../../components/course/call-to-action-bar";
import Curriculum from "../../components/course/curriculum";
import MeetYourCoach from "../../components/course/meet-you-coach";
import Stories from "../../components/course/stories";
import HeroWithSignUp from "../../components/hero-with-signup"
import WatchPreview from "../../components/watch-preview"


const hero = {
  description: ``,
  caption: "",
  titleHighlight: "",
  imgSrc: "",
  alt: "",
  termUrl: "",
  cookieUrl: ""
}

const watchPreview = {
  vimeoVideoId: "534879325"
}

// export default Hero
// export default WatchPreview

const callToAction = {
  courseLength: "",
  dateStart: "",
  buttonName: "",
};

const curriculum = {
  general: {
    direction: "left", // left or right
    caption: "Nội Dung Lớp Học",
    title: "Tên Khóa Học",
    description: `The Superbrain Quest is a 30-day daily coaching program with accelerated learning coach Jim Kwik. In just 15 - 20 minutes a day, you’ll join Jim as he guides you through his signature tools and techniques for supercharging your memory, focus, and learning capacity.

The program is designed to be both easy to follow, and instantly transformational. As you progress through the days, you’ll quickly notice tangible changes in your memory and mind power - and the people around you likely will too.

By the end of the program, your ‘Superbrain’ will be permanently installed into you: allowing you to access your newfound inner gifts whenever and wherever you need them.
`,
    imgSrc:
      "https://storyblok-cdn.mindvalley.com/f/60579/2068x1110/37b76048b1/sb_sp_devices_curriculum.png?trans?quality=30&dpr=2&width=752",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
  details: [
    {
      section: `**Section 1** : What's the best thing about Switzerland?`,
      topic: `<span className="text-lg text-indigo-500">**Highlight include:** </span><br></br>
      **<span className="mr-3 text-indigo-500">✓</span>   Nếu Bạn là doanh nhân muốn kinh doanh sản phẩm Online** thông qua Phễu Bán Hàng.
   `,
    },
    {
      section: `**Section 2** : What's the best thing about Switzerland?`,
      topic: `<span className="text-lg text-indigo-500">**Highlight include:** </span><br></br>
      **<span className="mr-3 text-indigo-500">✓</span>   Nếu Bạn là doanh nhân muốn kinh doanh sản phẩm Online** thông qua Phễu Bán Hàng.
   `,
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

function FreeLessonSignedUp() {
  return (
    <Layout>
      <HeroWithSignUp {...hero} />
      <CallToAction {...callToAction} />
      <WatchPreview {...watchPreview} />
      <Curriculum general={curriculum.general} details={curriculum.details} />
      <MeetYourCoach />
      <Stories stories={stories} />
      <HeroWithSignUp />
    </Layout>
  );
}

export default FreeLessonSignedUp;
