import { Api } from "@/components/Api/Api";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const ApiPage = () => {
    // =====================================
    // Basic GET
    // =====================================

    const basicGetCode = `import { Api } from "@/components/Api/Api";

<Api
  method="GET"
  endpoint="/api/users"
/>`;

    // =====================================
    // GET with Details
    // =====================================

    const getDetailsCode = `import { Api } from "@/components/Api/Api";

<Api
  method="GET"
  endpoint="/api/users/:id"
  title="Get User"
  description="Fetch a single user by ID."
  parameters={[
    {
      name: "id",
      type: "string",
      required: true,
      description: "Unique user ID",
    },
  ]}
  response={\`{
  "success": true,
  "user": {
    "id": "123",
    "name": "John Doe"
  }
}\`}
  status={200}
/>`;

    // =====================================
    // POST
    // =====================================

    const postCode = `import { Api } from "@/components/Api/Api";

<Api
  method="POST"
  endpoint="/api/users"
  title="Create User"
  description="Create a new user."
  requestBody={\`{
  "name": "John Doe",
  "email": "john@example.com"
}\`}
  response={\`{
  "success": true,
  "message": "User created successfully"
}\`}
  status={201}
/>`;

    // =====================================
    // PUT
    // =====================================

    const putCode = `import { Api } from "@/components/Api/Api";

<Api
  method="PUT"
  endpoint="/api/users/:id"
  title="Update User"
  description="Update an existing user."
  status={200}
/>`;

    // =====================================
    // PATCH
    // =====================================

    const patchCode = `import { Api } from "@/components/Api/Api";

<Api
  method="PATCH"
  endpoint="/api/users/:id"
  title="Update User Fields"
  description="Update selected user fields."
  status={200}
/>`;

    // =====================================
    // DELETE
    // =====================================

    const deleteCode = `import { Api } from "@/components/Api/Api";

<Api
  method="DELETE"
  endpoint="/api/users/:id"
  title="Delete User"
  description="Delete a user by ID."
  status={204}
/>`;

    // =====================================
    // Dark
    // =====================================

    const darkCode = `import { Api } from "@/components/Api/Api";

<Api
  method="GET"
  endpoint="/api/products"
  title="Get Products"
  variant="dark"
/>`;

    // =====================================
    // Outline
    // =====================================

    const outlineCode = `import { Api } from "@/components/Api/Api";

<Api
  method="POST"
  endpoint="/api/login"
  title="Login"
  variant="outline"
/>`;

    // =====================================
    // Filled
    // =====================================

    const filledCode = `import { Api } from "@/components/Api/Api";

<Api
  method="GET"
  endpoint="/api/orders"
  title="Get Orders"
  variant="filled"
/>`;

    // =====================================
    // Without Details
    // =====================================

    const simpleCode = `import { Api } from "@/components/Api/Api";

<Api
  method="GET"
  endpoint="/api/health"
  title="Health Check"
  showDetails={false}
/>`;

    // =====================================
    // Default Open
    // =====================================

    const defaultOpenCode = `import { Api } from "@/components/Api/Api";

<Api
  method="GET"
  endpoint="/api/profile"
  title="Get Profile"
  defaultOpen
/>`;

    // =====================================
    // API Reference
    // =====================================

    const propsData = [
        {
            prop: "method",
            type: '"GET" | "POST" | "PUT" | "PATCH" | "DELETE"',
            default: '"GET"',
            description:
                "HTTP method used by the API endpoint.",
        },
        {
            prop: "endpoint",
            type: "string",
            default: "-",
            description:
                "API endpoint URL or route.",
        },
        {
            prop: "title",
            type: "string",
            default: "-",
            description:
                "Optional title displayed above the API description.",
        },
        {
            prop: "description",
            type: "string",
            default: "-",
            description:
                "Description of what the API endpoint does.",
        },
        {
            prop: "parameters",
            type: "ApiParameter[]",
            default: "[]",
            description:
                "List of parameters accepted by the API.",
        },
        {
            prop: "requestBody",
            type: "string",
            default: "-",
            description:
                "Example request body displayed as code.",
        },
        {
            prop: "response",
            type: "string",
            default: "-",
            description:
                "Example API response displayed as code.",
        },
        {
            prop: "status",
            type: "number",
            default: "-",
            description:
                "HTTP response status code.",
        },
        {
            prop: "variant",
            type: '"default" | "dark" | "outline" | "filled"',
            default: '"default"',
            description:
                "Controls the visual style of the API component.",
        },
        {
            prop: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the padding and overall size.",
        },
        {
            prop: "showDetails",
            type: "boolean",
            default: "true",
            description:
                "Controls whether expandable API details are available.",
        },
        {
            prop: "defaultOpen",
            type: "boolean",
            default: "false",
            description:
                "Controls whether API details are expanded initially.",
        },
        {
            prop: "copyable",
            type: "boolean",
            default: "true",
            description:
                "Enables the copy endpoint button.",
        },
        {
            prop: "externalLink",
            type: "string",
            default: "-",
            description:
                "Optional external URL for opening the API.",
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
                    API
                </h1>

                <p className="text-xl text-gray-600">
                    A reusable API documentation component for
                    displaying endpoints, HTTP methods, parameters,
                    request bodies, and responses.
                </p>
            </div>

            {/* Usage */}

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                    Usage
                </h2>

                <div className="flex flex-col gap-10">
                    {/* Basic GET */}

                    <ComponentDemo code={basicGetCode}>
                        <Api
                            method="GET"
                            endpoint="/api/users"
                        />
                    </ComponentDemo>

                    {/* GET Details */}

                    <ComponentDemo code={getDetailsCode}>
                        <Api
                            method="GET"
                            endpoint="/api/users/:id"
                            title="Get User"
                            description="Fetch a single user by ID."
                            parameters={[
                                {
                                    name: "id",
                                    type: "string",
                                    required: true,
                                    description: "Unique user ID",
                                },
                            ]}
                            response={`{
  "success": true,
  "user": {
    "id": "123",
    "name": "John Doe"
  }
}`}
                            status={200}
                        />
                    </ComponentDemo>

                    {/* POST */}

                    <ComponentDemo code={postCode}>
                        <Api
                            method="POST"
                            endpoint="/api/users"
                            title="Create User"
                            description="Create a new user."
                            requestBody={`{
  "name": "John Doe",
  "email": "john@example.com"
}`}
                            response={`{
  "success": true,
  "message": "User created successfully"
}`}
                            status={201}
                        />
                    </ComponentDemo>

                    {/* PUT */}

                    <ComponentDemo code={putCode}>
                        <Api
                            method="PUT"
                            endpoint="/api/users/:id"
                            title="Update User"
                            description="Update an existing user."
                            status={200}
                        />
                    </ComponentDemo>

                    {/* PATCH */}

                    <ComponentDemo code={patchCode}>
                        <Api
                            method="PATCH"
                            endpoint="/api/users/:id"
                            title="Update User Fields"
                            description="Update selected user fields."
                            status={200}
                        />
                    </ComponentDemo>

                    {/* DELETE */}

                    <ComponentDemo code={deleteCode}>
                        <Api
                            method="DELETE"
                            endpoint="/api/users/:id"
                            title="Delete User"
                            description="Delete a user by ID."
                            status={204}
                        />
                    </ComponentDemo>

                    {/* Dark */}

                    <ComponentDemo code={darkCode}>
                        <Api
                            method="GET"
                            endpoint="/api/products"
                            title="Get Products"
                            variant="dark"
                        />
                    </ComponentDemo>

                    {/* Outline */}

                    <ComponentDemo code={outlineCode}>
                        <Api
                            method="POST"
                            endpoint="/api/login"
                            title="Login"
                            variant="outline"
                        />
                    </ComponentDemo>

                    {/* Filled */}

                    <ComponentDemo code={filledCode}>
                        <Api
                            method="GET"
                            endpoint="/api/orders"
                            title="Get Orders"
                            variant="filled"
                        />
                    </ComponentDemo>

                    {/* Simple */}

                    <ComponentDemo code={simpleCode}>
                        <Api
                            method="GET"
                            endpoint="/api/health"
                            title="Health Check"
                            showDetails={false}
                        />
                    </ComponentDemo>

                    {/* Default Open */}

                    <ComponentDemo code={defaultOpenCode}>
                        <Api
                            method="GET"
                            endpoint="/api/profile"
                            title="Get Profile"
                            defaultOpen
                        />
                    </ComponentDemo>
                </div>
            </section>

            {/* API Reference */}

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                    API Reference
                </h2>

                <PropsTable data={propsData} />
            </section>
        </div>
    );
};

export default ApiPage;