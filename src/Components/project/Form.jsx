import "./Projects.css"

const Form = () => {
    return (
        // <div className="form">
            <div className="addressBox">
                <div className="Title" style={{ marginBottom: "2rem" }}>
                    <h2>Request a Quate Today</h2>
                </div>
                <div className="Acontent">
                    <div className="address">
                        <p>Save Money, Save The Environment!</p>
                        <h4>Providing Value To Our Clients Through<br></br> Ongoing Product & Innovation.</h4>
                        <div className="aa">
                            <img src="/assets/a1.png" />
                            <p>info@arcrenewables.in</p>
                        </div>
                        <div className="aa">
                            <img src="/assets/a2.png" />
                            <p>+91-92890 44073, +91 124 4242428</p>
                        </div>
                        <div className="aa">
                            <img src="/assets/a3.png" />
                            <p>Contact us on Whatsapp</p>
                        </div>
                    </div>
                    <div className="Pcontact">
                        <form action="#" method="post">
                            <div style={{ display: "flex", gap: "20px" }}>
                                <input placeholder='Your Name' />
                                <input placeholder='Your Email' />
                            </div>
                            <input placeholder='Contact No.' />
                            <textarea placeholder='Your Message' ></textarea>
                            <div>
                                <button className='PmessageButton'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Form