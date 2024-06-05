import Brands from "../home/Brands.jsx"
import Clients from "../home/Clients.jsx"
import "./Form.jsx"
import Form from "./Form.jsx"

const Projects = () => {
    return (
        <div className="projects">
            <div className="projectIntro">
                <img src="/assets/work.png" />
                <img src="/assets/work.png" />
                <h1>Projects</h1>
                <img src="/assets/work.png" />
            </div>

            <div className="arrow-container">
                <div className="arrow">
                    {/* <img src="/assets/ani1.png" />
                    <img src="/assets/ani2.png" /> */}
                </div>
            </div>

            <div className="projectImg">
                <img src="/assets/project1.png" />
                <img src="/assets/project2.png" />
                <img src="/assets/project3.png" />
            </div>

            <Brands />
            <Clients />
            <Form />
        </div>
    )
}

export default Projects