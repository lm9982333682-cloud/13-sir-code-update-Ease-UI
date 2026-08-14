"use client";

import { Table } from "@/components/Table/Table";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";

import { Check, X } from "lucide-react";


// =====================================================
// Data Type
// =====================================================

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}


// =====================================================
// Demo Data
// =====================================================

const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
    },
    {
        id: 2,
        name: "Sarah Smith",
        email: "sarah@example.com",
        role: "Editor",
        status: "Active",
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "User",
        status: "Inactive",
    },
    {
        id: 4,
        name: "Emma Wilson",
        email: "emma@example.com",
        role: "User",
        status: "Active",
    },
];


// =====================================================
// Columns
// =====================================================

const columns = [
    {
        key: "id",
        header: "ID",
    },

    {
        key: "name",
        header: "Name",
        render: (
            value: unknown
        ) => (
            <span className="font-medium">
                {String(value)}
            </span>
        ),
    },

    {
        key: "email",
        header: "Email",
    },

    {
        key: "role",
        header: "Role",
        render: (
            value: unknown
        ) => (
            <span
                className="
          rounded-full
          bg-blue-100
          px-2.5
          py-1
          text-xs
          font-medium
          text-blue-700
        "
            >
                {String(value)}
            </span>
        ),
    },

    {
        key: "status",
        header: "Status",

        render: (
            value: unknown
        ) => {

            const active =
                value === "Active";

            return (
                <span
                    className={`
            inline-flex
            items-center
            gap-1
            rounded-full
            px-2.5
            py-1
            text-xs
            font-medium
            ${active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
          `}
                >

                    {active ? (
                        <Check className="h-3 w-3" />
                    ) : (
                        <X className="h-3 w-3" />
                    )}

                    {String(value)}

                </span>
            );
        },
    },
];


// =====================================================
// Table Page
// =====================================================

const TablePage = () => {


    // ===================================================
    // Basic Usage Code
    // ===================================================

    const basicCode = `import { Table } from "@/components/Table/Table";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Editor",
    status: "Active",
  },
];

const columns = [
  {
    key: "id",
    header: "ID",
  },
  {
    key: "name",
    header: "Name",
  },
  {
    key: "email",
    header: "Email",
  },
  {
    key: "role",
    header: "Role",
  },
  {
    key: "status",
    header: "Status",
  },
];

<Table
  data={users}
  columns={columns}
/>`;


    // ===================================================
    // Striped Code
    // ===================================================

    const stripedCode = `<Table
  data={users}
  columns={columns}
  variant="striped"
/>`;


    // ===================================================
    // Bordered Code
    // ===================================================

    const borderedCode = `<Table
  data={users}
  columns={columns}
  variant="bordered"
/>`;


    // ===================================================
    // Compact Code
    // ===================================================

    const compactCode = `<Table
  data={users}
  columns={columns}
  size="sm"
/>`;


    // ===================================================
    // Large Code
    // ===================================================

    const largeCode = `<Table
  data={users}
  columns={columns}
  size="lg"
/>`;


    // ===================================================
    // Row Click Code
    // ===================================================

    const rowClickCode = `<Table
  data={users}
  columns={columns}
  onRowClick={(row) => {
    console.log(row);
  }}
/>`;


    // ===================================================
    // Custom Render Code
    // ===================================================

    const customRenderCode = `const columns = [
  {
    key: "name",
    header: "Name",
    render: (value) => (
      <span className="font-semibold">
        {String(value)}
      </span>
    ),
  },
];

<Table
  data={users}
  columns={columns}
/>`;


    // ===================================================
    // Empty Code
    // ===================================================

    const emptyCode = `<Table
  data={[]}
  columns={columns}
  emptyMessage="No users available"
/>`;


    // ===================================================
    // Loading Code
    // ===================================================

    const loadingCode = `<Table
  data={[]}
  columns={columns}
  loading
  loadingMessage="Loading users..."
/>`;


    // ===================================================
    // Props
    // ===================================================

    const propsData = [

        {
            prop: "data",
            type: "T[]",
            default: "[]",
            description:
                "Array of objects displayed inside the table.",
        },

        {
            prop: "columns",
            type: "TableColumn<T>[]",
            default: "[]",
            description:
                "Defines table columns, headers and custom cell rendering.",
        },

        {
            prop: "variant",
            type:
                '"default" | "bordered" | "striped" | "minimal"',
            default: '"default"',
            description:
                "Controls the visual style of the table.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls table cell padding and overall density.",
        },

        {
            prop: "hover",
            type: "boolean",
            default: "true",
            description:
                "Enables hover effect on table rows.",
        },

        {
            prop: "loading",
            type: "boolean",
            default: "false",
            description:
                "Displays loading content instead of table rows.",
        },

        {
            prop: "loadingMessage",
            type: "React.ReactNode",
            default: '"Loading..."',
            description:
                "Content displayed while table is loading.",
        },

        {
            prop: "emptyMessage",
            type: "React.ReactNode",
            default: '"No data found."',
            description:
                "Content displayed when the data array is empty.",
        },

        {
            prop: "onRowClick",
            type:
                "(row: T, index: number) => void",
            default: "-",
            description:
                "Callback executed when a table row is clicked.",
        },

        {
            prop: "responsive",
            type: "boolean",
            default: "true",
            description:
                "Makes the table horizontally scrollable on small screens.",
        },

        {
            prop: "caption",
            type: "React.ReactNode",
            default: "-",
            description:
                "Optional table caption.",
        },

        {
            prop: "rowKey",
            type:
                "(row: T, index: number) => string | number",
            default: "index",
            description:
                "Returns a unique key for each table row.",
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

            <header className="space-y-4">

                <h1
                    className="
            text-4xl
            font-bold
            tracking-tight
          "
                >
                    Table
                </h1>

                <p
                    className="
            text-xl
            text-gray-600
          "
                >
                    A reusable and type-safe data table
                    component for displaying structured
                    information.
                </p>

            </header>


            {/* ================================================= */}
            {/* Usage */}
            {/* ================================================= */}

            <section className="space-y-6">

                <h2
                    className="
            text-2xl
            font-semibold
          "
                >
                    Usage
                </h2>


                <div className="flex flex-col gap-12">


                    {/* =============================================
              Basic
          ============================================= */}

                    <ComponentDemo
                        code={basicCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Striped
          ============================================= */}

                    <ComponentDemo
                        code={stripedCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                            variant="striped"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Bordered
          ============================================= */}

                    <ComponentDemo
                        code={borderedCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                            variant="bordered"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Small
          ============================================= */}

                    <ComponentDemo
                        code={compactCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                            size="sm"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Large
          ============================================= */}

                    <ComponentDemo
                        code={largeCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                            size="lg"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Row Click
          ============================================= */}

                    <ComponentDemo
                        code={rowClickCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                            onRowClick={(row) => {
                                console.log(
                                    "Selected row:",
                                    row
                                );
                            }}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Custom Render
          ============================================= */}

                    <ComponentDemo
                        code={customRenderCode}
                    >

                        <Table
                            data={users}
                            columns={columns}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Empty
          ============================================= */}

                    <ComponentDemo
                        code={emptyCode}
                    >

                        <Table
                            data={[]}
                            columns={columns}
                            emptyMessage="No users available"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Loading
          ============================================= */}

                    <ComponentDemo
                        code={loadingCode}
                    >

                        <Table
                            data={[]}
                            columns={columns}
                            loading
                            loadingMessage="Loading users..."
                        />

                    </ComponentDemo>


                </div>

            </section>


            {/* ================================================= */}
            {/* API Reference */}
            {/* ================================================= */}

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


export default TablePage;