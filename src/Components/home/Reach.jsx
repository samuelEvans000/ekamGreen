import "./Home.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Reach = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
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
    if (!fullName || !email || !contact || !message) {
      setShowPopup(true);
      setPopupMessage("Please fill in all required fields !");
      return;
    }

    setIsSending(true);

    const params = {
      from_name: fullName,
      email_id: email,
      contact: contact,
      message: message,
    };

    emailjs
      .send("service_y18q47r", "template_qpncnid", params, {
        publicKey: "vR8mYe2CDElQL1I0N",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFullName("");
          setEmail("");
          setContact("");
          setMessage("");
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
    <div className="reachBox">
      <div className="reach">
        <div className="Title" style={{ marginBottom: "2rem" }}>
          <h2>Reach Us</h2>
        </div>
        <div className="reachContent">
          <div className="reachInfo">
            <img src="/assets/a4.png" />
            <p>
              Ekam Green Ventures LLP, 2nd Floor, Dwarika Elegance, Pantaloons
              Building, Burdwan Road, Siliguri.
            </p>
          </div>
          <a href="mailto:Ekamgreenventures@gmail.com">
            <div className="reachInfo">
              <img src="/assets/a1.png" />
              <p>Ekamgreenventures@gmail.com</p>
            </div>
          </a>
        <a href="tel:+919933772272" >
          <div className="reachInfo">
            <img src="/assets/a2.png" />
            <p>+91-99337 72272</p>
          </div>
        </a>
        </div>
      </div>
      <div className="request">
        <div className="Title" style={{ marginBottom: "2rem" }}>
          <h2>Request a Quate Today</h2>
        </div>
        <div className="contact">
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="nameEmail">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </div>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact No."
              type="decimal"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
            ></textarea>
            <div>
              <button
                className="messageButton"
                onClick={handleSubmit}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
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
    </div>
  );
};

export default Reach;
