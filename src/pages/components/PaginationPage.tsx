"use client";

import React, {
    useState,
} from "react";

import {
    Pagination,
} from "@/components/Pagination/Pagination";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";


const PaginationPage = () => {

    // ===================================================
    // Controlled Pagination
    // ===================================================

    const [
        currentPage,
        setCurrentPage,
    ] = useState(5);


    // ===================================================
    // Basic Usage
    // ===================================================

    const basicCode = `import {
  Pagination,
} from "@/components/Pagination/Pagination";

<Pagination
  totalPages={10}
/>`;


    // ===================================================
    // Controlled
    // ===================================================

    const controlledCode = `const [
  currentPage,
  setCurrentPage
] = useState(1);

<Pagination
  totalPages={10}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
/>`;


    // ===================================================
    // Sibling Count
    // ===================================================

    const siblingCode = `<Pagination
  totalPages={20}
  currentPage={10}
  siblingCount={2}
/>`;


    // ===================================================
    // Previous / Next Text
    // ===================================================

    const textCode = `<Pagination
  totalPages={10}
  previousText="Previous"
  nextText="Next"
/>`;


    // ===================================================
    // Without First / Last
    // ===================================================

    const simpleCode = `<Pagination
  totalPages={10}
  showFirst={false}
  showLast={false}
/>`;


    // ===================================================
    // Variants
    // ===================================================

    const variantsCode = `<div className="flex flex-col gap-6">

  <Pagination
    totalPages={10}
    variant="default"
  />

  <Pagination
    totalPages={10}
    variant="outline"
  />

  <Pagination
    totalPages={10}
    variant="dark"
  />

  <Pagination
    totalPages={10}
    variant="filled"
  />

</div>`;


    // ===================================================
    // Sizes
    // ===================================================

    const sizesCode = `<div className="flex flex-col gap-6">

  <Pagination
    totalPages={10}
    size="sm"
  />

  <Pagination
    totalPages={10}
    size="md"
  />

  <Pagination
    totalPages={10}
    size="lg"
  />

</div>`;


    // ===================================================
    // Disabled
    // ===================================================

    const disabledCode = `<Pagination
  totalPages={10}
  disabled
/>`;


    // ===================================================
    // Props
    // ===================================================

    const propsData = [

        {
            prop: "totalPages",
            type: "number",
            default: "-",
            description:
                "Total number of pages available.",
        },

        {
            prop: "currentPage",
            type: "number",
            default: "-",
            description:
                "Current page for controlled pagination.",
        },

        {
            prop: "defaultPage",
            type: "number",
            default: "1",
            description:
                "Initial page for uncontrolled pagination.",
        },

        {
            prop: "onPageChange",
            type: "(page: number) => void",
            default: "-",
            description:
                "Callback fired when the current page changes.",
        },

        {
            prop: "siblingCount",
            type: "number",
            default: "1",
            description:
                "Number of page buttons displayed around the current page.",
        },

        {
            prop: "showFirst",
            type: "boolean",
            default: "true",
            description:
                "Controls visibility of the first page button.",
        },

        {
            prop: "showLast",
            type: "boolean",
            default: "true",
            description:
                "Controls visibility of the last page button.",
        },

        {
            prop: "showPrevious",
            type: "boolean",
            default: "true",
            description:
                "Controls visibility of the previous page button.",
        },

        {
            prop: "showNext",
            type: "boolean",
            default: "true",
            description:
                "Controls visibility of the next page button.",
        },

        {
            prop: "previousText",
            type: "string",
            default: "-",
            description:
                "Optional text displayed with the previous button.",
        },

        {
            prop: "nextText",
            type: "string",
            default: "-",
            description:
                "Optional text displayed with the next button.",
        },

        {
            prop: "variant",
            type:
                '"default" | "outline" | "dark" | "filled"',
            default: '"default"',
            description:
                "Controls the visual style of pagination.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of pagination buttons.",
        },

        {
            prop: "disabled",
            type: "boolean",
            default: "false",
            description:
                "Disables pagination interaction.",
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
                    Pagination
                </h1>

                <p
                    className="
            text-xl
            text-gray-600
          "
                >
                    A reusable pagination
                    component for navigating
                    between multiple pages.
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

                        <Pagination
                            totalPages={10}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Controlled
          ============================================= */}

                    <ComponentDemo
                        code={controlledCode}
                    >

                        <div className="space-y-4">

                            <Pagination
                                totalPages={10}
                                currentPage={
                                    currentPage
                                }
                                onPageChange={
                                    setCurrentPage
                                }
                            />

                            <p className="text-sm text-gray-500">

                                Current page:
                                {" "}

                                <strong>
                                    {currentPage}
                                </strong>

                            </p>

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Sibling Count
          ============================================= */}

                    <ComponentDemo
                        code={siblingCode}
                    >

                        <Pagination
                            totalPages={20}
                            currentPage={10}
                            siblingCount={2}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Text
          ============================================= */}

                    <ComponentDemo
                        code={textCode}
                    >

                        <Pagination
                            totalPages={10}
                            previousText="Previous"
                            nextText="Next"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Simple
          ============================================= */}

                    <ComponentDemo
                        code={simpleCode}
                    >

                        <Pagination
                            totalPages={10}
                            showFirst={false}
                            showLast={false}
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
                flex-col
                gap-6
              "
                        >

                            <Pagination
                                totalPages={10}
                                variant="default"
                            />

                            <Pagination
                                totalPages={10}
                                variant="outline"
                            />

                            <Pagination
                                totalPages={10}
                                variant="dark"
                            />

                            <Pagination
                                totalPages={10}
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
                flex-col
                gap-6
              "
                        >

                            <Pagination
                                totalPages={10}
                                size="sm"
                            />

                            <Pagination
                                totalPages={10}
                                size="md"
                            />

                            <Pagination
                                totalPages={10}
                                size="lg"
                            />

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Disabled
          ============================================= */}

                    <ComponentDemo
                        code={disabledCode}
                    >

                        <Pagination
                            totalPages={10}
                            disabled
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


export default PaginationPage;