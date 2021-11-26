import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { ProfilePageJsonLd } from "next-seo";

//https://www.sangletech.com/assets/brand-identity.jpeg

export default function NextSeoCustom() {
  return (
    <div>
      <NextSeo
        title="Sang Le Tech"
        description="Bước Đi Tự Tin Trên Hành Trình 4.0"
        canonical="https://www.sangletech.com/"
        openGraph={{
          url: "https://www.sangletech.com/",
          title: "VƯƠN TẦM BẢN THÂN",
          description:
            "Tấm Bản Đồ dẫn đến một Cuộc sống thịnh vượng hậu covid 19 ",
          images: [
            {
              url: "https://sangletech.com/assets/seo-jow.jpg",
              width: 1200,
              height: 600,
              alt: "Sang Le Tech - Hanh trinh lam giau X.0",
            },
            {
              url: "https://sangletech.com/assets/seo-kkcd-badge.jpg",
              width: 900,
              height: 800,
              alt: "Sang Le Tech - Khoanh Khac Cuoc Doi",
            },
            { url: "https://sangletech.com/assets/seo-saigonfm.jpg" },
            { url: "https://sangletech.com/assets/seo-kkcd-talk.jpg" },
          ],
        }}
      />

      <SocialProfileJsonLd
        type="Person"
        name="Sang Le"
        url="https://www.sangletech.com"
        sameAs={[
          "http://facebook.sangletech.com",
          "http://youtube.sangletech.com",
          "http://linkedin.sangletech.com",
          "http://instagram.sangletech.com",
        ]}
      />

      <ProfilePageJsonLd
        lastReviewed="2014-10-01T19:30"
        breadcrumb={[
          {
            position: 1,
            name: "Sách điện tử Bí Mật Làm Giàu X.0",
            item: "https://sangletech.com/book-xo",
          },
          {
            position: 2,
            name: "Ứng dụng Thần Số Học",
            item: "https://sangletech.com/you-xo",
          },
          {
            position: 3,
            name: "Sang Lê Là Ai?",
            item: "https://sangletech.com/sang-le-la-ai",
          },
          {
            position: 4,
            name: "Ứng dụng học trực tuyến Pro X.0",
            item: "https://sangletech.com/pro-xo",
          },
          {
            position: 5,
            name: "Ứng dụng học Hỗ trợ Quản lý Tài chính Cá nhân",
            item: "https://sangletech.com/fin-xo",
          },
          {
            position: 6,
            name: "Khoá học Quảng cáo Retargeting",
            item: "https://sangletech.com/retargeting-course",
          },
          {
            position: 7,
            name: "Khoá học Phễu Bán Hàng cơ bản",
            item: "https://sangletech.com/basic-sales-funnel",
          },
          {
            position: 8,
            name: "Khoá học SPM Basic - Lên Kế Hoạch Đơn Giản",
            item: "https://sangletech.com/basic-spm-course",
          },
          {
            position: 9,
            name: "Khoá học Chiến Binh X.0",
            item: "https://sangletech.com/chienbinhxo-course",
          },
          {
            position: 10,
            name: "Khoá học Startup X.0",
            item: "https://sangletech.com/startupxo-course",
          },
          {
            position: 11,
            name: "Khoá học Xây dựng Website Wordpress",
            item: "https://sangletech.com/website-course",
          },
          {
            position: 12,
            name: "Hành Trình Làm Giàu X.0",
            item: "https://sangletech.com/sow-xo",
          },
          {
            position: 13,
            name: "Sang Le Blog",
            item: "https://sangletech.com/blog",
          },
        ]}
      />
    </div>
  );
}
``;
