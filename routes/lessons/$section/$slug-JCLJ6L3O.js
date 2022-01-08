import {
  Context
} from "/build/_shared/chunk-KBEBRBUD.js";
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
    setHeader({
      section: post.section,
      title: post.title,
      icon: post.icon
    });
    return () => setHeader({});
  }, []);
  console.log(post);
  return /* @__PURE__ */ React.createElement("div", {
    className: "lesson-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lesson"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lesson-content",
    dangerouslySetInnerHTML: { __html: post.html }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "lesson-links"
  }, post.prevSlug ? /* @__PURE__ */ React.createElement("a", {
    href: post.prevSlug,
    className: "prev"
  }, "Previous") : null, post.nextSlug ? /* @__PURE__ */ React.createElement("a", {
    href: post.nextSlug,
    className: "next"
  }, "Next") : null)), /* @__PURE__ */ React.createElement(Corner, null));
}
export {
  LessonSlug as default,
  meta
};
//# sourceMappingURL=/build/routes/lessons/$section/$slug-JCLJ6L3O.js.map
