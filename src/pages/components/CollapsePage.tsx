"use client";
import React from 'react'

import {
    Collapse,
} from "@/components/Collapse/Collapse";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";

import {
    Settings,
    User,
    Bell,
    Info,
} from "lucide-react";


const CollapsePage = () => {


    // =====================================================
    // Basic
    // =====================================================

    const basicCode = `import {
  Collapse,
} from "@/components/Collapse/Collapse";

<Collapse
  title="What is React?"
>
  <p>
    React is a JavaScript library
    for building user interfaces.
  </p>
</Collapse>`;


    // =====================================================
    // Default Open
    // =====================================================

    const defaultOpenCode = `<Collapse
  title="Default Open"
  defaultOpen
>
  <p>
    This collapse is open
    when the component loads.
  </p>
</Collapse>`;


    // =====================================================
    // Variants
    // =====================================================

    const variantsCode = `<div className="space-y-4">

  <Collapse
    title="Default"
    variant="default"
  >
    Default collapse content.
  </Collapse>


  <Collapse
    title="Outline"
    variant="outline"
  >
    Outline collapse content.
  </Collapse>


  <Collapse
    title="Filled"
    variant="filled"
  >
    Filled collapse content.
  </Collapse>


  <Collapse
    title="Dark"
    variant="dark"
  >
    Dark collapse content.
  </Collapse>

</div>`;


    // =====================================================
    // Sizes
    // =====================================================

    const sizesCode = `<div className="space-y-4">

  <Collapse
    title="Small Collapse"
    size="sm"
  >
    Small content.
  </Collapse>


  <Collapse
    title="Medium Collapse"
    size="md"
  >
    Medium content.
  </Collapse>


  <Collapse
    title="Large Collapse"
    size="lg"
  >
    Large content.
  </Collapse>

</div>`;


    // =====================================================
    // Custom Header
    // =====================================================

    const customHeaderCode = `import {
  Settings,
} from "lucide-react";


<Collapse
  header={
    <div className="flex items-center gap-2">

      <Settings
        className="h-5 w-5"
      />

      <span>
        Application Settings
      </span>

    </div>
  }
>
  <p>
    Configure application settings
    from this section.
  </p>
</Collapse>`;


    // =====================================================
    // Custom Icon
    // =====================================================

    const customIconCode = `import {
  Info,
} from "lucide-react";


<Collapse
  title="Information"
  icon={
    <Info className="h-5 w-5" />
  }
>
  <p>
    Additional information
    is available here.
  </p>
</Collapse>`;


    // =====================================================
    // Disabled
    // =====================================================

    const disabledCode = `<Collapse
  title="Disabled Collapse"
  disabled
>
  <p>
    This content cannot be opened.
  </p>
</Collapse>`;


    // =====================================================
    // No Icon
    // =====================================================

    const noIconCode = `<Collapse
  title="Simple Collapse"
  showIcon={false}
>
  <p>
    This collapse does not
    display an arrow icon.
  </p>
</Collapse>`;


    // =====================================================
    // Multiple
    // =====================================================

    const multipleCode = `<div className="space-y-4">

  <Collapse
    title="Personal Information"
  >
    <p>
      Manage your personal
      information here.
    </p>
  </Collapse>


  <Collapse
    title="Notifications"
  >
    <p>
      Manage your notification
      preferences here.
    </p>
  </Collapse>


  <Collapse
    title="Security"
  >
    <p>
      Manage your security
      settings here.
    </p>
  </Collapse>

</div>`;


    // =====================================================
    // Controlled
    // =====================================================

    const controlledCode = `const [open, setOpen] =
  useState(false);


<Collapse
  title="Controlled Collapse"
  open={open}
  onOpenChange={setOpen}
>
  <p>
    This collapse is controlled
    by React state.
  </p>
</Collapse>`;


    // =====================================================
    // Props
    // =====================================================

    const propsData = [

        {
            prop: "title",
            type: "React.ReactNode",
            default: '"Collapse"',
            description:
                "Title displayed inside the collapse header.",
        },

        {
            prop: "header",
            type: "React.ReactNode",
            default: "-",
            description:
                "Custom header content. Overrides the title.",
        },

        {
            prop: "defaultOpen",
            type: "boolean",
            default: "false",
            description:
                "Controls whether the collapse is initially open.",
        },

        {
            prop: "open",
            type: "boolean",
            default: "-",
            description:
                "Controlled open state.",
        },

        {
            prop: "onOpenChange",
            type: "(open: boolean) => void",
            default: "-",
            description:
                "Callback fired whenever the collapse state changes.",
        },

        {
            prop: "variant",
            type:
                '"default" | "outline" | "filled" | "dark"',
            default: '"default"',
            description:
                "Controls the visual appearance of the collapse.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of the collapse header and content.",
        },

        {
            prop: "disabled",
            type: "boolean",
            default: "false",
            description:
                "Prevents the collapse from being opened or closed.",
        },

        {
            prop: "showIcon",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the collapse arrow icon is displayed.",
        },

        {
            prop: "icon",
            type: "React.ReactNode",
            default: "-",
            description:
                "Custom icon displayed in the collapse header.",
        },

        {
            prop: "animate",
            type: "boolean",
            default: "true",
            description:
                "Enables smooth height and icon animations.",
        },

        {
            prop: "duration",
            type: "number",
            default: "300",
            description:
                "Animation duration in milliseconds.",
        },

        {
            prop: "children",
            type: "React.ReactNode",
            default: "-",
            description:
                "Content displayed when the collapse is open.",
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


            {/* ================================================= */}
            {/* Header */}
            {/* ================================================= */}

            <div className="space-y-4">

                <h1 className="text-4xl font-bold tracking-tight">
                    Collapse
                </h1>

                <p className="text-xl text-gray-600">
                    A reusable expandable component
                    for showing and hiding content.
                </p>

            </div>


            {/* ================================================= */}
            {/* Usage */}
            {/* ================================================= */}

            <section className="space-y-4">

                <h2 className="text-2xl font-semibold">
                    Usage
                </h2>


                <div className="flex flex-col gap-10">


                    {/* =============================================
              Basic
          ============================================= */}

                    <ComponentDemo
                        code={basicCode}
                    >

                        <Collapse
                            title="What is React?"
                        >

                            <p>
                                React is a JavaScript
                                library for building
                                user interfaces.
                            </p>

                        </Collapse>

                    </ComponentDemo>


                    {/* =============================================
              Default Open
          ============================================= */}

                    <ComponentDemo
                        code={defaultOpenCode}
                    >

                        <Collapse
                            title="Default Open"
                            defaultOpen
                        >

                            <p>
                                This collapse is open
                                when the component loads.
                            </p>

                        </Collapse>

                    </ComponentDemo>


                    {/* =============================================
              Variants
          ============================================= */}

                    <ComponentDemo
                        code={variantsCode}
                    >

                        <div className="space-y-4">

                            <Collapse
                                title="Default"
                                variant="default"
                            >
                                Default collapse content.
                            </Collapse>


                            <Collapse
                                title="Outline"
                                variant="outline"
                            >
                                Outline collapse content.
                            </Collapse>


                            <Collapse
                                title="Filled"
                                variant="filled"
                            >
                                Filled collapse content.
                            </Collapse>


                            <Collapse
                                title="Dark"
                                variant="dark"
                            >
                                Dark collapse content.
                            </Collapse>

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Sizes
          ============================================= */}

                    <ComponentDemo
                        code={sizesCode}
                    >

                        <div className="space-y-4">

                            <Collapse
                                title="Small Collapse"
                                size="sm"
                            >
                                Small content.
                            </Collapse>


                            <Collapse
                                title="Medium Collapse"
                                size="md"
                            >
                                Medium content.
                            </Collapse>


                            <Collapse
                                title="Large Collapse"
                                size="lg"
                            >
                                Large content.
                            </Collapse>

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Custom Header
          ============================================= */}

                    <ComponentDemo
                        code={customHeaderCode}
                    >

                        <Collapse
                            header={

                                <div
                                    className="
                    flex
                    items-center
                    gap-2
                  "
                                >

                                    <Settings
                                        className="h-5 w-5"
                                    />

                                    <span>
                                        Application Settings
                                    </span>

                                </div>

                            }
                        >

                            <p>
                                Configure application
                                settings from this section.
                            </p>

                        </Collapse>

                    </ComponentDemo>


                    {/* =============================================
              Custom Icon
          ============================================= */}

                    <ComponentDemo
                        code={customIconCode}
                    >

                        <Collapse
                            title="Information"
                            icon={
                                <Info className="h-5 w-5" />
                            }
                        >

                            <p>
                                Additional information
                                is available here.
                            </p>

                        </Collapse>

                    </ComponentDemo>


                    {/* =============================================
              Disabled
          ============================================= */}

                    <ComponentDemo
                        code={disabledCode}
                    >

                        <Collapse
                            title="Disabled Collapse"
                            disabled
                        >

                            <p>
                                This content cannot
                                be opened.
                            </p>

                        </Collapse>

                    </ComponentDemo>


                    {/* =============================================
              No Icon
          ============================================= */}

                    <ComponentDemo
                        code={noIconCode}
                    >

                        <Collapse
                            title="Simple Collapse"
                            showIcon={false}
                        >

                            <p>
                                This collapse does not
                                display an arrow icon.
                            </p>

                        </Collapse>

                    </ComponentDemo>


                    {/* =============================================
              Multiple
          ============================================= */}

                    <ComponentDemo
                        code={multipleCode}
                    >

                        <div className="space-y-4">

                            <Collapse
                                title="Personal Information"
                                icon={
                                    <User className="h-5 w-5" />
                                }
                            >

                                <p>
                                    Manage your personal
                                    information here.
                                </p>

                            </Collapse>


                            <Collapse
                                title="Notifications"
                                icon={
                                    <Bell className="h-5 w-5" />
                                }
                            >

                                <p>
                                    Manage your notification
                                    preferences here.
                                </p>

                            </Collapse>


                            <Collapse
                                title="Security"
                                icon={
                                    <Settings className="h-5 w-5" />
                                }
                            >

                                <p>
                                    Manage your security
                                    settings here.
                                </p>

                            </Collapse>

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Controlled
          ============================================= */}

                    <ComponentDemo
                        code={controlledCode}
                    >

                        <ControlledCollapse />

                    </ComponentDemo>


                </div>

            </section>


            {/* ================================================= */}
            {/* API Reference */}
            {/* ================================================= */}

            <section className="space-y-4">

                <h2 className="text-2xl font-semibold">
                    API Reference
                </h2>

                <PropsTable
                    data={propsData}
                />

            </section>

        </div>
    );
};


// =====================================================
// Controlled Demo
// =====================================================

const ControlledCollapse = () => {

    const [
        open,
        setOpen,
    ] = React.useState(false);


    return (

        <Collapse
            title={
                open
                    ? "Close Collapse"
                    : "Open Collapse"
            }

            open={open}

            onOpenChange={
                setOpen
            }
        >

            <p>
                This collapse is controlled
                by React state.
            </p>

        </Collapse>

    );
};


export default CollapsePage;