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
var meta = (routeData) => {
  return {
    title: `${routeData.data.section} \u2013 ${routeData.data.title}`,
    description: routeData.data.attributes.description
  };
};
function LessonSlug() {
  const post = useLoaderData();
  const [_, setHeader] = (0, import_react.useContext)(Context);
  (0, import_react.useEffect)(() => {
    setHeader(`${post.section} \u2013 ${post.title}`);
    return () => setHeader("");
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
//# sourceMappingURL=/build/routes/lessons/$section/$slug-MC33SV4V.js.map