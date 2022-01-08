import {
  Corner
} from "/build/_shared/chunk-GVDX73OD.js";
import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-672QXAE4.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

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
  console.log(sections);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "jumbotron"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "courseInfo"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "courseInfo-inner"
  }, /* @__PURE__ */ React.createElement("h1", null, "A Course Title"), /* @__PURE__ */ React.createElement("h2", null, "A Course Subtitle"), /* @__PURE__ */ React.createElement("div", {
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
  }, "An Author"), /* @__PURE__ */ React.createElement("div", {
    className: "company"
  }, "An Author's Company"))))), /* @__PURE__ */ React.createElement("div", {
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
  }, /* @__PURE__ */ React.createElement("i", {
    className: `fas fa-${section.icon}`
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lesson-text"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "lesson-section-title"
  }, section.title), /* @__PURE__ */ React.createElement("ol", null, section.lessons.map((lesson) => /* @__PURE__ */ React.createElement("li", {
    key: lesson.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: lesson.fullSlug
  }, lesson.title))))), /* @__PURE__ */ React.createElement(Corner, null))))))));
}
export {
  Lessons as default,
  meta
};
//# sourceMappingURL=/build/routes/index-WV3ML3AL.js.map
