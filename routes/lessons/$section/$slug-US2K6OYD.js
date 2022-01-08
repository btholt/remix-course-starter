import {
  useLoaderData
} from "/build/_shared/chunk-OBTST2VU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/lessons/$section/$slug.jsx?browser
init_react();

// app/routes/lessons/$section/$slug.jsx
init_react();
var meta = (routeData) => {
  return {
    title: routeData.data.title,
    description: routeData.data.attributes.description
  };
};
function LessonSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "lesson-container",
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  LessonSlug as default,
  meta
};
//# sourceMappingURL=/build/routes/lessons/$section/$slug-US2K6OYD.js.map
