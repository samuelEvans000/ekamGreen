import "./Home.css"


const Reasons = () => {
    return (
        <div className="reasons">
            <div>
                <img src="/assets/logo.png" />
            </div>
            <div className="Title">
                <h2>Reasons To Choose EKAM GREEN For Powering The Clean Energies</h2>
                <div className="reasonLine"></div>
            </div>

            <div className="Rcontent">
                <div className="rimg">
                    <img src="/assets/r1.png" />
                    <p>10+ Years of<br></br> experience</p>
                </div>
                <div className="rimg">
                    <img src="/assets/r2.png" />
                    <p>Greener and fresh<br></br> atmosphere</p>
                </div>
                <div className="rimg">
                    <img src="/assets/r3.png" />
                    <p>New & constantly<br></br> replenished</p>
                </div>
                <div className="rimg">
                    <img src="/assets/r4.png" />
                    <p>Low cost and budget<br></br> friendly</p>
                </div>
            </div>

            <div className="Rsolar">
                <h2>Solar panel EPC<br></br> company </h2>
                <div className="RsolarInfo">
                    <img src="/assets/rs1.png" />
                    <h4>Most Trusted Brand</h4>
                    <p>India’s most trusted EPC brand</p>
                </div>
                <div className="RsolarInfo">
                    <img src="/assets/rs2.png" />
                    <h4>Best in Quality</h4>
                    <p>We provide the best quality design engineering</p>
                </div>
                <div className="RsolarInfo">
                    <img src="/assets/rs3.png" />
                    <h4>Flexible Payment Options</h4>
                    <p>Flexible payment options available</p>
                </div>
            </div>
        </div>
    )
}

export default Reasons