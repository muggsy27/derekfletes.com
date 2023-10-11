import Avatar from "../assets/avatar.png";

export default function Testimonials() {
  const testimonialData = [
    {
      name: "John Doe",
      businessName: "ACME Industries",
      review: "This guys knows how to fucking make websites.",
      avatar: <img src={Avatar} alt="avatar" />,
    },
    {
      name: "John Doe",
      businessName: "ACME Industries",
      review: "This guys knows how to fucking make websites.",
      avatar: <img src={Avatar} alt="avatar" />,
    },
    {
      name: "John Doe",
      businessName: "ACME Industries",
      review: "This guys knows how to fucking make websites.",
      avatar: <img src={Avatar} alt="avatar" />,
    },
  ];
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-5xl font-black">Testimonials</h2>
          <p className="lg:text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
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
