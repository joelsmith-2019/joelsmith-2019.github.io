
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
            <div className="project-left d-flex flex-column justify-content-between align-items-center">
                {/* Project date */}
                <span>{startDate}</span>
                <span className="vert h-100 my-3" style={{borderRight: '1px solid #ccc'}}></span>
                <span>{endDate}</span>
            </div>


            {/* Right column of project details */}
            <div className="project-right">

                {/* Project header (title, subtitle & role) */}
                <div className="project-header">
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
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
                        {github && <div><a href={github}>Github</a></div>}
                        {website && <div><a href={website}>Website</a></div>}
                        {demo && <div><a href={demo}>Demo</a></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}