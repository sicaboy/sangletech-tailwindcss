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
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [app, setApp] = useState([]);
  const [course, setCourse] = useState([]);

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, app, course }),
    });
    // Success if status code is 201
    if (res.status === 201) {
      console.log("Thank you for contacting us!", { type: "success" });
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
            Đăng Ký Nhận Thông Tin Từ Sang Lê
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Bạn có muốn nhận ngay Thông báo ra mắt Sách "Bí Mật Làm Giàu X.0" &
            những sản phẩm khác từ Sang? <br></br> <br></br> 👇 Hãy đăng ký ngay
            TẠI ĐÂY để nhận được thông báo sớm nhất từ Sang nhé !
          </p>
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
                Họ Tên
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
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
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            {/* Phone*/}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Số Điện Thoại
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="0937511277"
                  required
                />
              </div>
            </div>
            {/* App Select*/}

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                App
              </label>
              <div className="mt-1 ">
                <select className="w-full select select-bordered">
                  <option disabled="disabled" selected="selected">
                    Chọn Ứng Dụng
                  </option>
                  <option value="Book X.0">
                    Book X.0 (Sách Bí Mật Làm Giàu)
                  </option>
                  <option value="You X.0">
                    You X.0 (Ứng dụng Tra cứu Thần Số Học)
                  </option>
                  <option value="Fin X.0">
                    Fin X.0 (Ứng dụng Quản lý Tài chính){" "}
                  </option>
                  <option value="Pro X.0">Pro X.0 (Ứng dụng Học Online)</option>
                </select>
              </div>
            </div>
            {/* Course Select */}

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Khóa Học
              </label>
              <div className="mt-1 ">
                <select className="w-full select select-bordered">
                  <option disabled="disabled" selected="selected">
                    Chọn Khóa Học
                  </option>
                  <option value="Warrior X.0">Chiến Binh X.0</option>
                  <option value="Startup X.0">Startup X.0</option>
                  <option value="Retargeting">Retargeting</option>
                  <option value="SPM Basic">
                    SPM Basic - Lập kế hoạch đơn giản bằng Notion
                  </option>
                  <option value="Sales Funnel Basic">
                    Xây dựng Phễu Bán Hàng Basic
                  </option>
                </select>
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span className="sr-only">
                      Chấp nhận sử dụng Chính sách
                    </span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div> */}
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
