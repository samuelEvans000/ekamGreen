import "./Contact.css"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Clients from "../home/Clients";

// Fix the default icon issue with Leaflet
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
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
                        <h2>
                            Reach Us
                        </h2>
                    </div>
                    <div className="reachContent">
                        <div className="reachInfo">
                            <img src="/src/assets/a4.png" />
                            <p>SCO 11, 1st Floor, Above Bank of  Maharashtra, Sector 23 A,Gurugram-122001,Haryana</p>
                        </div>
                        <div className="reachInfo">
                            <img src="/src/assets/a1.png" />
                            <p>info@arcrenewables.in</p>
                        </div>
                        <div className="reachInfo">
                            <img src="/src/assets/a2.png" />
                            <p>+91-92890 44073, +91 124 4242428</p>
                        </div>
                        <div className="map">
                            <MapContainer center={[28.504944, 77.052889]} zoom={13} style={{ height: '160px', width: '110%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[28.504944, 77.052889]}>
                                    <Popup>ARC Renewables</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>

                <div className="callback">
                    <div className="requestBox1">
                        <h3>Request Callback</h3>
                        <p>Please complete the Form</p>
                        <input placeholder="Your Name" />
                        <input placeholder="Contact no." />
                        <button>Request call</button>
                    </div>
                </div>
            </div>
            <Clients />
        </div>
    )
}

export default Contact