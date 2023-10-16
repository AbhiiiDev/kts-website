import TeamCard from "./Team_card";
import "./Team.css";
import { RiTeamFill, RiStackshareLine } from "react-icons/ri";
import TeamTag from "../../assets/Team_Tag.svg";
import Footer from "../Footer/Footer";


// importing images
import gaurav from "../../assets/gaurav.png";
import kalash from "../../assets/kalash.jpg";
import apoorva from "../../assets/apoorva.jpg";
import prayrit from "../../assets/prayrit.jpg";
import manav from "../../assets/manav.png";
import sparsh from "../../assets/sparsh.jpeg";
import srijan from "../../assets/srijan.png";
import shivendu from "../../assets/shivendu.jpg";
import yash from "../../assets/yash.jpg";
import shiva from "../../assets/shiva.jpg";
import archit from "../../assets/archit.jpg";
import shubhangi from "../../assets/shubhangi.jpg";
import paras from "../../assets/paras.jpg";
import suraj from "../../assets/suraj.jpg";
import shivam from "../../assets/shivam.png";

const Team_Member = () => {
  const cards = [
    {
      id: 1,
      title: "Srijan Shahi",
      image: srijan,
      text: "President",
      git: "#",
      linkdin: "https://www.linkedin.com/in/srijan-shahi-6b1594271/",
      insta: "https://www.instagram.com/srijan_shahi23/",
    },
    {
      id: 2,
      title: "Sparsh Verma",
      image: sparsh,
      text: "Vice President",
      git: "https://github.com/sparshrex",
      linkdin: "https://www.linkedin.com/in/sparshverma094/",
      insta: "https://www.instagram.com/sparshrex/",
    },
    {
      id: 3,
      title: "Shiva Agrahari",
      image: shiva,
      text: "Public Relation Head",
      git: "https://github.com/shivaAg04",
      linkdin: "https://www.linkedin.com/in/shivaag04/",
      insta: "https://www.instagram.com/s.h.i.v.a_04/",
    },
    {
 //secretory

      // id: 4,
      // title: "Manav Verma",
      // image: manav,
      // text: "Founding Member",
      // git: "#",
      // linkdin: "https://www.linkedin.com/in/manav-verma-263761201/",
      // insta: "https://www.instagram.com/manavv_verma/",
    },
    {
      id: 8,
      title: "Shivendu Mishra",
      image: shivendu,
      text: "Technical lead",
      git: "https://github.com/shivenducs1136",
      linkdin: "https://www.linkedin.com/in/bitwisor/",
      insta: "https://www.instagram.com/shiv.endu/",

    
      // id: 5,
      // title: "Prayrit Srivastava",
      // image: prayrit,
      // text: "Founding Member",
      // git: "https://prayrit-srivastava.github.io/",
      // linkdin: "https://www.linkedin.com/in/prayrit-srivastava-b520111a3/",
      // insta: "https://www.instagram.com/___itzzprayrit/",
    },
    {

//web dev lead
     
      
     //sparsh 
    },
    {
 id: 8,
       title: "Shivam Singh",
       image: shivam,
        text: "Android Lead",
       git: "github.com/shiv1406",
       linkdin: "https://www.linkedin.com/in/shivam-singh-059158229",
       insta: "https://instagram.com/_.shivam_singh.__?igshid=OGQ5ZDc2ODk2ZA==",


      //srijan
    },
    {
      
      id: 5,
      title: "Shubhangi Rai",
      image: shubhangi,
      text: "Graphic Designing Head",
      git: "https://github.com/shubhangirai281",
      linkdin: "https://www.linkedin.com/in/shubhangi-rai/",
      insta: "https://www.instagram.com/shubhangi_raii/",
    },
    {//DSA lead 


      // id: 9,
      // title: "Yash Srivastava",
      // image: yash,
      // text: "ML Lead",
      // git: "https://github.com/Srivastava0109Yash",
      // linkdin: "https://www.linkedin.com/in/yash-srivastava-b27025213/",
      // insta: "#",
    },
    {
     //shiva
    },
    {
//CP LEAD



      // id: 11,
      // title: "Archit Srivastava",
      // image: archit,
      // text: "Event Management Lead",
      // git: "https://github.com/archit1203",
      // linkdin: "https://www.linkedin.com/in/archit1203/",
      // insta: "https://www.instagram.com/archit.1203/",
    },
    {
      //shubangi
    },
    {
      // id: 13,
      // title: "Paras Tiwari",
      // image: paras,
      // text: "Competitive Programming Lead",
      // git: "#",
      // linkdin: "https://www.linkedin.com/in/paras-tiwari-3a78a9212/",
      // insta: "https://www.instagram.com/_paras_._tiwari_/",
    },
    {
      // id: 14,
      // title: "Suraj Gupta",
      // image: suraj,
      // text: "Opportunity Searching Lead",
      // git: "#",
      // linkdin: "https://www.linkedin.com/in/suraj-gupta-030b04210/",
      // insta: "https://www.instagram.com/i.m.suraj.gupta/",
    },
  ];

  return (
    <>
      <div className="Team_container ">
        <div className="Team_head">
          <div className="Team_Item_1 Team_Item">
            <img src={TeamTag} alt="" />
          </div>
          <div className="Team_Item_1 Team_Item">
            <h3 className="Team_Title">The Team.</h3>
            <p style={{ width: "343px" }} className="Team_Descript_1">
              Together, we push boundaries, challenge norms, and create
              solutions that shape the future.
            </p>
            <p>
              <span className="Team_Descript">
                <RiTeamFill></RiTeamFill> Get To Know
              </span>
              <span className="Team_Descript">
                <RiStackshareLine></RiStackshareLine>Join The Team
              </span>
            </p>
          </div>
        </div>

        <div className="Team_row">
          {cards.map(({ title, image, text, git, linkdin, insta, id }) => (
            <div className="Team_col" key={id}>
              <TeamCard
                imageSource={image}
                title={title}
                text={text}
                url1={git}
                url2={linkdin}
                url3={insta}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-[-1rem] mb-[-1rem]">
        <Footer />
      </div>
    </>
  );
};
export default Team_Member;
