import React from "react";

function GalleryTwoPhotos() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="px-4 mb-10 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">
                Buy YouTube Videos
              </h2>
              <p className="text-base leading-relaxed">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
            <div className="px-4 mb-10 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src="https://dummyimage.com/1202x502"
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryTwoPhotos;
