// importing css
import "./Contact.css";

import Img from "../../assets/mail.jpg";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <div className="box">
        <div className="box1">
          <p className="he">Contact Us.</p>
          <p className="tex ">
            Your thoughts, inquiries, and feedback fuel our growth. Don't
            hesitate - reach out today!
          </p>
          <img src={Img} alt="no image" />
        </div>
        <div className="box2">
          <form>
            <p>
              First Name.
              <input type="text" className="bord" name="name" />
            </p>
            <div className="spce"></div>
            <p>
              Last Name.
              <input type="text" className="bord" name="name" />
            </p>
          </form>
        </div>
      </div>
      <div className="second">
        <p>EmailId.</p>
        <input type="text" className="bord1" name="name" />
        <p>Message.</p>

        <textarea rows="7" className="bord2" cols="50"></textarea>
        <button type="submit" className="btn">
          Send
        </button>
      </div>

      <div className="ml-[-1rem] mb-[-1rem] mt-[4rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
