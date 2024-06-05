
import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <div className="nav-contact">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <img src="/assets/mail.png" />
                    <p>Info@acrenewables.in</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginRight: "2rem" }}>
                    <img src="/assets/call.png" />
                    <p>+91 9289044073 , +91 124 4242428</p>
                </div>
            </div>
            <div className="navbar">
                <div>
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
                    <Link to="" style={{ textDecoration: "none" }}>
                        <p style={{ display: "flex", alignItems: "center", gap: '10px' }}>Our Products <img src="/assets/dropdown.png" /></p>
                    </Link>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                        <p>Services</p>
                    </Link>
                    <Link to="/contact-Us" style={{ textDecoration: "none" }}>
                        <p>Contact us</p>
                    </Link>
                    <Link to="/projects" style={{ textDecoration: "none" }}>
                        <p>
                            Projects
                        </p>
                    </Link>
                    <p className="num-link">9305xxxx97</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;