import "./Home.css"
import Desc from "./Desc"
import Flow from "./Flow"
import Products from "./Products"
import Reasons from "./Reasons"
// import Clients from "./Clients"
// import Blogs from "./Blogs"
import Reach from "./Reach"

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <div className="part1">
                    <h1 className="hiddenText">helloooo</h1>
                    <h3>Delivering Clean Energy</h3>
                    <div style={{display:"flex", flexDirection:"column", textAlign:"end", marginRight:"10rem"}}>
                    <h1>EKAM GREEN</h1>
                    </div>
                    <h2>VENTURES</h2>
                </div>
                <div className="part2">
                    <div className="part2Text">
                        <h2>Experts in Residential & Commercial</h2>
                        <h1><span style={{ color: "#E07716" }}>SOLAR</span> SYSTEM</h1>
                    </div>
                    <div className="requestBox">
                        <h3>Request Callback</h3>
                        <p>Please complete the Form</p>
                        <input placeholder="Your Name" />
                        <input placeholder="Contact no." />
                        <button>Request call</button>
                    </div>
                </div>
            </div>
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
    )
}

export default Home