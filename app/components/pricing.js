import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  const pricingData = [
    {
      name: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "$29.99",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "Intermediate",
      description: "Best option for personal use & for your next project.",
      price: "$49.99",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      name: "Advanced",
      description: "Best option for personal use & for your next project.",
      price: "$99.99",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
  ];
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-5xl font-black">Pricing</h2>
          <p className="lg:text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          {pricingData.map((item, key) => (
            <div
              className="card border border-[#a6adba33] bg-neutral shadow-xl lg:hover:cursor-pointer lg:hover:bg-neutral-focus"
              key={key}
            >
              <div className="card-body items-start gap-6">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-4xl font-bold">
                  {item.price}{" "}
                  <span className="text-base font-normal">/month</span>
                </p>
                <ul className="flex flex-col gap-4">
                  {item.features.map((feature, key) => (
                    <li className="flex items-center gap-1" key={key}>
                      <CheckCircleIcon className="w-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary">
                  {/* <EnvelopeIcon className="w-6" /> */}
                  <a href="#contact">Contact Me</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
