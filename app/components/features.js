import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

export default function Features() {
  const cardData = [
    {
      title: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
      icon: <CodeBracketIcon className="w-8 fill-info" />,
    },
    {
      title: "Ecommerce",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
      icon: <ShoppingCartIcon className="w-8 fill-info" />,
    },
    {
      title: "Content Management Systems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
      icon: <Square3Stack3DIcon className="w-8 fill-info" />,
    },
    {
      title: "UX/UI Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
      icon: <PaintBrushIcon className="w-8 fill-info" />,
    },
    {
      title: "Databases",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
      icon: <CircleStackIcon className="w-8 fill-info" />,
    },
    {
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna",
      icon: <PresentationChartLineIcon className="w-8 fill-info" />,
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
              className="card border border-[#a6adba33] bg-neutral shadow-xl lg:hover:cursor-pointer lg:hover:bg-neutral-focus"
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
