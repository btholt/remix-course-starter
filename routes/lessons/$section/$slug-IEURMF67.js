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

// images/corner-image-active.svg
var corner_image_active_default = "/build/_assets/corner-image-active-CR4PW6TP.svg";

// app/routes/lessons/$section/$slug.jsx
var meta = (routeData) => {
  return {
    title: routeData.data.title,
    description: routeData.data.attributes.description
  };
};
function LessonSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "lesson-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lesson",
    dangerouslySetInnerHTML: { __html: post.html }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "details-bg"
  }, /* @__PURE__ */ React.createElement(corner_image_active_default, null)));
}
export {
  LessonSlug as default,
  meta
};
//# sourceMappingURL=/build/routes/lessons/$section/$slug-IEURMF67.js.map
