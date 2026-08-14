import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {

  // =====================================
  // Basic Layout
  // =====================================

  const basicLayout = `import { Layout } from "@/components/Layout/Layout";

<Layout>
  <div>
    <h1 className="text-2xl font-bold">
      Main Content
    </h1>

    <p className="mt-2 text-gray-600">
      This is the main content area.
    </p>
  </div>
</Layout>`;


  // =====================================
  // Layout With Header
  // =====================================

  const headerLayout = `import { Layout } from "@/components/Layout/Layout";

<Layout
  header={
    <div className="px-6 py-4">
      <h1 className="text-xl font-bold">
        My Website
      </h1>
    </div>
  }
>
  <div>
    <h2 className="text-2xl font-bold">
      Dashboard
    </h2>

    <p className="mt-2 text-gray-600">
      Welcome to the dashboard.
    </p>
  </div>
</Layout>`;


  // =====================================
  // Layout With Sidebar
  // =====================================

  const sidebarLayout = `import { Layout } from "@/components/Layout/Layout";

<Layout
  sidebar={
    <nav className="space-y-2">
      <a className="block p-2 rounded hover:bg-gray-100">
        Dashboard
      </a>

      <a className="block p-2 rounded hover:bg-gray-100">
        Profile
      </a>

      <a className="block p-2 rounded hover:bg-gray-100">
        Settings
      </a>
    </nav>
  }
>
  <div>
    <h2 className="text-2xl font-bold">
      Dashboard
    </h2>

    <p className="mt-2 text-gray-600">
      Main content area.
    </p>
  </div>
</Layout>`;


  // =====================================
  // Full Layout
  // =====================================

  const fullLayout = `import { Layout } from "@/components/Layout/Layout";

<Layout
  header={
    <div className="px-6 py-4">
      <h1 className="text-xl font-bold">
        EaseUI
      </h1>
    </div>
  }
  sidebar={
    <nav className="space-y-2">
      <a className="block p-2 rounded hover:bg-gray-100">
        Dashboard
      </a>

      <a className="block p-2 rounded hover:bg-gray-100">
        Projects
      </a>

      <a className="block p-2 rounded hover:bg-gray-100">
        Settings
      </a>
    </nav>
  }
  footer={
    <p className="text-center text-sm text-gray-500">
      © 2026 EaseUI
    </p>
  }
>
  <div>
    <h2 className="text-2xl font-bold">
      Dashboard
    </h2>

    <p className="mt-2 text-gray-600">
      This is the main content area.
    </p>
  </div>
</Layout>`;


  // =====================================
  // Dark Layout
  // =====================================

  const darkLayout = `import { Layout } from "@/components/Layout/Layout";

<Layout
  variant="dark"
  header={
    <div className="px-6 py-4 border-slate-700">
      <h1 className="text-xl font-bold">
        EaseUI
      </h1>
    </div>
  }
  sidebar={
    <nav className="space-y-2">
      <a className="block p-2 rounded hover:bg-slate-800">
        Dashboard
      </a>

      <a className="block p-2 rounded hover:bg-slate-800">
        Projects
      </a>
    </nav>
  }
>
  <div>
    <h2 className="text-2xl font-bold">
      Dark Dashboard
    </h2>

    <p className="mt-2 text-slate-400">
      Dark layout example.
    </p>
  </div>
</Layout>`;


  // =====================================
  // API Reference
  // =====================================

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description:
        "The main content displayed inside the layout.",
    },
    {
      prop: "header",
      type: "React.ReactNode",
      default: "-",
      description:
        "Optional header content displayed at the top of the layout.",
    },
    {
      prop: "sidebar",
      type: "React.ReactNode",
      default: "-",
      description:
        "Optional sidebar content displayed on the left side of the layout.",
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description:
        "Optional footer content displayed at the bottom of the layout.",
    },
    {
      prop: "variant",
      type: '"default" | "light" | "dark"',
      default: '"default"',
      description:
        "Controls the overall visual style of the layout.",
    },
    {
      prop: "direction",
      type: '"row" | "column"',
      default: '"column"',
      description:
        "Controls the flex direction of the layout.",
    },
    {
      prop: "spacing",
      type: '"none" | "sm" | "md" | "lg"',
      default: '"none"',
      description:
        "Controls the spacing between layout elements.",
    },
    {
      prop: "sidebarWidth",
      type: "string",
      default: '"w-64"',
      description:
        "Controls the width of the sidebar using Tailwind CSS classes.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description:
        "Additional custom CSS classes for the layout.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">

      {/* =====================================
          Header
      ===================================== */}

      <div className="space-y-4">

        <h1 className="text-4xl font-bold tracking-tight">
          Layout
        </h1>

        <p className="text-xl text-gray-600">
          A flexible layout component for building pages with
          headers, sidebars, main content, and footers.
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


          {/* Basic Layout */}

          <ComponentDemo code={basicLayout}>

            <div className="border rounded-lg overflow-hidden">

              <Layout>

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    Main Content
                  </h2>

                  <p className="mt-2 text-gray-600">
                    This is the main content area.
                  </p>

                </div>

              </Layout>

            </div>

          </ComponentDemo>


          {/* Header Layout */}

          <ComponentDemo code={headerLayout}>

            <div className="border rounded-lg overflow-hidden">

              <Layout
                header={
                  <div className="px-6 py-4">
                    <h1 className="text-xl font-bold">
                      My Website
                    </h1>
                  </div>
                }
              >

                <div>

                  <h2 className="text-2xl font-bold">
                    Dashboard
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Welcome to the dashboard.
                  </p>

                </div>

              </Layout>

            </div>

          </ComponentDemo>


          {/* Sidebar Layout */}

          <ComponentDemo code={sidebarLayout}>

            <div className="border rounded-lg overflow-hidden">

              <Layout
                sidebar={
                  <nav className="space-y-2">

                    <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Dashboard
                    </a>

                    <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Profile
                    </a>

                    <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Settings
                    </a>

                  </nav>
                }
              >

                <div>

                  <h2 className="text-2xl font-bold">
                    Dashboard
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Main content area.
                  </p>

                </div>

              </Layout>

            </div>

          </ComponentDemo>


          {/* Full Layout */}

          <ComponentDemo code={fullLayout}>

            <div className="border rounded-lg overflow-hidden">

              <Layout
                header={
                  <div className="px-6 py-4">

                    <h1 className="text-xl font-bold">
                      EaseUI
                    </h1>

                  </div>
                }

                sidebar={
                  <nav className="space-y-2">

                    <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Dashboard
                    </a>

                    <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Projects
                    </a>

                    <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
                      Settings
                    </a>

                  </nav>
                }

                footer={
                  <p className="text-center text-sm text-gray-500">
                    © 2026 EaseUI
                  </p>
                }
              >

                <div>

                  <h2 className="text-2xl font-bold">
                    Dashboard
                  </h2>

                  <p className="mt-2 text-gray-600">
                    This is the main content area.
                  </p>

                </div>

              </Layout>

            </div>

          </ComponentDemo>


          {/* Dark Layout */}

          <ComponentDemo code={darkLayout}>

            <div className="border rounded-lg overflow-hidden">

              <Layout
                variant="dark"

                header={
                  <div className="px-6 py-4 border-slate-700">

                    <h1 className="text-xl font-bold">
                      EaseUI
                    </h1>

                  </div>
                }

                sidebar={
                  <nav className="space-y-2">

                    <a className="block p-2 rounded hover:bg-slate-800 cursor-pointer">
                      Dashboard
                    </a>

                    <a className="block p-2 rounded hover:bg-slate-800 cursor-pointer">
                      Projects
                    </a>

                  </nav>
                }
              >

                <div>

                  <h2 className="text-2xl font-bold">
                    Dark Dashboard
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Dark layout example.
                  </p>

                </div>

              </Layout>

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

export default LayoutPage;