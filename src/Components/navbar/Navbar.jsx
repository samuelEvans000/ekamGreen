
import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <div className="nav-contact">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <img src="/assets/mail.png" />
                    <p>Ekamgreenventures@gmail.com</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginRight: "2rem" }}>
                    <img src="/assets/call.png" />
                    <p>+91 99337 72272</p>
                </div>
            </div>
            <div className="navbar">
                <div className="nav-logo">
                    <Link to='/'>
                        <img src="/assets/logo.png" />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <p>
                            Home
                        </p>
                    </Link>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        <p>Services</p>
                    </Link>
                    <Link to="/contact-Us" style={{ textDecoration: "none" }}>
                        <p>Contact us</p>
                    </Link>
                   
                </div>
            </div>
        </>
    )
}

export default Navbar;