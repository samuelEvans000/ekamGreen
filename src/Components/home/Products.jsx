import "./Home.css"
const Products = () => {
    return (
        <div className="products">
            <div className="Title">
                <h2>Our Products</h2>
                <div className="productLine"></div>
            </div>
            <div className="Plist">
                <div className="Pcontent">
                    <img src="/assets/p1.png" />
                    <h4>On Grid System</h4>
                    <p>If you”re looking for a way to save money on your power bill, increase the value of your home or office</p>
                    {/* <button>Read More</button> */}
                </div>
                <div className="Pcontent">
                    <img src="/assets/p2.png" />
                    <h4>Utility Scale Power Plant</h4>
                    <p>To successfully deliver a solar power plant project can be extraordinarily complicated.</p>
                    {/* <button>Read More</button> */}
                </div>
                <div className="Pcontent">
                    <img src="/assets/p3.png" />
                    <h4>Off Grid System</h4>
                    <p>Off-grid solar energy systems convert sunlight into electricity without connecting to local utility grids.</p>
                    {/* <button>Read More</button> */}
                </div>
                <div className="Pcontent">
                    <img src="/assets/p4.png" />
                    <h4>Solar Water Heating</h4>
                    <p>Ekam Green Solar Water Heaters are amongst the most affordable and simple to install of all solar hot water systems.</p>
                    {/* <button>Read More</button> */}
                </div>
            </div>
        </div>
    )
}

export default Products