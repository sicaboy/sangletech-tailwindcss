import React from "react";

function ButtonAppsGroup(props) {
  return (
    <div>
      <div className="flex mt-6 mb-3 space-x-4">
        {props.AppleSrc?.length > 0 && (
          <a
            href={props.AppleSrc || "/"}
            className="transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt={"sangletech"}
            />
          </a>
        )}
        {props.GoogleSrc?.length > 0 && (
          <a
            href={props.GoogleSrc || "/"}
            className="transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt="sangletech"
            />
          </a>
        )}
        {props.WebSrc?.length > 0 && (
          <a
            href={props.WebSrc || "/"}
            className="transition duration-300 hover:shadow-lg"
          >
            <img
              src="https://blueislanddigital.com/wp-content/uploads/2019/10/Progressive-Web-App.png"
              className="object-cover object-top w-32 mx-auto"
              alt="sangletech"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default ButtonAppsGroup;
