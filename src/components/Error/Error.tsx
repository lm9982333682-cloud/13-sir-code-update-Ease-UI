import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import {
    AlertCircle,
    AlertTriangle,
    Ban,
    FileQuestion,
  
    RefreshCw,
    ServerCrash,
    WifiOff,
} from "lucide-react";

const errorVariants = cva(
    "flex flex-col items-center justify-center text-center",
    {
        variants: {
            variant: {
                default: "text-gray-800",
                danger: "text-red-600",
                warning: "text-yellow-600",
                dark: "text-white",
            },

            size: {
                sm: "gap-2 p-4",
                md: "gap-4 p-6",
                lg: "gap-6 p-10",
            },
        },

        defaultVariants: {
            variant: "danger",
            size: "md",
        },
    }
);

interface ErrorProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof errorVariants> {
    title?: string;
    description?: string;

    errorType?:
    | "default"
    | "404"
    | "403"
    | "500"
    | "network"
    | "warning";

    showIcon?: boolean;

    action?: React.ReactNode;

    onRetry?: () => void;

    retryText?: string;

    fullPage?: boolean;
}

const Error = React.forwardRef<HTMLDivElement, ErrorProps>(
    (
        {
            title,
            description,
            errorType = "default",
            showIcon = true,
            action,
            onRetry,
            retryText = "Try Again",
            fullPage = false,
            variant,
            size,
            className,
            ...props
        },
        ref
    ) => {
        const errorConfig = {
            default: {
                title: "Something went wrong",
                description:
                    "An unexpected error occurred. Please try again.",
                icon: AlertCircle,
            },

            "404": {
                title: "Page Not Found",
                description:
                    "The page you are looking for does not exist.",
                icon: FileQuestion,
            },

            "403": {
                title: "Access Denied",
                description:
                    "You don't have permission to access this resource.",
                icon: Ban,
            },

            "500": {
                title: "Server Error",
                description:
                    "Something went wrong on our server. Please try again later.",
                icon: ServerCrash,
            },

            network: {
                title: "Network Error",
                description:
                    "Please check your internet connection and try again.",
                icon: WifiOff,
            },

            warning: {
                title: "Warning",
                description:
                    "Something needs your attention.",
                icon: AlertTriangle,
            },
        };

        const config = errorConfig[errorType];

        const Icon = config.icon;

        const finalTitle = title || config.title;
        const finalDescription =
            description || config.description;

        const content = (
            <div
                ref={ref}
                role="alert"
                aria-live="assertive"
                className={cn(
                    errorVariants({
                        variant,
                        size,
                    }),
                    className
                )}
                {...props}
            >
                {/* Icon */}

                {showIcon && (
                    <div
                        className={cn(
                            "flex items-center justify-center rounded-full bg-red-50",

                            size === "sm" && "h-10 w-10",
                            size === "md" && "h-14 w-14",
                            size === "lg" && "h-20 w-20",

                            errorType === "warning" &&
                            "bg-yellow-50"
                        )}
                    >
                        <Icon
                            className={cn(
                                "text-red-600",

                                size === "sm" && "h-5 w-5",
                                size === "md" && "h-7 w-7",
                                size === "lg" && "h-10 w-10",

                                errorType === "warning" &&
                                "text-yellow-600"
                            )}
                        />
                    </div>
                )}

                {/* Title */}

                <h2
                    className={cn(
                        "font-bold",

                        size === "sm" && "text-lg",
                        size === "md" && "text-2xl",
                        size === "lg" && "text-4xl"
                    )}
                >
                    {finalTitle}
                </h2>

                {/* Description */}

                {finalDescription && (
                    <p
                        className={cn(
                            "max-w-md text-gray-500",

                            size === "sm" && "text-sm",
                            size === "md" && "text-base",
                            size === "lg" && "text-lg",

                            variant === "dark" &&
                            "text-gray-300"
                        )}
                    >
                        {finalDescription}
                    </p>
                )}

                {/* Retry Button */}

                {onRetry && (
                    <button
                        type="button"
                        onClick={onRetry}
                        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        <RefreshCw className="h-4 w-4" />

                        {retryText}
                    </button>
                )}

                {/* Custom Action */}

                {action && action}

            </div>
        );

        if (fullPage) {
            return (
                <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white px-4">
                    {content}
                </div>
            );
        }

        return content;
    }
);

Error.displayName = "Error";

export {
    Error,
    errorVariants,
};