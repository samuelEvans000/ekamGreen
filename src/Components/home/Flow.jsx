import "./Home.css"
import { useState } from "react";

const Flow = () => {


    const [bgImage, setBgImage] = useState('/assets/test.png');

    const test1 = () => {
        setBgImage('/assets/test1.png');
    };

    const test2 = () => {
        setBgImage('/assets/test2.png');
    };
    const test3 = () => {
        setBgImage('/assets/test3.png');
    };
    const test4 = () => {
        setBgImage('/assets/test4.png');
    };

    const handleMouseOut = () => {
        setBgImage('/assets/test.png');
    };

    return (
        <div className="flow">
            <div className="Title">
                <h2>We are expert in Residential and Commercial Rooftop Solar Systems</h2>
                <div className="flowLine"></div>
            </div>
            <div className="workflow-container"  style={{ backgroundImage: `url(${bgImage})` }} >
                {/* <div className="workflow-stage">
                    <img src="/assets/f1.png" />
                    <p className="title">We Listen</p>
                </div>
                <div className="curvy-line"></div>
                <div className="workflow-stage">
                    <img src="/assets/f2.png" />
                    <p className="title">Analysis</p>
                </div>
                <div className="curvy-line"></div>
                <div className="workflow-stage">
                    <img src="/assets/f3.png" />
                    <p className="title">Concept & <br></br>Design</p>
                </div>
                <div className="curvy-line"></div>
                <div className="workflow-stage">
                    <img src="/assets/f4.png" />
                    <p className="title">Delivery</p>
                </div> */}
                <div onMouseOver={test1} onMouseOut={handleMouseOut} className="test1" />
                <div onMouseOver={test2} onMouseOut={handleMouseOut} className="test2" />
                <div onMouseOver={test3} onMouseOut={handleMouseOut} className="test3" />
                <div onMouseOver={test4} onMouseOut={handleMouseOut} className="test4" />
            </div>
            <div className="flowSolar">
                <h2>Why go<br></br> Solar?</h2>
                <div className="solarInfo">
                    <img src="/assets/money.png" />
                    <p>Make Money From Sun</p>
                </div>
                <div className="solarInfo">
                    <img src="/assets/green.png" />
                    <p>Green Energy</p>
                </div>
                <div className="solarInfo">
                    <img src="/assets/low.png" />
                    <p>Low-Maintenance</p>
                </div>
                <div className="solarInfo">
                    <img src="/assets/return.png" />
                    <p>Return on Investment</p>
                </div>
            </div>
        </div>
    )
}

export default Flow