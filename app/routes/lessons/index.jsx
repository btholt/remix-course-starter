import { Link, useLoaderData } from "remix";
import { getLessons } from "~/lesson";

export const loader = () => {
  return getLessons();
};

export default function Lessons() {
  const sections = useLoaderData();
  return (
    <div>
      <h1>Lessons!?</h1>
      <ol>
        {sections.map((section) => (
          <li key={section.slug}>
            <h2>{section.title}</h2>
            <ol>
              {section.lessons.map((lesson) => (
                <li key={lesson.slug}>
                  <Link to={lesson.fullSlug}>{lesson.title}</Link>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
