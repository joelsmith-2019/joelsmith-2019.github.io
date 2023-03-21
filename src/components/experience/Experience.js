import Project from "../project/Project";

function Experience() {

    let arr = ["I did this awesome thing", "I did this other awesome thing", "I even did this other awesome thing"];

    return (
        <div id="experience" className="container-sm page-container">

            <div className="page-content w-100">

                <div className="page-header">
                    <h1>Experience</h1>
                    <p>Here is my latest work experience.</p>
                </div>

                <div className="page-body">
                    <Project
                        startDate="October 2021"
                        endDate="October 2022"
                        title="Craft Economy"
                        subtitle="Crytocurrency within a Mincraft Server"
                        role="Software Developer"
                        description={arr}
                        github="https://github.com/joelsmith-2019"
                        website="https://github.com/joelsmith-2019"
                        demo="https://github.com/joelsmith-2019"
                    ></Project>

                </div>
            </div>
        </div>
    );
}

export default Experience;