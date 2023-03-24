import './Project.scss';

export default function Project(props) {

    // The index of the project in the list of projects
    // Determins which side the project timeline is on
    let index = props.index;

    // The start and end date of the project
    let startDate = props.startDate;
    let endDate = props.endDate;

    // The title, subtitle and role of the project
    let title = props.title;
    let description = props.description;
    let role = props.role;
    let isSideProject = props.isSideProject;
    const points = props.points.map((line, index) => {
        return <li className="project-point" key={index}>{line}</li>;
    });
    const skills = props.skills.map((skill, index) => {
        return <span className="skill" key={index}>{skill}</span>;
    });

    // Links (optional)
    let github = props.github;
    let website = props.website;
    let demo = props.demo;

    // Project date (vertical)
    let dateVertical = <>
        <div className="project-date-vert col-12 col-md-2 d-none d-md-block">
            <div className="h-100">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <span className="text-center">{endDate}</span>
                    <span className="h-100 my-3" style={{ borderRight: "1px solid" }}></span>
                    <span className="text-center">{startDate}</span>
                </div>
            </div>
        </div>
    </>;

    // Project date (horizontal)
    let dateHorizontal = <>
        <div className="project-date-hr col-12 col-md-3 d-block d-sm-block d-md-none mb-3">
            <div className="w-100">
                <div className="row justify-content-between align-items-center">
                    <span className="col text-start">{startDate}</span>
                    <span className="col w-100 mx-3" style={{ borderTop: "1px solid" }}></span>
                    <span className="col text-end">{endDate}</span>
                </div>
            </div>
        </div>
    </>;

    // Project details
    let details = <>
        <div className="col-12 col-md-8">
            {/* Project header (role, links, title, desc) */}
            <div className="project-header mb-3">

                {/* Role & Links */}
                <div className="row justify-content-between align-items-center">
                    {/* Role at Project */}
                    <div className="col">
                        {role &&
                            <span className="project-role mb-1">
                                {role} {isSideProject && <span>of</span>}{!isSideProject && <span>at</span>}
                            </span>
                        }
                    </div>

                    <div className="col d-flex justify-content-end">
                        {/* Extra opptional links */}
                        {(github || website || demo) &&
                            <div className="project-links">
                                <div className="d-flex justify-content-evenly align-items-center p-0">
                                    {github &&
                                        <div className="social-icon">
                                            <a href={github} target="_blank" rel="noopener noreferrer">
                                                {/* Github icon */}
                                                <i className="fa-brands fa-github fa-2x"></i>
                                            </a>
                                        </div>
                                    }

                                    {/* Website link */}
                                    {website &&
                                        <div className="social-icon">
                                            <a href={website} target="_blank" rel="noopener noreferrer">
                                                {/* Website icon */}
                                                <i className="fa-solid fa-globe fa-2x"></i>
                                            </a>
                                        </div>
                                    }


                                    {/* Demo link */}
                                    {demo &&
                                        <div className="social-icon">
                                            <a href={demo} target="_blank" rel="noopener noreferrer">
                                                {/* Demo icon */}
                                                <i className="fa-solid fa-tv fa-2x"></i>
                                            </a>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>

                {/* Title & Description */}
                <h2 className="project-title mb-0">{title}</h2>
                <span className="project-description">{description}</span>
            </div>

            {/* Project body (points & skills) */}
            <div className="project-body">

                {/* Bullet points */}
                <div className="project-points">
                    <ul>
                        {points}
                    </ul>
                </div>

                {/* Skills */}
                <div className="project-skills d-flex flex-wrap">
                    {skills}
                </div>
            </div>
        </div>
    </>;

    // If the index is even, the project timeline is on the left
    return (
        <div className="project row justify-content-evenly">

            {/* Date on left, details on right */}
            {index % 2 !== 0 &&
                <>
                    {dateVertical}
                    {dateHorizontal}
                    {details}
                </>
            }

            {/* Details on left, date on right */}
            {index % 2 === 0 &&
                <>
                    {dateHorizontal}
                    {details}
                    {dateVertical}
                </>
            }
        </div>
    );
}