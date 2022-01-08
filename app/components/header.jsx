import { useContext } from "react";
import { Link } from "remix";
import { Context } from "~/headerContext";

export default function Header(props) {
  const [{ section, title, icon }] = useContext(Context);
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <h1>{props.title}</h1>
      </Link>
      {section ? (
        <h2>
          {section} <i className={`fas fa-${icon}`} /> {title}
        </h2>
      ) : null}
    </header>
  );
}
