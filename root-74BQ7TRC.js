import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  useCatch
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/brianholt/personal/remix-course-starter/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-CXVIH4L3.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// app/components/footer.jsx
init_react();
var import_react = __toModule(require_react());

// images/github-social.svg
var github_social_default = "/build/_assets/github-social-73ILXMHK.svg";

// images/twitter-social.svg
var twitter_social_default = "/build/_assets/twitter-social-MG3ADTEK.svg";

// images/linkedin-social.svg
var linkedin_social_default = "/build/_assets/linkedin-social-RN4JONUY.svg";

// app/components/footer.jsx
function Footer({ twitter, linkedin, github }) {
  return /* @__PURE__ */ import_react.default.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "socials"
  }, twitter ? /* @__PURE__ */ import_react.default.createElement("li", {
    className: "social"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://twitter.com/holtbt"
  }, /* @__PURE__ */ import_react.default.createElement("object", {
    data: twitter_social_default,
    type: "image/svg+xml"
  }))) : null, github ? /* @__PURE__ */ import_react.default.createElement("li", {
    className: "social"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://github.com/btholt"
  }, /* @__PURE__ */ import_react.default.createElement("object", {
    data: github_social_default,
    type: "image/svg+xml"
  }))) : null, linkedin ? /* @__PURE__ */ import_react.default.createElement("li", {
    className: "social"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://linkedin.com/in/btholt"
  }, /* @__PURE__ */ import_react.default.createElement("object", {
    data: linkedin_social_default,
    type: "image/svg+xml"
  }))) : null, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "social"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "terms"
  }, /* @__PURE__ */ import_react.default.createElement("p", null, "Content Licensed Under CC-BY-NC-4.0"), /* @__PURE__ */ import_react.default.createElement("p", null, "Code Samples and Excercise Licensed Under Apache 2.0"), /* @__PURE__ */ import_react.default.createElement("p", null, "Site Designed by", " ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.alexdanielson.com/"
  }, "Alex Danielson"))))));
}

// app/root.jsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React.createElement(RemixLogo, null)), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/lessons"
  }, "Lessons")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement(Footer, {
    twitter: "holtbt",
    github: "btholt",
    linkedin: "btholt"
  }));
}
function RemixLogo(props) {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor",
    ...props
  }, /* @__PURE__ */ React.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-74BQ7TRC.js.map
