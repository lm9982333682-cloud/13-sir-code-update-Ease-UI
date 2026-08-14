import { Carousel } from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {

    // =====================================
    // Basic Carousel
    // =====================================

    const basicCarousel = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel>
  <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 1
  </div>

  <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 2
  </div>

  <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 3
  </div>
</Carousel>`;


    // =====================================
    // Auto Play
    // =====================================

    const autoPlayCarousel = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel
  autoPlay
  interval={2000}
>
  <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 1
  </div>

  <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 2
  </div>

  <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 3
  </div>
</Carousel>`;


    // =====================================
    // Without Arrows
    // =====================================

    const noArrowsCarousel = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel
  showArrows={false}
>
  <div className="h-64 bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 1
  </div>

  <div className="h-64 bg-pink-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 2
  </div>

  <div className="h-64 bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 3
  </div>
</Carousel>`;


    // =====================================
    // Without Dots
    // =====================================

    const noDotsCarousel = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel
  showDots={false}
>
  <div className="h-64 bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 1
  </div>

  <div className="h-64 bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 2
  </div>

  <div className="h-64 bg-violet-500 flex items-center justify-center text-white text-2xl font-bold">
    Slide 3
  </div>
</Carousel>`;


    // =====================================
    // Multiple Slides
    // =====================================

    const multipleSlidesCarousel = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel
  slidesPerView={2}
>
  <div className="h-48 bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
    Slide 1
  </div>

  <div className="h-48 bg-green-500 flex items-center justify-center text-white text-xl font-bold">
    Slide 2
  </div>

  <div className="h-48 bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
    Slide 3
  </div>

  <div className="h-48 bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
    Slide 4
  </div>
</Carousel>`;


    // =====================================
    // Dark Carousel
    // =====================================

    const darkCarousel = `import { Carousel } from "@/components/Carousel/Carousel";

<Carousel
  variant="dark"
  radius="lg"
  autoPlay
  interval={2500}
>
  <div className="h-64 bg-slate-800 flex items-center justify-center text-white text-2xl font-bold">
    Dark Slide 1
  </div>

  <div className="h-64 bg-slate-700 flex items-center justify-center text-white text-2xl font-bold">
    Dark Slide 2
  </div>

  <div className="h-64 bg-slate-600 flex items-center justify-center text-white text-2xl font-bold">
    Dark Slide 3
  </div>
</Carousel>`;


    // =====================================
    // API Reference
    // =====================================

    const propsData = [
        {
            prop: "children",
            type: "React.ReactNode",
            default: "-",
            description:
                "The slides displayed inside the carousel.",
        },
        {
            prop: "autoPlay",
            type: "boolean",
            default: "false",
            description:
                "Automatically changes slides at the specified interval.",
        },
        {
            prop: "interval",
            type: "number",
            default: "3000",
            description:
                "Time in milliseconds between automatic slide changes.",
        },
        {
            prop: "infinite",
            type: "boolean",
            default: "true",
            description:
                "Enables infinite looping from the last slide back to the first.",
        },
        {
            prop: "showArrows",
            type: "boolean",
            default: "true",
            description:
                "Controls whether previous and next navigation buttons are displayed.",
        },
        {
            prop: "showDots",
            type: "boolean",
            default: "true",
            description:
                "Controls whether slide indicator dots are displayed.",
        },
        {
            prop: "slidesPerView",
            type: "number",
            default: "1",
            description:
                "Controls how many slides are visible at the same time.",
        },
        {
            prop: "variant",
            type: '"default" | "light" | "dark"',
            default: '"default"',
            description:
                "Controls the visual style of the carousel.",
        },
        {
            prop: "radius",
            type: '"none" | "sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the border radius of the carousel.",
        },
        {
            prop: "className",
            type: "string",
            default: "-",
            description:
                "Additional custom CSS classes.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-12">

            {/* =====================================
          Header
      ===================================== */}

            <div className="space-y-4">

                <h1 className="text-4xl font-bold tracking-tight">
                    Carousel
                </h1>

                <p className="text-xl text-gray-600">
                    A flexible carousel component for displaying
                    multiple slides with navigation and autoplay.
                </p>

            </div>


            {/* =====================================
          Usage
      ===================================== */}

            <section className="space-y-4">

                <h2 className="text-2xl font-semibold">
                    Usage
                </h2>

                <div className="flex flex-col gap-10">


                    {/* Basic Carousel */}

                    <ComponentDemo code={basicCarousel}>

                        <Carousel>

                            <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 1
                            </div>

                            <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 2
                            </div>

                            <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 3
                            </div>

                        </Carousel>

                    </ComponentDemo>


                    {/* Auto Play */}

                    <ComponentDemo code={autoPlayCarousel}>

                        <Carousel
                            autoPlay
                            interval={2000}
                        >

                            <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 1
                            </div>

                            <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 2
                            </div>

                            <div className="h-64 bg-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 3
                            </div>

                        </Carousel>

                    </ComponentDemo>


                    {/* No Arrows */}

                    <ComponentDemo code={noArrowsCarousel}>

                        <Carousel
                            showArrows={false}
                        >

                            <div className="h-64 bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 1
                            </div>

                            <div className="h-64 bg-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 2
                            </div>

                            <div className="h-64 bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 3
                            </div>

                        </Carousel>

                    </ComponentDemo>


                    {/* No Dots */}

                    <ComponentDemo code={noDotsCarousel}>

                        <Carousel
                            showDots={false}
                        >

                            <div className="h-64 bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 1
                            </div>

                            <div className="h-64 bg-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 2
                            </div>

                            <div className="h-64 bg-violet-500 flex items-center justify-center text-white text-2xl font-bold">
                                Slide 3
                            </div>

                        </Carousel>

                    </ComponentDemo>


                    {/* Multiple Slides */}

                    <ComponentDemo code={multipleSlidesCarousel}>

                        <Carousel
                            slidesPerView={2}
                        >

                            <div className="h-48 bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                                Slide 1
                            </div>

                            <div className="h-48 bg-green-500 flex items-center justify-center text-white text-xl font-bold">
                                Slide 2
                            </div>

                            <div className="h-48 bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
                                Slide 3
                            </div>

                            <div className="h-48 bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
                                Slide 4
                            </div>

                        </Carousel>

                    </ComponentDemo>


                    {/* Dark Carousel */}

                    <ComponentDemo code={darkCarousel}>

                        <Carousel
                            variant="dark"
                            radius="lg"
                            autoPlay
                            interval={2500}
                        >

                            <div className="h-64 bg-slate-800 flex items-center justify-center text-white text-2xl font-bold">
                                Dark Slide 1
                            </div>

                            <div className="h-64 bg-slate-700 flex items-center justify-center text-white text-2xl font-bold">
                                Dark Slide 2
                            </div>

                            <div className="h-64 bg-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                                Dark Slide 3
                            </div>

                        </Carousel>

                    </ComponentDemo>

                </div>

            </section>


            {/* =====================================
          API Reference
      ===================================== */}

            <section className="space-y-4">

                <h2 className="text-2xl font-semibold">
                    API Reference
                </h2>

                <PropsTable data={propsData} />

            </section>

        </div>
    );
};

export default CarouselPage;