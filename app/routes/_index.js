import Hero from "../components/hero";
import Features from "../components/features";
import AboutMe from "../components/about";
import Portfolio from "../components/portfolio";
import Pricing from "../components/pricing";
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
    <div>
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
      </main>
    </div>
  );
}
