export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="overflow-visible">
      <div className="relative top-[0%] h-auto w-full max-w-[100vw] border border-black bg-[#c9fd02] md:h-auto lg:w-full">
        <div className="mx-auto flex h-full w-full max-w-[640px] flex-col items-center justify-center px-8 py-6 max-[767px]:p-4 sm:px-4 sm:py-4 lg:px-8">
          <p className="text-base">Put your Banner Text here</p>
        </div>
      </div>
      <div className="sticky top-0 z-[1000] block bg-black py-3 lg:block">
        <div className="px-5 md:px-10">
          <div className="mx-auto grid w-full max-w-7xl auto-cols-auto grid-cols-[auto_max-content] items-center justify-stretch gap-[0px] lg:grid-cols-[176px_auto]">
            <a
              href="https://www.flowspark.co/"
              target="_blank"
              className="relative float-left text-[#333333] max-[991px]:mr-auto max-[767px]:pl-0"
            >
              <img
                src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26c_%5BA%5D--Navbar%20Brand.png"
                alt=""
                className="inline-block max-h-6 max-w-full"
              />
            </a>
            <nav className="relative float-right flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:hidden max-[991px]:bg-black max-[991px]:py-1 max-[991px]:text-left">
              <div className="mx-auto flex items-start max-[991px]:flex-col lg:items-center">
                <a
                  href="https://neo-saas.webflow.io/about"
                  className="px-5 py-2 text-white transition hover:text-[#c9fd02] max-[991px]:block md:px-10 lg:px-4"
                >
                  About
                </a>
                <a
                  href="https://neo-saas.webflow.io/pricing"
                  className="px-5 py-2 text-white transition hover:text-[#c9fd02] max-[991px]:block md:px-10 lg:px-4"
                >
                  Pricing
                </a>
                <a
                  href="https://neo-saas.webflow.io/blog"
                  className="px-5 py-2 text-white transition hover:text-[#c9fd02] max-[991px]:block md:px-10 lg:px-4"
                >
                  Blog
                </a>
                <a
                  href="https://build.flowspark.co/"
                  target="_blank"
                  className="px-5 py-2 text-white transition hover:text-[#c9fd02] max-[991px]:block md:px-10 lg:px-4"
                >
                  More Templates
                </a>
              </div>
              <div className="flex w-auto flex-none justify-start max-[991px]:mb-4 max-[991px]:ml-10 max-[991px]:mt-3 max-[767px]:ml-5 lg:w-44 lg:justify-end">
                <a
                  href="https://build.flowspark.co/template"
                  target="_blank"
                  className="inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-white px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-[#c9fd02]"
                >
                  Get Started
                </a>
              </div>
            </nav>
            <div
              className="relative float-right hidden cursor-pointer select-none p-3 text-2xl max-[991px]:z-[9999] max-[991px]:-mr-3 max-[991px]:block max-[991px]:text-white lg:p-[18px]"
              tabindex="0"
            >
              <div className="">
                <svg
                  width="1.25rem"
                  height="1rem"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed block"></div>
      <div className="">
        <header className="relative block">
          <img
            src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
            alt=""
            className="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover"
          />
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-3xl text-center">
                  <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                    The Website You Want Without The Dev Time.
                  </h1>
                  <div className="mx-auto mb-5 max-w-[528px] md:mb-6 lg:mb-8">
                    <p className="text-xl text-[#636262]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus
                    </p>
                  </div>
                  <div className="flex items-stretch justify-center">
                    <a
                      href="#"
                      className="inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-2">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
                  <div className="flex flex-col items-center justify-center rounded-xl bg-[#f7f6f2] p-6 max-[991px]:[grid-area:2/1/3/2]">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26f_Rectangle%2086.png"
                      alt="Features Image"
                      className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
                    />
                  </div>
                  <div className="max-[991px]:max-w-[720px]">
                    <h2 className="mb-4 mt-6 pb-4 text-3xl font-extrabold md:text-5xl">
                      Make Payment But Without The Hassle
                    </h2>
                    <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                      <p className="text-xl text-[#636262]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                      </p>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="mr-5 inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                      >
                        Learn More
                      </a>
                      <a
                        href="#"
                        className="flex max-w-full flex-row p-0 font-bold"
                      >
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="block">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-3xl">
              <div className="py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="mb-8 mt-6 pb-16 text-3xl font-extrabold md:mb-12 md:text-5xl lg:mb-4">
                    Get Started In 4 Easy Steps
                  </h2>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
                  <div className="flex flex-row items-center justify-center gap-6 rounded-2xl border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] max-[767px]:mx-auto max-[767px]:max-w-[480px] sm:rounded-[60px]">
                    <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
                        alt="Get Started Icon 1"
                        className="inline-block max-w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-base font-bold md:text-xl">
                        Download the app
                      </h5>
                      <p className="text-[#636262]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 rounded-2xl border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] max-[767px]:mx-auto max-[767px]:max-w-[480px] sm:rounded-[60px]">
                    <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
                        alt="Get Started Icon 2"
                        className="inline-block max-w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-base font-bold md:text-xl">
                        Sign up for account
                      </h5>
                      <p className="text-[#636262]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 rounded-2xl border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] max-[767px]:mx-auto max-[767px]:max-w-[480px] sm:rounded-[60px]">
                    <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
                        alt="Get Started Icon 3"
                        className="inline-block max-w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-base font-bold md:text-xl">
                        Activate virtual card
                      </h5>
                      <p className="text-[#636262]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-6 rounded-2xl border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2] max-[767px]:mx-auto max-[767px]:max-w-[480px] sm:rounded-[60px]">
                    <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
                        alt="Get Started Icon 4"
                        className="inline-block max-w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-base font-bold md:text-xl">
                        Ready set go!
                      </h5>
                      <p className="text-[#636262]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#f7f6f2]">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
                  <div className="max-[991px]:max-w-[720px]">
                    <h3 className="mb-4 mt-6 text-2xl font-bold md:text-3xl">
                      Never miss any payment
                    </h3>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                      <p className="text-[#636262]">
                        Say goodbye to payment headaches with SecurePay! Our
                        easy-to-use payment platform makes it simple for
                        businesses and individuals to send and receive payments
                        quickly and securely.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a275_Rectangle%2093.png"
                      alt="Features Image"
                      className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f6f2]">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
                  <div className="max-[991px]:[grid-area:2/1/3/2]">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a279_Rectangle%2093.png"
                      alt="Features Image"
                      className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
                    />
                  </div>
                  <div className="max-[991px]:max-w-[720px] max-[991px]:[grid-area:1/1/2/2]">
                    <h3 className="mb-4 mt-6 text-2xl font-bold md:text-3xl">
                      Never miss any payment
                    </h3>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                      <p className="text-[#636262]">
                        Say goodbye to payment headaches with SecurePay! Our
                        easy-to-use payment platform makes it simple for
                        businesses and individuals to send and receive payments
                        quickly and securely.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                    >
                      Let's Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="block bg-[#c9fd02]">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="mb-8 mt-6 pb-16 text-3xl font-extrabold md:mb-12 md:text-5xl lg:mb-4">
                    Used by 700,000+ Users
                  </h2>
                </div>
                <div className="mb-5 grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-6 md:grid-cols-3 md:gap-4 lg:mb-8 lg:gap-6">
                  <div className="grid grid-cols-1 gap-6 rounded-2xl border border-[#cdcdcd] bg-white px-6 pb-6 pt-10 max-[767px]:p-8">
                    <div className="text-[#636262]">
                      I've been using this payment system for a few months now
                      and I have to say it's been great. The interface is simple
                      and easy to navigate, and transactions are fast and
                      secure. I feel confident using this system to handle all
                      of my financial transactions.
                    </div>
                    <div className="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
                    <div className="flex flex-row items-start">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a281_Ellipse%2010%402x-1.png"
                        alt="Testimonial image"
                        className="mr-4 inline-block h-16 w-16 max-w-full object-contain"
                      />
                      <div className="flex flex-col items-start">
                        <h6 className="text-sm font-bold md:text-base">
                          Laila Bahar
                        </h6>
                        <p className="text-sm text-[#636262]">Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-2xl border border-[#cdcdcd] bg-white px-6 pb-6 pt-10 max-[767px]:p-8">
                    <div className="text-[#636262]">
                      I've been using this payment system for a few months now
                      and I have to say it's been great. The interface is simple
                      and easy to navigate, and transactions are fast and
                      secure. I feel confident using this system to handle all
                      of my financial transactions.
                    </div>
                    <div className="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
                    <div className="flex flex-row items-start">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a27f_Ellipse%2010%402x.png"
                        alt="Testimonial image"
                        className="mr-4 inline-block h-16 w-16 max-w-full object-contain"
                      />
                      <div className="flex flex-col items-start">
                        <h6 className="text-sm font-bold md:text-base">
                          Laila Bahar
                        </h6>
                        <p className="text-sm text-[#636262]">Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-2xl border border-[#cdcdcd] bg-white px-6 pb-6 pt-10 max-[767px]:p-8">
                    <div className="text-[#636262]">
                      I've been using this payment system for a few months now
                      and I have to say it's been great. The interface is simple
                      and easy to navigate, and transactions are fast and
                      secure. I feel confident using this system to handle all
                      of my financial transactions.
                    </div>
                    <div className="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
                    <div className="flex flex-row items-start">
                      <img
                        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a27d_Group%2048096%402x.png"
                        alt="Testimonial image"
                        className="mr-4 inline-block h-16 w-16 max-w-full object-contain"
                      />
                      <div className="flex flex-col items-start">
                        <h6 className="text-sm font-bold md:text-base">
                          Laila Bahar
                        </h6>
                        <p className="text-sm text-[#636262]">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a href="#" className="mx-auto font-bold text-black">
                    Check all reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block bg-[#f7f6f2]">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
                    Make every step user-centric
                  </h2>
                  <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                    <p className="text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam,purus sit amet luctus magna fringilla urna
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
                  <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a287_Circle%20Image.svg"
                      alt="Features Icon"
                      className="inline-block h-16 max-w-full"
                    />
                    <div className="text-xl font-semibold">Support</div>
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a285_Circle%20Image-1.svg"
                      alt="Features Icon"
                      className="inline-block h-16 max-w-full"
                    />
                    <div className="text-xl font-semibold">Organise</div>
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a286_Circle%20Image-2.svg"
                      alt="Features Icon"
                      className="inline-block h-16 max-w-full"
                    />
                    <div className="text-xl font-semibold">Flexibility</div>
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a283_Circle%20Image-3.svg"
                      alt="Features Icon"
                      className="inline-block h-16 max-w-full"
                    />
                    <div className="text-xl font-semibold">Speed</div>
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a284_Circle%20Image-4.svg"
                      alt="Features Icon"
                      className="inline-block h-16 max-w-full"
                    />
                    <div className="text-xl font-semibold">Quality</div>
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a288_Circle%20Image-5.svg"
                      alt="Features Icon"
                      className="inline-block h-16 max-w-full"
                    />
                    <div className="text-xl font-semibold">Resource</div>
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam, purus sit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <img
            src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
            alt=""
            className="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover"
          />
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
                  <div className="max-[991px]:max-w-[720px]">
                    <h2 className="mb-4 mt-6 pb-4 text-4xl font-bold text-white md:text-6xl">
                      Fast and Reliable Payments
                    </h2>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                      <p className="text-[#aeaeae]">
                        Say goodbye to payment headaches with SecurePay! Our
                        easy-to-use payment platform makes it simple for
                        businesses and individuals to send and receive payments
                        quickly and securely.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a289_image%204.png"
                      alt="CTA Card Image"
                      className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="block bg-[#f7f6f2]">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
                  <h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
                    Frequently Asked Questions
                  </h2>
                  <div className="mx-auto mt-4 max-w-[528px]">
                    <p className="text-[#636262]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam,purus sit amet luctus magna fringilla urna
                    </p>
                  </div>
                </div>
                <div className="flex grid-cols-1 flex-wrap justify-center gap-6 overflow-hidden text-left max-[479px]:flex lg:grid-cols-2">
                  <div className="flex h-full flex-[1_1_500px] flex-col">
                    <div className="mb-6 h-full w-full overflow-auto rounded-xl border border-[#c4c4c4] bg-white p-8">
                      <div className="flex cursor-pointer items-start justify-between">
                        <div className="text-xl font-bold">
                          How this theme is different from others in market?
                        </div>
                        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                          <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                          <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                        </div>
                      </div>
                      <div className="mb-4 overflow-hidden">
                        <p className="">
                          Pellentesque in nisi aliquet, pellentesque purus eget,
                          imperdiet turpis. Fusce at enim quis neque viverra
                          convallis. Vivamus ut elementum leo, eget tempus nisl.
                          Sed viverra enim ac turpis posuere consectetur. Sed
                          enim nibh, consequat vitae lacus eu, ullamcorper
                          ullamcorper massa. Pellentesque purus eget, imperdiet
                          turpis.
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 h-full w-full overflow-auto rounded-xl border border-[#c4c4c4] bg-white p-8">
                      <div className="flex cursor-pointer items-start justify-between">
                        <div className="text-xl font-bold">
                          How can I contribute to Flowspark?
                        </div>
                        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                          <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                          <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                        </div>
                      </div>
                      <div className="mb-4 overflow-hidden">
                        <p className="">
                          Pellentesque in nisi aliquet, pellentesque purus eget,
                          imperdiet turpis. Fusce at enim quis neque viverra
                          convallis. Vivamus ut elementum leo, eget tempus nisl.
                          Sed viverra enim ac turpis posuere consectetur. Sed
                          enim nibh, consequat vitae lacus eu, ullamcorper
                          ullamcorper massa. Pellentesque purus eget, imperdiet
                          turpis.
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 h-full w-full overflow-auto rounded-xl border border-[#c4c4c4] bg-white p-8">
                      <div className="flex cursor-pointer items-start justify-between">
                        <div className="text-xl font-bold">
                          What's your refund policy
                        </div>
                        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                          <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                          <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                        </div>
                      </div>
                      <div className="mb-4 overflow-hidden">
                        <p className="">
                          Pellentesque in nisi aliquet, pellentesque purus eget,
                          imperdiet turpis. Fusce at enim quis neque viverra
                          convallis. Vivamus ut elementum leo, eget tempus nisl.
                          Sed viverra enim ac turpis posuere consectetur. Sed
                          enim nibh, consequat vitae lacus eu, ullamcorper
                          ullamcorper massa. Pellentesque purus eget, imperdiet
                          turpis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full flex-[1_1_500px] flex-col">
                    <div className="mb-6 h-full w-full overflow-auto rounded-xl border border-[#c4c4c4] bg-white p-8">
                      <div className="flex cursor-pointer items-start justify-between">
                        <div className="text-xl font-bold">
                          What is your policy on distributon of Flowspark
                          assets?
                        </div>
                        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                          <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                          <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                        </div>
                      </div>
                      <div className="mb-4 overflow-hidden">
                        <p className="">
                          Pellentesque in nisi aliquet, pellentesque purus eget,
                          imperdiet turpis. Fusce at enim quis neque viverra
                          convallis. Vivamus ut elementum leo, eget tempus nisl.
                          Sed viverra enim ac turpis posuere consectetur. Sed
                          enim nibh, consequat vitae lacus eu, ullamcorper
                          ullamcorper massa. Pellentesque purus eget, imperdiet
                          turpis.
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 h-full w-full overflow-auto rounded-xl border border-[#c4c4c4] bg-white p-8">
                      <div className="flex cursor-pointer items-start justify-between">
                        <div className="text-xl font-bold">
                          What other themes do you have?
                        </div>
                        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                          <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                          <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                        </div>
                      </div>
                      <div className="mb-4 overflow-hidden">
                        <p className="">
                          Pellentesque in nisi aliquet, pellentesque purus eget,
                          imperdiet turpis. Fusce at enim quis neque viverra
                          convallis. Vivamus ut elementum leo, eget tempus nisl.
                          Sed viverra enim ac turpis posuere consectetur. Sed
                          enim nibh, consequat vitae lacus eu, ullamcorper
                          ullamcorper massa. Pellentesque purus eget, imperdiet
                          turpis.
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 h-full w-full overflow-auto rounded-xl border border-[#c4c4c4] bg-white p-8">
                      <div className="flex cursor-pointer items-start justify-between">
                        <div className="text-xl font-bold">Are you hiring?</div>
                        <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                          <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                          <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                        </div>
                      </div>
                      <div className="mb-4 overflow-hidden">
                        <p className="">
                          Pellentesque in nisi aliquet, pellentesque purus eget,
                          imperdiet turpis. Fusce at enim quis neque viverra
                          convallis. Vivamus ut elementum leo, eget tempus nisl.
                          Sed viverra enim ac turpis posuere consectetur. Sed
                          enim nibh, consequat vitae lacus eu, ullamcorper
                          ullamcorper massa. Pellentesque purus eget, imperdiet
                          turpis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 md:mb-12 lg:mb-16"></div>
                <p className="text-center">
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <a href="#" className="text-black">
                    customer support team
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
                  <div className="max-[991px]:max-w-[720px]">
                    <h2 className="mb-4 mt-6 pb-4 text-3xl font-extrabold md:text-5xl">
                      Build{" "}
                      <span
                        className="bg-contain bg-[50%_100%] bg-no-repeat"
                        // style={{background-image: url('https://assets.website-files.com/646f65e37fe0275cfb808405/6475d891098dee07b3371c01_634378b098f0f6cc605dc2bb_Vector%204.svg');}}
                      >
                        Lightning
                      </span>{" "}
                      Fast with 200+ Components &amp; Templates
                    </h2>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                      <p className="text-[#636262]">
                        Use the Components and Template for your personal and
                        Client Projects. Build your breath-taking site in
                        minutes, not days!
                      </p>
                    </div>
                    <a
                      href="https://build.flowspark.co/"
                      target="_blank"
                      className="inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
                    >
                      View 200+ Components &amp; Templates
                    </a>
                  </div>
                  <div className="">
                    <img
                      src="https://assets.website-files.com/646f65e37fe0275cfb808405/6475d862fa8d05e447b1c545_Frame%201%20(5).png"
                      alt=""
                      className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="block bg-black">
          <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="py-16 md:py-24 lg:py-32">
                <a href="#" className="mb-12 inline-block max-w-full">
                  <img
                    src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26c_%5BA%5D--Navbar%20Brand.png"
                    alt=""
                    className="inline-block max-h-10 max-w-full"
                  />
                </a>
                <div className="grid grid-cols-[auto_1fr] justify-between gap-10 sm:grid-cols-[auto_auto_auto] lg:grid-cols-[0.45fr_auto_auto_auto]">
                  <div className="flex w-full grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:mr-0 max-[991px]:max-w-[400px] max-[991px]:[grid-area:span_1/span_3/span_1/span_3] max-[479px]:[grid-area:span_1/span_2/span_1/span_2]">
                    <div className="text-[#636262]">
                      Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
                      sit amet luctus
                    </div>
                    <div className="mx-0 mb-4 mt-4 w-full">
                      <form
                        name="email-form"
                        method="get"
                        className="relative flex max-w-full items-center justify-center"
                      >
                        <input
                          type="email"
                          className="m-0 mb-2.5 block h-full max-h-8 w-full rounded-lg border border-solid border-black bg-[#101010] px-3 py-6 align-middle text-sm text-[#333333] focus:border-[#3898ec]"
                          maxlength="256"
                          name="email-4"
                          placeholder="Enter your email"
                          required=""
                        />
                        <div className="absolute right-2 top-[12px] text-[#c9fd02]">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.9752 3.02708C20.7866 2.83863 20.5512 2.70382 20.2932 2.63651C20.0353 2.5692 19.764 2.57182 19.5074 2.64411L2.0391 7.57102C1.74519 7.65391 1.48358 7.82454 1.28924 8.0601C1.0949 8.29565 0.977084 8.58491 0.951545 8.88922C0.926006 9.19353 0.993958 9.49838 1.14632 9.76303C1.29868 10.0277 1.52819 10.2395 1.80418 10.3702L9.11045 13.8311L14.1057 8.83591C14.2463 8.69525 14.4371 8.61623 14.636 8.61623C14.835 8.61623 15.0257 8.69525 15.1664 8.83591C15.3071 8.97657 15.3861 9.16735 15.3861 9.36628C15.3861 9.5652 15.3071 9.75598 15.1664 9.89664L10.1712 14.8919L13.6321 22.1981C13.7519 22.4552 13.9429 22.6726 14.1823 22.8246C14.4218 22.9767 14.6997 23.057 14.9834 23.0562C15.0263 23.0562 15.0696 23.0544 15.1131 23.0508C15.418 23.0269 15.708 22.9097 15.9439 22.7151C16.1798 22.5205 16.35 22.258 16.4313 21.9632L21.3582 4.49494C21.4304 4.2383 21.433 3.96707 21.3657 3.7091C21.2984 3.45112 21.1636 3.21572 20.9752 3.02708Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="submit"
                          value="Subscribe"
                          className="absolute m-0 inline-block cursor-pointer rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black opacity-0 transition hover:border-black hover:bg-white"
                        />
                      </form>
                    </div>
                    <div className="">
                      <p className="font-bold uppercase text-[#c9fd02]">
                        email us
                      </p>
                      <p className="text-[#636262]">support@flowspark.co</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start font-semibold">
                    <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                      <div className="text-xl text-white">Solution</div>
                    </div>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Commerce
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Insights
                    </a>
                  </div>
                  <div className="flex flex-col items-start font-semibold">
                    <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                      <div className="text-xl text-white">Support</div>
                    </div>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Guides
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      API&nbsp;Status
                    </a>
                  </div>
                  <div className="flex flex-col items-start font-semibold">
                    <div className="m-4 ml-0 mr-0 max-[991px]:mt-0 lg:ml-0 lg:mr-0">
                      <div className="text-xl text-white">Company</div>
                    </div>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Jobs
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Press
                    </a>
                    <a
                      href="#"
                      className="py-2 text-sm font-bold text-[#636262] transition hover:text-white"
                    >
                      Partners
                    </a>
                  </div>
                </div>
                <div className="mb-20 mt-20 w-full border border-solid border-[#101010]"></div>
                <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
                  <div className="max-[991px]:flex-none">
                    <p className="text-[#636262]">
                      © Copyright 2021. All rights reserved.
                    </p>
                  </div>
                  <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
                    <a
                      href="#"
                      className="inline-block py-2 pl-5 pr-0 font-bold text-[#636262] transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="#"
                      className="inline-block py-2 pl-5 pr-0 font-bold text-[#636262] transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
                    >
                      License
                    </a>
                    <a
                      href="#"
                      className="inline-block py-2 pl-5 pr-0 font-bold text-[#636262] transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
