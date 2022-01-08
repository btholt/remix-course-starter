import { useLoaderData } from "remix";
import { useContext, useEffect } from "react";
import { getLesson } from "~/lesson";
import Corner from "~/components/corner";
import { Context } from "~/headerContext";

export const loader = async ({ params }) => {
  return getLesson(params.section, params.slug);
};

export const meta = (routeData) => {
  return {
    title: `${routeData.data.section} – ${routeData.data.title}`,
    description: routeData.data.attributes.description,
  };
};

export default function LessonSlug() {
  const post = useLoaderData();
  const [_, setHeader] = useContext(Context);
  useEffect(() => {
    setHeader({
      section: post.section,
      title: post.title,
      icon: post.icon,
    });
    return () => setHeader({});
  }, []);

  console.log(post);
  return (
    <div className="lesson-container">
      <div className="lesson">
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="lesson-links">
          {post.prevSlug ? (
            <a href={post.prevSlug} className="prev">
              ← Previous
            </a>
          ) : null}
          {post.nextSlug ? (
            <a href={post.nextSlug} className="next">
              Next →
            </a>
          ) : null}
        </div>
      </div>
      <Corner />
    </div>
  );
}
