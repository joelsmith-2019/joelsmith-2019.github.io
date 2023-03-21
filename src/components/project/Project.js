
export default function Project(props) {

    let startDate = props.startDate;
    let endDate = props.endDate;

    let title = props.title;
    let subtitle = props.subtitle; // Optional
    let role = props.role;
    // Maybe convert description into an array of strings
    let description = props.description;

    const bullets = description.map((line) => {
        return <li>{line}</li>;
    });

    // Optional?
    let github = props.github;
    let website = props.website;
    let demo = props.demo;





    return (
        <div className="project d-flex justify-content-evenly">

            {/* Left column of project details */}
            <div className="project-left">

                <div className="project-date h-100">

                    <div className="d-flex flex-column justify-content-center align-items-center h-100">

                        <span className="text-center">{startDate}</span>
                        <span className="vert h-100 my-3" style={{ borderRight: '1px solid #ccc' }}></span>
                        <span className="text-center">{endDate}</span>
                    </div>
                </div>
            </div>


            {/* Right column of project details */}
            <div className="project-right">

                {/* Project header (title, subtitle & role) */}
                <div className="project-header">
                    <h4>{title}</h4>
                    {/* <h5>{subtitle}</h5> */}
                    <p>{role}</p>
                </div>

                {/* Project body */}
                <div className="project-body">

                    {/* Bullet points */}
                    <div>
                        <ul>
                            {bullets}
                        </ul>
                    </div>

                    {/* Extra opptional links */}
                    <div className="d-flex justify-content-evenly align-items-center">
                        {github &&
                            <div className="social-icon">
                                <a href={github} target="_blank">
                                    {/* Github icon */}
                                    <i className="fa-brands fa-github fa-2x"></i>
                                </a>
                            </div>
                        }

                        {/* Website link */}
                        {website &&
                            <div className="social-icon">
                                <a href={website} target="_blank">
                                    {/* Website icon */}
                                    <i className="fa-solid fa-globe fa-2x"></i>
                                </a>
                            </div>
                        }


                        {/* Demo link */}
                        {demo &&
                            <div className="social-icon">
                                <a href={demo} target="_blank">
                                    {/* Demo icon */}
                                    <i className="fa-solid fa-tv fa-2x"></i>
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}