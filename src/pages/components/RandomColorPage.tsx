

import { RandomColor } from "@/components/RandomColor/RandomColor";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const RandomColorPage = () => {
    // =====================================
    // Basic
    // =====================================

    const basicCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor />`;

    // =====================================
    // RGB
    // =====================================

    const rgbCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  format="rgb"
/>`;

    // =====================================
    // HSL
    // =====================================

    const hslCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  format="hsl"
/>`;

    // =====================================
    // Dark
    // =====================================

    const darkCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  variant="dark"
/>`;

    // =====================================
    // Outline
    // =====================================

    const outlineCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  variant="outline"
/>`;

    // =====================================
    // Filled
    // =====================================

    const filledCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  variant="filled"
/>`;

    // =====================================
    // Small
    // =====================================

    const smallCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  size="sm"
/>`;

    // =====================================
    // Large
    // =====================================

    const largeCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  size="lg"
/>`;

    // =====================================
    // Custom Initial Color
    // =====================================

    const initialColorCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  initialColor="#8B5CF6"
/>`;

    // =====================================
    // Without Copy
    // =====================================

    const noCopyCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  showCopy={false}
/>`;

    // =====================================
    // Without Button
    // =====================================

    const noButtonCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  showGenerateButton={false}
/>`;

    // =====================================
    // Custom Button
    // =====================================

    const customButtonCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  buttonText="Generate New Color"
/>`;

    // =====================================
    // Auto Generate
    // =====================================

    const autoGenerateCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  autoGenerate
  interval={2000}
/>`;

    // =====================================
    // onChange
    // =====================================

    const onChangeCode = `import { RandomColor } from "@/components/RandomColor/RandomColor";

<RandomColor
  onChange={(color) => {
    console.log("Selected color:", color);
  }}
/>`;

    // =====================================
    // Props
    // =====================================

    const propsData = [
        {
            prop: "initialColor",
            type: "string",
            default: '"#3B82F6"',
            description:
                "Sets the initial color displayed by the component.",
        },

        {
            prop: "format",
            type: '"hex" | "rgb" | "hsl"',
            default: '"hex"',
            description:
                "Controls the format used to display and copy the generated color.",
        },

        {
            prop: "showValue",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the generated color value is displayed.",
        },

        {
            prop: "showCopy",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the copy color button is displayed.",
        },

        {
            prop: "showGenerateButton",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the generate color button is displayed.",
        },

        {
            prop: "buttonText",
            type: "string",
            default: '"Generate Color"',
            description:
                "Custom text displayed inside the generate button.",
        },

        {
            prop: "autoGenerate",
            type: "boolean",
            default: "false",
            description:
                "Automatically generates a new color at a specified interval.",
        },

        {
            prop: "interval",
            type: "number",
            default: "3000",
            description:
                "Time in milliseconds between automatic color generations.",
        },

        {
            prop: "onChange",
            type: "(color: string) => void",
            default: "-",
            description:
                "Callback executed whenever a new random color is generated.",
        },

        {
            prop: "variant",
            type: '"default" | "dark" | "outline" | "filled"',
            default: '"default"',
            description:
                "Controls the visual style of the random color component.",
        },

        {
            prop: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of the color preview and component spacing.",
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
                    Random Color
                </h1>

                <p className="text-xl text-gray-600">
                    A reusable random color generator
                    component with HEX, RGB, and HSL
                    support.
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

                    <ComponentDemo code={basicCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor />
                        </div>
                    </ComponentDemo>

                    {/* RGB */}

                    <ComponentDemo code={rgbCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor format="rgb" />
                        </div>
                    </ComponentDemo>

                    {/* HSL */}

                    <ComponentDemo code={hslCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor format="hsl" />
                        </div>
                    </ComponentDemo>

                    {/* Dark */}

                    <ComponentDemo code={darkCode}>
                        <div className="max-w-md mx-auto rounded-xl bg-slate-950 p-4">
                            <RandomColor variant="dark" />
                        </div>
                    </ComponentDemo>

                    {/* Outline */}

                    <ComponentDemo code={outlineCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor variant="outline" />
                        </div>
                    </ComponentDemo>

                    {/* Filled */}

                    <ComponentDemo code={filledCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor variant="filled" />
                        </div>
                    </ComponentDemo>

                    {/* Small */}

                    <ComponentDemo code={smallCode}>
                        <div className="max-w-sm mx-auto">
                            <RandomColor size="sm" />
                        </div>
                    </ComponentDemo>

                    {/* Large */}

                    <ComponentDemo code={largeCode}>
                        <div className="max-w-lg mx-auto">
                            <RandomColor size="lg" />
                        </div>
                    </ComponentDemo>

                    {/* Initial Color */}

                    <ComponentDemo code={initialColorCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor
                                initialColor="#8B5CF6"
                            />
                        </div>
                    </ComponentDemo>

                    {/* No Copy */}

                    <ComponentDemo code={noCopyCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor
                                showCopy={false}
                            />
                        </div>
                    </ComponentDemo>

                    {/* No Button */}

                    <ComponentDemo code={noButtonCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor
                                showGenerateButton={false}
                            />
                        </div>
                    </ComponentDemo>

                    {/* Custom Button */}

                    <ComponentDemo code={customButtonCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor
                                buttonText="Generate New Color"
                            />
                        </div>
                    </ComponentDemo>

                    {/* Auto Generate */}

                    <ComponentDemo code={autoGenerateCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor
                                autoGenerate
                                interval={2000}
                            />
                        </div>
                    </ComponentDemo>

                    {/* onChange */}

                    <ComponentDemo code={onChangeCode}>
                        <div className="max-w-md mx-auto">
                            <RandomColor
                                onChange={(color) => {
                                    console.log(
                                        "Selected color:",
                                        color
                                    );
                                }}
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

export default RandomColorPage;