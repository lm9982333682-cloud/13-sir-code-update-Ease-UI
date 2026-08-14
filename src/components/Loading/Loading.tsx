import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const loadingVariants = cva(
    "flex items-center justify-center",
    {
        variants: {
            variant: {
                spinner: "",
                dots: "gap-1.5",
                pulse: "",
                bars: "gap-1",
                ring: "",
                skeleton: "",
            },

            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
                xl: "text-xl",
            },
        },

        defaultVariants: {
            variant: "spinner",
            size: "md",
        },
    }
);

interface LoadingProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
    text?: string;
    fullscreen?: boolean;
    overlay?: boolean;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
    (
        {
            variant = "spinner",
            size = "md",
            text,
            fullscreen = false,
            overlay = false,
            className,
            ...props
        },
        ref
    ) => {
        const loader = (
            <div
                ref={ref}
                role="status"
                aria-live="polite"
                aria-label={text || "Loading"}
                className={cn(
                    loadingVariants({
                        variant,
                        size,
                    }),
                    className
                )}
                {...props}
            >
                {/* Spinner */}

                {variant === "spinner" && (
                    <div
                        className={cn(
                            "animate-spin rounded-full border-4 border-gray-200 border-t-blue-600",

                            size === "sm" && "h-5 w-5",
                            size === "md" && "h-7 w-7",
                            size === "lg" && "h-9 w-9",
                            size === "xl" && "h-12 w-12"
                        )}
                    />
                )}

                {/* Dots */}

                {variant === "dots" && (
                    <>
                        <span
                            className={cn(
                                "animate-bounce rounded-full bg-blue-600",
                                size === "sm" && "h-1.5 w-1.5",
                                size === "md" && "h-2 w-2",
                                size === "lg" && "h-2.5 w-2.5",
                                size === "xl" && "h-3 w-3"
                            )}
                        />

                        <span
                            className={cn(
                                "animate-bounce rounded-full bg-blue-600 [animation-delay:150ms]",
                                size === "sm" && "h-1.5 w-1.5",
                                size === "md" && "h-2 w-2",
                                size === "lg" && "h-2.5 w-2.5",
                                size === "xl" && "h-3 w-3"
                            )}
                        />

                        <span
                            className={cn(
                                "animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]",
                                size === "sm" && "h-1.5 w-1.5",
                                size === "md" && "h-2 w-2",
                                size === "lg" && "h-2.5 w-2.5",
                                size === "xl" && "h-3 w-3"
                            )}
                        />
                    </>
                )}

                {/* Pulse */}

                {variant === "pulse" && (
                    <div
                        className={cn(
                            "animate-pulse rounded-full bg-blue-600",

                            size === "sm" && "h-5 w-5",
                            size === "md" && "h-7 w-7",
                            size === "lg" && "h-9 w-9",
                            size === "xl" && "h-12 w-12"
                        )}
                    />
                )}

                {/* Bars */}

                {variant === "bars" && (
                    <>
                        <span
                            className={cn(
                                "animate-pulse rounded-sm bg-blue-600",
                                size === "sm" && "h-4 w-1",
                                size === "md" && "h-6 w-1.5",
                                size === "lg" && "h-8 w-2",
                                size === "xl" && "h-10 w-2.5"
                            )}
                        />

                        <span
                            className={cn(
                                "animate-pulse rounded-sm bg-blue-600 [animation-delay:150ms]",
                                size === "sm" && "h-6 w-1",
                                size === "md" && "h-8 w-1.5",
                                size === "lg" && "h-10 w-2",
                                size === "xl" && "h-12 w-2.5"
                            )}
                        />

                        <span
                            className={cn(
                                "animate-pulse rounded-sm bg-blue-600 [animation-delay:300ms]",
                                size === "sm" && "h-4 w-1",
                                size === "md" && "h-6 w-1.5",
                                size === "lg" && "h-8 w-2",
                                size === "xl" && "h-10 w-2.5"
                            )}
                        />
                    </>
                )}

                {/* Ring */}

                {variant === "ring" && (
                    <div
                        className={cn(
                            "animate-spin rounded-full border-4 border-blue-100 border-t-blue-600 border-r-blue-600",

                            size === "sm" && "h-5 w-5",
                            size === "md" && "h-7 w-7",
                            size === "lg" && "h-9 w-9",
                            size === "xl" && "h-12 w-12"
                        )}
                    />
                )}

                {/* Skeleton */}

                {variant === "skeleton" && (
                    <div
                        className={cn(
                            "animate-pulse rounded-md bg-gray-200",

                            size === "sm" && "h-4 w-24",
                            size === "md" && "h-5 w-32",
                            size === "lg" && "h-6 w-40",
                            size === "xl" && "h-8 w-48"
                        )}
                    />
                )}

                {text && (
                    <span className="ml-3 text-gray-600">
                        {text}
                    </span>
                )}
            </div>
        );

        if (fullscreen) {
            return (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm">
                    {loader}
                </div>
            );
        }

        if (overlay) {
            return (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    {loader}
                </div>
            );
        }

        return loader;
    }
);

Loading.displayName = "Loading";

export {
    Loading,
    loadingVariants,
};