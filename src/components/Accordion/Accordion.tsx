import React, {
    createContext,
    useContext,
    useState,
} from "react";

import { ChevronDown } from "lucide-react";
import { cva, type VariantProps, } from "class-variance-authority";

import { cn } from "@/libs/utils";

const accordionVariants = cva(
    "w-full rounded-lg border overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "border-gray-200 bg-white",

                dark:
                    "border-slate-700 bg-slate-900 text-white",

                outline:
                    "border-gray-300 bg-transparent",

                filled:
                    "border-transparent bg-gray-100",
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

const accordionItemVariants = cva(
    "border-b last:border-b-0",
    {
        variants: {
            variant: {
                default: "border-gray-200",

                dark: "border-slate-700",

                outline: "border-gray-300",

                filled: "border-gray-200",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    }
);

interface AccordionContextType {
    openItems: string[];
    toggleItem: (value: string) => void;
    multiple: boolean;
    variant:
    | "default"
    | "dark"
    | "outline"
    | "filled";
    size: "sm" | "md" | "lg";
}

const AccordionContext =
    createContext < AccordionContextType | null > (
        null
    );

interface AccordionProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
    multiple?: boolean;

    defaultValue?: string[];

    value?: string[];

    onValueChange?: (value: string[]) => void;
}

const Accordion = React.forwardRef <
    HTMLDivElement,
    AccordionProps
> (
    (
        {
            multiple = false,
            defaultValue = [],
            value,
            onValueChange,
            variant = "default",
            size = "md",
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [internalOpenItems, setInternalOpenItems] =
            useState < string[] > (defaultValue);

        const openItems =
            value !== undefined
                ? value
                : internalOpenItems;

        const toggleItem = (itemValue: string) => {
            let newValue: string[];

            const isOpen =
                openItems.includes(itemValue);

            if (multiple) {
                newValue = isOpen
                    ? openItems.filter(
                        (item) => item !== itemValue
                    )
                    : [...openItems, itemValue];
            } else {
                newValue = isOpen
                    ? []
                    : [itemValue];
            }

            if (value === undefined) {
                setInternalOpenItems(newValue);
            }

            onValueChange?.(newValue);
        };

        return (
            <AccordionContext.Provider
                value={{
                    openItems,
                    toggleItem,
                    multiple,
                    variant:
                        variant || "default",
                    size: size || "md",
                }}
            >
                <div
                    ref={ref}
                    className={cn(
                        accordionVariants({
                            variant,
                            size,
                        }),
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);

Accordion.displayName = "Accordion";

interface AccordionItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    disabled?: boolean;
}

const AccordionItem = React.forwardRef <
    HTMLDivElement,
    AccordionItemProps
> (
    (
        {
            value,
            disabled = false,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const context =
            useContext(AccordionContext);

        if (!context) {
            throw new Error(
                "AccordionItem must be used inside Accordion"
            );
        }

        return (
            <div
                ref={ref}
                className={cn(
                    accordionItemVariants({
                        variant: context.variant,
                    }),
                    className
                )}
                data-state={
                    context.openItems.includes(value)
                        ? "open"
                        : "closed"
                }
                {...props}
            >
                {React.Children.map(
                    children,
                    (child) => {
                        if (
                            React.isValidElement(child)
                        ) {
                            return React.cloneElement(
                                child as React.ReactElement<any>,
                                {
                                    value,
                                    disabled,
                                }
                            );
                        }

                        return child;
                    }
                )}
            </div>
        );
    }
);

AccordionItem.displayName =
    "AccordionItem";

interface AccordionTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value?: string;
    disabled?: boolean;
}

const AccordionTrigger =
    React.forwardRef <
    HTMLButtonElement,
    AccordionTriggerProps
  > (
    (
        {
            value,
            disabled = false,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const context =
            useContext(AccordionContext);

        if (!context) {
            throw new Error(
                "AccordionTrigger must be used inside Accordion"
            );
        }

        const isOpen =
            value !== undefined &&
            context.openItems.includes(value);

        return (
            <button
                ref={ref}
                type="button"
                disabled={disabled}
                onClick={() => {
                    if (!disabled && value) {
                        context.toggleItem(value);
                    }
                }}
                aria-expanded={isOpen}
                className={cn(
                    "flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium transition-all",
                    "hover:bg-gray-50",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",

                    context.variant === "dark" &&
                    "hover:bg-slate-800",

                    context.variant === "filled" &&
                    "hover:bg-gray-200",

                    disabled &&
                    "cursor-not-allowed opacity-50",

                    className
                )}
                {...props}
            >
                <span>{children}</span>

                <ChevronDown
                    className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300",

                        isOpen &&
                        "rotate-180",

                        context.variant === "dark"
                            ? "text-gray-300"
                            : "text-gray-500"
                    )}
                />
            </button>
        );
    }
);

AccordionTrigger.displayName =
    "AccordionTrigger";

interface AccordionContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
}

const AccordionContent =
    React.forwardRef <
    HTMLDivElement,
    AccordionContentProps
  > (
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
            useContext(AccordionContext);

        if (!context) {
            throw new Error(
                "AccordionContent must be used inside Accordion"
            );
        }

        const isOpen =
            value !== undefined &&
            context.openItems.includes(value);

        return (
            <div
                ref={ref}
                data-state={
                    isOpen
                        ? "open"
                        : "closed"
                }
                className={cn(
                    "grid transition-all duration-300 ease-in-out",

                    isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",

                    className
                )}
                {...props}
            >
                <div className="overflow-hidden">
                    <div
                        className={cn(
                            "px-4 pb-4 pt-0 leading-7",

                            context.variant ===
                                "dark"
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

AccordionContent.displayName =
    "AccordionContent";

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    accordionVariants,
};