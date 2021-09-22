import React from "react";
import HeroWithAngelImageOnRight from "../components/sections/heroes/with_angled_image_on_right";
import Layout from "../components/layout";

const hero = {
  titleHighlight: "YOU X.0",
  titleNormal: "Ứng Dụng Thần Số Học Đầu Tiên Tại Việt Nam",
  description: `**Trực tiếp xây dựng và phát triển độc quyền bởi Sang Lê**`,
  buttonNormal: "Tìm Hiểu Thêm",
  buttonHighlight: "Xem Thông tin Thần Số Học",
  imgSrc:
    "https://res.cloudinary.com/sang-le-tech/image/upload/v1629429447/Galatek.io%20Website/Beige_Minimal_Phone_Mockup_Download_Now_Instagram_Post-3_emlzak.png",
  alt: "Hinh anh Sang Le",
};

function YouXo() {
  return (
    <Layout>
      <div>You X.0 Page</div>
      <HeroWithAngelImageOnRight {...hero} />
    </Layout>
  );
}

export default YouXo;
