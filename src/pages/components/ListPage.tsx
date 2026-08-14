"use client";

import { List } from "@/components/List/List";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";

import {
    
    ChevronRight,
   
    User,
} from "lucide-react";


// =====================================================
// Types
// =====================================================

interface UserItem {
    id: number;
    name: string;
    email: string;
    role: string;
}


// =====================================================
// Data
// =====================================================

const users: UserItem[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
    },
    {
        id: 2,
        name: "Sarah Smith",
        email: "sarah@example.com",
        role: "Editor",
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "User",
    },
    {
        id: 4,
        name: "Emma Wilson",
        email: "emma@example.com",
        role: "User",
    },
];


// =====================================================
// List Items
// =====================================================

const listItems = users.map(
    (user) => ({
        id: user.id,
        data: user,
    })
);


// =====================================================
// List Page
// =====================================================

const ListPage = () => {


    // ===================================================
    // Basic Usage
    // ===================================================

    const basicCode = `import {
  List,
} from "@/components/List/List";

const items = [
  {
    id: 1,
    data: "Apple",
  },
  {
    id: 2,
    data: "Banana",
  },
  {
    id: 3,
    data: "Orange",
  },
];

<List
  items={items}
  renderItem={(item) => (
    <span>{item}</span>
  )}
/>`;


    // ===================================================
    // User List
    // ===================================================

    const userListCode = `<List
  items={listItems}
  variant="divided"
  renderItem={(user) => (
    <div>
      <p className="font-medium">
        {user.name}
      </p>

      <p className="text-sm text-gray-500">
        {user.email}
      </p>
    </div>
  )}
/>`;


    // ===================================================
    // Ordered List
    // ===================================================

    const orderedCode = `<List
  items={[
    { id: 1, data: "Install dependencies" },
    { id: 2, data: "Create component" },
    { id: 3, data: "Import component" },
    { id: 4, data: "Use component" },
  ]}
  ordered
  renderItem={(item) => (
    <span>{item}</span>
  )}
/>`;


    // ===================================================
    // Striped
    // ===================================================

    const stripedCode = `<List
  items={listItems}
  variant="striped"
  renderItem={(user) => (
    <div>
      <p className="font-medium">
        {user.name}
      </p>
    </div>
  )}
/>`;


    // ===================================================
    // Compact
    // ===================================================

    const compactCode = `<List
  items={listItems}
  size="sm"
  renderItem={(user) => (
    <span>{user.name}</span>
  )}
/>`;


    // ===================================================
    // Large
    // ===================================================

    const largeCode = `<List
  items={listItems}
  size="lg"
  renderItem={(user) => (
    <span>{user.name}</span>
  )}
/>`;


    // ===================================================
    // Clickable
    // ===================================================

    const clickableCode = `<List
  items={listItems}
  onItemClick={(user) => {
    console.log(user);
  }}
  renderItem={(user) => (
    <div className="flex w-full justify-between">
      <span>{user.name}</span>
      <ChevronRight />
    </div>
  )}
/>`;


    // ===================================================
    // Avatar List
    // ===================================================

    const avatarCode = `<List
  items={listItems}
  variant="divided"
  renderItem={(user) => (
    <>
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-blue-100
        "
      >
        <User className="h-5 w-5" />
      </div>

      <div>
        <p className="font-medium">
          {user.name}
        </p>

        <p className="text-sm text-gray-500">
          {user.email}
        </p>
      </div>
    </>
  )}
/>`;


    // ===================================================
    // Empty
    // ===================================================

    const emptyCode = `<List
  items={[]}
  emptyMessage="No users available"
  renderItem={(item) => (
    <span>{item}</span>
  )}
/>`;


    // ===================================================
    // Loading
    // ===================================================

    const loadingCode = `<List
  items={[]}
  loading
  loadingMessage="Loading users..."
  renderItem={(item) => (
    <span>{item}</span>
  )}
/>`;


    // ===================================================
    // Disabled Item
    // ===================================================

    const disabledCode = `<List
  items={[
    {
      id: 1,
      data: "Available Item",
    },
    {
      id: 2,
      data: "Disabled Item",
      disabled: true,
    },
  ]}
  renderItem={(item) => (
    <span>{item}</span>
  )}
/>`;


    // ===================================================
    // Props
    // ===================================================

    const propsData = [

        {
            prop: "items",
            type: "ListItem<T>[]",
            default: "[]",
            description:
                "Array of items displayed in the list.",
        },

        {
            prop: "renderItem",
            type:
                "(item: T, index: number) => React.ReactNode",
            default: "-",
            description:
                "Controls how each list item is rendered.",
        },

        {
            prop: "variant",
            type:
                '"default" | "bordered" | "divided" | "striped" | "minimal"',
            default: '"default"',
            description:
                "Controls the visual style of the list.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls item padding and list density.",
        },

        {
            prop: "hover",
            type: "boolean",
            default: "true",
            description:
                "Enables hover effect on list items.",
        },

        {
            prop: "ordered",
            type: "boolean",
            default: "false",
            description:
                "Renders the list as an ordered list when true.",
        },

        {
            prop: "onItemClick",
            type:
                "(item: T, index: number) => void",
            default: "-",
            description:
                "Callback executed when an item is clicked.",
        },

        {
            prop: "loading",
            type: "boolean",
            default: "false",
            description:
                "Displays loading state instead of items.",
        },

        {
            prop: "loadingMessage",
            type: "React.ReactNode",
            default: '"Loading..."',
            description:
                "Content displayed during loading.",
        },

        {
            prop: "emptyMessage",
            type: "React.ReactNode",
            default: '"No items found."',
            description:
                "Content displayed when there are no items.",
        },

        {
            prop: "itemClassName",
            type: "string",
            default: "-",
            description:
                "Additional classes applied to every item.",
        },

        {
            prop: "itemKey",
            type:
                "(item: T, index: number) => string | number",
            default: "index",
            description:
                "Returns a unique key for each list item.",
        },

        {
            prop: "className",
            type: "string",
            default: "-",
            description:
                "Additional classes for the list.",
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
                    List
                </h1>


                <p
                    className="
            text-xl
            text-gray-600
          "
                >
                    A reusable and type-safe list
                    component for displaying collections
                    of content.
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

                        <List
                            items={[
                                {
                                    id: 1,
                                    data: "Apple",
                                },
                                {
                                    id: 2,
                                    data: "Banana",
                                },
                                {
                                    id: 3,
                                    data: "Orange",
                                },
                            ]}
                            renderItem={(item) => (
                                <span>
                                    {item}
                                </span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              User List
          ============================================= */}

                    <ComponentDemo
                        code={userListCode}
                    >

                        <List
                            items={listItems}
                            variant="divided"
                            renderItem={(user) => (

                                <div>

                                    <p
                                        className="
                      font-medium
                    "
                                    >
                                        {user.name}
                                    </p>

                                    <p
                                        className="
                      text-sm
                      text-gray-500
                    "
                                    >
                                        {user.email}
                                    </p>

                                </div>

                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Ordered
          ============================================= */}

                    <ComponentDemo
                        code={orderedCode}
                    >

                        <List
                            items={[
                                {
                                    id: 1,
                                    data: "Install dependencies",
                                },
                                {
                                    id: 2,
                                    data: "Create component",
                                },
                                {
                                    id: 3,
                                    data: "Import component",
                                },
                                {
                                    id: 4,
                                    data: "Use component",
                                },
                            ]}
                            ordered
                            renderItem={(item) => (
                                <span>
                                    {item}
                                </span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Striped
          ============================================= */}

                    <ComponentDemo
                        code={stripedCode}
                    >

                        <List
                            items={listItems}
                            variant="striped"
                            renderItem={(user) => (
                                <span>
                                    {user.name}
                                </span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Small
          ============================================= */}

                    <ComponentDemo
                        code={compactCode}
                    >

                        <List
                            items={listItems}
                            size="sm"
                            renderItem={(user) => (
                                <span>
                                    {user.name}
                                </span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Large
          ============================================= */}

                    <ComponentDemo
                        code={largeCode}
                    >

                        <List
                            items={listItems}
                            size="lg"
                            renderItem={(user) => (
                                <span>
                                    {user.name}
                                </span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Clickable
          ============================================= */}

                    <ComponentDemo
                        code={clickableCode}
                    >

                        <List
                            items={listItems}
                            onItemClick={(user) => {
                                console.log(
                                    "Selected:",
                                    user
                                );
                            }}
                            renderItem={(user) => (

                                <div
                                    className="
                    flex
                    w-full
                    items-center
                    justify-between
                  "
                                >

                                    <span>
                                        {user.name}
                                    </span>

                                    <ChevronRight
                                        className="
                      h-5
                      w-5
                      text-gray-400
                    "
                                    />

                                </div>

                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Avatar
          ============================================= */}

                    <ComponentDemo
                        code={avatarCode}
                    >

                        <List
                            items={listItems}
                            variant="divided"
                            renderItem={(user) => (

                                <>

                                    <div
                                        className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                      text-blue-600
                    "
                                    >
                                        <User
                                            className="
                        h-5
                        w-5
                      "
                                        />
                                    </div>


                                    <div>

                                        <p
                                            className="
                        font-medium
                      "
                                        >
                                            {user.name}
                                        </p>

                                        <p
                                            className="
                        text-sm
                        text-gray-500
                      "
                                        >
                                            {user.email}
                                        </p>

                                    </div>

                                </>

                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Empty
          ============================================= */}

                    <ComponentDemo
                        code={emptyCode}
                    >

                        <List<string>
                            items={[
                                {
                                    id: 1,
                                    data: "Apple",
                                },
                                {
                                    id: 2,
                                    data: "Banana",
                                },
                                {
                                    id: 3,
                                    data: "Orange",
                                },
                            ]}
                            renderItem={(item) => (
                                <span>{item}</span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Loading
          ============================================= */}

                    <ComponentDemo
                        code={loadingCode}
                    >

                        <List<string>
                            items={[
                                {
                                    id: 1,
                                    data: "Apple",
                                },
                                {
                                    id: 2,
                                    data: "Banana",
                                },
                                {
                                    id: 3,
                                    data: "Orange",
                                },
                            ]}
                            renderItem={(item) => (
                                <span>{item}</span>
                            )}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Disabled
          ============================================= */}

                    <ComponentDemo
                        code={disabledCode}
                    >

                        <List
                            items={[
                                {
                                    id: 1,
                                    data: "Available Item",
                                },
                                {
                                    id: 2,
                                    data: "Disabled Item",
                                    disabled: true,
                                },
                            ]}
                            onItemClick={(item) => {
                                console.log(item);
                            }}
                            renderItem={(item) => (
                                <span>
                                    {item}
                                </span>
                            )}
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


export default ListPage;