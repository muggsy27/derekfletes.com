import { CheckCircleIcon } from "@heroicons/react/24/solid";
import about from "../assets/about.jpg";

export default function AboutMe() {
  const listItems = [
    "A/B Testing",
    "UX/UI Design",
    "Brand development ",
    "CMS development",
    "Graphic design",
    "SEO",
  ];
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12 lg:grid lg:grid-cols-2">
        <div>
          <img src={about} className="shadow-2x mask mask-squircle" />
        </div>
        <div className="flex flex-col gap-8 lg:justify-center">
          <h2 className="text-center text-5xl font-black lg:text-left">
            About Me
          </h2>
          <p>
            Since 1984, Flowbite has been serving up grab-and-go frozen
            daiquiris from its stores across the U.S. Its signature drinks,
            souvenir cups, and discounted refills have made Flowbite synonymous
            with great music, good vibes, and starting the best party in town.
          </p>
          <p>
            <ul className="grid grid-cols-2 gap-8">
              {listItems.map((item, key) => (
                <li className="flex items-center gap-1" key={key}>
                  <CheckCircleIcon className="w-4 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
