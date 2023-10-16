import Frame4 from "../../assets/Frame 4.png";
import Frame3 from "../../assets/Frame 3.png";
import Frame5 from "../../assets/Frame 5.png";
import Frame6 from "../../assets/Frame 6.png";
import image from "../../assets/image 3.png";
import Footer from "../Footer/Footer";

function MainSection() {
  return (
    <>
      <div className="flex flex-col sm:block sm:ml-0">
        <p className="font-bold text-4xl mt-[40rem] sm:mt-[28rem] sm:ml-[5%] ">
          Every Bit Counts.
        </p>
        <p className="text-lg sm:ml-[5%] w-[50%] text-md font-medium mb-10">
          We don't box talents into predefined roles; instead, we celebrate the
          diversity of the engineering minds. KTS operate across a broad
          spectrum of technical and non-technical domains, so you can explore
          your passions before you graduate.
        </p>

        <div className="flex  flex-col justify-center ml-[15%] sm:items-center gap-3 sm:flex-row  sm:my-6 sm:ml-20 ">
          <div className=" h-[200px] w-[100px] flex-1 sm:ml-0">
            <img src={Frame4} alt="" />
            <p className="font-medium text-2xl my-5">Programming</p>
            <p className="font-medium  ">
              Embrace the world of DSA and Competitive Coding to excel in
              technical industry.
            </p>
          </div>
          <div className=" h-[200px] w-[100px] flex-1">
            <img src={Frame6} alt="" />
            <p className="font-medium text-2xl my-4">Development</p>
            <p className="font-medium ">
              Transform Digital Landscapes through Apps, Website, Machine
              Learning modules and more.
            </p>
          </div>
          <div className=" h-[200px] w-[100px] flex-1 ">
            <img src={Frame5} alt="" />
            <p className="font-medium text-2xl my-4">Designing</p>
            <p className="font-medium ">
              Reimagine the Art of User Experience through Graphic and UI
              Designing.
            </p>
          </div>
          <div className=" h-[200px] w-[100px] flex-1">
            <img src={Frame3} alt="" />
            <p className="text-2xl my-4">Public Relation</p>
            <p className="font-medium ">
              Unleash the leader in you and Master the Art of Communication,
              Management, and Personal Branding.
            </p>
          </div>
        </div>

        <div className="sm:mx-3 my-5 sm:absolute sm:top-[120rem] sm:left-[60px]">
          <p className="text-4xl font-bold">The Word On The Street.</p>
          <div className=" ml-14 sm:flex sm:justify-center sm:items-center sm:gap-8 my-6 sm:ml-0">
            <p className="text-md text-justify sm:w-[40%] font-Heebo font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis accusamus ducimus officiis animi autem
              voluptatibus minima atque eos. Quia eius facere impedit eaque modi
              et hic ipsa tempora nemo accusantium, labore voluptate ducimus
              laborum fugiat necessitatibus eos. Excepturi, hic.
            </p>
            <p className="text-md text-justify sm:w-[40%] font-Heebo font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis accusamus ducimus officiis animi autem
              voluptatibus minima atque eos. Quia eius facere impedit eaque modi
              et hic ipsa tempora nemo accusantium, labore voluptate ducimus
              laborum fugiat necessitatibus eos. Excepturi, hic.
            </p>
            <p className="text-md text-justify sm:w-[40%] mr-4  font-Heebo font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore perspiciatis accusamus ducimus officiis animi autem
              voluptatibus minima atque eos. Quia eius facere impedit eaque modi
              et hic ipsa tempora nemo accusantium, labore voluptate ducimus
              laborum fugiat necessitatibus eos. Excepturi, hic.
            </p>
          </div>

          <div className="sm:my-0 sm:mx-[25%] flex flex-col">
            <img src={image} alt="footer image" />
          </div>

          <div className=" ml-[-6rem]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
