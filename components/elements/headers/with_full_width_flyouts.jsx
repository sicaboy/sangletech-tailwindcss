/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  BookOpenIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

/* 
Home
Sang Lê là ai?
Sách
  Bí Mật Làm Giàu X.0
  Bí Mật Khởi Nghiệp X.0
Phần Mềm
  Book X.0
  Fin X.0
  Pro X.0
  You X.0
Chương Trình
  Retargeting
  Basic Sales Funnel
  Basic SPM 
  Warrior X.0
  Funnel X.0
  Startup X.0
Blog (show featured aricles from the blog)
Khác
  Resources
    Privacy
    Press
    Customers
    Videos
    Case Study
  Company
    Về Galatek
    Cơ hội công việc
    Bảo mật
    Dịch Vụ
    Tư Vấn
  From the Blog
*/

const courses = [
  {
    name: "Quảng Cáo Retargeting",
    description:
      "Làm thế nào để Bạn luôn nằm ở vị trí hàng đầu trong tâm trí khách hàng và đưa họ quay trở lại trang web của mình khi họ đã rời đi?",
    href: "/retargeting-course",
    icon: ChartBarIcon,
  },
  {
    name: "Phễu Bán Hàng Basic",
    description:
      "Bật mí những bí mật từ các Chuyên gia Marketing nổi tiếng thế giới để áp dụng thành công cho việc kinh doanh online của Bạn!",
    href: "/basic-sales-funnel",
    icon: CursorClickIcon,
  },
  {
    name: "Startup X.0",
    description:
      "7 Tuần xây dựng khởi nghiệp của bạn từ A-Z & Marketing ra thị trường.",
    href: "/startupxo-course",
    icon: ShieldCheckIcon,
  },
  {
    name: "SPM Basic",
    description: "Phương pháp Lập kế hoạch đơn giản với phần mềm Notion.",
    href: "/basic-spm-course",
    icon: ViewGridIcon,
  },
];

const apps = [
  {
    name: "BOOK X.0",
    description: "Sách Điện tử Độc quyền từ Sang Le: BÍ MẬT LÀM GIÀU X.0.",
    href: "book-xo",
    icon: BookOpenIcon,
  },
  {
    name: "YOU X.0",
    description: "Ứng dụng Thần Số Học đầu tiên tại Việt Nam.",
    href: "you-xo",
    icon: CursorClickIcon,
  },
  {
    name: "FIN X.0",
    description: "Ứng dụng Hỗ trợ Quản lý Tài chính Cá nhân.",
    href: "fin-xo",
    icon: ShieldCheckIcon,
  },
  {
    name: "PRO X.0",
    description:
      "Ứng dụng Học Trực tuyến 4.0 với các chương trình giảng dạy từ phát triển cá nhân đến kinh doanh online, giúp bạn bước đi tự tin trong thời đại 4.0.",
    href: "pro-xo",
    icon: ViewGridIcon,
  },
];

