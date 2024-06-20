import "./Services.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
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
    // <div className="form">
    <div className="addressBox">
      <div className="Title" style={{ marginBottom: "2rem" }}>
        <h2>Request a Quate Today</h2>
      </div>
      <div className="Acontent">
        <div className="address">
          <p>Save Money, Save The Environment!</p>
          <h4>
            Providing Value To Our Clients Through<br></br> Ongoing Product &
            Innovation.
          </h4>
          <a href="mailto:Ekamgreenventures@gmail.com">
          <div className="aa">
            <img src="/assets/a1.png" />
            <p>Ekamgreenventures@gmail.com</p>
          </div>
          </a>
        <a href="tel:+919933772272" >
          <div className="aa">
            <img src="/assets/a2.png" />
            <p>+91- 99337 72272</p>
          </div>
          </a>
      <a href="https://wa.me/919933772272" target="_blank">
          <div className="aa">
            <img src="/assets/a3.png" />
            <p>Contact us on Whatsapp</p>
          </div>
          </a>
        </div>
        <div className="Pcontact">
          <form onSubmit={handleSubmit} action="#" method="post">
            <div className="nameEmail">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact No."
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            ></textarea>
            <div>
              <button onClick={handleSubmit} disabled={isSending} className="PmessageButton">
              {isSending ? "Sending..." : "Send Message"}
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
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Form;
