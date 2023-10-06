import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Index() {
  return (
    <main>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <section class="block">
        <div class="px-5 md:px-10">
          <div class="mx-auto w-full max-w-7xl">
            <div class="py-12 md:py-16 lg:py-20">
              <div class="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
                <div class="flex flex-col items-start gap-2">
                  <div class="">
                    <div class="flex flex-col items-start">
                      <div class="flex flex-col items-start gap-2">
                        <div class="flex grid-cols-2 items-center rounded-md bg-[#c4c4c4] px-3 py-1">
                          <div class="h-2 w-2 min-w-[8px] rounded-full bg-black"></div>
                          <div class="text-sm sm:text-sm">
                            Available for work
                          </div>
                        </div>
                        <p class="flex-col text-sm text-[#808080] sm:text-xl">
                          Developer &amp; UX Specialist
                        </p>
                        <h1 class="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:mb-8">
                          Jonathan Smith
                        </h1>
                        <p class="flex-col text-sm text-[#808080] sm:text-xl">
                          Consectetur adipiscing elit duis tristique
                          sollicitudin nibh. Augue mauris augue neque gravida in
                          fermentum. Sapien pellentesque habitant morbi
                          tristique pellentesque.
                        </p>
                      </div>
                      <div class="mb-8 mt-8 h-px w-full bg-black"></div>
                      <div class="mb-5 flex flex-col items-start gap-2 md:mb-6 lg:mb-8">
                        <p class="flex-col text-[#808080] max-[479px]:text-sm">
                          <strong>2020: </strong>Site of the year in
                          Awwwards.com
                        </p>
                        <p class="flex-col text-[#808080] max-[479px]:text-sm">
                          <strong>2020: </strong>Site of the year in
                          Awwwards.com
                        </p>
                      </div>
                      <div class="mb-6 flex flex-wrap items-center justify-start gap-4 md:mb-10 lg:mb-12">
                        <a
                          href="#"
                          class="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-black"
                        >
                          <div>All Achievements </div>
                          <img
                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                        </a>
                      </div>
                      <div class="flex flex-wrap items-center justify-start gap-4">
                        <a
                          href="#"
                          class="flex max-w-full flex-row items-center justify-center gap-4 bg-black px-6 py-3 text-center font-semibold text-white"
                        >
                          <img
                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                          <div>Email Me</div>
                        </a>
                        <a
                          href="#"
                          class="flex max-w-full flex-row items-center justify-center gap-4 border border-solid border-black px-6 py-3 text-center font-semibold text-black"
                        >
                          <img
                            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                          <div>Resume</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="pl-10 pr-10 max-[767px]:pl-5 max-[767px]:pr-5">
        <div class="ml-auto mr-auto w-full max-w-7xl">
          <div class="pb-32 pt-32 max-[991px]:pb-24 max-[991px]:pt-24 max-[767px]:pb-16 max-[767px]:pt-16">
            <h5 class="mb-0 mt-0 text-xl font-semibold leading-normal">
              My tech stack
            </h5>
            <div class="p-12 max-[991px]:p-10 max-[767px]:p-6 max-[479px]:pl-0 max-[479px]:pr-0 max-[479px]:pt-0"></div>
            <div class="grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-6 max-[767px]:grid-cols-[1fr_1fr_1fr] max-[767px]:gap-12 max-[479px]:grid-cols-[1fr_1fr] max-[479px]:justify-items-start max-[479px]:gap-8">
              <div
                id="w-node-_17d9f4ef-2c09-ce8f-666a-2c1694ef20ad-25f8d583"
                class="flex items-center justify-center [grid-area:span_1_/_span_1_/_span_1_/_span_1]"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b03aedf8d5a0_Microsoft%20Logo.svg"
                  loading="lazy"
                  alt=""
                  class="inline-block max-w-full"
                />
              </div>
              <div
                id="w-node-_17d9f4ef-2c09-ce8f-666a-2c1694ef20af-25f8d583"
                class="flex items-center justify-center [grid-area:span_1_/_span_1_/_span_1_/_span_1]"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0620ef8d5a5_PayPal%20Logo.svg"
                  loading="lazy"
                  alt=""
                  class="inline-block max-w-full"
                />
              </div>
              <div
                id="w-node-_17d9f4ef-2c09-ce8f-666a-2c1694ef20b1-25f8d583"
                class="flex items-center justify-center [grid-area:span_1_/_span_1_/_span_1_/_span_1]"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b00612f8d5a4_Google%20Logo.svg"
                  loading="lazy"
                  alt=""
                  class="inline-block max-w-full"
                />
              </div>
              <div
                id="w-node-_17d9f4ef-2c09-ce8f-666a-2c1694ef20b3-25f8d583"
                class="flex items-center justify-center [grid-area:span_1_/_span_1_/_span_1_/_span_1]"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0582cf8d599_Chase%20Logo.svg"
                  loading="lazy"
                  alt=""
                  class="inline-block max-w-full"
                />
              </div>
              <div
                id="w-node-_17d9f4ef-2c09-ce8f-666a-2c1694ef20b5-25f8d583"
                class="flex items-center justify-center [grid-area:span_1_/_span_1_/_span_1_/_span_1]"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0484ef8d59a_Walmart%20Logo.svg"
                  loading="lazy"
                  alt=""
                  class="inline-block max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="block bg-[#f7f6f2]">
        <div class="px-5 md:px-10">
          <div class="mx-auto w-full max-w-7xl">
            <div class="py-16 md:py-24 lg:py-32">
              <div class="mx-auto max-w-3xl text-center">
                <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
                  Make every step user-centric
                </h2>
                <div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                  <p class="text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam,purus sit amet luctus magna fringilla urna
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
                <div class="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a287_Circle%20Image.svg"
                    alt="Features Icon"
                    class="inline-block h-16 max-w-full"
                  />
                  <div class="text-xl font-semibold">Support</div>
                  <div class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a285_Circle%20Image-1.svg"
                    alt="Features Icon"
                    class="inline-block h-16 max-w-full"
                  />
                  <div class="text-xl font-semibold">Organise</div>
                  <div class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a286_Circle%20Image-2.svg"
                    alt="Features Icon"
                    class="inline-block h-16 max-w-full"
                  />
                  <div class="text-xl font-semibold">Flexibility</div>
                  <div class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a283_Circle%20Image-3.svg"
                    alt="Features Icon"
                    class="inline-block h-16 max-w-full"
                  />
                  <div class="text-xl font-semibold">Speed</div>
                  <div class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a284_Circle%20Image-4.svg"
                    alt="Features Icon"
                    class="inline-block h-16 max-w-full"
                  />
                  <div class="text-xl font-semibold">Quality</div>
                  <div class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-6 rounded-xl border border-[#cdcdcd] bg-white p-8 transition hover:[box-shadow:rgba(0,_0,_0,_0.38)_4px_4px_20px_-14px] md:p-10">
                  <img
                    src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a288_Circle%20Image-5.svg"
                    alt="Features Icon"
                    class="inline-block h-16 max-w-full"
                  />
                  <div class="text-xl font-semibold">Resource</div>
                  <div class="text-sm text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam, purus sit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="block">
        <div class="px-5 md:px-10">
          <div class="mx-auto w-full max-w-5xl">
            <div class="py-16 md:py-24 lg:py-32">
              <div class="flex flex-col items-stretch gap-20">
                <div class="flex flex-col gap-5 text-center">
                  <h2 class="text-3xl font-bold md:text-5xl">
                    Short heading goes here
                  </h2>
                  <p class="max-[479px]:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
                <div class="">
                  <div class="grid-cols-1 [column-count:2] max-[991px]:gap-x-8 max-[767px]:[column-count:1] md:grid-cols-2">
                    <div class="mb-12 inline-block border border-solid border-[#cdcdcd] md:mb-8 lg:mb-10">
                      <div class="flex h-full flex-col text-black">
                        <div class="w-full">
                          <img
                            src="https://assets.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                        </div>
                        <div class="px-5 py-8 sm:px-6">
                          <div class="flex flex-col gap-3">
                            <h5 class="text-xl font-bold">Project name here</h5>
                            <div class="flex-col text-[#808080]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ut aliquam, purus sit amet luctus venenatis,
                              lectus magna fringilla urna
                            </div>
                          </div>
                          <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEB DESIGN</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>UI / UX</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEBFLOW</div>
                            </div>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-4">
                            <a
                              href="#"
                              class="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-black"
                            >
                              <div>VISIT WEBSITE</div>
                              <img
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                                alt=""
                                class="inline-block max-w-full"
                              />
                            </a>
                            <a
                              href="#"
                              class="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 inline-block border border-solid border-[#cdcdcd] md:mb-8 lg:mb-10">
                      <div class="flex h-full flex-col text-black">
                        <div class="w-full">
                          <img
                            src="https://assets.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                        </div>
                        <div class="px-5 py-8 sm:px-6">
                          <div class="flex flex-col gap-3">
                            <h5 class="text-xl font-bold">Project name here</h5>
                            <div class="flex-col text-[#808080]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ut aliquam, purus sit amet luctus venenatis,
                              lectus magna fringilla urna
                            </div>
                          </div>
                          <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEB DESIGN</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>UI / UX</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEBFLOW</div>
                            </div>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-4">
                            <a
                              href="#"
                              class="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-black"
                            >
                              <div>VISIT WEBSITE</div>
                              <img
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                                alt=""
                                class="inline-block max-w-full"
                              />
                            </a>
                            <a
                              href="#"
                              class="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 inline-block border border-solid border-[#cdcdcd] md:mb-8 lg:mb-10">
                      <div class="flex h-full flex-col text-black">
                        <div class="w-full">
                          <img
                            src="https://assets.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                        </div>
                        <div class="px-5 py-8 sm:px-6">
                          <div class="flex flex-col gap-3">
                            <h5 class="text-xl font-bold">Project name here</h5>
                            <div class="flex-col text-[#808080]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ut aliquam, purus sit amet luctus venenatis,
                              lectus magna fringilla urna
                            </div>
                          </div>
                          <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEB DESIGN</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>UI / UX</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEBFLOW</div>
                            </div>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-4">
                            <a
                              href="#"
                              class="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-black"
                            >
                              <div>VISIT WEBSITE</div>
                              <img
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                                alt=""
                                class="inline-block max-w-full"
                              />
                            </a>
                            <a
                              href="#"
                              class="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 inline-block border border-solid border-[#cdcdcd] md:mb-8 lg:mb-10">
                      <div class="flex h-full flex-col text-black">
                        <div class="w-full">
                          <img
                            src="https://assets.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg"
                            alt=""
                            class="inline-block max-w-full"
                          />
                        </div>
                        <div class="px-5 py-8 sm:px-6">
                          <div class="flex flex-col gap-3">
                            <h5 class="text-xl font-bold">Project name here</h5>
                            <div class="flex-col text-[#808080]">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ut aliquam, purus sit amet luctus venenatis,
                              lectus magna fringilla urna
                            </div>
                          </div>
                          <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEB DESIGN</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>UI / UX</div>
                            </div>
                            <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                              <div>WEBFLOW</div>
                            </div>
                          </div>
                          <div class="flex flex-wrap items-center justify-between gap-4">
                            <a
                              href="#"
                              class="flex max-w-full items-center justify-center gap-2.5 p-0 text-center text-sm font-bold uppercase tracking-[0.2px] text-black"
                            >
                              <div>VISIT WEBSITE</div>
                              <img
                                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                                alt=""
                                class="inline-block max-w-full"
                              />
                            </a>
                            <a
                              href="#"
                              class="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-12 md:py-16 lg:py-20">
            <div class="flex flex-col items-stretch gap-[70px]">
              <div class="flex flex-col items-center gap-5 text-center">
                <div class="flex items-center justify-center rounded-[80px] border border-solid border-[#cfe9e7] bg-[#e7eaf1] px-5 py-2 text-sm font-semibold uppercase text-black">
                  How it works
                </div>
                <h2 class="text-3xl font-bold md:text-5xl">
                  We're Here to Assist You
                </h2>
                <p class="text-[#575757]">
                  Got questions or need assistance?
                  <br />
                  We're here to help you make the most of your marketing
                  efforts.
                </p>
              </div>
              <div class="grid grid-cols-1 gap-[58px] max-[991px]:gap-x-8 max-[767px]:gap-y-12 md:grid-cols-3">
                <div class="flex w-full flex-col items-center gap-6 rounded-2xl border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px]">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74bb6a5cb6fdbf914c127_contact%201.svg"
                    alt=""
                    class="inline-block h-24 w-24 max-w-full rounded-[100%]"
                  />
                  <a
                    href="tel:+11114434534"
                    class="text-lg font-bold text-[#002d40] lg:text-2xl"
                  >
                    +11114434534
                  </a>
                </div>
                <div class="flex w-full flex-col items-center gap-6 rounded-2xl border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px]">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74bb621086db3a081d24d_contact%202.svg"
                    alt=""
                    class="inline-block h-24 w-24 max-w-full rounded-[100%]"
                  />
                  <a
                    href="mailto:Email@email.co"
                    class="text-lg font-bold text-[#002d40] lg:text-2xl"
                  >
                    Email@email.co
                  </a>
                </div>
                <div class="flex w-full flex-col items-center gap-6 rounded-2xl border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px]">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74bb6b01ee5b8427e76d9_contact%203.svg"
                    alt=""
                    class="inline-block h-24 w-24 max-w-full rounded-[100%]"
                  />
                  <a
                    href="tel:+11114434534"
                    class="text-lg font-bold text-[#002d40] lg:text-2xl"
                  >
                    Address
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
