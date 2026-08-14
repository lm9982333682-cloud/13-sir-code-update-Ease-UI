import { useState } from "react";
import { Error } from "@/components/Error/Error";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const ErrorPage = () => {
    const [showFullPageError, setShowFullPageError] =
        useState(false);

    // =====================================
    // Basic Error
    // =====================================

    const basicError = `import { Error } from "@/components/Error/Error";

<Error
  title="Something went wrong"
  description="An unexpected error occurred."
/>`;


    // =====================================
    // 404 Error
    // =====================================

    const notFoundError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="404"
/>`;


    // =====================================
    // 403 Error
    // =====================================

    const forbiddenError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="403"
/>`;


    // =====================================
    // 500 Error
    // =====================================

    const serverError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="500"
/>`;


    // =====================================
    // Network Error
    // =====================================

    const networkError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="network"
/>`;


    // =====================================
    // Warning
    // =====================================

    const warningError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="warning"
/>`;


    // =====================================
    // Retry
    // =====================================

    const retryError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="network"
  onRetry={() => {
    console.log("Retrying...");
  }}
  retryText="Retry"
/>`;


    // =====================================
    // Custom Action
    // =====================================

    const customActionError = `import { Error } from "@/components/Error/Error";

<Error
  title="Payment Failed"
  description="We couldn't process your payment."
  action={
    <button
      className="rounded-md bg-blue-600 px-4 py-2 text-white"
    >
      Contact Support
    </button>
  }
/>`;


    // =====================================
    // Different Sizes
    // =====================================

    const sizesError = `import { Error } from "@/components/Error/Error";

<div className="flex flex-col gap-8">

  <Error
    errorType="404"
    size="sm"
  />

  <Error
    errorType="404"
    size="md"
  />

  <Error
    errorType="404"
    size="lg"
  />

</div>`;


    // =====================================
    // Without Icon
    // =====================================

    const noIconError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="500"
  showIcon={false}
/>`;


    // =====================================
    // Dark Error
    // =====================================

    const darkError = `import { Error } from "@/components/Error/Error";

<Error
  errorType="500"
  variant="dark"
/>`;


    // =====================================
    // Full Page
    // =====================================

    const fullPageError = `import { Error } from "@/components/Error/Error";

<Error
  fullPage
  errorType="500"
/>`;


    // =====================================
    // API Reference
    // =====================================

    const propsData = [
        {
            prop: "errorType",
            type: '"default" | "404" | "403" | "500" | "network" | "warning"',
            default: '"default"',
            description:
                "Defines the type and default content of the error.",
        },
        {
            prop: "title",
            type: "string",
            default: "-",
            description:
                "Custom error title. Overrides the default title for the selected error type.",
        },
        {
            prop: "description",
            type: "string",
            default: "-",
            description:
                "Custom description displayed below the error title.",
        },
        {
            prop: "variant",
            type: '"default" | "danger" | "warning" | "dark"',
            default: '"danger"',
            description:
                "Controls the visual style of the error component.",
        },
        {
            prop: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of the error content and icon.",
        },
        {
            prop: "showIcon",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the error icon is displayed.",
        },
        {
            prop: "action",
            type: "React.ReactNode",
            default: "-",
            description:
                "Custom action or button displayed below the error message.",
        },
        {
            prop: "onRetry",
            type: "() => void",
            default: "-",
            description:
                "Callback used to display and handle a retry action.",
        },
        {
            prop: "retryText",
            type: "string",
            default: '"Try Again"',
            description:
                "Text displayed inside the retry button.",
        },
        {
            prop: "fullPage",
            type: "boolean",
            default: "false",
            description:
                "Displays the error as a fullscreen error page.",
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
                    Error
                </h1>

                <p className="text-xl text-gray-600">
                    A flexible error component for displaying
                    application, network, permission, server,
                    and validation errors.
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


                    {/* Basic */}

                    <ComponentDemo code={basicError}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Error
                                title="Something went wrong"
                                description="An unexpected error occurred."
                            />
                        </div>

                    </ComponentDemo>


                    {/* 404 */}

                    <ComponentDemo code={notFoundError}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Error errorType="404" />
                        </div>

                    </ComponentDemo>


                    {/* 403 */}

                    <ComponentDemo code={forbiddenError}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Error errorType="403" />
                        </div>

                    </ComponentDemo>


                    {/* 500 */}

                    <ComponentDemo code={serverError}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Error errorType="500" />
                        </div>

                    </ComponentDemo>


                    {/* Network */}

                    <ComponentDemo code={networkError}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Error errorType="network" />
                        </div>

                    </ComponentDemo>


                    {/* Warning */}

                    <ComponentDemo code={warningError}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Error errorType="warning" />
                        </div>

                    </ComponentDemo>


                    {/* Retry */}

                    <ComponentDemo code={retryError}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Error
                                errorType="network"
                                onRetry={() => {
                                    console.log("Retrying...");
                                }}
                                retryText="Retry"
                            />

                        </div>

                    </ComponentDemo>


                    {/* Custom Action */}

                    <ComponentDemo code={customActionError}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Error
                                title="Payment Failed"
                                description="We couldn't process your payment."
                                action={
                                    <button
                                        className="rounded-md bg-blue-600 px-4 py-2 text-white"
                                    >
                                        Contact Support
                                    </button>
                                }
                            />

                        </div>

                    </ComponentDemo>


                    {/* Sizes */}

                    <ComponentDemo code={sizesError}>

                        <div className="flex flex-col gap-8">

                            <Error
                                errorType="404"
                                size="sm"
                            />

                            <Error
                                errorType="404"
                                size="md"
                            />

                            <Error
                                errorType="404"
                                size="lg"
                            />

                        </div>

                    </ComponentDemo>


                    {/* No Icon */}

                    <ComponentDemo code={noIconError}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Error
                                errorType="500"
                                showIcon={false}
                            />

                        </div>

                    </ComponentDemo>


                    {/* Dark */}

                    <ComponentDemo code={darkError}>

                        <div className="min-h-64 flex items-center justify-center rounded-lg bg-slate-950">

                            <Error
                                errorType="500"
                                variant="dark"
                            />

                        </div>

                    </ComponentDemo>


                    {/* Full Page */}

                    <ComponentDemo code={fullPageError}>

                        <div className="flex justify-center">

                            <button
                                type="button"
                                onClick={() =>
                                    setShowFullPageError(true)
                                }
                                className="rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                            >
                                Show Full Page Error
                            </button>

                        </div>

                        {showFullPageError && (
                            <Error
                                fullPage
                                errorType="500"
                                onRetry={() =>
                                    setShowFullPageError(false)
                                }
                                retryText="Close"
                            />
                        )}

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

export default ErrorPage;