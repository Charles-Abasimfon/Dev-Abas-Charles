import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const WorkSingleIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".m-gallery", {
        itemSelector: ".col-xs-12",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-xs-12",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);

  return (
    <div className="row m-gallery">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="works-item">
          <div
            className="image"
          >
            <div className="img">
              <img src="assets/images/blog7.jpg" alt="#1" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="works-item">
          <div
            className="image"
          >
            <div className="img">
              <img src="assets/images/blog8.jpg" alt="#2" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="works-item">
          <div
            className="image"
          >
            <div className="img">
              <img src="assets/images/blog5.jpg" alt="#3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkSingleIsotope;
