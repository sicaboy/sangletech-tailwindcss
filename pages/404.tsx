import React from "react";
import PopularPages from "../components/popular-pages";
import UnderConstruction from "../components/under-construction";

function ErrorPage() {
  return (
    <div>
      <UnderConstruction
        title="Oh No. Có lẽ như bạn đang đi lạc?"
        description="Smartie không tìm thấy trang bạn muốn tìm!"
      />
    </div>
  );
}

export default ErrorPage;
