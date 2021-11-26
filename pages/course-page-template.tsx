import React from "react";
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

const hero = {
  headline: "",
  shockingStatement: "",
};

const problem = {
  defineTheProblem: "",
  agitate: "",
};

const solution = {
  headline: "",
  description: "",
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
    <div>
      <Hero />
      <CallToAction />
      <Countdown />
      <Problem />
      <Solution />
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
    </div>
  );
}

export default CoursePageTemplate;
