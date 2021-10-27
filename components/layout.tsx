import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-auto overflow-hidden bg-white lg:max-w-6xl">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
