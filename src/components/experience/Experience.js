import Project from "../project/Project";

export default function Experience() {

    // Array of all projects
    let projects = [
        {
            startDate: "October 2021",
            endDate: "October 2022",
            title: "Craft Economy",
            description: "A cryptocurrency company which integrated blockchain technology within Minecraft servers.",
            role: "Software Developer",
            points: [
                "Designed, developed, and maintained 14 plugins from concept to completion, showcasing an ability to create effective solutions for complex problems",
                "Performed code reviews for the geographically dispersed team, improving both code quality and efficiency",
                "Utilized Java, MongoDB, Redis, Git/GitLab and Python to integrate cryptocurrency into Minecraft"
            ],
            skills: ["Java", "Maven", "MongoDB", "Redis", "Git", "GitLab", "Python", "Blockchains"],
            github: "a",
            website: "a",
            demo: "a",
        },
        {
            startDate: "December 2017",
            endDate: "December 2019",
            title: "Joel's Enterprises, LLC",
            description: "A small business which ran Minecraft servers and sold plugin development services.",
            role: "Owner",
            points: [
                "Created a small, for-profit business running Minecraft servers and selling modifications, serving thousands of customers",
                "Led a small team of geographically distributed staff members, providing guidance and oversight to ensure effective operation of the company",
                "Managed advertisement campaigns and partnerships with influencers, driving increased traffic and revenue"
            ],
            skills: ["Java", "Maven", "MySQL", "Redis", "Linux"],
            github: "",
            website: "",
            demo: "",
        }
    ]

    // Define the projects RJX
    let index = 1;
    let projectRJX = projects.map((project) => {
        return (
            <Project
                index={index++}
                startDate={project.startDate}
                endDate={project.endDate}
                title={project.title}
                description={project.description}
                role={project.role}
                points={project.points}
                skills={project.skills}
                github={project.github}
                website={project.website}
                demo={project.demo}
            ></Project>
        );
    });

    // Return the experience page
    return (
        <div id="experience" className="container-sm page-container">

            <div className="page-content w-100">

                <div className="page-header">
                    <h1>Experience</h1>
                    <p>Below is my latest software development work experience.</p>
                    <span className="page-header-line"></span>
                </div>

                <div className="page-body">
                    {projectRJX}
                </div>
            </div>
        </div>
    );
}