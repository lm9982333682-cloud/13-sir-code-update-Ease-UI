"use client";

import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/Tabs/Tabs";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";

import {
    User,
    Settings,
    Bell,
    
} from "lucide-react";


const TabsPage = () => {


    // =====================================================
    // Basic
    // =====================================================

    const basicCode = `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/Tabs/Tabs";

<Tabs defaultValue="account">

  <TabsList>

    <TabsTrigger value="account">
      Account
    </TabsTrigger>

    <TabsTrigger value="password">
      Password
    </TabsTrigger>

    <TabsTrigger value="settings">
      Settings
    </TabsTrigger>

  </TabsList>


  <TabsContent value="account">
    Account information goes here.
  </TabsContent>


  <TabsContent value="password">
    Password settings go here.
  </TabsContent>


  <TabsContent value="settings">
    Account settings go here.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Outline
    // =====================================================

    const outlineCode = `<Tabs
  defaultValue="profile"
  variant="outline"
>

  <TabsList>

    <TabsTrigger value="profile">
      Profile
    </TabsTrigger>

    <TabsTrigger value="account">
      Account
    </TabsTrigger>

    <TabsTrigger value="security">
      Security
    </TabsTrigger>

  </TabsList>


  <TabsContent value="profile">
    Profile information.
  </TabsContent>


  <TabsContent value="account">
    Account information.
  </TabsContent>


  <TabsContent value="security">
    Security information.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Pills
    // =====================================================

    const pillsCode = `<Tabs
  defaultValue="home"
  variant="pills"
>

  <TabsList>

    <TabsTrigger value="home">
      Home
    </TabsTrigger>

    <TabsTrigger value="products">
      Products
    </TabsTrigger>

    <TabsTrigger value="about">
      About
    </TabsTrigger>

  </TabsList>


  <TabsContent value="home">
    Welcome to the home page.
  </TabsContent>


  <TabsContent value="products">
    Product information.
  </TabsContent>


  <TabsContent value="about">
    About our company.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Underline
    // =====================================================

    const underlineCode = `<Tabs
  defaultValue="overview"
  variant="underline"
>

  <TabsList>

    <TabsTrigger value="overview">
      Overview
    </TabsTrigger>

    <TabsTrigger value="analytics">
      Analytics
    </TabsTrigger>

    <TabsTrigger value="reports">
      Reports
    </TabsTrigger>

  </TabsList>


  <TabsContent value="overview">
    Overview content.
  </TabsContent>


  <TabsContent value="analytics">
    Analytics content.
  </TabsContent>


  <TabsContent value="reports">
    Reports content.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Vertical
    // =====================================================

    const verticalCode = `<Tabs
  defaultValue="profile"
  orientation="vertical"
>

  <TabsList>

    <TabsTrigger value="profile">
      Profile
    </TabsTrigger>

    <TabsTrigger value="account">
      Account
    </TabsTrigger>

    <TabsTrigger value="notifications">
      Notifications
    </TabsTrigger>

  </TabsList>


  <TabsContent value="profile">
    Profile information.
  </TabsContent>


  <TabsContent value="account">
    Account information.
  </TabsContent>


  <TabsContent value="notifications">
    Notification settings.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Icons
    // =====================================================

    const iconsCode = `import {
  User,
  Settings,
  Bell,
} from "lucide-react";


<Tabs defaultValue="profile">

  <TabsList>

    <TabsTrigger
      value="profile"
      icon={<User className="h-4 w-4" />}
    >
      Profile
    </TabsTrigger>


    <TabsTrigger
      value="settings"
      icon={
        <Settings className="h-4 w-4" />
      }
    >
      Settings
    </TabsTrigger>


    <TabsTrigger
      value="notifications"
      icon={
        <Bell className="h-4 w-4" />
      }
    >
      Notifications
    </TabsTrigger>

  </TabsList>


  <TabsContent value="profile">
    Profile content.
  </TabsContent>


  <TabsContent value="settings">
    Settings content.
  </TabsContent>


  <TabsContent value="notifications">
    Notification content.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Disabled
    // =====================================================

    const disabledCode = `<Tabs defaultValue="active">

  <TabsList>

    <TabsTrigger value="active">
      Active
    </TabsTrigger>


    <TabsTrigger
      value="disabled"
      disabled
    >
      Disabled
    </TabsTrigger>


    <TabsTrigger value="available">
      Available
    </TabsTrigger>

  </TabsList>


  <TabsContent value="active">
    Active tab content.
  </TabsContent>


  <TabsContent value="disabled">
    Disabled content.
  </TabsContent>


  <TabsContent value="available">
    Available tab content.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Dark
    // =====================================================

    const darkCode = `<Tabs
  defaultValue="home"
  className="rounded-lg bg-slate-900 p-4"
>

  <TabsList>

    <TabsTrigger value="home">
      Home
    </TabsTrigger>

    <TabsTrigger value="profile">
      Profile
    </TabsTrigger>

    <TabsTrigger value="settings">
      Settings
    </TabsTrigger>

  </TabsList>


  <TabsContent value="home">
    Home content.
  </TabsContent>


  <TabsContent value="profile">
    Profile content.
  </TabsContent>


  <TabsContent value="settings">
    Settings content.
  </TabsContent>

</Tabs>`;


    // =====================================================
    // Props
    // =====================================================

    const propsData = [

        {
            prop: "defaultValue",
            type: "string",
            default: '""',
            description:
                "Defines the tab that is selected initially.",
        },

        {
            prop: "value",
            type: "string",
            default: "-",
            description:
                "Controlled value of the currently active tab.",
        },

        {
            prop: "onValueChange",
            type: "(value: string) => void",
            default: "-",
            description:
                "Callback triggered when the active tab changes.",
        },

        {
            prop: "variant",
            type:
                '"default" | "outline" | "pills" | "underline"',
            default: '"default"',
            description:
                "Controls the visual style of the tabs.",
        },

        {
            prop: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the size of the tab buttons.",
        },

        {
            prop: "orientation",
            type:
                '"horizontal" | "vertical"',
            default: '"horizontal"',
            description:
                "Controls whether tabs are displayed horizontally or vertically.",
        },

        {
            prop: "fullWidth",
            type: "boolean",
            default: "false",
            description:
                "Makes the TabsList take the full available width.",
        },

        {
            prop: "disabled",
            type: "boolean",
            default: "false",
            description:
                "Disables an individual tab trigger.",
        },

        {
            prop: "icon",
            type: "React.ReactNode",
            default: "-",
            description:
                "Optional icon displayed inside a tab trigger.",
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


            {/* ================================================= */}
            {/* Header */}
            {/* ================================================= */}

            <div className="space-y-4">

                <h1 className="text-4xl font-bold tracking-tight">
                    Tabs
                </h1>

                <p className="text-xl text-gray-600">
                    Tabs organize related content into
                    separate panels that users can switch
                    between.
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


                    {/* Basic */}

                    <ComponentDemo
                        code={basicCode}
                    >

                        <Tabs defaultValue="account">

                            <TabsList>

                                <TabsTrigger value="account">
                                    Account
                                </TabsTrigger>

                                <TabsTrigger value="password">
                                    Password
                                </TabsTrigger>

                                <TabsTrigger value="settings">
                                    Settings
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="account">

                                <div className="rounded-lg border p-5">

                                    <h3 className="font-semibold">
                                        Account
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Manage your account
                                        information.
                                    </p>

                                </div>

                            </TabsContent>


                            <TabsContent value="password">

                                <div className="rounded-lg border p-5">

                                    <h3 className="font-semibold">
                                        Password
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Change your account
                                        password.
                                    </p>

                                </div>

                            </TabsContent>


                            <TabsContent value="settings">

                                <div className="rounded-lg border p-5">

                                    <h3 className="font-semibold">
                                        Settings
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Configure your
                                        preferences.
                                    </p>

                                </div>

                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Outline */}

                    <ComponentDemo
                        code={outlineCode}
                    >

                        <Tabs
                            defaultValue="profile"
                            variant="outline"
                        >

                            <TabsList>

                                <TabsTrigger value="profile">
                                    Profile
                                </TabsTrigger>

                                <TabsTrigger value="account">
                                    Account
                                </TabsTrigger>

                                <TabsTrigger value="security">
                                    Security
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="profile">
                                Profile information.
                            </TabsContent>

                            <TabsContent value="account">
                                Account information.
                            </TabsContent>

                            <TabsContent value="security">
                                Security information.
                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Pills */}

                    <ComponentDemo
                        code={pillsCode}
                    >

                        <Tabs
                            defaultValue="home"
                            variant="pills"
                        >

                            <TabsList>

                                <TabsTrigger value="home">
                                    Home
                                </TabsTrigger>

                                <TabsTrigger value="products">
                                    Products
                                </TabsTrigger>

                                <TabsTrigger value="about">
                                    About
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="home">
                                Welcome to the home page.
                            </TabsContent>

                            <TabsContent value="products">
                                Product information.
                            </TabsContent>

                            <TabsContent value="about">
                                About our company.
                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Underline */}

                    <ComponentDemo
                        code={underlineCode}
                    >

                        <Tabs
                            defaultValue="overview"
                            variant="underline"
                        >

                            <TabsList>

                                <TabsTrigger value="overview">
                                    Overview
                                </TabsTrigger>

                                <TabsTrigger value="analytics">
                                    Analytics
                                </TabsTrigger>

                                <TabsTrigger value="reports">
                                    Reports
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="overview">
                                Overview content.
                            </TabsContent>

                            <TabsContent value="analytics">
                                Analytics content.
                            </TabsContent>

                            <TabsContent value="reports">
                                Reports content.
                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Vertical */}

                    <ComponentDemo
                        code={verticalCode}
                    >

                        <Tabs
                            defaultValue="profile"
                            orientation="vertical"
                        >

                            <TabsList>

                                <TabsTrigger value="profile">
                                    Profile
                                </TabsTrigger>

                                <TabsTrigger value="account">
                                    Account
                                </TabsTrigger>

                                <TabsTrigger value="notifications">
                                    Notifications
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="profile">
                                Profile information.
                            </TabsContent>

                            <TabsContent value="account">
                                Account information.
                            </TabsContent>

                            <TabsContent value="notifications">
                                Notification settings.
                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Icons */}

                    <ComponentDemo
                        code={iconsCode}
                    >

                        <Tabs defaultValue="profile">

                            <TabsList>

                                <TabsTrigger
                                    value="profile"
                                    icon={
                                        <User className="h-4 w-4" />
                                    }
                                >
                                    Profile
                                </TabsTrigger>


                                <TabsTrigger
                                    value="settings"
                                    icon={
                                        <Settings className="h-4 w-4" />
                                    }
                                >
                                    Settings
                                </TabsTrigger>


                                <TabsTrigger
                                    value="notifications"
                                    icon={
                                        <Bell className="h-4 w-4" />
                                    }
                                >
                                    Notifications
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="profile">
                                Profile content.
                            </TabsContent>

                            <TabsContent value="settings">
                                Settings content.
                            </TabsContent>

                            <TabsContent value="notifications">
                                Notification content.
                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Disabled */}

                    <ComponentDemo
                        code={disabledCode}
                    >

                        <Tabs defaultValue="active">

                            <TabsList>

                                <TabsTrigger value="active">
                                    Active
                                </TabsTrigger>

                                <TabsTrigger
                                    value="disabled"
                                    disabled
                                >
                                    Disabled
                                </TabsTrigger>

                                <TabsTrigger value="available">
                                    Available
                                </TabsTrigger>

                            </TabsList>


                            <TabsContent value="active">
                                Active tab content.
                            </TabsContent>

                            <TabsContent value="disabled">
                                Disabled tab content.
                            </TabsContent>

                            <TabsContent value="available">
                                Available tab content.
                            </TabsContent>

                        </Tabs>

                    </ComponentDemo>


                    {/* Dark */}

                    <ComponentDemo
                        code={darkCode}
                    >

                        <div className="rounded-lg bg-slate-900 p-4 text-white">

                            <Tabs defaultValue="home">

                                <TabsList>

                                    <TabsTrigger value="home">
                                        Home
                                    </TabsTrigger>

                                    <TabsTrigger value="profile">
                                        Profile
                                    </TabsTrigger>

                                    <TabsTrigger value="settings">
                                        Settings
                                    </TabsTrigger>

                                </TabsList>


                                <TabsContent value="home">
                                    Home content.
                                </TabsContent>

                                <TabsContent value="profile">
                                    Profile content.
                                </TabsContent>

                                <TabsContent value="settings">
                                    Settings content.
                                </TabsContent>

                            </Tabs>

                        </div>

                    </ComponentDemo>


                </div>

            </section>


            {/* ================================================= */}
            {/* API */}
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


export default TabsPage;