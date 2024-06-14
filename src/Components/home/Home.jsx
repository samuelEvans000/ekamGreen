import "./Home.css";
import Desc from "./Desc";
import Flow from "./Flow";
import Products from "./Products";
import Reasons from "./Reasons";
// import Clients from "./Clients"
// import Blogs from "./Blogs"
import Reach from "./Reach";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [isSending, setIsSending] = useState(false);


  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    if (showPopup) {
      const timeoutId = setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showPopup]);

  const sendMail = () => {
    if (!fullName || !contact) {
      setShowPopup(true);
      setPopupMessage("Please fill in all required fields !");
      return;
    }

    setIsSending(true)

    const params = {
      from_name: fullName,
      contact: contact,
    };

    emailjs
      .send("service_y18q47r", "template_u8tm39k", params, {
        publicKey: "vR8mYe2CDElQL1I0N",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFullName("");
          setContact("");
          setShowPopup(true);
          setPopupMessage(
            "Thank you for reaching out. Our team will connect with you soon."
          );
        },
        (err) => {
          console.log("FAILED...", err);
          setShowPopup(true);
          setPopupMessage("Message failed to send. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isSending)
    sendMail();
  };

  return (
    <div className="home">
      <div className="intro">
        <div className="part1">
          <h1 className="hiddenText">helloooo</h1>
          <h3>Delivering Clean Energy</h3>
          <div className="ekam">
            <h1>EKAM</h1>
          </div>
          <div className="ventures">
            <h2>GREEN VENTURES</h2>
          </div>
        </div>
        <div className="part2">
          <div className="part2Text">
            <h2>Experts in Residential & Commercial</h2>
            <h1>
              <span style={{ color: "#E07716" }}>SOLAR</span> SYSTEM
            </h1>
          </div>
          <div onSubmit={handleSubmit} className="requestBox">
            <h3>Request Callback</h3>
            <p>Please complete the Form</p>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact no."
              required
            />
            <button onClick={handleSubmit} disabled={isSending}>{isSending ? "Sending..." : "Request call"}
            </button>
          </div>
          {showPopup && (
            <div
              className={`popup ${
                popupMessage.includes("failed") ? "error" : "success"
              } ${popupMessage.includes("fields") ? "empty" : ""}`}
            >
              {popupMessage}
            </div>
          )}
        </div>
      </div>
      <a href="https://wa.me/919933772272" target="_blank">
        <div className="whatsapp">
          <div className="wtext">
            <img src="/assets/whatsapp.png" />
            <p>Contact us on Whatsapp</p>
          </div>
          <div className="wnum">
            <img className="phone" src="/assets/phone.png" />
            <img className="phonew" src="/assets/phonew.png" />
            <p>99337 72272</p>
          </div>
        </div>
      </a>
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>
      <Desc />
      <Flow />
      {/* <Brands /> */}
      <Products />
      <Reasons />
      {/* <Clients /> */}
      {/* <Blogs /> */}
      <Reach />
    </div>
  );
};

export default Home;
