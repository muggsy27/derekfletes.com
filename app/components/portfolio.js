import {
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import dashboard from "../assets/dashboard.jpg";
import agency from "../assets/agency-landing-page-dark.jpg";
import mail from "../assets/mail-management-system-dark.jpg";
import analytics from "../assets/analytics-tool-dark.jpg";
import task from "../assets/task-management-dark.jpg";
import HtmlIcon from "../assets/html-icon";
import CssIcon from "../assets/css-icon";
import JavaScriptIcon from "../assets/javascript-icon";
import TailwindIcon from "../assets/tailwind-icon";
import ReactIcon from "../assets/react-icon";
import WordpressIcon from "../assets/wordpress-icon";

export default function Portfolio() {
  return (
    <section className="py-12 lg:py-24" id="portfolio">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-8 max-w-3xl m-auto">
          <h2 className="text-center text-5xl font-black">Portfolio</h2>
          <p className="lg:text-center">Here’s a selection of my recent front-end projects—ranging from custom websites to interactive web apps. Each one reflects my focus on clean code, responsive design, and thoughtful user experience. I aim to create intuitive interfaces that not only look great but perform seamlessly across all devices.</p>
        </div>
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
            <div className="carousel w-full">
              <div
                id="slide1"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={dashboard} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div
                id="slide2"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={agency} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div
                id="slide3"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={mail} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="items- flex flex-col items-start justify-center gap-6">
              <h2 className="text-2xl font-bold">Bloom Studio – Creative Portfolio Website</h2>
              <a className="link-info link flex items-center gap-1">
                <span>https://flowbite.com/</span>
                <ArrowTopRightOnSquareIcon className="w-4" />
              </a>
              <p>
              A modern, mobile-first website for a design agency showcasing their work, team, and services. Built with smooth scroll animations, a dynamic project gallery, and optimized for fast loading times.
              </p>
              <div className="flex gap-4">
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <TailwindIcon />
                <ReactIcon />
                <WordpressIcon />
              </div>
              <button className="btn btn-primary">View Code</button>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-flow-row-dense lg:grid-cols-2">
            <div className="items- flex flex-col items-start justify-center gap-6">
              <h2 className="text-2xl font-bold">ShopNest</h2>
              <a className="link-info link flex items-center gap-1">
                <span>https://flowbite.com/</span>
                <ArrowTopRightOnSquareIcon className="w-4" />
              </a>
              <p>
              A fully responsive ecommerce site built for a boutique retailer. Features include a product catalog, cart functionality, Stripe payments, and an integrated CMS for easy product updates.
              </p>
              <div className="flex gap-4">
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <TailwindIcon />
                <ReactIcon />
                <WordpressIcon />
              </div>
              <button className="btn btn-primary">View Code</button>
            </div>
            <div className="carousel w-full">
              <div
                id="slide4"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={analytics} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide6" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div
                id="slide5"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={task} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide6" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div
                id="slide6"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={mail} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide5" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
            <div className="carousel w-full">
              <div
                id="slide7"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={dashboard} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide9" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide8" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div
                id="slide8"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={agency} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide7" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide9" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
              <div
                id="slide9"
                className="carousel-item relative w-full rounded-xl"
              >
                <img src={mail} className="w-full rounded-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide8" className="btn btn-circle">
                    <ArrowLeftIcon className="w-6" />
                  </a>
                  <a href="#slide7" className="btn btn-circle">
                    <ArrowRightIcon className="w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="items- flex flex-col items-start justify-center gap-6">
              <h2 className="text-2xl font-bold">Mindful - Therapist Website with Blog & Booking</h2>
              <a className="link-info link flex items-center gap-1">
                <span>https://flowbite.com/</span>
                <ArrowTopRightOnSquareIcon className="w-4" />
              </a>
              <p>
              A clean, accessible website for a private practice therapist. Includes service pages, an SEO-friendly blog, and embedded booking via Calendly. Designed to build trust and drive client engagement.
              </p>
              <div className="flex gap-4">
                <HtmlIcon />
                <CssIcon />
                <JavaScriptIcon />
                <TailwindIcon />
                <ReactIcon />
                <WordpressIcon />
              </div>
              <button className="btn btn-primary">View Code</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
