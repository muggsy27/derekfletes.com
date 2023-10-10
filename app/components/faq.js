export default function Faq() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex max-w-screen-xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center text-5xl font-bold">FAQs</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <div className="flex w-full flex-col gap-8 lg:w-10/12">
          <div className="collapse collapse-arrow bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Lorem ipsum dolor sit?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
          <div className="collapse-arrow collapse bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Lorem ipsum dolor sit?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
          <div className="collapse-arrow collapse bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Lorem ipsum dolor sit?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
          <div className="collapse-arrow collapse bg-neutral py-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Question: Lorem ipsum dolor sit?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
