import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-672QXAE4.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/lessons/index.jsx?browser
init_react();

// app/routes/lessons/index.jsx
init_react();
function Lessons() {
  const sections = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ol", null, sections.map((section) => /* @__PURE__ */ React.createElement("li", {
    key: section.slug
  }, /* @__PURE__ */ React.createElement("h2", null, section.title), /* @__PURE__ */ React.createElement("ol", null, section.lessons.map((lesson) => /* @__PURE__ */ React.createElement("li", {
    key: lesson.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: lesson.fullSlug
  }, lesson.title))))))));
}
export {
  Lessons as default
};
//# sourceMappingURL=/build/routes/lessons/index-ZW4CUIPS.js.map
