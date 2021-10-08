import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { ProfilePageJsonLd } from "next-seo";

//YUNNIE: Yunnie add info for the website. this is used when people send http://sangletech.com in a message on Facebook or other platforms
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
            "Liệu có một Tấm Bản Đồ dẫn đến một Cuộc sống thịnh vượng cho Bạn hay không?",
          images: [
            {
              url: "https://super-static-assets.s3.amazonaws.com/8090ac7d-2195-4ec8-96be-1457b54a8900/images/d508c9e1-75af-4c14-bcd4-eb63b26317f5.png?w=1500&f=webp",
              width: 1200,
              height: 600,
              alt: "Sang Le Tech - Hanh trinh lam giau X.0",
            },
            {
              url: "https://res.cloudinary.com/sang-le-tech/image/upload/v1626615071/Galatek.io%20Website/Sangletech.com/galatekgame-37-38-39-0006_mbnffl.jpg",
              width: 900,
              height: 800,
              alt: "Sang Le Tech - Khoanh Khac Cuoc Doi",
            },
            { url: "/assets/thumbnail-book-xo.jpg" },
            { url: "/assets/thumbnail-glt-success.jpg" },
          ],
        }}
      />

      <SocialProfileJsonLd
        type="Person"
        name="Sang Le"
        url="http://www.your-site.com"
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
            name: "Sách Bí Mật Làm Giàu X.0",
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
        ]}
      />
    </div>
  );
}
``;
