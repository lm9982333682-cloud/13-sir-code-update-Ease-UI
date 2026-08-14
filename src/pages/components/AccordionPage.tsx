"use client";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/Accordion/Accordion";

import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const AccordionPage = () => {
    // =====================================
    // Basic Accordion
    // =====================================

    const basicCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      What is React?
    </AccordionTrigger>

    <AccordionContent>
      React is a JavaScript library for
      building user interfaces.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>
      What is TypeScript?
    </AccordionTrigger>

    <AccordionContent>
      TypeScript is a typed superset of
      JavaScript.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Default Open
    // =====================================

    const defaultOpenCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Default Open Item
    </AccordionTrigger>

    <AccordionContent>
      This item is open by default.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>
      Second Item
    </AccordionTrigger>

    <AccordionContent>
      This item is initially closed.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Multiple
    // =====================================

    const multipleCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion multiple>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      First Item
    </AccordionTrigger>

    <AccordionContent>
      First content.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>
      Second Item
    </AccordionTrigger>

    <AccordionContent>
      Second content.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger>
      Third Item
    </AccordionTrigger>

    <AccordionContent>
      Third content.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Dark
    // =====================================

    const darkCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion variant="dark">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Dark Accordion
    </AccordionTrigger>

    <AccordionContent>
      This is a dark accordion.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>
      Another Item
    </AccordionTrigger>

    <AccordionContent>
      Dark accordion content.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Outline
    // =====================================

    const outlineCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion variant="outline">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Outline Accordion
    </AccordionTrigger>

    <AccordionContent>
      This is an outline accordion.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Filled
    // =====================================

    const filledCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion variant="filled">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Filled Accordion
    </AccordionTrigger>

    <AccordionContent>
      This is a filled accordion.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Disabled
    // =====================================

    const disabledCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Available Item
    </AccordionTrigger>

    <AccordionContent>
      This item is available.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem
    value="item-2"
    disabled
  >
    <AccordionTrigger>
      Disabled Item
    </AccordionTrigger>

    <AccordionContent>
      You cannot open this item.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Large
    // =====================================

    const largeCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion size="lg">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Large Accordion
    </AccordionTrigger>

    <AccordionContent>
      Large accordion content.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Custom Content
    // =====================================

    const customContentCode = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion/Accordion";

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Features
    </AccordionTrigger>

    <AccordionContent>
      <ul className="list-disc pl-5">
        <li>Reusable</li>
        <li>TypeScript support</li>
        <li>Responsive</li>
        <li>Accessible</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

    // =====================================
    // Props
    // =====================================

    const propsData = [
        {
            prop: "multiple",
            type: "boolean",
            default: "false",
            description:
                "Allows multiple accordion items to remain open at the same time.",
        },

        {
            prop: "defaultValue",
            type: "string[]",
            default: "[]",
            description:
                "Defines which accordion items should be open initially.",
        },

        {
            prop: "value",
            type: "string[]",
            default: "-",
            description:
                "Controlled value containing the currently opened accordion items.",
        },

        {
            prop: "onValueChange",
            type: "(value: string[]) => void",
            default: "-",
            description:
                "Callback fired whenever the open accordion items change.",
        },

        {
            prop: "variant",
            type:
                '"default" | "dark" | "outline" | "filled"',
            default: '"default"',
            description:
                "Controls the visual style of the accordion.",
        },

        {
            prop: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the overall accordion text size.",
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

            {/* Header */}

            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">
                    Accordion
                </h1>

                <p className="text-xl text-gray-600">
                    A reusable accordion component for
                    displaying collapsible content sections.
                </p>
            </div>

            {/* Usage */}

            <section className="space-y-4">

                <h2 className="text-2xl font-semibold">
                    Usage
                </h2>

                <div className="flex flex-col gap-10">

                    {/* Basic */}

                    <ComponentDemo code={basicCode}>
                        <Accordion>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    What is React?
                                </AccordionTrigger>

                                <AccordionContent>
                                    React is a JavaScript library
                                    for building user interfaces.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    What is TypeScript?
                                </AccordionTrigger>

                                <AccordionContent>
                                    TypeScript is a typed superset
                                    of JavaScript.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    What is Tailwind CSS?
                                </AccordionTrigger>

                                <AccordionContent>
                                    Tailwind CSS is a utility-first
                                    CSS framework.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Default Open */}

                    <ComponentDemo
                        code={defaultOpenCode}
                    >
                        <Accordion
                            defaultValue={["item-1"]}
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Default Open Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    This item is open by default.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    Second Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    This item is initially closed.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Multiple */}

                    <ComponentDemo code={multipleCode}>
                        <Accordion multiple>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    First Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    First content.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    Second Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    Second content.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    Third Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    Third content.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Dark */}

                    <ComponentDemo code={darkCode}>
                        <Accordion variant="dark">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Dark Accordion
                                </AccordionTrigger>

                                <AccordionContent>
                                    This is a dark accordion.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    Another Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    Dark accordion content.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Outline */}

                    <ComponentDemo code={outlineCode}>
                        <Accordion variant="outline">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Outline Accordion
                                </AccordionTrigger>

                                <AccordionContent>
                                    This is an outline accordion.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Filled */}

                    <ComponentDemo code={filledCode}>
                        <Accordion variant="filled">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Filled Accordion
                                </AccordionTrigger>

                                <AccordionContent>
                                    This is a filled accordion.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Disabled */}

                    <ComponentDemo code={disabledCode}>
                        <Accordion>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Available Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    This item is available.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem
                                value="item-2"
                                disabled
                            >
                                <AccordionTrigger>
                                    Disabled Item
                                </AccordionTrigger>

                                <AccordionContent>
                                    You cannot open this item.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Large */}

                    <ComponentDemo code={largeCode}>
                        <Accordion size="lg">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Large Accordion
                                </AccordionTrigger>

                                <AccordionContent>
                                    Large accordion content.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                    {/* Custom Content */}

                    <ComponentDemo
                        code={customContentCode}
                    >
                        <Accordion>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Features
                                </AccordionTrigger>

                                <AccordionContent>
                                    <ul className="list-disc pl-5">
                                        <li>Reusable</li>
                                        <li>
                                            TypeScript support
                                        </li>
                                        <li>Responsive</li>
                                        <li>Accessible</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentDemo>

                </div>
            </section>

            {/* API */}

            <section className="space-y-4">

                <h2 className="text-2xl font-semibold">
                    API Reference
                </h2>

                <PropsTable data={propsData} />

            </section>

        </div>
    );
};

export default AccordionPage;