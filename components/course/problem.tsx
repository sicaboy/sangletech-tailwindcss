import React from "react";
import AlternativeSideBySideWithVideoOrImg from "../../components/alternative-side-by-side-with-video-img";
import Component from "../selectable-left-right-img-video-with-content";

function Problem({ defineTheProblem, agitate }) {
  return (
    <div className="py-16 lg:py-24">
      <Component {...defineTheProblem} />
      <Component {...agitate} />
    </div>
  );
}

export default Problem;
