"use client";

import React, {
    useEffect,
    useRef,
    useState,
    
} from "react";

import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import {
    ChevronDown,
} from "lucide-react";

import { cn } from "@/libs/utils";


// =====================================================
// Collapse Variants
// =====================================================

const collapseVariants = cva(
    "w-full overflow-hidden transition-all",
    {
        variants: {
            variant: {
                default:
                    "rounded-lg border border-gray-200 bg-white",

                outline:
                    "rounded-lg border-2 border-gray-300 bg-transparent",

                filled:
                    "rounded-lg bg-gray-100",

                dark:
                    "rounded-lg border border-slate-700 bg-slate-900 text-white",
            },

            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);


// =====================================================
// Collapse Header Variants
// =====================================================

const collapseHeaderVariants = cva(
    "flex w-full items-center justify-between text-left font-medium transition-all duration-200",
    {
        variants: {
            size: {
                sm: "px-3 py-2",
                md: "px-4 py-3",
                lg: "px-5 py-4",
            },

            variant: {
                default:
                    "hover:bg-gray-50",

                outline:
                    "hover:bg-gray-50",

                filled:
                    "hover:bg-gray-200",

                dark:
                    "text-white hover:bg-slate-800",
            },
        },

        defaultVariants: {
            size: "md",
            variant: "default",
        },
    }
);


// =====================================================
// Props
// =====================================================

interface CollapseProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collapseVariants> {

    defaultOpen?: boolean;

    open?: boolean;

    onOpenChange?: (
        open: boolean
    ) => void;

    heading?: React.ReactNode;

    header?: React.ReactNode;

    disabled?: boolean;

    showIcon?: boolean;

    icon?: React.ReactNode;

    animate?: boolean;

    duration?: number;
}


// =====================================================
// Component
// =====================================================

const Collapse = React.forwardRef<
    HTMLDivElement,
    CollapseProps
>(
    (
        {
            defaultOpen = false,
            open,
            onOpenChange,

            title = "Collapse",
            header,

            disabled = false,

            showIcon = true,
            icon,

            animate = true,
            duration = 300,

            variant,
            size,

            className,
            children,
            ...props
        },
        ref
    ) => {

        // =================================================
        // State
        // =================================================

        const [internalOpen, setInternalOpen] =
            useState(defaultOpen);


        const isControlled =
            open !== undefined;


        const isOpen =
            isControlled
                ? open
                : internalOpen;


        // =================================================
        // Content Ref
        // =================================================

        const contentRef =
            useRef<HTMLDivElement | null>(null);


        // =================================================
        // Height Animation
        // =================================================

        useEffect(() => {

            const content =
                contentRef.current;

            if (!content || !animate) {
                return;
            }


            if (isOpen) {

                content.style.height = "0px";

                requestAnimationFrame(() => {

                    content.style.height =
                        `${content.scrollHeight}px`;

                });

            } else {

                content.style.height =
                    `${content.scrollHeight}px`;

                requestAnimationFrame(() => {

                    content.style.height =
                        "0px";

                });

            }

        }, [
            isOpen,
            animate,
            children,
        ]);


        // =================================================
        // Handle Toggle
        // =================================================

        const handleToggle = () => {

            if (disabled) {
                return;
            }


            const nextState =
                !isOpen;


            if (!isControlled) {
                setInternalOpen(nextState);
            }


            onOpenChange?.(
                nextState
            );
        };


        // =================================================
        // Header
        // =================================================

        const headerContent =
            header ?? title;


        // =================================================
        // Render
        // =================================================

        return (

            <div
                ref={ref}

                className={cn(
                    collapseVariants({
                        variant,
                        size,
                    }),

                    disabled &&
                    "cursor-not-allowed opacity-50",

                    className
                )}

                {...props}
            >


                {/* ============================================
            Header
        ============================================ */}

                <button
                    type="button"

                    onClick={
                        handleToggle
                    }

                    disabled={disabled}

                    aria-expanded={
                        isOpen
                    }

                    className={cn(
                        collapseHeaderVariants({
                            variant,
                            size,
                        }),

                        disabled &&
                        "cursor-not-allowed"
                    )}
                >

                    <span className="min-w-0 flex-1">
                        {headerContent}
                    </span>


                    {showIcon && (

                        <span
                            className={cn(
                                "ml-3 shrink-0 transition-transform",

                                animate &&
                                isOpen &&
                                "rotate-180"
                            )}

                            style={{
                                transitionDuration:
                                    `${duration}ms`,
                            }}
                        >

                            {icon ?? (
                                <ChevronDown
                                    className="h-5 w-5"
                                />
                            )}

                        </span>

                    )}

                </button>


                {/* ============================================
            Content
        ============================================ */}

                <div
                    ref={contentRef}

                    className={cn(
                        "overflow-hidden",

                        animate
                            ? "transition-[height]"
                            : isOpen
                                ? "block"
                                : "hidden"
                    )}

                    style={{
                        transitionDuration:
                            animate
                                ? `${duration}ms`
                                : undefined,

                        height:
                            animate
                                ? undefined
                                : isOpen
                                    ? "auto"
                                    : "0px",
                    }}
                >

                    <div
                        className={cn(
                            "px-4 pb-4",

                            variant === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                        )}
                    >
                        {children}
                    </div>

                </div>

            </div>
        );
    }
);


Collapse.displayName =
    "Collapse";


// =====================================================
// Exports
// =====================================================

export {
    Collapse,
    collapseVariants,
    collapseHeaderVariants,
};

export type {
    CollapseProps,
};