import hero from "../assets/portfolio-hero.jpg";
import RemixLogo from "../assets/remix-logo";
import ReactLogo from "../assets/react-logo";
import TailwindLogo from "../assets/tailwind-logo";
import ShopifyLogo from "../assets/shopify-logo";
import MysqlLogo from "../assets/mysql-logo";

import {
  DocumentTextIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4 lg:justify-center lg:gap-8">
            <div className="flex flex-col items-start gap-2">
              <div className="alert alert-info inline-flex w-auto gap-1 px-2 py-1">
                <ExclamationCircleIcon className="w-6" />
                <p>Available for work</p>
              </div>
              <p className="text-lg">Full-Stack Developer</p>
              <h1 className="text-6xl font-black">Derek Fletes</h1>
            </div>
            <div>
              <p className="text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn">
                <EnvelopeIcon className="w-6" />
                <p>Email Me</p>
              </button>
              <button className="btn">
                <DocumentTextIcon className="w-6" />
                <p>Resume</p>
              </button>
            </div>
          </div>
          <img src={hero} className="shadow-2x mask mask-squircle" />
        </div>
        <div className="flex flex-col gap-12 py-24">
          <h2 className="text-center text-5xl font-bold">My tech stack</h2>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-1 justify-center">
              <RemixLogo />
            </div>
            <div className="flex flex-1 justify-center">
              <ReactLogo />
            </div>
            <div className="flex flex-1 justify-center">
              <TailwindLogo />
            </div>
            <div className="flex flex-1 justify-center">
              <ShopifyLogo />
            </div>
            <div className="flex flex-1 justify-center">
              <MysqlLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
