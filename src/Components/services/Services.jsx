import Brands from "../home/Brands"
import Clients from "../home/Clients"
import Form from "../project/Form"
import "./Services.css"

const Services = () => {
    return (
        <div className="services">
            <div className="serviceMain">
                <div className="serviceImg">
                    <img src="/assets/serviceM.png" />
                </div>
                <div className="serviceTitle">
                    <h1 className="l1">SOLAR</h1>
                    <h1 className="l2">WAY TO</h1>
                    <h1 className="l3">FUTURE</h1>
                </div>
            </div>
            <div className="serviceIntro">
                <h1>Services</h1>
            </div>
            <div className="arrow-container">
                <div className="arrow"></div>
            </div>

            <div className="serviceDesc">
                <p>
                    Whether you are an industry or business owner, a project developer or a home owner considering a solar energy solution, we have something to offer. With our experience and linkages with the best of global brands, we can offer you a complete solution – from planning, to design, to execution and commissioning.
                </p>

                <div className="serviceBox">
                    <div className="serviceForm">
                        <h3>Get in touch today to find out.</h3>
                        <input placeholder="Your Name" />
                        <input placeholder="Contact no." />
                        <button>Request call</button>
                    </div>
                    <div className="sideImg">
                        <img src="/assets/robo.png" />
                    </div>
                </div>

                <div className="fullService">
                    <div className="Title">
                        <h2>Full Service Epc</h2>
                        <div className="serviceLine" />
                    </div>
                    <p>
                        At the core of our business is full service capable Engineering, Procurement and Construction team with proven expertise in designing MW Scale solar plants and executing 100’s of rooftop solar projects for commercial and residential customers. Since our inception in 2011, we have sought to redefine the role of solar EPC companies by offering highest level of customer service in the industry.
                    </p>
                    <p> Get in touch today to find out how we can bring overall excellence to your installations through technology leadership and industry’s best practices.</p>

                    <div className="numbers">
                        <div className="nums">
                            <h1>1,000+</h1>
                            <p>PROJECTS EXECUTED</p>
                        </div>
                        <div className="nums">
                            <h1>100+</h1>
                            <p>MW INSTALLED</p>
                        </div>
                        <div className="nums">
                            <h1>500+</h1>
                            <p>SATISFIED CUSTOMERS</p>
                        </div>
                    </div>
                </div>

                <div className="management">
                    <div className="Title">
                        <h2 >Project Management</h2>
                        <div className="manageLine"></div>
                    </div>
                    <p>Starting from identifying the right project opportunities for potential solar power developers to implementing scalable strategies to achieve their financial goals, we extend all support including project construction, local liaison services and even operations and maintenance for long term asset value protection.</p>
                    <br></br>
                    <br></br>
                    <p>Call us to know how we add value to your solar projects on strength of our market penetration and practical project construction exposure in India</p>
                    <h2>+91-92890-44073</h2>
                </div>

                <div className="Line"></div>

                <div className="technology">
                    <div className="Title">
                        <h2>Technology solutions</h2>
                        <div className="techLine"></div>
                    </div>

                    <p>Solar trackers are fast emerging as a key technology for increasing solar yields thereby improving plant efficiencies and returns on investments. We bring you some of best and most successful solar trackers worldwide. These patented and advanced Trackers are being supplied to solar plants worldwide, ranging from hundreds of kilowatts to megawatts, across countries in Europe, USA and Asia.</p>
                    <p> We are exclusively marketing and manufacturing these trackers in India. Get in touch today to find out how trackers can change your project economics</p>
                </div>

                <div className="percent">
                        <div className="pers">
                            <h3>25% IMPROVEMENT</h3>
                            <p>IN YIELD</p>
                        </div>
                        <div className="pers">
                            <h3>30% INTERNAL</h3>
                            <p>RETURN ON INVESTMENT</p>
                        </div>
                        <div className="pers">
                            <h3>25 YEARS</h3>
                            <p>PROJECT LIFE</p>
                        </div>
                    </div>
            </div>

            <Brands />
            <Clients />
            <Form />

        </div>
    )
}

export default Services