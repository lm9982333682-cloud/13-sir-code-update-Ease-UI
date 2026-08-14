"use client";

import {
    Dialog,
} from "@/components/Dialog/Dialog";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";

import {
    Button,
} from "@/components";

import {
    Settings,
    Trash2,
    User,
} from "lucide-react";


const DialogPage = () => {


    // =====================================================
    // Basic
    // =====================================================

    const basicCode = `import {
  Dialog,
} from "@/components/Dialog/Dialog";

<Dialog
  trigger={
    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
      Open Dialog
    </button>
  }

  title="Welcome"

  description="This is a basic dialog."
>
  <p>
    This is the dialog content.
  </p>
</Dialog>`;


    // =====================================================
    // Footer
    // =====================================================

    const footerCode = `<Dialog
  trigger={
    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
      Open Dialog
    </button>
  }

  title="Save Changes"

  description="Do you want to save your changes?"

  footer={
    <>
      <button className="rounded-md border px-4 py-2">
        Cancel
      </button>

      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Save
      </button>
    </>
  }
>
  <p>
    Your changes will be saved.
  </p>
</Dialog>`;


    // =====================================================
    // Sizes
    // =====================================================

    const sizesCode = `<div className="flex flex-wrap gap-3">

  <Dialog
    size="sm"
    trigger={
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Small
      </button>
    }
    title="Small Dialog"
  >
    Small dialog content.
  </Dialog>


  <Dialog
    size="md"
    trigger={
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Medium
      </button>
    }
    title="Medium Dialog"
  >
    Medium dialog content.
  </Dialog>


  <Dialog
    size="lg"
    trigger={
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Large
      </button>
    }
    title="Large Dialog"
  >
    Large dialog content.
  </Dialog>


  <Dialog
    size="xl"
    trigger={
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Extra Large
      </button>
    }
    title="Extra Large Dialog"
  >
    Extra large dialog content.
  </Dialog>

</div>`;


    // =====================================================
    // Variants
    // =====================================================

    const variantsCode = `<div className="flex flex-wrap gap-3">

  <Dialog
    variant="default"
    trigger={
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
        Default
      </button>
    }
    title="Default Dialog"
  >
    Default variant.
  </Dialog>


  <Dialog
    variant="outline"
    trigger={
      <button className="rounded-md border px-4 py-2">
        Outline
      </button>
    }
    title="Outline Dialog"
  >
    Outline variant.
  </Dialog>


  <Dialog
    variant="glass"
    trigger={
      <button className="rounded-md bg-purple-600 px-4 py-2 text-white">
        Glass
      </button>
    }
    title="Glass Dialog"
  >
    Glass variant.
  </Dialog>

</div>`;


    // =====================================================
    // Form
    // =====================================================

    const formCode = `<Dialog
  trigger={
    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
      Edit Profile
    </button>
  }

  title="Edit Profile"

  description="Update your profile information."

  footer={
    <>
      <button
        type="button"
        className="rounded-md border px-4 py-2"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        Save Changes
      </button>
    </>
  }
>

  <form className="space-y-4">

    <div>
      <label className="mb-1 block text-sm font-medium">
        Name
      </label>

      <input
        className="w-full rounded-md border px-3 py-2"
        placeholder="Enter your name"
      />
    </div>


    <div>
      <label className="mb-1 block text-sm font-medium">
        Email
      </label>

      <input
        type="email"
        className="w-full rounded-md border px-3 py-2"
        placeholder="Enter your email"
      />
    </div>

  </form>

</Dialog>`;


    // =====================================================
    // Delete Confirmation
    // =====================================================

    const deleteCode = `<Dialog
  trigger={
    <button className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-white">
      <Trash2 className="h-4 w-4" />
      Delete
    </button>
  }

  title="Delete Account"

  description="This action cannot be undone."

  footer={
    <>
      <button className="rounded-md border px-4 py-2">
        Cancel
      </button>

      <button className="rounded-md bg-red-600 px-4 py-2 text-white">
        Delete
      </button>
    </>
  }
>

  <p>
    Are you sure you want to permanently
    delete this account?
  </p>

</Dialog>`;


    // =====================================================
    // Custom Trigger
    // =====================================================

    const customTriggerCode = `<Dialog
  trigger={
    <Button
      variant="primary"
      animation="scaleIn"
    >
      Open Settings
    </Button>
  }

  title="Settings"
>
  <div className="flex items-center gap-3">

    <Settings className="h-6 w-6" />

    <p>
      Manage your application settings.
    </p>

  </div>
</Dialog>`;


    // =====================================================
    // No Close Button
    // =====================================================

    const noCloseCode = `<Dialog
  trigger={
    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
      Open Dialog
    </button>
  }

  title="Important Message"

  showCloseButton={false}

  closeOnOverlayClick={false}
>
  <p>
    You must use the buttons below
    to close this dialog.
  </p>
</Dialog>`;


    // =====================================================
    // Props
    // =====================================================

    const propsData = [

        {
            prop: "trigger",
            type: "React.ReactNode",
            default: "-",
            description:
                "Element used to open the dialog.",
        },

        {
            prop: "title",
            type: "React.ReactNode",
            default: "-",
            description:
                "Title displayed in the dialog header.",
        },

        {
            prop: "description",
            type: "React.ReactNode",
            default: "-",
            description:
                "Description displayed below the title.",
        },

        {
            prop: "children",
            type: "React.ReactNode",
            default: "-",
            description:
                "Main content displayed inside the dialog.",
        },

        {
            prop: "footer",
            type: "React.ReactNode",
            default: "-",
            description:
                "Optional footer content such as Cancel and Save buttons.",
        },

        {
            prop: "defaultOpen",
            type: "boolean",
            default: "false",
            description:
                "Controls whether the dialog starts open.",
        },

        {
            prop: "open",
            type: "boolean",
            default: "-",
            description:
                "Controlled dialog state.",
        },

        {
            prop: "onOpenChange",
            type: "(open: boolean) => void",
            default: "-",
            description:
                "Callback fired when the dialog opens or closes.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg" | "xl" | "full"',
            default: '"md"',
            description:
                "Controls the maximum width of the dialog.",
        },

        {
            prop: "variant",
            type:
                '"default" | "outline" | "dark" | "glass"',
            default: '"default"',
            description:
                "Controls the visual style of the dialog.",
        },

        {
            prop: "showCloseButton",
            type: "boolean",
            default: "true",
            description:
                "Controls whether the close button is displayed.",
        },

        {
            prop: "closeOnOverlayClick",
            type: "boolean",
            default: "true",
            description:
                "Closes the dialog when the user clicks outside it.",
        },

        {
            prop: "closeOnEscape",
            type: "boolean",
            default: "true",
            description:
                "Closes the dialog when Escape is pressed.",
        },

        {
            prop: "disabled",
            type: "boolean",
            default: "false",
            description:
                "Prevents the dialog from opening.",
        },

        {
            prop: "className",
            type: "string",
            default: "-",
            description:
                "Additional custom classes.",
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
                    Dialog
                </h1>

                <p className="text-xl text-gray-600">
                    A reusable modal dialog component
                    for displaying important content,
                    forms and confirmations.
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

                        <Dialog

                            trigger={
                                <button
                                    className="
                    rounded-md
                    bg-blue-600
                    px-4
                    py-2
                    text-white
                    hover:bg-blue-700
                  "
                                >
                                    Open Dialog
                                </button>
                            }

                            title="Welcome"

                            description="
                This is a basic dialog.
              "
                        >

                            <p className="text-gray-600">
                                This is the dialog content.
                                You can put any React content
                                inside it.
                            </p>

                        </Dialog>

                    </ComponentDemo>


                    {/* =============================================
              Footer
          ============================================= */}

                    <ComponentDemo
                        code={footerCode}
                    >

                        <Dialog

                            trigger={
                                <button
                                    className="
                    rounded-md
                    bg-blue-600
                    px-4
                    py-2
                    text-white
                  "
                                >
                                    Save Changes
                                </button>
                            }

                            title="Save Changes"

                            description="
                Do you want to save your changes?
              "

                            footer={

                                <>

                                    <button
                                        type="button"
                                        className="
                      rounded-md
                      border
                      px-4
                      py-2
                    "
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="button"
                                        className="
                      rounded-md
                      bg-blue-600
                      px-4
                      py-2
                      text-white
                    "
                                    >
                                        Save
                                    </button>

                                </>

                            }
                        >

                            <p>
                                Your changes will be saved.
                            </p>

                        </Dialog>

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
                gap-3
              "
                        >

                            <Dialog
                                size="sm"
                                trigger={
                                    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
                                        Small
                                    </button>
                                }
                                title="Small Dialog"
                            >
                                Small dialog content.
                            </Dialog>


                            <Dialog
                                size="md"
                                trigger={
                                    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
                                        Medium
                                    </button>
                                }
                                title="Medium Dialog"
                            >
                                Medium dialog content.
                            </Dialog>


                            <Dialog
                                size="lg"
                                trigger={
                                    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
                                        Large
                                    </button>
                                }
                                title="Large Dialog"
                            >
                                Large dialog content.
                            </Dialog>


                            <Dialog
                                size="xl"
                                trigger={
                                    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
                                        Extra Large
                                    </button>
                                }
                                title="Extra Large Dialog"
                            >
                                Extra large dialog content.
                            </Dialog>

                        </div>

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
                gap-3
              "
                        >

                            <Dialog
                                variant="default"
                                trigger={
                                    <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
                                        Default
                                    </button>
                                }
                                title="Default Dialog"
                            >
                                Default variant.
                            </Dialog>


                            <Dialog
                                variant="outline"
                                trigger={
                                    <button className="rounded-md border px-4 py-2">
                                        Outline
                                    </button>
                                }
                                title="Outline Dialog"
                            >
                                Outline variant.
                            </Dialog>


                            <Dialog
                                variant="glass"
                                trigger={
                                    <button className="rounded-md bg-purple-600 px-4 py-2 text-white">
                                        Glass
                                    </button>
                                }
                                title="Glass Dialog"
                            >
                                Glass variant.
                            </Dialog>

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              Form
          ============================================= */}

                    <ComponentDemo
                        code={formCode}
                    >

                        <Dialog

                            trigger={
                                <button
                                    className="
                    rounded-md
                    bg-blue-600
                    px-4
                    py-2
                    text-white
                  "
                                >
                                    Edit Profile
                                </button>
                            }

                            title="Edit Profile"

                            description="
                Update your profile information.
              "

                            footer={

                                <>

                                    <button
                                        type="button"
                                        className="
                      rounded-md
                      border
                      px-4
                      py-2
                    "
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="button"
                                        className="
                      rounded-md
                      bg-blue-600
                      px-4
                      py-2
                      text-white
                    "
                                    >
                                        Save Changes
                                    </button>

                                </>

                            }
                        >

                            <form
                                className="space-y-4"
                            >

                                <div>

                                    <label
                                        className="
                      mb-1
                      block
                      text-sm
                      font-medium
                    "
                                    >
                                        Name
                                    </label>


                                    <input
                                        className="
                      w-full
                      rounded-md
                      border
                      px-3
                      py-2
                      outline-none
                      focus:border-blue-500
                    "
                                        placeholder="Enter your name"
                                    />

                                </div>


                                <div>

                                    <label
                                        className="
                      mb-1
                      block
                      text-sm
                      font-medium
                    "
                                    >
                                        Email
                                    </label>


                                    <input
                                        type="email"
                                        className="
                      w-full
                      rounded-md
                      border
                      px-3
                      py-2
                      outline-none
                      focus:border-blue-500
                    "
                                        placeholder="Enter your email"
                                    />

                                </div>

                            </form>

                        </Dialog>

                    </ComponentDemo>


                    {/* =============================================
              Delete
          ============================================= */}

                    <ComponentDemo
                        code={deleteCode}
                    >

                        <Dialog

                            trigger={
                                <button
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    bg-red-600
                    px-4
                    py-2
                    text-white
                  "
                                >

                                    <Trash2
                                        className="h-4 w-4"
                                    />

                                    Delete

                                </button>
                            }

                            title="Delete Account"

                            description="
                This action cannot be undone.
              "

                            footer={

                                <>

                                    <button
                                        className="
                      rounded-md
                      border
                      px-4
                      py-2
                    "
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        className="
                      rounded-md
                      bg-red-600
                      px-4
                      py-2
                      text-white
                    "
                                    >
                                        Delete
                                    </button>

                                </>

                            }
                        >

                            <p>
                                Are you sure you want to
                                permanently delete this
                                account?
                            </p>

                        </Dialog>

                    </ComponentDemo>


                    {/* =============================================
              Custom Trigger
          ============================================= */}

                    <ComponentDemo
                        code={customTriggerCode}
                    >

                        <Dialog

                            trigger={
                                <Button
                                    variant="primary"
                                    animation="scaleIn"
                                >
                                    Open Settings
                                </Button>
                            }

                            title="Settings"
                        >

                            <div
                                className="
                  flex
                  items-center
                  gap-3
                "
                            >

                                <Settings
                                    className="h-6 w-6"
                                />

                                <p>
                                    Manage your application
                                    settings.
                                </p>

                            </div>

                        </Dialog>

                    </ComponentDemo>


                    {/* =============================================
              No Close
          ============================================= */}

                    <ComponentDemo
                        code={noCloseCode}
                    >

                        <Dialog

                            trigger={
                                <button
                                    className="
                    rounded-md
                    bg-blue-600
                    px-4
                    py-2
                    text-white
                  "
                                >
                                    Open Dialog
                                </button>
                            }

                            title="Important Message"

                            showCloseButton={false}

                            closeOnOverlayClick={false}
                        >

                            <p>
                                You must use the buttons
                                below to close this dialog.
                            </p>

                        </Dialog>

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


export default DialogPage;