import Layout from "../components/layout";
import Smartie from "../components/smartie";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function FormSuccess() {

  const { query } = useRouter()
  // console.log(`query: ${JSON.stringify(query)}`)
  // const message = qs.parse(query)

  return (

    <Layout>
      <Smartie />

      <div className="mb-16">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {query.title || "Yeah. Bạn Đã Đăng Ký Thành Công!"}
            </h1>
            <p className="mb-8">
              {query.message || "Smartie sẽ gửi những thông tin mới nhất cho bạn mỗi tuần bạn nhé."}
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

export async function getServerSideProps(context) {
  // console.log(context.query)
  const message = context.query
  return {
    props: { message }, // will be passed to the page component as props
  }
}


