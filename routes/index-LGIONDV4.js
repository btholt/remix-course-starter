import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var meta = () => {
  return {
    title: "lol change me",
    description: "lol change me!"
  };
};
function Lessons() {
  const sections = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "jumbotron"
  }, "Lessons!?"), /* @__PURE__ */ React.createElement("div", {
    className: "main-card"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "lesson-title"
  }, "Table of Contents"), /* @__PURE__ */ React.createElement("div", {
    className: "lesson-content"
  }, /* @__PURE__ */ React.createElement("ol", null, sections.map((section) => /* @__PURE__ */ React.createElement("li", {
    key: section.slug
  }, /* @__PURE__ */ React.createElement("h2", null, section.title), /* @__PURE__ */ React.createElement("ol", null, section.lessons.map((lesson) => /* @__PURE__ */ React.createElement("li", {
    key: lesson.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: lesson.fullSlug
  }, lesson.title))))))))));
}
export {
  Lessons as default,
  meta
};
//# sourceMappingURL=/build/routes/index-LGIONDV4.js.map
