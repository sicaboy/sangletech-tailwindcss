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
import BuyerToastify from "../components/course/buyer-toastify";

import PurchaseNow from "../components/button";
import Layout from "../components/layout";

const hero = {
  headline: "",
  shockingStatement: "",
};

const callToAction = {
  courseLength: "",
  dateStart: "",
};

const countDownMins = 10; // mins

const problem = {
  defineTheProblem: "",
  agitate: "",
};

const solution = {
  general: {
    caption: "Cách Giải Quyết",
    title: "",
    description: ``,
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

const fact = {
  leftCaption: "THỰC TẾ",
  leftTitle: "Bạn Có Biết?",
  leftDescription: ``,
  leftImgSrc: "",
  leftAlt: "",
};

const problems = {
  rightCaption: "VẤN ĐỀ",
  rightTitle: "",
  rightDescription: ``,
  rightImgSrc: "",
  rightAlt: "",
};

function CoursePageTemplate() {
  return (
    <Layout>
      <Hero />
      <CallToAction />
      <Countdown expiryTimestamp={countDownMins} />
      <Problem {...fact} {...problems} />
      <Solution
        caption={solution.general.caption}
        title={solution.general.title}
        description={solution.general.description}
        features={solution.details}
      />
      <MeetYourCoach />
      <PurchaseNow />
      <Requirement />
      <Stories />
      <WhatWillYouLearn />
      <Curriculum />
      <Bonus />
      <PurchaseNow />
      <Testimonial />
      <Guarantee />
      <Summary />
      <ProXOFeatures />
      <Pricing />

      <Stories />
      <FAQ
        faqs={faqs.details}
        title={faqs.general.title}
        videoSrc={faqs.general.videoSrc}
        videoCaption={faqs.general.videoCaption}
        imgSrc={faqs.general.imgSrc}
        alt={faqs.general.alt}
      />
      <Pricing />
      <FreeLesson />
      <BuyerToastify />
    </Layout>
  );
}

export default CoursePageTemplate;
