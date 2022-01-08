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

// app/components/corner.jsx
init_react();
function Corner() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "154",
    height: "154",
    viewBox: "0 0 154 154"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip-path"
  }, /* @__PURE__ */ React.createElement("rect", {
    id: "Rectangle_2238",
    "data-name": "Rectangle 2238",
    width: "154",
    height: "154",
    transform: "translate(9467 350)",
    fill: "#fff",
    stroke: "#707070",
    "stroke-width": "1"
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip-corner-image-active"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "154",
    height: "154"
  }))), /* @__PURE__ */ React.createElement("g", {
    id: "corner-image-active",
    "clip-path": "url(#clip-corner-image-active)"
  }, /* @__PURE__ */ React.createElement("g", {
    id: "Corner-image-active-2",
    "data-name": "Corner-image-active",
    transform: "translate(-9467 -350)",
    "clip-path": "url(#clip-path)"
  }, /* @__PURE__ */ React.createElement("path", {
    id: "Subtraction_34",
    "data-name": "Subtraction 34",
    d: "M-3857.365,1740.766h0l-7.07-7.07,12.89-12.89v14.142l-5.818,5.818Zm-14.142-14.142h0l-7.071-7.07,27.033-27.033v14.143l-19.96,19.96Zm-14.143-14.143h0l-7.07-7.069,41.175-41.175v14.142Zm-14.142-14.142h0l-7.07-7.069,55.317-55.317v14.142Zm-14.142-14.142h0l-7.07-7.069,69.459-69.459v14.142Zm-14.142-14.142h0l-7.07-7.069,76.739-76.739h6.862v7.28Zm-14.143-14.143h0l-7.07-7.069,62.6-62.6h14.142Zm-14.142-14.142h0l-7.07-7.069,48.454-48.454h14.142Zm-14.142-14.142h0l-7.07-7.069,34.312-34.312h14.142Zm-14.142-14.142h0l-7.07-7.069,20.17-20.17h14.142Zm-14.142-14.142h0l-7.071-7.071,6.027-6.027h14.144l-13.1,13.1Zm367.24-56.114v-.909l.455.455-.453.453Z",
    transform: "translate(13472.546 -1236.766)",
    fill: "var(--corner-fill)"
  }))));
}

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
  }, /* @__PURE__ */ React.createElement(Corner, null)))))))));
}
export {
  Lessons as default,
  meta
};
//# sourceMappingURL=/build/routes/index-3I4YFFNJ.js.map
