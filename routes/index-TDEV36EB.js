import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-OBTST2VU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// images/corner-image-inactive.svg
var corner_image_inactive_default = "/build/_assets/corner-image-inactive-355BZXRB.svg";

// images/author.jpg
var author_default = "/build/_assets/author-ZPVJRL4Y.jpg";

// images/course-icon.png
var course_icon_default = "/build/_assets/course-icon-NZOIWAL5.png";

// app/routes/index.jsx
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
  }, /* @__PURE__ */ React.createElement("div", {
    className: "courseInfo"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "courseInfo-inner"
  }, /* @__PURE__ */ React.createElement("h1", null, "A Title"), /* @__PURE__ */ React.createElement("h2", null, "A Subtitle"), /* @__PURE__ */ React.createElement("div", {
    className: "author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: author_default,
    alt: "",
    className: "image"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "name"
  }, "Brian Holt"), /* @__PURE__ */ React.createElement("div", {
    className: "company"
  }, "Stripe"))))), /* @__PURE__ */ React.createElement("div", {
    className: "courseIcon"
  }, /* @__PURE__ */ React.createElement("img", {
    src: course_icon_default,
    alt: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "main-card"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "lesson-title"
  }, "Table of Contents"), /* @__PURE__ */ React.createElement("div", {
    className: "lesson-content"
  }, /* @__PURE__ */ React.createElement("ol", {
    className: "sections-name"
  }, sections.map((section) => /* @__PURE__ */ React.createElement("li", {
    key: section.slug
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lesson-details"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lesson-preface"
  }, "?"), /* @__PURE__ */ React.createElement("div", {
    className: "lesson-text"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "lesson-section-title"
  }, section.title), /* @__PURE__ */ React.createElement("ol", null, section.lessons.map((lesson) => /* @__PURE__ */ React.createElement("li", {
    key: lesson.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: lesson.fullSlug
  }, lesson.title))))), /* @__PURE__ */ React.createElement("div", {
    className: "details-bg"
  }, /* @__PURE__ */ React.createElement("object", {
    className: "details-bg-object",
    data: corner_image_inactive_default,
    type: "image/svg+xml"
  })))))))));
}
export {
  Lessons as default,
  meta
};
//# sourceMappingURL=/build/routes/index-TDEV36EB.js.map
