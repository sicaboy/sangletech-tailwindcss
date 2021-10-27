import React from "react";
import * as Icon from "@heroicons/react/outline";

import Hero from "../../components/course/hero";
import CallToAction from "../../components/course/call-to-action-bar";

import Solution from "../../components/course/solution";
import Problem from "../../components/course/problem";
import MeetYourCoach from "../../components/course/meet-you-coach";
import Stories from "../../components/course/stories";
import WhatWillYouLearn from "../../components/course/what-you-will-learn";
import Requirement from "../../components/course/requirement";
import Curriculum from "../../components/course/curriculum";
import Bonus from "../../components/course/bonus";
import Testimonial from "../../components/course/testimonials";
import Guarantee from "../../components/course/guarantee";
import Summary from "../../components/course/summary";
import ProXOFeatures from "../../components/course/proxo-feature";
import Pricing from "../../components/course/pricing";
import FAQ from "../../components/course/faq";
import FreeLesson from "../../components/course/free-lesson";
import Countdown from "../../components/course/countdown";
import BuyerToastify from "../../components/course/buyer-toastify";

import ButtonPurchaseNow from "../../components/button";
import Layout from "../../components/layout";
import IsThisCourseForYou from "../../components/course/is-this-course-for-you";

const hero = {
  caption: "",
  headline: "",
  shockingStatment: ``,
  imgSrc: "",
  videoSrc: "",
  videoCaption: ``,
  alt: "",
};

const callToAction = {
  courseLength: "",
  dateStart: "",
  buttonName: "",
};

const countDownMins = 10; // mins

const problem = {
  defineTheProblem: {
    leftCaption: "THỰC TẾ",
    leftTitle: "Bạn Có Biết?",
    leftDescription: ``,
    leftImgSrc: "",
    leftAlt: "",
  },
  agitate: {
    rightCaption: "VẤN ĐỀ",
    rightTitle: "",
    rightDescription: ``,
    rightImgSrc: "",
    rightAlt: "",
  },
};

