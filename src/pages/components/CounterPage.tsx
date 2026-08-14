"use client";

import React, {
    useState,
} from "react";

import {
    Counter,
} from "@/components/Counter/Counter";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";


// =====================================================
// Counter Page
// =====================================================

const CounterPage = () => {


    // ===================================================
    // Controlled Counter
    // ===================================================

    const [
        controlledValue,
        setControlledValue,
    ] = useState(5);


    // ===================================================
    // Basic Usage
    // ===================================================

    const basicCode = `import {
  Counter,
} from "@/components/Counter/Counter";

<Counter />`;


    // ===================================================
    // Initial Value
    // ===================================================

    const initialValueCode = `<Counter
  initialValue={10}
/>`;


    // ===================================================
    // Min / Max
    // ===================================================

    const minMaxCode = `<Counter
  initialValue={5}
  min={0}
  max={10}
/>`;


    // ===================================================
    // Step
    // ===================================================

    const stepCode = `<Counter
  initialValue={10}
  step={5}
/>`;


    // ===================================================
    // Variants
    // ===================================================

    const variantsCode = `<div className="flex flex-wrap gap-4">

  <Counter
    variant="default"
  />

  <Counter
    variant="outline"
  />

  <Counter
    variant="dark"
  />

  <Counter
    variant="filled"
  />

</div>`;


    // ===================================================
    // Sizes
    // ===================================================

    const sizesCode = `<div className="flex items-center gap-4">

  <Counter
    size="sm"
  />

  <Counter
    size="md"
  />

  <Counter
    size="lg"
  />

</div>`;


    // ===================================================
    // Controlled
    // ===================================================

    const controlledCode = `const [value, setValue] =
  useState(5);

<Counter
  value={value}
  onChange={setValue}
/>`;


    // ===================================================
    // Disabled
    // ===================================================

    const disabledCode = `<Counter
  initialValue={5}
  disabled
/>`;


    // ===================================================
    // Read Only
    // ===================================================

    const readOnlyCode = `<Counter
  initialValue={5}
  readOnly
/>`;


    // ===================================================
    // Custom Step
    // ===================================================

    const customRenderCode = `<Counter
  initialValue={100}
  step={10}
  renderValue={(value) => (
    <span>
      {value}%
    </span>
  )}
/>`;


    // ===================================================
    // Hide Buttons
    // ===================================================

    const hideButtonsCode = `<Counter
  initialValue={5}
  hideDecrement
/>`;


    // ===================================================
    // Props Data
    // ===================================================

    const propsData = [

        {
            prop: "initialValue",
            type: "number",
            default: "0",
            description:
                "Initial value used by the uncontrolled counter.",
        },

        {
            prop: "value",
            type: "number",
            default: "-",
            description:
                "Controlled value of the counter.",
        },

        {
            prop: "min",
            type: "number",
            default: "0",
            description:
                "Minimum value allowed by the counter.",
        },

        {
            prop: "max",
            type: "number",
            default: "Infinity",
            description:
                "Maximum value allowed by the counter.",
        },

        {
            prop: "step",
            type: "number",
            default: "1",
            description:
                "Amount added or removed on each click.",
        },

        {
            prop: "onChange",
            type: "(value: number) => void",
            default: "-",
            description:
                "Called whenever the counter value changes.",
        },

        {
            prop: "variant",
            type:
                '"default" | "outline" | "dark" | "filled"',
            default: '"default"',
            description:
                "Controls the visual style of the counter.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of the counter.",
        },

        {
            prop: "disabled",
            type: "boolean",
            default: "false",
            description:
                "Disables the complete counter.",
        },

        {
            prop: "readOnly",
            type: "boolean",
            default: "false",
            description:
                "Prevents the value from being changed.",
        },

        {
            prop: "showValue",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the current value is displayed.",
        },

        {
            prop: "renderValue",
            type:
                "(value: number) => React.ReactNode",
            default: "-",
            description:
                "Custom renderer for the counter value.",
        },

        {
            prop: "hideDecrement",
            type: "boolean",
            default: "false",
            description:
                "Hides the decrement button.",
        },

        {
            prop: "hideIncrement",
            type: "boolean",
            default: "false",
            description:
                "Hides the increment button.",
        },

        {
            prop: "decrementIcon",
            type: "React.ReactNode",
            default: "<Minus />",
            description:
                "Custom icon for the decrement button.",
        },

        {
            prop: "incrementIcon",
            type: "React.ReactNode",
            default: "<Plus />",
            description:
                "Custom icon for the increment button.",
        },

        {
            prop: "className",
            type: "string",
            default: "-",
            description:
                "Additional CSS classes.",
        },

    ];


    return (

        <div
            className="
        max-w-4xl
        mx-auto
        p-4
        space-y-12
      "
        >


            {/* =================================================
          Header
      ================================================= */}

            <header className="space-y-4">

                <h1
                    className="
            text-4xl
            font-bold
            tracking-tight
          "
                >
                    Counter
                </h1>

                <p
                    className="
            text-xl
            text-gray-600
          "
                >
                    A reusable number counter
                    component with min, max,
                    step and controlled state
                    support.
                </p>

            </header>


            {/* =================================================
          Usage
      ================================================= */}

            <section className="space-y-6">

                <h2
                    className="
            text-2xl
            font-semibold
          "
                >
                    Usage
                </h2>


                <div
                    className="
            flex
            flex-col
            gap-12
          "
                >


                    {/* =============================================
              Basic
          ============================================= */}

                    <ComponentDemo
                        code={basicCode}
                    >

                        <Counter />

                    </ComponentDemo>


                    {/* =============================================
              Initial Value
          ============================================= */}

                    <ComponentDemo
                        code={initialValueCode}
                    >

                        <Counter
                            initialValue={10}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Min Max
          ============================================= */}

                    <ComponentDemo
                        code={minMaxCode}
                    >

                        <Counter
                            initialValue={5}
                            min={0}
                            max={10}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Step
          ============================================= */}

                    <ComponentDemo
                        code={stepCode}
                    >

                        <Counter
                            initialValue={10}
                            step={5}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Variants
          ============================================= */}

                    <ComponentDemo
                        code={variantsCode}
                    >

                        <div
                            className="
                flex
                flex-wrap
                gap-4
              "
                        >

                            <Counter
                                variant="default"
                            />

                            <Counter
                                variant="outline"
                            />

                            <Counter
                                variant="dark"
                            />

                            <Counter
                                variant="filled"
                            />

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Sizes
          ============================================= */}

                    <ComponentDemo
                        code={sizesCode}
                    >

                        <div
                            className="
                flex
                flex-wrap
                items-center
                gap-4
              "
                        >

                            <Counter
                                size="sm"
                            />

                            <Counter
                                size="md"
                            />

                            <Counter
                                size="lg"
                            />

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Controlled
          ============================================= */}

                    <ComponentDemo
                        code={controlledCode}
                    >

                        <div className="space-y-4">

                            <Counter
                                value={controlledValue}
                                onChange={
                                    setControlledValue
                                }
                            />

                            <p className="text-sm text-gray-500">

                                Current value:
                                {" "}
                                <strong>
                                    {controlledValue}
                                </strong>

                            </p>

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Disabled
          ============================================= */}

                    <ComponentDemo
                        code={disabledCode}
                    >

                        <Counter
                            initialValue={5}
                            disabled
                        />

                    </ComponentDemo>


                    {/* =============================================
              Read Only
          ============================================= */}

                    <ComponentDemo
                        code={readOnlyCode}
                    >

                        <Counter
                            initialValue={5}
                            readOnly
                        />

                    </ComponentDemo>


                    {/* =============================================
              Custom Render
          ============================================= */}

                    <ComponentDemo
                        code={customRenderCode}
                    >

                        <Counter
                            initialValue={100}
                            step={10}
                            renderValue={(value) => (
                                <span>
                                    {value}%
                                </span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Hide Button
          ============================================= */}

                    <ComponentDemo
                        code={hideButtonsCode}
                    >

                        <Counter
                            initialValue={5}
                            hideDecrement
                        />

                    </ComponentDemo>


                </div>

            </section>


            {/* =================================================
          API Reference
      ================================================= */}

            <section className="space-y-4">

                <h2
                    className="
            text-2xl
            font-semibold
          "
                >
                    API Reference
                </h2>

                <PropsTable
                    data={propsData}
                />

            </section>

        </div>
    );
};


export default CounterPage;