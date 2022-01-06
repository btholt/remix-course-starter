import { Link, useLoaderData } from "remix";
import { getLessons } from "~/lesson";

import Corner from "~/components/corner";
import author from "~/../images/author.jpg";
import courseIcon from "~/../images/course-icon.png";

export const loader = () => {
  return getLessons();
};

export let meta = () => {
  return {
    title: "lol change me",
    description: "lol change me!",
  };
};

export default function Lessons() {
  const sections = useLoaderData();
  return (
    <div>
      <div className="jumbotron">
        <div className="courseInfo">
          <div className="courseInfo-inner">
            <h1>A Course Title</h1>
            <h2>A Course Subtitle</h2>
            <div className="author">
              <div className="image">
                <img src={author} alt="" className="image" />
              </div>
              <div className="info">
                <div className="name">An Author</div>
                <div className="company">An Author's Company</div>
              </div>
            </div>
          </div>
        </div>
        <div className="courseIcon">
          <img src={courseIcon} alt="" />
        </div>
      </div>
      <div className="main-card">
        <h1 className="lesson-title">Table of Contents</h1>
        <div className="lesson-content">
          <ol className="sections-name">
            {sections.map((section) => (
              <li key={section.slug}>
                <div className="lesson-details">
                  <div className="lesson-preface">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div className="lesson-text">
                    <h2 className="lesson-section-title">{section.title}</h2>
                    <ol>
                      {section.lessons.map((lesson) => (
                        <li key={lesson.slug}>
                          <Link to={lesson.fullSlug}>{lesson.title}</Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="details-bg">
                    <Corner />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
