import {
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/lessons/$slug.jsx?browser
init_react();

// app/routes/lessons/$slug.jsx
init_react();
function LessonSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  LessonSlug as default
};
//# sourceMappingURL=/build/routes/lessons/$slug-M75GSNQU.js.map
