import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  const pricingData = [
    {
      name: "Essential",
      description: "Perfect for personal websites, portfolios, or small businesses.",
      price: "$500",
      features: [
        "Custom 1–3 page website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1 round of revisions",
        "Delivered in 1–2 weeks"
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing brands that need a strong, scalable online presence.",
      price: "$1,200",
      features: [
        "Custom 5–7 page website",
        "Mobile responsive design",
        "Basic SEO setup",
        "CMS integration",
        "Email opt-in integration",
        "2 rounds of revisions",
        "Delivered in 2–3 weeks"
      ],
    },
    {
      name: "Premium",
      description: "Best option for personal use & for your next project.",
      price: "$2,000+",
      features: [
        "Custom 8+ page website or web app",
        "Full UX/UI design + wireframes",
        "Ecommerce or CMS integration",
        "API integrations or custom features",
        "SEO, analytics, and performance setup",
        "Priority support",
        "3 rounds of revisions",
        "Timeline based on scope"
      ],
    },
  ];
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-8 max-w-3xl m-auto">
          <h2 className="text-center text-5xl font-black">Pricing</h2>
          <p className="lg:text-center">
            I offer flexible pricing options to fit a variety of project scopes and budgets. Whether you need a full website build, ongoing support, or a one-time fix, I aim to provide transparent rates with no surprises. Let’s find the right solution that fits your needs and delivers real value.
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
                <p className="flex-grow-0">{item.description}</p>
                <p className="text-4xl font-bold flex-grow-0">{item.price}</p>
                <ul className="flex flex-col gap-4">
                  {item.features.map((feature, key) => (
                    <li className="flex items-center gap-1" key={key}>
                      <CheckCircleIcon className="w-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-auto">
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
