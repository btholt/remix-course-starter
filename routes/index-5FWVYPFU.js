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
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-5FWVYPFU.js.map
