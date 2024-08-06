import Project from "../project/Project";

export default function Experience() {

    // Array of all projects
    let projects = [
        {
            startDate: "March 2024",
            endDate: "Present",
            title: "Strangelove",
            description: "A blockchain development firm, lab, and validator, that builds software to supercharge the growth and security of the Interchain.",
            role: "Software Engineer",
            isSideProject: false,
            points: [
                "Reduced third-party API calls for one of our client services by 90% within 5 weeks of joining the team, significantly lowering runtime costs and enhancing performance",
                "Standardized CI/CD pipelines across all projects, simplifying setup and maintenance processes",
                "Performed Cosmos chain upgrades and maintenance, ensuring clients have access to the latest features and enhanced security",
            ],
            skills: ["Golang", "CosmosSDK", "Protobuf", "Git", "GitHub", "Docker", "CI/CD"],
            github: "https://github.com/strangelove-ventures",
            website: "https://strange.love",
            demo: "",
        },
        {
            startDate: "August 2023",
            endDate: "March 2024",
            title: "Juno Network",
            description: "A decentralized, open-source, and community-driven blockchain network.",
            role: "Software Developer",
            isSideProject: false,
            points: [
                "Designed and developed a pivotal module within 2 months, showcasing adaptability and a rapid grasp of blockchain technology despite no prior experience",
                "Innovated by introducing unique, developer-friendly blockchain features to entice more users to the chain, improving both the developer’s and client’s experience",
                "Acquired new skills including Golang, CosmosSDK, Rust, CosmWasm (Smart Contracts), and Protobuf, showing an ability to pick up new skills and apply them quickly and effectively",
                "Documented my learning journey by accumulating and supplying resources for future Juno developers, reducing their onboarding time dramatically"
            ],
            skills: ["Golang", "CosmosSDK", "Rust", "CosmWasm", "Protobuf", "Git", "GitHub", "Docker", "CI/CD"],
            github: "https://github.com/CosmosContracts/juno",
            website: "https://junonetwork.io/",
            demo: "",
        },
        {
            startDate: "May 2023",
            endDate: "March 2024",
            title: "American Airlines",
            description: "A leading international airline company.",
            role: "Software Developer",
            isSideProject: false,
            points: [
                "Managed and maintained critical backend services for our chat bot, significantly reducing customer response times and enhancing overall satisfaction",
                "Improved our in-house automated testing suite for mobile devices and created comprehensive documentation for future developers, reducing onboarding time by 50%",
                "Contributed to the planning and execution of new features, showing an ability to engage in the entire software development lifecycle",
                "Played a key role in the Agile development processes, actively participating in sprint planning, daily stand-ups, and sprint reviews"
            ],
            skills: ["Java", "Spring Boot", "JUnit", "Mockito", "Appium", "Cucumber", "Git", "ADO", "Docker", "CI/CD", "Agile"],
            github: "",
            website: "https://www.aa.com/",
            demo: "",
        },
        {
            startDate: "October 2021",
            endDate: "October 2022",
            title: "Craft Economy",
            description: "A cryptocurrency company which integrated blockchain technology within Minecraft servers.",
            role: "Software Developer",
            isSideProject: false,
            points: [
                "Developed and maintained 14 plugins from concept to completion, showcasing an ability to create effective solutions for complex problems",
                "Performed code reviews for the geographically dispersed team, improving both code quality and efficiency",
                "Designed and implemented analytical software for tracking player interactions during multiple alpha-testing sessions with stakeholders and early supporters, providing valuable insights for future improvements",
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