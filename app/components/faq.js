export default function Faq() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 max-w-3xl m-auto">
          <h2 className="text-center text-5xl font-black">FAQs</h2>
          <p className="lg:text-center">
          Have questions? Here are some of the most common things people ask me about my work, process, and availability. If you don’t see your question here, feel free to reach out—I’d be happy to chat.
          </p>
        </div>
        <div className="flex w-full flex-col gap-8 lg:w-10/12">
          <div className="collapse collapse-arrow border border-[#a6adba33] bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: What kind of projects do you specialize in?
            </div>
            <div className="collapse-content">
              <p>
              I specialize in responsive websites, web apps, and ecommerce solutions with a strong focus on user experience and performance. Whether it’s a marketing site, a CMS-powered blog, or a custom frontend for a SaaS product, I enjoy solving problems with clean code and thoughtful design.
              </p>
            </div>
          </div>
          <div className="collapse-arrow collapse border border-[#a6adba33] bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Do you work with specific platforms or frameworks?
            </div>
            <div className="collapse-content">
              <p>
              Yes! I often work with React, Tailwind CSS, WordPress, and headless CMS setups. I’m also comfortable working across the stack using Node.js, REST APIs, and database technologies like MySQL or MongoDB.
              </p>
            </div>
          </div>
          <div className="collapse-arrow collapse border border-[#a6adba33] bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Are you available for freelance or contract work?
            </div>
            <div className="collapse-content">
              <p>
              Yes, I’m currently open to freelance and contract opportunities. If you have a project in mind or need development support for your team, feel free to contact me.
              </p>
            </div>
          </div>
          <div className="collapse-arrow collapse border border-[#a6adba33] bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Can you help with design or just development?
            </div>
            <div className="collapse-content">
              <p>
              I can do both. While development is my main focus, I have a strong understanding of UI/UX principles and often collaborate on design systems, wireframes, and prototyping. This ensures a seamless bridge between design and implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
