import Avatar from "../assets/avatar.png";
import Samantha from "../assets/samantha.png";
import Maria from "../assets/Maria.png";

export default function Testimonials() {
  const testimonialData = [
    {
      name: "Samantha Lee",
      businessName: "Creative Director, Bright Studio",
      review: "Working with Derek was a game-changer for our website. He delivered clean, responsive code ahead of schedule and brought a great eye for detail that elevated our entire user experience. We’ll definitely be working together again.",
      avatar: <img src={Samantha} alt="avatar" />,
    },
    {
      name: "Jason Kim",
      businessName: "Co-Founder, Urban Goods",
      review: "We hired Derek to rebuild our ecommerce site, and the results were beyond our expectations. Sales have improved, the site runs faster, and the backend is easier to manage. He’s professional, efficient, and genuinely invested in the success of the project.",
      avatar: <img src={Avatar} alt="avatar" />,
    },
    {
      name: "Maria Torres",
      businessName: "Marketing Manager, CloudPeak",
      review: "Not only is Derek a highly skilled developer, but he also understands the bigger picture—from UX design to SEO. He was collaborative, responsive, and proactive throughout the process. Highly recommend for any front-end or full stack work.",
      avatar: <img src={Maria} alt="avatar" />,
    },
  ];
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-8 max-w-3xl m-auto">
          <h2 className="text-center text-5xl font-black">Testimonials</h2>
          <p className="lg:text-center">
          I’m proud to have worked with clients and collaborators who value quality, communication, and results. Here’s what a few of them have said about working with me:
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          {testimonialData.map((testimonial, key) => (
            <div
              className="card border border-[#a6adba33] bg-neutral shadow-xl lg:hover:cursor-pointer lg:hover:bg-neutral-focus"
              key={key}
            >
              <div className="card-body items-start gap-6">
                <div className="rating gap-1">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-info"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-info"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-info"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-info"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-info"
                    defaultChecked
                  />
                </div>
                <p>{testimonial.review}</p>
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <p>{testimonial.name}</p>
                    <p>{testimonial.businessName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
