import "./Contact.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import Clients from "../home/Clients";

// Fix the default icon issue with Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
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
    <div className="contacts">
      <div className="contactIntro">
        <h2>dfsdfgsdgf</h2>
        <h1>Get in touch</h1>
        <h2>dfsdfgsdgf</h2>
      </div>

      <div className="touchBox">
        <div className="reach-us">
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
            <a href="tel:+919933772272">
              <div className="reachInfo">
                <img src="/assets/a2.png" />
                <p>+91-99337 72272</p>
              </div>
            </a>
            <div className="map">
              <MapContainer
                center={[26.734039, 88.42418]}
                zoom={13}
                style={{ height: "160px", width: "110%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[26.734039, 88.42418]}>
                  <Popup>EKAMGREEN Ventures</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="callback">
          <div onSubmit={handleSubmit} className="requestBox1">
            <h3>Request Callback</h3>
            <p>Please complete the Form</p>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Name"
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact no."
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
        </div>
      </div>
      {/* <Clients /> */}
    </div>
  );
};

export default Contact;