const solution = {
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

const whatWillYouLearn = {
  general: {
    caption: "Gía trị",
    title: "Bạn Sẽ Học Được Gì Từ Khoá Học Này?",
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

const isThisCourseForYou = {
  direction: "left", // left or right
  caption: "BẠN CÓ PHÙ HỢP?",
  title: "Khoá Học Này Dành Cho Những Ai?",
  description: `**✓   Nếu Bạn là doanh nhân muốn kinh doanh sản phẩm Online** thông qua Phễu Bán Hàng.
  <br></br>**✓   Nếu Bạn là một dân Marketing** muốn tự động hóa hoạt động kinh doanh Online của mình. 
`,
  imgSrc: "",
  videoSrc: "",
  videoCaption: "",
  alt: "",
};

const requirement = {
  direction: "right", // left or right
  caption: "Yêu Cầu",
  title: "Bạn Cần Chuẩn Bị Gì Để Tham Gia Khóa Học?",
  description: `**✓**  Bạn phải có kết nối Internet với đường truyền tốt.
    <br></br>**✓**   Bạn phải có nơi để ghi chú và thực hành bài tập.
    <br></br>**✓**   Bạn phải có tinh thần sẵn sàng học hỏi những điều mới trong khoá học này và thực hành chúng trong các chiến lược Xây dựng Phễu Bán Hàng của chính bạn trong xuyên suốt quá trình tham gia khóa học.
    <br></br>**✓**   Bạn phải sẵn sàng đặt câu hỏi nếu bạn không hiểu điều gì đó khi tham gia khoá học.
`,
  imgSrc: "",
  videoSrc: "",
  videoCaption: "",
  alt: "",
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

const guarantee = {
  description: `<span className="text-3xl">**Try It For 15 Days Risk Free**</span>
<br></br>
Remember you don’t have to say YES right now. You only have to say MAYBE. Go through the materials for 15 days risk-free from the day of purchase. <br></br> You can refund yourself anytime with one click. No emails, no phone calls, no hassle. Just reach out through our Refund Page and get a full, friendly and fast refund. No questions asked.`,
  name: "Yunnie Nguyen",
  position: "Customer Happiness Manager",
  listItems: [
    {
      title: "Lifetime Access",
      description:
        "Join once, own it for life and repeat as often as you want.",
    },
    {
      title: "Free Upgrades",
      description: "We upgrade our program every year. All upgrades are free.",
    },
    {
      title: "Limited Time Discount",
      description:
        "You can join today for a special discount over regular pricing.",
    },
  ],
};

const proxoFeatures = {
  main: {
    direction: "left", // left or right
    caption: "Tính Năng Pro X.0",
    title: "Xây dựng dựa trên hệ thống Gamification – Vừa học vừa chơi",
    description: `Chắc hẳn bạn sẽ tự hỏi: “Vừa học vừa chơi là như thế nào? Sao tôi chưa từng nghe đến bao giờ?”

Khi bạn bước vào trò chơi của những Chiến Binh X.0, tất cả những hành động của bạn đều sẽ được **tính điểm dựa trên luật chơi và quy đổi ra những phần thưởng hấp dẫn.** Khi bạn hoàn thành tất cả bài học, thực hiện nhiệm vụ và vượt qua mọi thử thách, bạn sẽ nhận được **huy hiệu** và **chiến tích** xứng đáng nhất cho sự nỗ lực của chính mình!

Và đặc biệt hơn hết, **“Chiến lợi phẩm” iPhone 12 giá trị nhất** đang chờ đợi Chiến Binh mạnh mẽ và xứng đáng nhất!
`,
    imgSrc: "",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
  features: [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
    "Official member t-shirt",
    "Official member t-shirt",
  ],
};

const courseSummary = {
  heading: {
    caption: "",
    title: "Course Summary",
    description: ``,
  },

  features: [
    {
      name: "Invite team members",
      description:
        "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
    },
    {
      name: "Notifications",
      description:
        "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
    },
    {
      name: "List view",
      description:
        "Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.",
    },
    {
      name: "Boards",
      description:
        "Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.",
    },
    {
      name: "Keyboard shortcuts",
      description:
        "Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.",
    },
    {
      name: "Reporting",
      description:
        "Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.",
    },
    {
      name: "Calendars",
      description:
        "Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.",
    },
    {
      name: "Mobile app",
      description:
        "Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.",
    },
  ],
};

const pricing = {
  header: {
    caption: "",
    primaryTitle: "",
    primaryDescription: "",
    imgSrc: "",
    alt: "",
    secondaryTitle: "",
    secondaryDescription: "",
    listTitle: "",
  },

  includedBoth: [
    "Lifetime Access to the Entire Program and all Bonuses ",
    "Smartphone App (Apple or Android) to learn on the go ",
    "Desktop Version, iPad app and Apple TV ",
    "Lifetime Access to the Sup",
  ],
  single: {
    title: "",
    description: "",
    imgSrc: "",
    alt: "",
    promotedPrice: "",
    originalPrice: "",
    buttonName: "",
    list: [
      "The complete Superbrain Quest for accelerating your memory, focus, and learning",
      "30 days of coaching with leading accelerated learning coach Jim Kwik",
      "Easy weekly lessons & mentorship for awakening your mind’s fullest potential",
    ],
  },

  membership: {
    title: "",
    description: "",
    imgSrc: "",
    alt: "",
    promotedPrice: "",
    originalPrice: "",
    valueCaption: "",
    buttonName: "",
    list: [
      "Full access to this program, plus Mindvalley’s entire vault of programs (worth $15,000+) for a minuscule fraction of the price.",
      "Monthly mentoring and bite-sized virtual coaching with Mindvalley founder Vishen Lakhiani.",
      "Weekly live calls with today’s biggest names in personal growth and peak performance - including Gary Vee and Jay Shetty.",
      "Exclusive invites to our best real-world and virtual events - including Mindvalley University.",
      "Friendship, networking, and co-creation opportunities with the Mindvalley members, which includes our most passionate and committed students.",
      "Private exclusive social network to connect with Mindvalley Members across the globe.",
    ],
  },
  membershipPrograms: [
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
    { src: "https://dummyimage.com/500x300", alt: "sang le tech program" },
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

function CoursePageTemplate() {
  return (
    <Layout>
      <Hero {...hero} />
      <CallToAction {...callToAction} />
      <Countdown expiryTimestamp={countDownMins} />
      <Problem {...problem.defineTheProblem} {...problem.agitate} />
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
      <Stories />
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
      <Bonus />
      <ButtonPurchaseNow />

      {/* <Testimonial /> */}
      <Guarantee guarantee={guarantee} />
      {/* I am here */}

      <Summary
        features={courseSummary.features}
        heading={courseSummary.heading}
      />
      <Pricing pricing={pricing} />
      <Stories />
      <FAQ
        faqs={faqs.details}
        title={faqs.general.title}
        videoSrc={faqs.general.videoSrc}
        videoCaption={faqs.general.videoCaption}
        imgSrc={faqs.general.imgSrc}
        alt={faqs.general.alt}
      />
      {/* <Pricing /> */}
      <FreeLesson />
      <BuyerToastify />
    </Layout>
  );
}

export default CoursePageTemplate;
