import "./home_section.css";
import Firstim from "../../assets/landingimg2.svg";
import MainSection from "./MainSection";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="section1">
        <div className="home_content">
          <h2 className="home_title">
            Communicate.<br></br>
            Collaborate. Create.
          </h2>
          <p className="home_information1">
            We are putting knowledge in motion, and innovation in action.
          </p>
          <Link to="/Team">
            <button className="btninside">Meet the team.</button>
          </Link>
        </div>

        <div className="home_section1image">
          <img src={Firstim} alt="" />
        </div>
        <div className=" font-Heebo font-semibold  text-4xl sm:relative sm:ml-[56%] sm:top-64  ">
          <p className="mt-[20%] sm:mt-0">
            {" "}
            In the Collision of Insight,<br></br> We Discover the Future
          </p>
        </div>
        <div className="home_Intro">
          <div className="Intro-1 Intro-item">
            <p style={{ fontWeight: "bold" }}>
              ki·​ne·​sis | किनेसिस <br></br>
              [noun] <br></br>
              movement; motion
            </p>
            <p className="Intro-Content">
              <span style={{ fontWeight: "bold" }}>
                Kinesis Technical Society
              </span>{" "}
              is a group of driven learners, with a common love for technology
              and a strong belief in the power of community learning. We strive
              to explore and advance in technology, engineering, and science.
            </p>
          </div>
        </div>
      </div>
      <MainSection />
    </>
  );
};
export default Home;
