import "./Home.css"
const Reach = () => {
    return (
        <div className="reachBox">
            <div className="reach">
                <div className="Title" style={{marginBottom:"2rem"}}>
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
                        <p>+91-92890-44073</p>
                    </div>
                </div>
            </div>
            <div className="request">
                <div className="Title" style={{marginBottom:"2rem"}}>
                    <h2>Request a Quate Today</h2>
                </div>
                <div className="contact">
                    <form action="#" method="post">
                        <div style={{ display: "flex", gap: "20px" }}>
                            <input placeholder='Your Name' />
                            <input placeholder='Your Email' />
                        </div>
                        <input placeholder='Contact No.' />
                        <textarea placeholder='Your Message' ></textarea>
                        <div>
                            <button className='messageButton'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reach;