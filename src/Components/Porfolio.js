import React, { useState } from "react";
import "./Portfolio.css";
import Rms from "./Rms";
import Ebs from "./Ebs";
import Cec from "./Cec";
import Netflix from "./Netflix";
import Bicycle from "./Bicycle";
import Final from "./Final";
import pic1 from "../images/pic1.jpeg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpeg";
import pic6 from "../images/pic6.jpg";

const Porfolio = () => {
  const [showRms, setshowRms] = useState(false);
  const closeRms = () => setshowRms(false);

  const [showEbs, setshowEbs] = useState(false);
  const closeEbs = () => setshowEbs(false);

  const [showBicycle, setshowBicycle] = useState(false);
  const closeBicycle = () => setshowBicycle(false);

  const [showCec, setshowCec] = useState(false);
  const closeCec = () => setshowCec(false);

  const [showNetflix, setshowNetflix] = useState(false);
  const closeNetflix = () => setshowNetflix(false);

  const [showFinal, setshowFinal] = useState(false);
  const closeFinal = () => setshowFinal(false);

  return (
    <>
      <div className="portfolio">
        <div className="portfolio-upper-sec">
          <h2>
            Latest <span style={{ color: "aqua" }}>Project</span>
          </h2>
        </div>
        <div className="portfolio-lower-sec">
          <div className="img-sec">
            <div className="img1">
              <img src={pic1} />
              <div className="content">
                <p onClick={() => setshowRms(true)} className="para">
                  Learn More...
                </p>
                <h3 className="head">Result management system</h3>
              </div>
            </div>
            <div className="img1">
              <img src={pic3} />
              <div className="content">
                <p onClick={() => setshowEbs(true)} className="para">
                  Learn More...
                </p>
                <h3 className="head">Event Booking system</h3>
              </div>
            </div>
            <div className="img1">
              {" "}
              <img src={pic4} />
              <div className="content">
                <p onClick={() => setshowBicycle(true)} className="para">
                  Learn More...
                </p>
                <h3 className="head">3D Bicycle</h3>
              </div>
            </div>
          </div>
          <div className="img-sec" style={{ marginTop: "2rem" }}>
            <div className="img1">
              {" "}
              <img src={pic3} style={{ height: "220px" }} />
              <div className="content">
                <p onClick={() => setshowCec(true)} className="para">
                  Learn More...
                </p>
                <h3 className="head">Car EMI Calculator</h3>
              </div>
            </div>
            <div className="img1">
              {" "}
              <img src={pic6} style={{ height: "220px" }} />
              <div className="content">
                <p onClick={() => setshowNetflix(true)} className="para">
                  Learn More...
                </p>
                <h3 className="head">Netflix Clone</h3>
              </div>
            </div>
            <div className="img1">
              {" "}
              <img src={pic3} style={{ height: "230px" }} />
              <div className="content">
                <p
                  className="para"
                  style={{ marginTop: "42%" }}
                  onClick={() => setshowFinal(true)}
                >
                  Learn More...
                </p>
                <h3 className="head">
                  Placement Management Prediction And Recommdation System{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
        {showRms && <Rms closeRms={closeRms} />}
        {showEbs && <Ebs closeEbs={closeEbs} />}
        {showBicycle && <Bicycle closeBicycle={closeBicycle} />}
        {showCec && <Cec closeCec={closeCec} />}
        {showNetflix && <Netflix closeNetflix={closeNetflix} />}
        {showFinal && <Final closeFinal={closeFinal} />}
      </div>
    </>
  );
};

export default Porfolio;
