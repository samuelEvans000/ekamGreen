import "./Home.css"

const Brands = () => {
    return (
        <div className="brands">
            <div className="Title">
                <h2>Top Solar Brands to choose From</h2>
                <div className="brandLine"></div>
            </div>
            <div className="brandImg">
                <img src="/assets/b1.png" />
                <img src="/assets/b2.png" />
                <img src="/assets/b3.png" />
                <img src="/assets/b4.png" />
            </div>

            <div className="brandContact">
                <div className="bc1">
                    <img src="/assets/bc.png" />
                    <p>Get a Free <br></br> Consultation, Call us</p>
                </div>
                <div className="bc2">
                    <p>+91-92890-44073</p>
                </div>
            </div>
        </div>
    )
}
export default Brands 