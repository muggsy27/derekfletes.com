import {
  CodeBracketSquareIcon,
  ShoppingCartIcon,
  PaintBrushIcon,
  CircleStackIcon,
  PresentationChartLineIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const cardData = [
    {
      title: "Full Stack Development",
      description:
        "I build complete web applications from the ground up, handling both front-end interfaces and back-end logic. My focus is on performance, scalability, and clean architecture using modern technologies like React, Node.js, and REST APIs. I enjoy creating seamless user experiences that are powered by solid, maintainable code.",
      icon: <CodeBracketSquareIcon className="w-8 fill-info" />,
    },
    {
      title: "Ecommerce",
      description:
        "I’ve worked on ecommerce sites that drive conversions, optimize performance, and provide smooth shopping experiences. From integrating payment gateways to customizing product pages, I focus on functionality, speed, and design. I also understand how to align ecommerce development with business and marketing goals.",
      icon: <ShoppingCartIcon className="w-8 fill-info" />,
    },
    {
      title: "Content Management Systems",
      description:
        "I specialize in building and customizing CMS-driven websites using platforms like WordPress and Headless CMS solutions. My approach balances flexibility for content teams with clean, performant code under the hood. I ensure content is easy to manage while maintaining a high standard of design and UX.",
      icon: <Square3Stack3DIcon className="w-8 fill-info" />,
    },
    {
      title: "UX/UI Design",
      description:
        "I believe great development starts with great design. I work closely with design systems, wireframes, and prototyping tools to ensure intuitive, accessible, and user-friendly interfaces. My design thinking is always grounded in user behavior, conversion goals, and responsive best practices.",
      icon: <PaintBrushIcon className="w-8 fill-info" />,
    },
    {
      title: "Databases",
      description:
        "I have experience designing and managing relational and NoSQL databases to support dynamic, data-driven applications. I focus on data integrity, scalability, and security, using tools like MySQL, PostgreSQL, and MongoDB. My goal is to ensure seamless data flow and efficient storage for any application’s needs.",
      icon: <CircleStackIcon className="w-8 fill-info" />,
    },
    {
      title: "Marketing",
      description:
        "With a background in digital marketing, I understand how to build websites that not only function well but perform in search engines and convert visitors. I’ve worked with SEO, analytics, and CRO principles to support business growth. This allows me to develop with both user experience and measurable outcomes in mind.",
      icon: <PresentationChartLineIcon className="w-8 fill-info" />,
    },
  ];

  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-8 max-w-3xl m-auto">
          <h2 className="text-center text-5xl font-black">Skills</h2>
          <p className="lg:text-center">Over the past 5 years, I’ve developed a versatile skill set that spans both front-end and back-end development, with a strong foundation in user experience, content systems, and digital marketing. My work combines technical expertise with a strategic understanding of design, performance, and business goals. Here’s a deeper look at what I bring to the table:</p>
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
