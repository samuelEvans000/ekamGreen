import "./Home.css"
import { useState, useEffect } from "react";

const Flow = () => {

    const initialBgImage = window.innerWidth <= 1000 ? '/assets/testM.png' : '/assets/test.png';
    const [bgImage, setBgImage] = useState(initialBgImage);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            const isSmall = window.innerWidth <= 1000;
            setIsSmallScreen(isSmall);
            setBgImage(isSmall ? '/assets/testM.png' : '/assets/test.png');
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const test1 = () => {
        setBgImage(isSmallScreen ? '/assets/testM1.png' : '/assets/test1.png');
    };

    const test2 = () => {
        setBgImage(isSmallScreen ? '/assets/testM2.png' : '/assets/test2.png');
    };

    const test3 = () => {
        setBgImage(isSmallScreen ? '/assets/testM3.png' : '/assets/test3.png');
    };

    const test4 = () => {
        setBgImage(isSmallScreen ? '/assets/testM4.png' : '/assets/test4.png');
    };

    const handleMouseOut = () => {
        setBgImage(isSmallScreen ? '/assets/testM.png' : '/assets/test.png');
    };

    return (
        <div className="flow">
            <div className="Title">
                <h2>We are expert in Residential and Commercial Rooftop Solar Systems</h2>
                <div className="flowLine"></div>
            </div>


            <div className="workflow-container"  style={{ backgroundImage: `url(${bgImage})` }} >
                <div onMouseOver={test1} onMouseOut={handleMouseOut} className="test1" />
                <div onMouseOver={test2} onMouseOut={handleMouseOut} className="test2" />
                <div onMouseOver={test3} onMouseOut={handleMouseOut} className="test3" />
                <div onMouseOver={test4} onMouseOut={handleMouseOut} className="test4" />
            </div>



            <div className="flowSolar">
                <h2>Why go<br className="break"></br> Solar?</h2>
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