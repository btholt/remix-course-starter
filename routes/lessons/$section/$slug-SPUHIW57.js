import {
  Context
} from "/build/_shared/chunk-5LADNTPX.js";
import {
  Corner
} from "/build/_shared/chunk-GVDX73OD.js";
import {
  React,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-672QXAE4.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/routes/lessons/$section/$slug.jsx?browser
init_react();

// app/routes/lessons/$section/$slug.jsx
init_react();
var import_react = __toModule(require_react());
var meta = (routeData2) => {
  return {
    title: routeData2.data.title,
    description: routeData2.data.attributes.description
  };
};
function LessonSlug() {
  const post = useLoaderData();
  const [_, setHeader] = (0, import_react.useContext)(Context);
  console.log(post);
  (0, import_react.useEffect)(() => {
    setHeader(`${routeData.data.section} \u2013 ${routeData.data.title}`);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "lesson-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lesson",
    dangerouslySetInnerHTML: { __html: post.html }
  }), /* @__PURE__ */ React.createElement(Corner, null));
}
export {
  LessonSlug as default,
  meta
};
//# sourceMappingURL=/build/routes/lessons/$section/$slug-SPUHIW57.js.map
