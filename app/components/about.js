import { CheckCircleIcon } from "@heroicons/react/24/solid";
import about from "../assets/about.jpg";

export default function AboutMe() {
  const listItems = [
    "A/B Testing",
    "UX/UI Design",
    "Ecommerce ",
    "CMS development",
    "Graphic design",
    "SEO",
  ];
  return (
    <section className="bg-neutral py-12 lg:py-24" id="about">
      <div className="container flex max-w-screen-xl flex-col gap-12 lg:grid lg:grid-cols-2">
        <div>
          <img src={about} className="shadow-2x mask mask-squircle" />
        </div>
        <div className="flex flex-col gap-8 lg:justify-center">
          <h2 className="text-center text-5xl font-black lg:text-left">
            About Me
          </h2>
          <p>I'm a front-end developer with over 5 years of experience building responsive, accessible, and user-centered websites. My focus is on writing clean, maintainable code and creating seamless user experiences using HTML, CSS, JavaScript, and modern tools like React and Tailwind CSS.</p>
          <p>Over the years, I’ve worked with agencies and clients across industries—from small businesses to large-scale projects—translating ideas into functional, performant websites. I take pride in bridging the gap between design and development, collaborating closely with teams to deliver digital products that not only look great but work flawlessly.</p>
          <p>When I’m not coding, you can find me learning about new front-end technologies, refining my UI/UX skills, or exploring creative ways to improve web performance.</p>
          <ul className="grid grid-cols-2 gap-8">
            {listItems.map((item, key) => (
              <li className="flex items-center gap-1" key={key}>
                <CheckCircleIcon className="w-4 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
