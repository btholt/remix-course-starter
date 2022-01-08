import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/lessons/index.jsx?browser
init_react();

// app/routes/lessons/index.jsx
init_react();
function Lessons() {
  const lessons = useLoaderData();
  console.log(lessons);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Lessons!?"), /* @__PURE__ */ React.createElement("ul", null, lessons.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))));
}
export {
  Lessons as default
};
//# sourceMappingURL=/build/routes/lessons/index-XHDY7UKZ.js.map
