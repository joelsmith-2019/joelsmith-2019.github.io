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
            isSideProject: false,
            points: [
                "Designed, developed, and maintained 14 plugins from concept to completion, showcasing an ability to create effective solutions for complex problems",
                "Performed code reviews for the geographically dispersed team, improving both code quality and efficiency",
                "Utilized Java, MongoDB, Redis, Git/GitLab and Python to integrate cryptocurrency into Minecraft"
            ],
            skills: ["Java", "Maven", "MongoDB", "Redis", "Git", "GitLab", "Python", "Blockchains"],
            github: "",
            website: "",
            demo: "",
        },
        {
            startDate: "December 2017",
            endDate: "December 2019",
            title: "Joel's Enterprises, LLC",
            description: "A small business which ran Minecraft servers and sold plugin development services.",
            role: "Owner",
            isSideProject: false,
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
    ];

    // Define the projects RJX
    let index = 1;
    let projectRJX = projects.map((project) => {
        return (
            <Project
                key={index}
                index={index++}
                startDate={project.startDate}
                endDate={project.endDate}
                title={project.title}
                description={project.description}
                role={project.role}
                isSideProject={project.isSideProject}
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
        <div id="experience" className="container-sm section-container">

            <div className="section-content">

                <div className="section-header">
                    <h1>Experience</h1>
                    <p>Below are my latest software development work experiences.</p>
                </div>

                <div className="section-body">
                    {projectRJX}
                </div>
            </div>
        </div>
    );
}