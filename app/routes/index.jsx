import { Link, useLoaderData } from "remix";
import { getLessons } from "~/lesson";

import Corner from "~/components/corner";
import author from "~/../images/author.jpg";
import courseIcon from "~/../images/course-icon.png";
import getCourseConfig from "~/course";

export const loader = () => {
  const courseInfo = getCourseConfig();
  const lessons = getLessons();
  return Promise.all([courseInfo, lessons]);
};

export let meta = ({ parentsData }) => {
  return {
    title: parentsData.root.title,
    description: parentsData.root.description,
  };
};

export default function Lessons() {
  const [courseInfo, sections] = useLoaderData();
  return (
    <div>
      <div className="jumbotron">
        <div className="courseInfo">
          <div className="courseInfo-inner">
            <h1>{courseInfo.title}</h1>
            <h2>{courseInfo.subtitle}</h2>
            <div className="author">
              <div className="image">
                <img src={author} alt="author image" className="image" />
              </div>
              <div className="info">
                <div className="name">{courseInfo.author.name}</div>
                <div className="company">{courseInfo.author.company}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="courseIcon">
          <img src={courseIcon} alt="course icon" />
        </div>
      </div>
      {courseInfo.frontendMastersLink ? (
        <a href={courseInfo.frontendMastersLink} className="cta-btn">
          Watch on Frontend Masters
        </a>
      ) : null}
      <div className="main-card">
        <h1 className="lesson-title">Table of Contents</h1>
        <div className="lesson-content">
          <ol className="sections-name">
            {sections.map((section) => (
              <li key={section.slug}>
                <div className="lesson-details">
                  <div className="lesson-preface">
                    <i className={`fas fa-${section.icon}`}></i>
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
                  <Corner />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
