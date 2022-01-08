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
var meta = (...wat) => {
  console.log(wat);
  return {
    title: "lol change me",
    description: "lol change me!"
  };
};
function Lessons() {
  const [courseInfo, sections] = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "jumbotron"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "courseInfo"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "courseInfo-inner"
  }, /* @__PURE__ */ React.createElement("h1", null, courseInfo.title), /* @__PURE__ */ React.createElement("h2", null, courseInfo.subtitle), /* @__PURE__ */ React.createElement("div", {
    className: "author"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: author_default,
    alt: "author image",
    className: "image"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "name"
  }, courseInfo.author.name), /* @__PURE__ */ React.createElement("div", {
    className: "company"
  }, courseInfo.author.company))))), /* @__PURE__ */ React.createElement("div", {
    className: "courseIcon"
  }, /* @__PURE__ */ React.createElement("img", {
    src: course_icon_default,
    alt: "course icon"
  }))), courseInfo.frontendMastersLink ? /* @__PURE__ */ React.createElement("a", {
    href: courseInfo.frontendMastersLink,
    className: "cta-btn"
  }, "Watch on Frontend Masters") : null, /* @__PURE__ */ React.createElement("div", {
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
//# sourceMappingURL=/build/routes/index-JVGVEC6S.js.map
