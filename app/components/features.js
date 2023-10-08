import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Features() {
  const cardData = [
    {
      title: "Full Stack Development",
      description: "This is the description for Card 1.",
      icon: <CodeBracketIcon className="w-8 stroke-info" />,
    },
    {
      title: "Ecommerce",
      description: "This is the description for Card 2.",
      icon: <ShoppingCartIcon className="w-8 stroke-info" />,
    },
    {
      title: "Card Title",
      description: "This is the description for Card 3.",
      icon: "code",
    },
    {
      title: "Card Title",
      description: "This is the description for Card 4.",
      icon: "code",
    },
    {
      title: "Card Title",
      description: "This is the description for Card 5.",
      icon: "code",
    },
    {
      title: "Card Title",
      description: "This is the description for Card 6.",
      icon: "code",
    },
  ];

  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-5xl font-bold">What I Do</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          {cardData.map((card, key) => (
            <div
              className="card border border-[#a6adba33] bg-neutral shadow-xl hover:cursor-pointer hover:bg-neutral-focus"
              key={key}
            >
              <div className="card-body items-start gap-6">
                <div className="inline-block rounded-full bg-base-100 p-4">
                  {card.icon}
                </div>
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