const books = [
  {
    name: "BÍ MẬT LÀM GIÀU X.0",
    description: "Sách Điện Tử Độc Quyền Từ Sang Le",
    href: "book-xo",
    icon: BookOpenIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
];

const callsToAction = [
  {
    name: "Sách Bí Mật Làm Giàu",
    href: "/posts/video-book-xo",
    icon: PlayIcon,
  },
  { name: "Tra cứu Thần Số Học", href: "/you-xo", icon: CheckCircleIcon },
  { name: "Liên hệ Tư vấn", href: "/tu-van", icon: PhoneIcon },
];

const shortcuts = [
  {
    name: "Hành Trình Làm Giàu X.0",
    href: "/sow-xo",
    icon: InformationCircleIcon,
  },
  { name: "Bí Mật Làm Giàu X.0", href: "/book-xo", icon: BookOpenIcon },
  { name: "Blog", href: "/blog", icon: NewspaperIcon },
  { name: "Ứng Dụng", href: "/you-xo", icon: CursorClickIcon },
  { name: "Khoá Học", href: "/pro-xo", icon: ShieldCheckIcon },
];

const company = [
  { name: "CafeS", href: "https://www.cafes.vn", icon: UserGroupIcon },
  { name: "Galatek", href: "https://galatek.io", icon: GlobeAltIcon },
  { name: "SPMET", href: "https://sp.edu.vn", icon: BookmarkAltIcon },
];

const blogPosts = [
  {
    id: 1,
    name: "Làm thế nào thiết kế Website bán được hàng?",
    href: "/posts/thiet-ke-website-ban-hang",
    preview:
      "Hầu hết các doanh nghiệp cho rằng Website chỉ để làm cảnh và ngốn rất nhiều chi phí. Nhưng bạn biết không, với một website được dựng hiệu quả thì khách hàng sẽ xuống tiền và đặt hàng nhanh hơn bất cứ nền tảng nào khác.",
    imageUrl:
      "https://res.cloudinary.com/sang-le-tech/image/upload/v1632824815/Galatek.io%20Website/igor-miske-JVSgcV8_vb4-unsplash_bclloj.jpg",
  },
  {
    id: 2,
    name: "Có phải THƯƠNG HIỆU chỉ đơn giản là LOGO?",
    href: "/posts/logo-la-thuong-hieu",
    preview: `Bạn có biết những thương hiệu "khổng lồ" trên thế giới như Apple, Google, Starbucks,... đã phải liên tục "lột xác" bằng cách thay đổi Logo để tồn tại?`,
    imageUrl:
      "https://res.cloudinary.com/sang-le-tech/image/upload/v1632825252/Galatek.io%20Website/alexander-shatov-niUkImZcSP8-unsplash_vmcoec.jpg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WithFullWithFlyOuts() {
  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 z-30 shadow pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link href="/">
              <a className="flex">
                <span className="sr-only">Sang Le Tech</span>
                <img
                  className="w-auto h-8 sm:h-12"
                  src="assets/sangletech-logo.png"
                  alt="sang le tech"
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Trang Chủ
                </a>
              </Link>
              <Link href="/sang-le-la-ai">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Sang Lê là ai?
                </a>
              </Link>
              <Link href="/book-xo">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Sách
                </a>
              </Link>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Ứng Dụng</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full">
                        <div className="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {apps.map((item) => (
                            <Link href={item.href}>
                              <a
                                key={item.name}
                                className="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                                      <item.icon
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </div>
                                  <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                      Tìm Hiểu Ngay{" "}
                                      <span aria-hidden="true">&rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50">
                          <div className="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link href={item.href}>
                                  <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100">
                                    <item.icon
                                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Khóa Học</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full">
                        <div className="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {courses.map((item) => (
                            <Link href={item.href}>
                              <a
                                key={item.name}
                                className="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                                      <item.icon
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </div>
                                  <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                      Tìm Hiểu Ngay{" "}
                                      <span aria-hidden="true">&rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50">
                          <div className="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link href={item.href}>
                                  <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100">
                                    <item.icon
                                      className="flex-shrink-0 w-6 h-6 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/tu-van">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Tư Vấn
                </a>
              </Link>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Thư Viện</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-white" />
                          <div className="w-1/2 bg-gray-50" />
                        </div>
                        <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                          <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                Shortcuts
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {shortcuts.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link href={item.href}>
                                      <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">
                                        <item.icon
                                          className="flex-shrink-0 w-6 h-6 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-4">
                                          {item.name}
                                        </span>
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                Công Ty
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {company.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link href={item.href}>
                                      <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">
                                        <item.icon
                                          className="flex-shrink-0 w-6 h-6 text-gray-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-4">
                                          {item.name}
                                        </span>
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                From the blog
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <Link href={post.href}>
                                      <a className="flex p-3 -m-3 rounded-lg hover:bg-gray-100">
                                        <div className="flex-shrink-0 hidden sm:block">
                                          <img
                                            className="object-cover w-32 h-20 rounded-md"
                                            src={post.imageUrl}
                                            alt=""
                                          />
                                        </div>
                                        <div className="flex-1 w-0 sm:ml-8">
                                          <h4 className="text-base font-medium text-gray-900 truncate">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <Link href="/blog">
                                <a className="text-indigo-600 hover:text-indigo-500">
                                  {" "}
                                  Xem thêm{" "}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            {/* <div className="flex items-center md:ml-12">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a className="flex">
                      <img
                        className="w-auto h-8 sm:h-12"
                        src="assets/sangletech-logo.png"
                        alt="sang le tech"
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {courses.map((item) => (
                      <Link href={item.href}>
                        <a
                          key={item.name}
                          className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                            <item.icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    {/* TODO: Create products page */}
                    <a
                      href="/pro-xo"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {" "}
                      Xem Tất Cả <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="grid grid-cols-2 gap-4">
                <Link href="book-xo">
                  <a className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                    Book X.0
                  </a>
                </Link>
                <Link href="you-xo">
                  <a className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                    You X.0
                  </a>
                </Link>
                <Link href="fin-xo">
                  <a className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                    Fin X.0
                  </a>
                </Link>

                <Link href="pro-xo">
                  <a className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                    Pro X.0
                  </a>
                </Link>
                <Link href="blog">
                  <a className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                    Blog
                  </a>
                </Link>
                <Link href="/sang-le-la-ai">
                  <a className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                    Sang Lê là ai?
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/form">
                  <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
                    Đăng Ký Nhận Ưu Đãi
                  </a>
                </Link>
                {/* <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
