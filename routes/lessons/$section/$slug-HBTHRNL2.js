import {
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/lessons/$section/$slug.jsx?browser
init_react();

// app/routes/lessons/$section/$slug.jsx
init_react();
var meta = (routeData) => {
  console.log(routeData);
  return {
    title: routeData.data.attributes.title,
    description: routeData.data.attributes.description
  };
};
function LessonSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  LessonSlug as default,
  meta
};
//# sourceMappingURL=/build/routes/lessons/$section/$slug-HBTHRNL2.js.map
