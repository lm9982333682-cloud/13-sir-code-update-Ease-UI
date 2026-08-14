import { Form } from "@/components/Form/Form";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const FormPage = () => {

    // =====================================
    // Basic Form
    // =====================================

    const basicForm = `import { Form } from "@/components/Form/Form";

<Form
  onSubmit={(e) => {
    e.preventDefault();
  }}
>
  <div>
    <label className="block mb-2 font-medium">
      Name
    </label>

    <input
      type="text"
      placeholder="Enter your name"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Email
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <button
    type="submit"
    className="rounded-md bg-blue-600 px-4 py-2 text-white"
  >
    Submit
  </button>
</Form>`;


    // =====================================
    // Card Form
    // =====================================

    const cardForm = `import { Form } from "@/components/Form/Form";

<Form
  variant="card"
>
  <div>
    <label className="block mb-2 font-medium">
      Name
    </label>

    <input
      type="text"
      placeholder="Enter your name"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Email
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <button
    type="submit"
    className="rounded-md bg-blue-600 px-4 py-2 text-white"
  >
    Submit
  </button>
</Form>`;


    // =====================================
    // Dark Form
    // =====================================

    const darkForm = `import { Form } from "@/components/Form/Form";

<Form
  variant="dark"
>
  <div>
    <label className="block mb-2 font-medium">
      Name
    </label>

    <input
      type="text"
      placeholder="Enter your name"
      className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Email
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2"
    />
  </div>

  <button
    type="submit"
    className="rounded-md bg-blue-600 px-4 py-2 text-white"
  >
    Submit
  </button>
</Form>`;


    // =====================================
    // Horizontal Form
    // =====================================

    const horizontalForm = `import { Form } from "@/components/Form/Form";

<Form
  layout="horizontal"
>
  <div>
    <label className="block mb-2 font-medium">
      First Name
    </label>

    <input
      type="text"
      placeholder="First Name"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Last Name
    </label>

    <input
      type="text"
      placeholder="Last Name"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Email
    </label>

    <input
      type="email"
      placeholder="Email"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Phone
    </label>

    <input
      type="tel"
      placeholder="Phone"
      className="w-full rounded-md border px-3 py-2"
    />
  </div>
</Form>`;


    // =====================================
    // Registration Form
    // =====================================

    const registrationForm = `import { Form } from "@/components/Form/Form";

<Form
  variant="card"
  gap="lg"
>
  <div>
    <label className="block mb-2 font-medium">
      Full Name
    </label>

    <input
      type="text"
      placeholder="John Doe"
      required
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Email
    </label>

    <input
      type="email"
      placeholder="john@example.com"
      required
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <div>
    <label className="block mb-2 font-medium">
      Password
    </label>

    <input
      type="password"
      placeholder="Enter password"
      required
      className="w-full rounded-md border px-3 py-2"
    />
  </div>

  <button
    type="submit"
    className="rounded-md bg-blue-600 px-4 py-2 text-white"
  >
    Create Account
  </button>
</Form>`;


    // =====================================
    // API Reference
    // =====================================

    const propsData = [
        {
            prop: "children",
            type: "React.ReactNode",
            default: "-",
            description:
                "The form fields and controls rendered inside the form.",
        },
        {
            prop: "variant",
            type: '"default" | "card" | "dark"',
            default: '"default"',
            description:
                "Controls the visual appearance of the form.",
        },
        {
            prop: "layout",
            type: '"vertical" | "horizontal"',
            default: '"vertical"',
            description:
                "Controls the arrangement of form fields.",
        },
        {
            prop: "gap",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the spacing between form elements.",
        },
        {
            prop: "onSubmit",
            type: "(event: React.FormEvent<HTMLFormElement>) => void",
            default: "-",
            description:
                "Callback executed when the form is submitted.",
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
                    Form
                </h1>

                <p className="text-xl text-gray-600">
                    A flexible form component for creating
                    simple, responsive, and styled forms.
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


                    {/* Basic Form */}

                    <ComponentDemo code={basicForm}>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >

                            <div>
                                <label className="block mb-2 font-medium">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-4 py-2 text-white"
                            >
                                Submit
                            </button>

                        </Form>

                    </ComponentDemo>


                    {/* Card Form */}

                    <ComponentDemo code={cardForm}>

                        <Form variant="card">

                            <div>
                                <label className="block mb-2 font-medium">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-4 py-2 text-white"
                            >
                                Submit
                            </button>

                        </Form>

                    </ComponentDemo>


                    {/* Dark Form */}

                    <ComponentDemo code={darkForm}>

                        <Form variant="dark">

                            <div>
                                <label className="block mb-2 font-medium">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-white"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-4 py-2 text-white"
                            >
                                Submit
                            </button>

                        </Form>

                    </ComponentDemo>


                    {/* Horizontal Form */}

                    <ComponentDemo code={horizontalForm}>

                        <Form layout="horizontal">

                            <div>
                                <label className="block mb-2 font-medium">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                        </Form>

                    </ComponentDemo>


                    {/* Registration Form */}

                    <ComponentDemo code={registrationForm}>

                        <Form
                            variant="card"
                            gap="lg"
                        >

                            <div>
                                <label className="block mb-2 font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                    className="w-full rounded-md border px-3 py-2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-4 py-2 text-white"
                            >
                                Create Account
                            </button>

                        </Form>

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

export default FormPage;