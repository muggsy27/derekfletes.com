import hero from "../assets/portfolio-hero.jpg";
import RemixLogo from "../assets/remix-logo.png";
import ReactLogo from "../assets/react-logo.png";
import TailwindLogo from "../assets/tailwind-logo.png";
import ShopifyLogo from "../assets/shopify-logo.png";
import VercelLogo from "../assets/vercel-logo.png";

import {
  DocumentTextIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="bg-hero-pattern py-12 lg:py-24">
      <div className="container max-w-screen-xl">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4 lg:justify-center lg:gap-8">
            <div className="flex flex-col items-start gap-2">
              <div className="alert alert-info inline-flex w-auto gap-1 px-2 py-1">
                <ExclamationCircleIcon className="w-6" />
                <p>Available for work</p>
              </div>
              <p className="text-lg">Full-Stack Developer</p>
              <h1 className="text-5xl font-black lg:text-7xl">Derek Fletes</h1>
            </div>
            <div>
              <p className="text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-primary">
                <DocumentTextIcon className="w-6" />
                <p>Resume</p>
              </button>
              <button className="btn btn-neutral">
                <EnvelopeIcon className="w-6" />
                <p>Email Me</p>
              </button>
            </div>
          </div>
          <img src={hero} className="shadow-2x mask mask-squircle" />
        </div>
        <div className="mx-auto flex flex-col gap-12 pt-24 lg:w-10/12">
          <h2 className="text-center text-5xl font-bold">My Tech Stack</h2>
          <div className="flex flex-wrap items-center gap-8 lg:grid lg:grid-cols-5">
            <div className="flex flex-1 basis-1/2 justify-center">
              <img src={RemixLogo} alt="" />
            </div>
            <div className="flex flex-1 basis-1/3 justify-center">
              <img src={ReactLogo} alt="" />
            </div>
            <div className="flex flex-1 basis-1/3 justify-center">
              <img src={TailwindLogo} alt="" />
            </div>
            <div className="flex flex-1 basis-1/3 justify-center">
              <img src={ShopifyLogo} alt="" />
            </div>
            <div className="flex max-h-10 flex-1 basis-1/3 justify-center">
              <img src={VercelLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
