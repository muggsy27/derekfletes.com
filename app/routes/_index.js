import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import Hero from "../components/hero";
import Features from "../components/features";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Features />
      <Faq />
      <Testimonials />
    </main>
  );
}
