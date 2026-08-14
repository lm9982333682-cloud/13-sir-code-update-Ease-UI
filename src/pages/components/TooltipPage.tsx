
import Tooltip from "@/components/Tooltip/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {

  // =========================
  // ❤️❤️ Tooltip Code Examples
  // =========================

  const topTooltip = `import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip
  content="This tooltip appears on top"
  position="top"
>
  <button className="px-4 py-2 bg-blue-600 text-white rounded">
    Top Tooltip
  </button>
</Tooltip>`;

  const bottomTooltip = `import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip
  content="This tooltip appears at the bottom"
  position="bottom"
>
  <button className="px-4 py-2 bg-green-600 text-white rounded">
    Bottom Tooltip
  </button>
</Tooltip>`;

  const leftTooltip = `import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip
  content="This tooltip appears on the left"
  position="left"
>
  <button className="px-4 py-2 bg-purple-600 text-white rounded">
    Left Tooltip
  </button>
</Tooltip>`;

  const rightTooltip = `import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip
  content="This tooltip appears on the right"
  position="right"
>
  <button className="px-4 py-2 bg-orange-600 text-white rounded">
    Right Tooltip
  </button>
</Tooltip>`;

  const delayTooltip = `import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip
  content="This tooltip appears after 1 second"
  position="top"
  delay={1000}
>
  <button className="px-4 py-2 bg-gray-800 text-white rounded">
    Delayed Tooltip
  </button>
</Tooltip>`;

  const disabledTooltip = `import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip
  content="You cannot see this tooltip"
  disabled
>
  <button className="px-4 py-2 bg-red-600 text-white rounded">
    Disabled Tooltip
  </button>
</Tooltip>`;

  // =========================
  // API Reference
  // =========================

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description:
        "The element that triggers the tooltip when hovered.",
    },
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description:
        "The content displayed inside the tooltip.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description:
        "Controls the position of the tooltip relative to the trigger element.",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description:
        "Delay in milliseconds before the tooltip becomes visible.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description:
        "Additional custom CSS classes applied to the tooltip.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables the tooltip when set to true.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">

      {/* =========================
          Header
      ========================= */}

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Tooltip
        </h1>

        <p className="text-xl text-gray-600">
          Displays additional information when the user hovers over
          an element.
        </p>
      </div>

      {/* =========================
          Usage
      ========================= */}

      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        <div className="flex flex-col gap-10">

          {/* Top Tooltip */}

          <ComponentDemo code={topTooltip}>

            <div className="flex justify-center items-center py-10">

              <Tooltip
                content="This tooltip appears on top"
                position="top"
              >
                <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                  Top Tooltip
                </button>
              </Tooltip>

            </div>

          </ComponentDemo>


          {/* Bottom Tooltip */}

          <ComponentDemo code={bottomTooltip}>

            <div className="flex justify-center items-center py-10">

              <Tooltip
                content="This tooltip appears at the bottom"
                position="bottom"
              >
                <button className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
                  Bottom Tooltip
                </button>
              </Tooltip>

            </div>

          </ComponentDemo>


          {/* Left Tooltip */}

          <ComponentDemo code={leftTooltip}>

            <div className="flex justify-center items-center py-10">

              <Tooltip
                content="This tooltip appears on the left"
                position="left"
              >
                <button className="px-4 py-2 bg-purple-600 text-white rounded cursor-pointer">
                  Left Tooltip
                </button>
              </Tooltip>

            </div>

          </ComponentDemo>


          {/* Right Tooltip */}

          <ComponentDemo code={rightTooltip}>

            <div className="flex justify-center items-center py-10">

              <Tooltip
                content="This tooltip appears on the right"
                position="right"
              >
                <button className="px-4 py-2 bg-orange-600 text-white rounded cursor-pointer">
                  Right Tooltip
                </button>
              </Tooltip>

            </div>

          </ComponentDemo>


          {/* Delay Tooltip */}

          <ComponentDemo code={delayTooltip}>

            <div className="flex justify-center items-center py-10">

              <Tooltip
                content="This tooltip appears after 1 second"
                position="top"
                delay={1000}
              >
                <button className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer">
                  Delayed Tooltip
                </button>
              </Tooltip>

            </div>

          </ComponentDemo>


          {/* Disabled Tooltip */}

          <ComponentDemo code={disabledTooltip}>

            <div className="flex justify-center items-center py-10">

              <Tooltip
                content="You cannot see this tooltip"
                disabled
              >
                <button className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer">
                  Disabled Tooltip
                </button>
              </Tooltip>

            </div>

          </ComponentDemo>

        </div>

      </section>

      {/* =========================
          API Reference
      ========================= */}

      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={propsData} />

      </section>

    </div>
  );
};

export default TooltipPage;


