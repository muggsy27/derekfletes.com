export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (

    <header class="relative block">
      <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fd_CTA%20Background%20BG.svg" alt="" class="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover" />
      <div class="px-5 md:px-10">
        <div class="py-16 md:py-24 lg:py-32">
          <div class="mx-auto w-full max-w-7xl rounded-[60px] bg-[#101010] px-4">
            <div class="py-16 md:py-24 lg:py-32">
              <div class="mx-auto w-full max-w-3xl max-[479px]:px-2">
                <div class="text-center">
                  <div class="mb-8 md:mb-12 lg:mb-16">
                    <h2 class="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">Fast, Reliable and Secure Payment Platform</h2>
                  </div>
                  <div class="mx-auto mb-6 flex max-w-[640px] grid-cols-[1.25fr_1fr_1fr] flex-nowrap items-center justify-center gap-0 max-[479px]:flex-col sm:items-center md:mb-10 lg:mb-12">
                    <div class="ml-2 mr-2 flex flex-row items-center max-[479px]:mt-2 md:ml-4 md:mr-4">
                      <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fc_tick-circle.svg" alt="" class="mr-2 inline-block h-8 w-8 max-w-full" />
                      <p class="text-white">300+ UI Blocks</p>
                    </div>
                    <div class="ml-2 mr-2 flex flex-row items-center max-[479px]:mt-2 md:ml-4 md:mr-4">
                      <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fc_tick-circle.svg" alt="" class="mr-2 inline-block h-8 w-8 max-w-full" />
                      <p class="text-white">Fully responsive</p>
                    </div>
                    <div class="ml-2 mr-2 flex flex-row items-center max-[479px]:mt-2 md:ml-4 md:mr-4">
                      <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fc_tick-circle.svg" alt="" class="mr-2 inline-block h-8 w-8 max-w-full" />
                      <p class="text-white">Just copy & paste</p>
                    </div>
                  </div>
                  <a href="#" class="mb-4 inline-block cursor-pointer rounded-full border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white">Get Started</a>
                  <p class="text-[#636262]">No credit card required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
