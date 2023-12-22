import Project from "../project/Project";

export default function Projects() {

    // Array of all projects
    let projects = [
        {
            startDate: "April 2023",
            endDate: "May 2023",
            title: "Jordle",
            description: "An open-source web application based off the popular game, Wordle.",
            role: "Developer",
            isSideProject: true,
            points: [
                "Developed and launched Jordle, an innovative word game application that builds upon the popular Wordle concept",
                "Introduced diverse game modes such as daily challenges, unlimited play, custom games, and a build-your-own feature for users to create and share their custom games",
                "Leveraged multiple backend APIs to facilitate word validation, emphasizing a strong understanding of API integration and data validation processes",
                "Demonstrated proficiency in designing responsive user interfaces by implementing adaptive layouts for Jordle, ensuring optimal user experience across various device types and screen sizes"
            ],
            skills: ["JavaScript", "TypeScript", "React", "Git", "GitHub", "CI/CD"],
            github: "https://github.com/joelsmith-2019/jordle",
            website: "https://jordle.joelsmith.io",
            demo: "",
        },
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