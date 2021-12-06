import { LiveReload, Outlet, Links } from "remix";
import type { LinksFunction } from "remix";
import globalStyle from "./styles/global.css";
import globalMediumStyle from "./styles/global-medium.css";
import globalLargeStyle from "./styles/global-large.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyle },
    {
      rel: "stylesheet",
      href: globalMediumStyle,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStyle,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
