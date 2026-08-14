import { useState } from "react";
import { Success } from "@/components/Success/Success";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const SuccessPage = () => {
    const [showFullPage, setShowFullPage] = useState(false);

    // =====================================
    // Basic Success
    // =====================================

    const basicSuccess = `import { Success } from "@/components/Success/Success";

<Success
  title="Success!"
  description="Your action has been completed successfully."
/>`;


    // =====================================
    // Payment Success
    // =====================================

    const paymentSuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="payment"
/>`;


    // =====================================
    // Email Success
    // =====================================

    const emailSuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="email"
/>`;


    // =====================================
    // Profile Success
    // =====================================

    const profileSuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="profile"
/>`;


    // =====================================
    // Security Success
    // =====================================

    const securitySuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="security"
/>`;


    // =====================================
    // Continue Action
    // =====================================

    const continueSuccess = `import { Success } from "@/components/Success/Success";

<Success
  title="Registration Successful!"
  description="Your account has been created successfully."
  onContinue={() => {
    console.log("Continue");
  }}
  continueText="Continue"
/>`;


    // =====================================
    // Custom Action
    // =====================================

    const customActionSuccess = `import { Success } from "@/components/Success/Success";

<Success
  title="Order Confirmed!"
  description="Your order has been successfully placed."
  action={
    <button
      className="rounded-md bg-green-600 px-4 py-2 text-white"
    >
      View Order
    </button>
  }
/>`;


    // =====================================
    // Sizes
    // =====================================

    const sizesSuccess = `import { Success } from "@/components/Success/Success";

<div className="flex flex-col gap-8">

  <Success
    successType="payment"
    size="sm"
  />

  <Success
    successType="payment"
    size="md"
  />

  <Success
    successType="payment"
    size="lg"
  />

</div>`;


    // =====================================
    // Without Icon
    // =====================================

    const noIconSuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="payment"
  showIcon={false}
/>`;


    // =====================================
    // Dark
    // =====================================

    const darkSuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="payment"
  variant="dark"
/>`;


    // =====================================
    // Outline
    // =====================================

    const outlineSuccess = `import { Success } from "@/components/Success/Success";

<Success
  successType="email"
  variant="outline"
/>`;


    // =====================================
    // Auto Hide
    // =====================================

    const autoHideSuccess = `import { Success } from "@/components/Success/Success";

<Success
  title="Saved Successfully!"
  autoHide
  duration={3000}
  onContinue={() => {
    console.log("Success message closed");
  }}
/>`;


    // =====================================
    // Full Page
    // =====================================

    const fullPageSuccess = `import { Success } from "@/components/Success/Success";

<Success
  fullPage
  successType="payment"
/>`;


    // =====================================
    // API Reference
    // =====================================

    const propsData = [
        {
            prop: "successType",
            type: '"default" | "payment" | "email" | "profile" | "security"',
            default: '"default"',
            description:
                "Defines the success type and its default title, description, and icon.",
        },
        {
            prop: "title",
            type: "string",
            default: "-",
            description:
                "Custom success title.",
        },
        {
            prop: "description",
            type: "string",
            default: "-",
            description:
                "Custom description displayed below the title.",
        },
        {
            prop: "variant",
            type: '"default" | "success" | "dark" | "outline"',
            default: '"success"',
            description:
                "Controls the visual style of the success component.",
        },
        {
            prop: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of the success message and icon.",
        },
        {
            prop: "showIcon",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the success icon is displayed.",
        },
        {
            prop: "action",
            type: "React.ReactNode",
            default: "-",
            description:
                "Custom action or button displayed below the success message.",
        },
        {
            prop: "onContinue",
            type: "() => void",
            default: "-",
            description:
                "Callback executed when the Continue button is clicked.",
        },
        {
            prop: "continueText",
            type: "string",
            default: '"Continue"',
            description:
                "Text displayed inside the Continue button.",
        },
        {
            prop: "fullPage",
            type: "boolean",
            default: "false",
            description:
                "Displays the success component as a fullscreen message.",
        },
        {
            prop: "autoHide",
            type: "boolean",
            default: "false",
            description:
                "Automatically triggers onContinue after the specified duration.",
        },
        {
            prop: "duration",
            type: "number",
            default: "3000",
            description:
                "Duration in milliseconds before autoHide triggers onContinue.",
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
                    Success
                </h1>

                <p className="text-xl text-gray-600">
                    A reusable success component for displaying
                    successful actions, payments, verification,
                    profile updates, and completed operations.
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

                    <ComponentDemo code={basicSuccess}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Success
                                title="Success!"
                                description="Your action has been completed successfully."
                            />
                        </div>

                    </ComponentDemo>


                    {/* Payment */}

                    <ComponentDemo code={paymentSuccess}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Success successType="payment" />
                        </div>

                    </ComponentDemo>


                    {/* Email */}

                    <ComponentDemo code={emailSuccess}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Success successType="email" />
                        </div>

                    </ComponentDemo>


                    {/* Profile */}

                    <ComponentDemo code={profileSuccess}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Success successType="profile" />
                        </div>

                    </ComponentDemo>


                    {/* Security */}

                    <ComponentDemo code={securitySuccess}>

                        <div className="min-h-64 flex items-center justify-center">
                            <Success successType="security" />
                        </div>

                    </ComponentDemo>


                    {/* Continue */}

                    <ComponentDemo code={continueSuccess}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Success
                                title="Registration Successful!"
                                description="Your account has been created successfully."
                                onContinue={() => {
                                    console.log("Continue");
                                }}
                                continueText="Continue"
                            />

                        </div>

                    </ComponentDemo>


                    {/* Custom Action */}

                    <ComponentDemo code={customActionSuccess}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Success
                                title="Order Confirmed!"
                                description="Your order has been successfully placed."
                                action={
                                    <button className="rounded-md bg-green-600 px-4 py-2 text-white">
                                        View Order
                                    </button>
                                }
                            />

                        </div>

                    </ComponentDemo>


                    {/* Sizes */}

                    <ComponentDemo code={sizesSuccess}>

                        <div className="flex flex-col gap-8">

                            <Success
                                successType="payment"
                                size="sm"
                            />

                            <Success
                                successType="payment"
                                size="md"
                            />

                            <Success
                                successType="payment"
                                size="lg"
                            />

                        </div>

                    </ComponentDemo>


                    {/* Without Icon */}

                    <ComponentDemo code={noIconSuccess}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Success
                                successType="payment"
                                showIcon={false}
                            />

                        </div>

                    </ComponentDemo>


                    {/* Dark */}

                    <ComponentDemo code={darkSuccess}>

                        <div className="min-h-64 flex items-center justify-center rounded-lg bg-slate-950">

                            <Success
                                successType="payment"
                                variant="dark"
                            />

                        </div>

                    </ComponentDemo>


                    {/* Outline */}

                    <ComponentDemo code={outlineSuccess}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Success
                                successType="email"
                                variant="outline"
                            />

                        </div>

                    </ComponentDemo>


                    {/* Auto Hide */}

                    <ComponentDemo code={autoHideSuccess}>

                        <div className="min-h-64 flex items-center justify-center">

                            <Success
                                title="Saved Successfully!"
                                autoHide
                                duration={3000}
                                onContinue={() => {
                                    console.log("Success message closed");
                                }}
                            />

                        </div>

                    </ComponentDemo>


                    {/* Full Page */}

                    <ComponentDemo code={fullPageSuccess}>

                        <div className="flex justify-center">

                            <button
                                type="button"
                                onClick={() => setShowFullPage(true)}
                                className="rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
                            >
                                Show Full Page Success
                            </button>

                        </div>

                        {showFullPage && (
                            <Success
                                fullPage
                                successType="payment"
                                onContinue={() => setShowFullPage(false)}
                                continueText="Close"
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

export default SuccessPage;