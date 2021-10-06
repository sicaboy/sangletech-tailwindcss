import Layout from "../components/layout";
import Smartie from "../components/smartie";
import SignUpForm from "../components/sign-up-form";
import Link from "next/link";
export default function FormSuccess() {
  // TODO: Replace with Nextjs form + Notion + Notifications
  return (
    <Layout>
      <Smartie />

      <div className="mb-16">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Yeah. Bạn Đã Đăng Ký Thành Công!
            </h1>
            <p className="mb-8">
              Smartie sẽ gửi những thông tin mới nhất cho bạn mỗi tuần bạn nhé.{" "}
            </p>
            <div className="flex justify-center gap-3">
              <Link href="/blog">
                <button className="btn btn-primary">Xem Blog</button>
              </Link>
              <Link href="/">
                <button className="btn btn-outline btn-primary">
                  Trang Chủ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
