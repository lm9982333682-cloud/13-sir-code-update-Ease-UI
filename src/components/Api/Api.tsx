import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import {
    Check,
    ChevronDown,
    ChevronUp,
    Copy,
    ExternalLink,
} from "lucide-react";

const apiVariants = cva(
    "w-full rounded-xl border transition-all duration-300",
    {
        variants: {
            variant: {
                default:
                    "border-gray-200 bg-white text-gray-800 shadow-sm",

                dark:
                    "border-slate-700 bg-slate-900 text-white shadow-lg",

                outline:
                    "border-gray-300 bg-transparent text-gray-800",

                filled:
                    "border-transparent bg-gray-100 text-gray-800",
            },

            size: {
                sm: "p-3",
                md: "p-5",
                lg: "p-7",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

const methodVariants = cva(
    "inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-bold uppercase",
    {
        variants: {
            method: {
                GET: "bg-green-100 text-green-700",
                POST: "bg-blue-100 text-blue-700",
                PUT: "bg-yellow-100 text-yellow-700",
                PATCH: "bg-orange-100 text-orange-700",
                DELETE: "bg-red-100 text-red-700",
            },
        },

        defaultVariants: {
            method: "GET",
        },
    }
);

interface ApiParameter {
    name: string;
    type?: string;
    required?: boolean;
    description?: string;
    example?: string;
}

interface ApiProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof apiVariants> {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

    endpoint: string;

    title?: string;

    description?: string;

    parameters?: ApiParameter[];

    response?: string;

    requestBody?: string;

    status?: number;

    showDetails?: boolean;

    defaultOpen?: boolean;

    copyable?: boolean;

    externalLink?: string;
}

const Api = React.forwardRef<HTMLDivElement, ApiProps>(
    (
        {
            method = "GET",
            endpoint,
            title,
            description,
            parameters = [],
            response,
            requestBody,
            status,
            showDetails = true,
            defaultOpen = false,
            copyable = true,
            externalLink,
            variant,
            size,
            className,
            ...props
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(defaultOpen);
        const [copied, setCopied] = useState(false);

        const handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(endpoint);

                setCopied(true);

                setTimeout(() => {
                    setCopied(false);
                }, 1500);
            } catch (error) {
                console.error("Failed to copy endpoint:", error);
            }
        };

        return (
            <div
                ref={ref}
                className={cn(
                    apiVariants({
                        variant,
                        size,
                    }),
                    className
                )}
                {...props}
            >
                {/* Header */}

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <span className={cn(methodVariants({ method }))}>
                            {method}
                        </span>

                        <code
                            className={cn(
                                "truncate text-sm font-medium",

                                variant === "dark"
                                    ? "text-gray-200"
                                    : "text-gray-700"
                            )}
                        >
                            {endpoint}
                        </code>
                    </div>

                    <div className="flex items-center gap-2">
                        {copyable && (
                            <button
                                type="button"
                                onClick={handleCopy}
                                aria-label="Copy API endpoint"
                                className={cn(
                                    "rounded-md p-2 transition",

                                    variant === "dark"
                                        ? "text-gray-300 hover:bg-slate-800"
                                        : "text-gray-500 hover:bg-gray-100"
                                )}
                            >
                                {copied ? (
                                    <Check className="h-4 w-4" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                            </button>
                        )}

                        {externalLink && (
                            <a
                                href={externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open API"
                                className={cn(
                                    "rounded-md p-2 transition",

                                    variant === "dark"
                                        ? "text-gray-300 hover:bg-slate-800"
                                        : "text-gray-500 hover:bg-gray-100"
                                )}
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}

                        {showDetails && (
                            <button
                                type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-expanded={isOpen}
                                aria-label="Toggle API details"
                                className={cn(
                                    "rounded-md p-2 transition",

                                    variant === "dark"
                                        ? "text-gray-300 hover:bg-slate-800"
                                        : "text-gray-500 hover:bg-gray-100"
                                )}
                            >
                                {isOpen ? (
                                    <ChevronUp className="h-4 w-4" />
                                ) : (
                                    <ChevronDown className="h-4 w-4" />
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {/* Title */}

                {title && (
                    <h3
                        className={cn(
                            "mt-4 text-lg font-semibold",

                            variant === "dark"
                                ? "text-white"
                                : "text-gray-900"
                        )}
                    >
                        {title}
                    </h3>
                )}

                {/* Description */}

                {description && (
                    <p
                        className={cn(
                            "mt-2 text-sm",

                            variant === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                        )}
                    >
                        {description}
                    </p>
                )}

                {/* Details */}

                {showDetails && isOpen && (
                    <div className="mt-5 space-y-5 border-t pt-5">
                        {/* Request Body */}

                        {requestBody && (
                            <div>
                                <h4 className="mb-2 text-sm font-semibold">
                                    Request Body
                                </h4>

                                <pre
                                    className={cn(
                                        "overflow-x-auto rounded-lg p-4 text-sm",

                                        variant === "dark"
                                            ? "bg-slate-950 text-gray-200"
                                            : "bg-gray-100 text-gray-800"
                                    )}
                                >
                                    <code>{requestBody}</code>
                                </pre>
                            </div>
                        )}

                        {/* Parameters */}

                        {parameters.length > 0 && (
                            <div>
                                <h4 className="mb-3 text-sm font-semibold">
                                    Parameters
                                </h4>

                                <div className="overflow-x-auto rounded-lg border">
                                    <table className="w-full text-left text-sm">
                                        <thead
                                            className={cn(
                                                variant === "dark"
                                                    ? "bg-slate-800"
                                                    : "bg-gray-50"
                                            )}
                                        >
                                            <tr>
                                                <th className="px-4 py-3">
                                                    Name
                                                </th>

                                                <th className="px-4 py-3">
                                                    Type
                                                </th>

                                                <th className="px-4 py-3">
                                                    Required
                                                </th>

                                                <th className="px-4 py-3">
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {parameters.map((parameter) => (
                                                <tr
                                                    key={parameter.name}
                                                    className="border-t"
                                                >
                                                    <td className="px-4 py-3 font-mono">
                                                        {parameter.name}
                                                    </td>

                                                    <td className="px-4 py-3">
                                                        {parameter.type || "-"}
                                                    </td>

                                                    <td className="px-4 py-3">
                                                        {parameter.required
                                                            ? "Yes"
                                                            : "No"}
                                                    </td>

                                                    <td className="px-4 py-3">
                                                        {parameter.description || "-"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Response */}

                        {response && (
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <h4 className="text-sm font-semibold">
                                        Response
                                    </h4>

                                    {status && (
                                        <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                                            {status}
                                        </span>
                                    )}
                                </div>

                                <pre
                                    className={cn(
                                        "overflow-x-auto rounded-lg p-4 text-sm",

                                        variant === "dark"
                                            ? "bg-slate-950 text-gray-200"
                                            : "bg-gray-100 text-gray-800"
                                    )}
                                >
                                    <code>{response}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

Api.displayName = "Api";

export {
    Api,
    apiVariants,
    methodVariants,
};