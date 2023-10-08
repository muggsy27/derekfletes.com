import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

import styles from "../app/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

import Nav from "./components/nav";
import Footer from "./components/footer";

import { XMarkIcon } from "@heroicons/react/24/outline";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Nav />
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <Analytics />
            <Footer />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-80 bg-base-200 p-4 text-lg">
              {/* Sidebar content here */}
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
