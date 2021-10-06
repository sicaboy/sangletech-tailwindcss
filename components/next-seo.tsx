import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { ProfilePageJsonLd } from "next-seo";

//TODO: Yunnie add info for the website. this is used when people send http://sangletech.com in a message on Facebook or other platforms
export default function NextSeoCustom() {
  return (
    <div>
      <NextSeo
        title="Sang Le Tech"
        description="Bước Đi Tự Tin Trên Hành Trình 4.0"
        canonical="https://www.sangletech.com/"
        openGraph={{
          url: "https://www.sangletech.com/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "/assets/thumbnail-hanh-trinh-lam-giau-xo.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />

      <SocialProfileJsonLd
        type="Person"
        name="your name"
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
            name: "Books",
            item: "https://example.com/books",
          },
          {
            position: 2,
            name: "Authors",
            item: "https://example.com/books/authors",
          },
        ]}
      />
    </div>
  );
}
``;
