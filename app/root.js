import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Form,
} from "@remix-run/react";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

import { Analytics } from "@vercel/analytics/react";

import styles from "../app/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

import Nav from "./components/nav";
import MainLogo from "./assets/main-logo";
import { json } from "@remix-run/node";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "derekfletes@gmail.com",
      subject: "New Contact Form Submission",
      html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    `,
    });

    return json(data, 200);
  } catch (error) {
    return json({ error }, 400);
  }
}

// export async function loader() {
//   console.log(process.env.RESEND_API_KEY);
//   return json({ ok: true });
// }

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <Analytics />
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
            <footer
              className="bg-neutral py-12 text-neutral-content lg:py-24"
              id="contact"
            >
              <div className="container flex max-w-screen-xl flex-col gap-24">
                <div className="mx-auto flex w-full flex-col gap-12 lg:w-6/12">
                  <h2 className="text-center text-5xl font-black">
                    Contact Me
                  </h2>
                  <Form method="post" className="flex flex-col gap-4">
                    <div>
                      <label className="label">
                        <p className="text-base">Name</p>
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <p className="text-base">Email</p>
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <p className="text-base">Message</p>
                      </label>
                      <textarea
                        name="message"
                        className="textarea textarea-bordered w-full"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </Form>
                </div>
                <div className="flex flex-col gap-8 border-t border-base-content pt-12 lg:flex-row lg:gap-24">
                  <aside className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <MainLogo />
                      <p className="text-2xl font-black">Derek Fletes</p>
                    </div>
                    <div>
                      <p>Full-Stack Developer</p>
                    </div>
                  </aside>
                  <nav className="flex flex-col gap-4">
                    <header>
                      <p className="text-lg font-bold">Social</p>
                    </header>
                    <div className="flex gap-8">
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </footer>
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
