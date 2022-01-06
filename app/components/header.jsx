import { Link } from "remix";

export default function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <h1>The Course</h1>
      </Link>
      <h2>The Section – The Lesson</h2>
      {/* {!frontmatter ? null : (
                <h2>{`${frontmatter.section} – ${frontmatter.title}`}</h2>
              )} */}
    </header>
  );
}
