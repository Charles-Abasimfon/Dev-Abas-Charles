import { Fragment, useEffect } from "react";
const PreLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloader").classList.add("loaded");
      document.querySelector(".centrize").style.display = "none";
    }, 1000);
  }, []);

  return (
    <Fragment>
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <img src="assets/images/ober_logo.png" alt="" />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
