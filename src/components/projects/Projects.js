import Project from "../project/Project";

export default function Projects() {

    // Array of all projects
    let projects = [
        {
            startDate: "September 2022",
            endDate: "April 2023",
            title: "Senior Capstone Project",
            description: "An online auction application utilizing microservice architecture.",
            role: "Developer",
            isSideProject: true,
            points: [
                "Developing an online auction application based on microservices architecture, providing a highly scalable platform for users",
                "Using AWS cloud services to deploy and host the application while Dapr manages the intercommunication and state storage interactions between microservices",
                "Programming with Java, Spring Boot, Rust, Typescript, Express, and Angular to develop back-end RESTful APIs and a front-end microservice",
                "Utilizing GitHub for code management and Jira for progress management, ensuring a well-organized development process"
            ],
            skills: ["Java", "Spring Boot", "Rust", "JavaScript", "TypeScript", "Express", "Angular", "PostgreSQL", "MongoDB", "Dapr", "Docker", "Kubernetes", "Jira", "AWS"],
            github: "https://github.com/the-auction-games",
            website: "",
            demo: "",
        },
        {
            startDate: "July 2020",
            endDate: "August 2021",
            title: "Minecraft Minigame Project",
            description: "A Minecraft minigame network based off of Call of Duty's Infection gamemode.",
            role: "Developer",
            isSideProject: true,
            points: [
                "Developed a Minecraft minigame network from conception to production, using Java, SQL, and a bare-metal Linux machine",
                "Coordinated with a team of engineers using Git and GitHub to track issues, pull requests, and features",
                "Configured and maintained a Linux machine for hosting game services and server panels, ensuring a seamless administrative experience",
                "Organized and hosted beta testing events to gather feedback and fine-tune the minigame interactions, providing an optimal gaming experience"
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
        <div id="projects" className="container-sm section-container">

            <div className="section-content">

                <div className="section-header">
                    <h1>Projects</h1>
                    <p>Below are my latest side projects.</p>
                </div>

                <div className="section-body">
                    {projectRJX}
                </div>
            </div>
        </div>
    );
}