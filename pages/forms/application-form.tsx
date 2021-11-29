import Layout from "../../components/layout";
import Smartie from "../../components/smartie";
import qs from 'querystring'
import { useState } from "react";
import { useRouter } from "next/router";
// import SignUpForm from "../../components/sign-up-form";

export default function Form() {
  return (
    <Layout>
      <Smartie />
      <SignUpForm />
    </Layout>
  );
}

function SignUpForm() {

  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // const [socialUrl, setSocialUrl] = useState("");
  // const [resumeUrl, setResumeUrl] = useState("");
  // const [introVideoUrl, setIntroVideoUrl] = useState("")
  // const [portfolioUrl, setPortfolioUrl] = useState("")

  const [applyPosition, setApplyPosition] = useState("")
  const [questions, setQuestions] = useState([
    { id: 1, question: "Tell us a bit about yourself. What is your own story?", answer: "" },
    { id: 2, question: "What kind of person are you?", answer: "" },
    { id: 3, question: "What do you understand about this position? What do you think are your strengths and weaknesses for the role?", answer: "" },
    { id: 4, question: "Why do we need you? Why are you suitable for this position?", answer: "" },
    {
      id: 5, question: "Why do you want to work with Sang team?", answer: ""
    }
  ])

  // TODO: YUnnie helps me to change the label to the questions plz. Tks!
  const [urls, setUrls] = useState([
    { label: "socialUrl label", url: "" },
    { label: "resumeUrl label", url: "" },
    { label: "portfolioUrl label", url: "" }
  ])
  const [introVideoUrl, setIntroVideoUrl] = useState({
    label: "videoUrl name label ", url: "none"
  }
  )
  const router = useRouter();

  //  update anwsers handler
  function onAnswerChange(event, index) {
    // console.log(`index: ${index}`)
    // console.log(`property name : ${event.target.name}`)

    let newArray = [...questions]
    newArray[index].answer = event.target.value;

    setQuestions(newArray)
  }

  // update urls hanlder
  function onUrlChange(event, index) {
    // console.log(`index: ${index}`)
    // console.log(`property name : ${event.target.name}`)

    let newArray = [...urls]
    newArray[index].url = event.target.value;

    setUrls(newArray)
  }

  function onVideoUrlChange(event) {
    let newObject = { ...introVideoUrl }
    newObject[0].url = event.target.value
    setIntroVideoUrl(newObject)
  }


  //For testing purposes only
  console.log(questions)
  console.log(urls)

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    //TODO: Need to create a new form and change the form url here
    const res = await fetch("/api/submit-application-form", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        socialUrl: urls[0].url,
        applyPosition,
        resumeUrl: urls[1].url,
        introVideoUrl: introVideoUrl.url,
        portfolioUrl: urls[2].url,
        questions
      }),
    });


    const result = await res.json();
    // console.log(`res: ${JSON.stringify(result)}`);

    // Success if status code is 201
    if (res.status === 201) {
      console.log("Thank you for contacting us!", { type: "success" });
      router.push({
        pathname: "/form-success",
        query: {
          message: "Thank you for your application. We will get back to you as soon as possible.",
          title: "Yeah. Your application is sent successfully"
        }
      })
    } else {
      console.log("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute transform translate-x-1/2 left-full"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute bottom-0 transform -translate-x-1/2 right-full"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Job Application Form
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">Fill up the form as much as you can</p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={submitForm}
          >
            {/* Name */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Phone*/}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative mt-3 rounded-md shadow-sm">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Position */}
            <div className="sm:col-span-">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Apply Position
              </label>
              <select className="mt-3 block w-full px-4 text-gray-900 py-3 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" onChange={(e) => setApplyPosition(e.target.value)} >
                <option value="Digital Content Writer">Digital Content Writer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Video Editor">Video Editor</option>

              </select>
            </div>


            {/*  Urls */}
            {urls.map((item, index) => (
              <div className="sm:col-span-2">
                <label
                  htmlFor="urls"
                  className="block text-sm font-medium text-gray-700"
                >
                  {item.label}
                </label>
                <div className="relative mt-3 rounded-md shadow-sm">
                  <input
                    type="url"
                    name="url"
                    id="url"
                    autoComplete="url"
                    className="block w-full px-4 py-3 border-gray-300 text-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    onChange={(event) => onUrlChange(event, index)}
                  />
                </div>
              </div>
            ))}

            {/* Questions */}
            {applyPosition === "Front-end Developer" && questions.map((item, index) => (
              <div className="sm:col-span-2">
                <label
                  htmlFor={index.toString()}
                  className="block text-sm font-medium text-gray-700"
                >
                  {item.question}
                </label>
                <div className="mt-3">
                  <textarea
                    name={"question" + index}
                    key={item.id}

                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    required
                    onChange={(event) => onAnswerChange(event, index)}

                  />
                </div>
              </div>

            ))}

            {/*Intro Video Url - Not showing for developers */}
            {applyPosition != "Front-end Developer" && <div className="sm:col-span-2">
              <label
                htmlFor="intro_video_url"
                className="block text-sm font-medium text-gray-700"
              >
                Intro Video Url
              </label>
              <div className="relative mt-3 rounded-md shadow-sm">
                <input
                  type="url"
                  name="video-intro-url"
                  id="url"
                  autoComplete="url"
                  className="block w-full px-4 py-3 border-gray-300 text-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(event) => onVideoUrlChange(event)}
                />
              </div>
            </div>}



            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng Ký Ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );






}
