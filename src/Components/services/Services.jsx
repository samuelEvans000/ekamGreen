// import Brands from "../home/Brands"
// import Clients from "../home/Clients"
import Form from "./Form";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Services.css";

const Services = () => {
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

    setIsSending(true);

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
    if (!isSending) {
      sendMail();
    }
  };


  return (
    <div className="services">
      <div className="serviceMain">
        <div className="serviceImg">
          <img src="/assets/serviceM.png" />
        </div>
        <div className="serviceTitle">
          <h1 className="l1">SOLAR</h1>
          <h1 className="l2">WAY TO</h1>
          <h1 className="l3">FUTURE</h1>
        </div>
      </div>
      <div className="serviceIntro">
        <h1>Services</h1>
      </div>
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>

      <div className="serviceDesc">
        <p>
          Whether you are an industry or business owner, a project developer or
          a home owner considering a solar energy solution, we have something to
          offer. With our experience and linkages with the best of global
          brands, we can offer you a complete solution – from planning, to
          design, to execution and commissioning.
        </p>

        <div className="serviceBox">
          <div onSubmit={handleSubmit} className="serviceForm">
            <h3>Get in touch today to find out.</h3>
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
            <button onClick={handleSubmit} disabled={isSending}>
            {isSending ? "Sending..." : "Request call"}
            </button>
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
          <div className="sideImg">
            <img src="/assets/robo.png" />
          </div>
        </div>

        <div className="fullService">
          <div className="Title">
            <h2>Full Service Epc</h2>
            <div className="serviceLine" />
          </div>
          <p>
            At the core of our business is full service capable Engineering,
            Procurement and Construction team with proven expertise in designing
            MW Scale solar plants and executing 100’s of rooftop solar projects
            for commercial and residential customers. Since our inception, we
            have sought to redefine the role of solar EPC companies by offering
            highest level of customer service in the industry.
          </p>
          <p>
            {" "}
            Get in touch today to find out how we can bring overall excellence
            to your installations through technology leadership and industry’s
            best practices.
          </p>

          {/* <div className="numbers">
                        <div className="nums">
                            <h1>1,000+</h1>
                            <p>PROJECTS EXECUTED</p>
                        </div>
                        <div className="nums">
                            <h1>100+</h1>
                            <p>MW INSTALLED</p>
                        </div>
                        <div className="nums">
                            <h1>500+</h1>
                            <p>SATISFIED CUSTOMERS</p>
                        </div>
                    </div> */}
        </div>

        <div className="management">
          <div className="Title">
            <h2>Project Management</h2>
            <div className="manageLine"></div>
          </div>
          <p>
            Starting from identifying the right project opportunities for
            potential solar power developers to implementing scalable strategies
            to achieve their financial goals, we extend all support including
            project construction, local liaison services and even operations and
            maintenance for long term asset value protection.
          </p>
          <br></br>
          <br></br>
          <p>
            Call us to know how we add value to your solar projects on strength
            of our market penetration and practical project construction
            exposure in India
          </p>
          <h2>+91-99337 72272</h2>
        </div>

        <div className="Line"></div>
      </div>

      {/* <Brands /> */}
      {/* <Clients /> */}
      <Form />
    </div>
  );
};

export default Services;
