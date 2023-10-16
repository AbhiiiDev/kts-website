// importing logo
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import Youtube from "../../assets/Youtube.png";
import instagram from "../../assets/Instagram.png";
import logo from "../../assets/logo-black.png";

function Footer() {
  return (
    <div>
      <div className=" flex flex-col sm:flex-row flex-wrap  sm:flex sm:h-[300px] w-[100%] bg-yellow-400 gap-4 ">
        <div className=" flex flex-1  justify-center items-center ">
          <div>
            <p className="font-extrabold text-2xl">Contact Us</p>

            <p className=" leading-7 font-semibold">
              KIET Group of Institutions, NH-58 <br />
              Meerut Road, Delhi NCR - 201206
            </p>

            <a className="text-black" href="mailto:kts@kiet.edu">
              kts@kiet.edu
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col items-center">
            <img height={70} width={60} src={logo} alt="kts logo" />
            <div className="ml-2 text-xl md:text-2xl font-semibold">
              Communicate. Collaborate. Create
            </div>
          </div>
        </div>

        <div className=" flex flex-1 justify-center items-center">
          <div>
            <div className="sm:mx-2 flex my-2 items-center ">
              <img height={30} width={30} src={linkedin} alt="linkedin" />
              <a
                target="_blank"
                rel="noreferrer"
                className="text-black ml-2"
                href="https://www.linkedin.com/company/kinesis-technical-society"
              >
                LinkedIn
              </a>
            </div>

            <div className="sm:mx-2 flex my-2 items-center ">
              <img height={30} width={30} src={instagram} alt="instagram" />
              <a
                target="_blank"
                rel="noreferrer"
                className="text-black ml-2"
                href="https://www.instagram.com/kinesis_technical_society/"
              >
                Instagram
              </a>
            </div>

            <div className="sm:mx-2 flex my-2 items-center">
              <img height={30} width={30} src={github} alt="github" />
              <a
                target="_blank"
                rel="noreferrer"
                className="text-black ml-2"
                href="https://github.com/Kinesis-Technical-Society"
              >
                GitHub
              </a>
            </div>

            <div className="sm:mx-2 flex my-2 items-center ">
              <img height={30} width={30} src={Youtube} alt="youtube" />
              <a
                target="_blank"
                rel="noreferrer"
                className="text-black ml-2"
                href="https://www.youtube.com/@KinesisTechnicalSociety"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex bg-black justify-center items-center">
        <p className=" text-slate-50">
          © {new Date().getFullYear()} Kinesis Technical Society. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
