import './Skills.scss';

export default function Skills() {

    // List of front-end skills
    let frontSkills = [
        "HTML",
        "CSS",
        "Sass",
        "JavaScript",
        "TypeScript",
        "Angular",
        "React"
    ];

    // List of back-end skills
    let backSkills = [
        "Git",
        "Java",
        "Maven",
        "Spring Boot",
        "Node",
        "Express",
        "Python",
        "Rust",
        "MongoDB",
        "SQL",
        "Redis",
        "Linux",
        "Docker",
        "Dapr",
        "Microservices",
        "Blockchains",
        "SpigotMC"
    ];

    // List of other skills
    let otherSkills = [
        "GitHub",
        "GitLab",
        "Jira",
        "UMLs",
        "Flowcharts",
        "Wireframes"
    ];

    // Function to return JSX for skills
    function getJSX(skills) {
        return skills.map((skill, index) => {
            return (
                <span className="skill" key={index}>{skill}</span>
            );
        });
    }

    // Return the JSX
    return (
        <div id="skills" className="container-sm section-container">

            <div className="section-content">

                <div className="section-header">
                    <h1>Skills</h1>
                    <p>Here are some of the latest tools and technologies I have been working with.</p>
                </div>

                <div className="section-body">

                    <div className="row justify-content-between">

                        <div className="col-12 col-md-4 pb-3 pb-md-0">

                            {/* Front end skills */}
                            <h3>Front-End</h3>
                            <div className="skill-list">
                                {getJSX(frontSkills)}
                            </div>

                        </div>

                        <div className="col-12 col-md-4 py-3 py-md-0">

                            {/* Back end skills */}
                            <h3>Back-End</h3>
                            <div className="skill-list">
                                {getJSX(backSkills)}
                            </div>

                        </div>

                        <div className="col-12 col-md-4 pt-3 pt-md-0">

                            {/* Other skills */}
                            <h3>Other</h3>
                            <div className="skill-list">
                                {getJSX(otherSkills)}
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};