import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";

import "prismjs";

import Footer from "~/components/footer";
import Header from "~/components/header";

import coursesCss from "~/styles/courses.css";
import variablesCss from "~/styles/variables.css";
import footerCss from "~/styles/footer.css";

import "@fortawesome/fontawesome-free/js/all.js";

/* 
  change your syntax highlighting theme here
  https://github.com/PrismJS/prism/tree/master/themes 
*/
import prismTheme from "prismjs/themes/prism-solarizedlight.css";

export let links = () => {
  return [
    // { rel: "stylesheet", href: fontAwesome },
    { rel: "stylesheet", href: prismTheme },
    { rel: "stylesheet", href: coursesCss },
    { rel: "stylesheet", href: variablesCss },
    { rel: "stylesheet", href: footerCss },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <div className="remix-app">
      <Header />
      <div className="content-container">
        <div className="main">{children}</div>
      </div>
      <Footer twitter="holtbt" github="btholt" linkedin="btholt" />
    </div>
  );
}
