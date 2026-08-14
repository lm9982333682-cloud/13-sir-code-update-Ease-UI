import { Loading } from "@/components/Loading/Loading";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LoadingPage = () => {

    // =====================================
    // Basic Spinner
    // =====================================

    const spinnerCode = `import { Loading } from "@/components/Loading/Loading";

<Loading />`;


    // =====================================
    // Dots
    // =====================================

    const dotsCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  variant="dots"
/>`;


    // =====================================
    // Pulse
    // =====================================

    const pulseCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  variant="pulse"
/>`;


    // =====================================
    // Bars
    // =====================================

    const barsCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  variant="bars"
/>`;


    // =====================================
    // Ring
    // =====================================

    const ringCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  variant="ring"
/>`;


    // =====================================
    // Skeleton
    // =====================================

    const skeletonCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  variant="skeleton"
/>`;


    // =====================================
    // Loading with Text
    // =====================================

    const textCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  variant="spinner"
  text="Loading..."
/>`;


    // =====================================
    // Different Sizes
    // =====================================

    const sizesCode = `import { Loading } from "@/components/Loading/Loading";

<div className="flex items-center gap-8">

  <Loading
    size="sm"
  />

  <Loading
    size="md"
  />

  <Loading
    size="lg"
  />

  <Loading
    size="xl"
  />

</div>`;


    // =====================================
    // Fullscreen
    // =====================================

    const fullscreenCode = `import { Loading } from "@/components/Loading/Loading";

<Loading
  fullscreen
  text="Loading application..."
/>`;


    // =====================================
    // Overlay
    // =====================================

    const overlayCode = `import { Loading } from "@/components/Loading/Loading";

<div className="relative h-64 rounded-lg border">

  <Loading
    overlay
    text="Loading content..."
  />

</div>`;


    // =====================================
    // API Reference
    // =====================================

    const propsData = [
        {
            prop: "variant",
            type: '"spinner" | "dots" | "pulse" | "bars" | "ring" | "skeleton"',
            default: '"spinner"',
            description:
                "Controls the visual loading animation.",
        },
        {
            prop: "size",
            type: '"sm" | "md" | "lg" | "xl"',
            default: '"md"',
            description:
                "Controls the size of the loading indicator.",
        },
        {
            prop: "text",
            type: "string",
            default: "-",
            description:
                "Optional text displayed beside the loading indicator.",
        },
        {
            prop: "fullscreen",
            type: "boolean",
            default: "false",
            description:
                "Displays the loading indicator as a fullscreen overlay.",
        },
        {
            prop: "overlay",
            type: "boolean",
            default: "false",
            description:
                "Displays the loading indicator as an overlay over its parent container.",
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
                    Loading
                </h1>

                <p className="text-xl text-gray-600">
                    A flexible loading component with multiple
                    animation styles, sizes, text, overlays,
                    and fullscreen support.
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


                    {/* Spinner */}

                    <ComponentDemo code={spinnerCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading />
                        </div>

                    </ComponentDemo>


                    {/* Dots */}

                    <ComponentDemo code={dotsCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading variant="dots" />
                        </div>

                    </ComponentDemo>


                    {/* Pulse */}

                    <ComponentDemo code={pulseCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading variant="pulse" />
                        </div>

                    </ComponentDemo>


                    {/* Bars */}

                    <ComponentDemo code={barsCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading variant="bars" />
                        </div>

                    </ComponentDemo>


                    {/* Ring */}

                    <ComponentDemo code={ringCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading variant="ring" />
                        </div>

                    </ComponentDemo>


                    {/* Skeleton */}

                    <ComponentDemo code={skeletonCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading variant="skeleton" />
                        </div>

                    </ComponentDemo>


                    {/* Loading Text */}

                    <ComponentDemo code={textCode}>

                        <div className="h-32 flex items-center justify-center">
                            <Loading
                                variant="spinner"
                                text="Loading..."
                            />
                        </div>

                    </ComponentDemo>


                    {/* Sizes */}

                    <ComponentDemo code={sizesCode}>

                        <div className="h-32 flex items-center justify-center">

                            <div className="flex items-center gap-8">

                                <Loading size="sm" />

                                <Loading size="md" />

                                <Loading size="lg" />

                                <Loading size="xl" />

                            </div>

                        </div>

                    </ComponentDemo>


                    {/* Fullscreen */}

                    <ComponentDemo code={fullscreenCode}>

                        <div className="h-32 flex items-center justify-center rounded-lg border">

                            <button
                                type="button"
                                className="rounded-md bg-blue-600 px-4 py-2 text-white"
                                onClick={() => {
                                    // Example only
                                }}
                            >
                                Fullscreen Loading Example
                            </button>

                        </div>

                    </ComponentDemo>


                    {/* Overlay */}

                    <ComponentDemo code={overlayCode}>

                        <div className="relative h-64 overflow-hidden rounded-lg border">

                            <div className="p-6">

                                <h3 className="text-xl font-semibold">
                                    Content
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    This content is temporarily unavailable
                                    while data is loading.
                                </p>

                            </div>

                            <Loading
                                overlay
                                text="Loading content..."
                            />

                        </div>

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

export default LoadingPage;