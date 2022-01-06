import { useLoaderData } from "remix";
import { getLesson } from "~/lesson";
import Corner from "~/components/corner";

export const loader = async ({ params }) => {
  return getLesson(params.section, params.slug);
};

export const meta = (routeData) => {
  return {
    title: routeData.data.title,
    description: routeData.data.attributes.description,
  };
};

export default function LessonSlug() {
  const post = useLoaderData();
  return (
    <div className="lesson-container">
      <div className="lesson" dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="details-bg">
        <Corner />
      </div>
    </div>
  );
}
