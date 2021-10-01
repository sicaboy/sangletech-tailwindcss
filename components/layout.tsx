import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="mx-3 overflow-hidden bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
