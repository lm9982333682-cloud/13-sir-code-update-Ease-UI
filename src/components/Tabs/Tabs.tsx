"use client";

import React, {
    createContext,
    useContext,
    useState,
} from "react";

import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import { cn } from "@/libs/utils";


// =====================================================
// Tabs Variants
// =====================================================

const tabsVariants = cva(
    "w-full",
    {
        variants: {
            variant: {
                default: "",

                outline:
                    "rounded-lg border border-gray-200 p-1",

                pills:
                    "rounded-lg bg-gray-100 p-1",

                underline:
                    "border-b border-gray-200",
            },

            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },

            orientation: {
                horizontal: "flex flex-col",
                vertical: "flex flex-row gap-4",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
            orientation: "horizontal",
        },
    }
);


// =====================================================
// Context
// =====================================================

interface TabsContextType {
    value: string;
    setValue: (value: string) => void;

    variant:
    | "default"
    | "outline"
    | "pills"
    | "underline";

    size: "sm" | "md" | "lg";

    orientation: "horizontal" | "vertical";
}

const TabsContext =
    createContext<TabsContextType | null>(null);


// =====================================================
// Tabs Props
// =====================================================

interface TabsProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {

    defaultValue?: string;

    value?: string;

    onValueChange?: (
        value: string
    ) => void;
}


// =====================================================
// Tabs Component
// =====================================================

const Tabs = React.forwardRef<
    HTMLDivElement,
    TabsProps
>(
    (
        {
            defaultValue = "",
            value,
            onValueChange,

            variant = "default",
            size = "md",
            orientation = "horizontal",

            className,
            children,
            ...props
        },
        ref
    ) => {

        const [internalValue, setInternalValue] =
            useState(defaultValue);

        const currentValue =
            value !== undefined
                ? value
                : internalValue;


        const handleValueChange = (
            newValue: string
        ) => {

            if (value === undefined) {
                setInternalValue(newValue);
            }

            onValueChange?.(newValue);
        };


        return (
            <TabsContext.Provider
                value={{
                    value: currentValue,

                    setValue:
                        handleValueChange,

                    variant:
                        variant || "default",

                    size:
                        size || "md",

                    orientation:
                        orientation || "horizontal",
                }}
            >

                <div
                    ref={ref}
                    className={cn(
                        tabsVariants({
                            variant,
                            size,
                            orientation,
                        }),
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>

            </TabsContext.Provider>
        );
    }
);

Tabs.displayName = "Tabs";


// =====================================================
// TabsList
// =====================================================

interface TabsListProps
    extends React.HTMLAttributes<HTMLDivElement> {

    fullWidth?: boolean;
}


const TabsList = React.forwardRef<
    HTMLDivElement,
    TabsListProps
>(
    (
        {
            fullWidth = false,
            className,
            children,
            ...props
        },
        ref
    ) => {

        const context =
            useContext(TabsContext);


        if (!context) {
            throw new Error(
                "TabsList must be used inside Tabs"
            );
        }


        return (
            <div
                ref={ref}
                role="tablist"

                aria-orientation={
                    context.orientation
                }

                className={cn(

                    context.orientation ===
                        "horizontal"
                        ? "flex items-center gap-1"
                        : "flex flex-col gap-1",

                    fullWidth &&
                    context.orientation ===
                    "horizontal" &&
                    "w-full",

                    context.variant ===
                    "outline" &&
                    "rounded-md",

                    context.variant ===
                    "pills" &&
                    "rounded-md",

                    context.variant ===
                    "underline" &&
                    "gap-4",

                    className
                )}

                {...props}
            >
                {children}
            </div>
        );
    }
);

TabsList.displayName =
    "TabsList";


// =====================================================
// TabsTrigger
// =====================================================

interface TabsTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {

    value: string;

    disabled?: boolean;

    icon?: React.ReactNode;
}


const TabsTrigger =
    React.forwardRef<
        HTMLButtonElement,
        TabsTriggerProps
    >(
        (
            {
                value,
                disabled = false,
                icon,
                className,
                children,
                ...props
            },
            ref
        ) => {

            const context =
                useContext(TabsContext);


            if (!context) {
                throw new Error(
                    "TabsTrigger must be used inside Tabs"
                );
            }


            const isActive =
                context.value === value;


            return (
                <button
                    ref={ref}

                    type="button"

                    role="tab"

                    aria-selected={
                        isActive
                    }

                    aria-disabled={
                        disabled
                    }

                    disabled={disabled}

                    onClick={() => {

                        if (!disabled) {
                            context.setValue(
                                value
                            );
                        }

                    }}

                    className={cn(

                        "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200",

                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",

                        context.orientation ===
                            "horizontal"
                            ? "px-4 py-2"
                            : "w-full justify-start px-4 py-2",

                        context.size === "sm" &&
                        "px-3 py-1.5 text-sm",

                        context.size === "md" &&
                        "px-4 py-2 text-base",

                        context.size === "lg" &&
                        "px-5 py-2.5 text-lg",


                        // Default

                        context.variant ===
                        "default" &&
                        (isActive
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-gray-900"),


                        // Outline

                        context.variant ===
                        "outline" &&
                        (isActive
                            ? "rounded-md bg-white text-blue-600 shadow-sm"
                            : "rounded-md text-gray-600 hover:bg-gray-50"),


                        // Pills

                        context.variant ===
                        "pills" &&
                        (isActive
                            ? "rounded-md bg-white text-gray-900 shadow-sm"
                            : "rounded-md text-gray-600 hover:text-gray-900"),


                        // Underline

                        context.variant ===
                        "underline" &&
                        (isActive
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-gray-900"),


                        // Active underline

                        context.variant ===
                        "underline" &&
                        isActive &&
                        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600",


                        disabled &&
                        "cursor-not-allowed opacity-40",

                        className
                    )}

                    {...props}
                >

                    {icon && (
                        <span
                            className="shrink-0"
                        >
                            {icon}
                        </span>
                    )}

                    {children}

                </button>
            );
        }
    );

TabsTrigger.displayName =
    "TabsTrigger";


// =====================================================
// TabsContent
// =====================================================

interface TabsContentProps
    extends React.HTMLAttributes<HTMLDivElement> {

    value: string;
}


const TabsContent =
    React.forwardRef<
        HTMLDivElement,
        TabsContentProps
    >(
        (
            {
                value,
                className,
                children,
                ...props
            },
            ref
        ) => {

            const context =
                useContext(TabsContext);


            if (!context) {
                throw new Error(
                    "TabsContent must be used inside Tabs"
                );
            }


            const isActive =
                context.value === value;


            if (!isActive) {
                return null;
            }


            return (
                <div
                    ref={ref}

                    role="tabpanel"

                    tabIndex={0}

                    className={cn(
                        "mt-4 animate-in fade-in duration-300 focus:outline-none",

                        context.orientation ===
                        "vertical" &&
                        "mt-0 flex-1",

                        className
                    )}

                    {...props}
                >
                    {children}
                </div>
            );
        }
    );

TabsContent.displayName =
    "TabsContent";


// =====================================================
// Export
// =====================================================

export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    tabsVariants,
};