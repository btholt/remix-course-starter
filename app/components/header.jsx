import { useContext } from "react";
import { Link } from "remix";
import { Context as HeaderContext } from "~/headerContext";
import { Context as CourseContext } from "~/courseInfoContext";

export default function Header(props) {
  const [{ section, title, icon }] = useContext(HeaderContext);
  const { frontendMastersLink } = useContext(CourseContext);
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <h1>{props.title}</h1>
      </Link>
      <div className="navbar-info">
        {frontendMastersLink ? (
          <a href={frontendMastersLink} className="cta-btn">
            Watch on Frontend Masters
          </a>
        ) : null}
        {section ? (
          <h2>
            {section} <i className={`fas fa-${icon}`} /> {title}
          </h2>
        ) : null}
      </div>
    </header>
  );
}
