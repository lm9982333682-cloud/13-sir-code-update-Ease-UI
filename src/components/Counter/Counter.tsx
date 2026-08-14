"use client";

import React, {
    forwardRef,
    useEffect,
    useState,
} from "react";

import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import {
    Minus,
    Plus,
} from "lucide-react";

import { cn } from "@/libs/utils";


// =====================================================
// Counter Variants
// =====================================================

const counterVariants = cva(
    "inline-flex items-center rounded-lg transition-all duration-200",
    {
        variants: {
            variant: {
                default:
                    "border border-gray-200 bg-white shadow-sm",

                outline:
                    "border border-gray-300 bg-transparent",

                dark:
                    "border border-slate-700 bg-slate-900 text-white",

                filled:
                    "border border-transparent bg-gray-100",
            },

            size: {
                sm:
                    "h-9",

                md:
                    "h-11",

                lg:
                    "h-13",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);


// =====================================================
// Counter Props
// =====================================================

interface CounterProps
    extends Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "onChange"
    >,
    VariantProps<typeof counterVariants> {

    /**
     * Initial value for uncontrolled counter
     */
    initialValue?: number;

    /**
     * Controlled value
     */
    value?: number;

    /**
     * Minimum allowed value
     */
    min?: number;

    /**
     * Maximum allowed value
     */
    max?: number;

    /**
     * Increment / decrement amount
     */
    step?: number;

    /**
     * Callback when value changes
     */
    onChange?: (value: number) => void;

    /**
     * Disable entire counter
     */
    disabled?: boolean;

    /**
     * Prevent changing value
     */
    readOnly?: boolean;

    /**
     * Hide minus button
     */
    hideDecrement?: boolean;

    /**
     * Hide plus button
     */
    hideIncrement?: boolean;

    /**
     * Custom minus icon
     */
    decrementIcon?: React.ReactNode;

    /**
     * Custom plus icon
     */
    incrementIcon?: React.ReactNode;

    /**
     * Show current value
     */
    showValue?: boolean;

    /**
     * Custom value renderer
     */
    renderValue?: (
        value: number
    ) => React.ReactNode;
}


// =====================================================
// Counter Component
// =====================================================

const Counter = forwardRef<
    HTMLDivElement,
    CounterProps
>(
    (
        {
            initialValue = 0,
            value,
            min = 0,
            max = Infinity,
            step = 1,

            onChange,

            disabled = false,
            readOnly = false,

            hideDecrement = false,
            hideIncrement = false,

            decrementIcon,
            incrementIcon,

            showValue = true,
            renderValue,

            variant,
            size,

            className,
            ...props
        },
        ref
    ) => {

        // =================================================
        // State
        // =================================================

        const [internalValue, setInternalValue] =
            useState(
                Math.min(
                    Math.max(
                        initialValue,
                        min
                    ),
                    max
                )
            );


        // =================================================
        // Controlled / Uncontrolled
        // =================================================

        const currentValue =
            value !== undefined
                ? Math.min(
                    Math.max(value, min),
                    max
                )
                : internalValue;


        // =================================================
        // Sync initial value
        // =================================================

        useEffect(() => {

            if (
                value === undefined
            ) {
                setInternalValue(
                    Math.min(
                        Math.max(
                            initialValue,
                            min
                        ),
                        max
                    )
                );
            }

        }, [
            initialValue,
            min,
            max,
            value,
        ]);


        // =================================================
        // Change Value
        // =================================================

        const updateValue = (
            newValue: number
        ) => {

            const nextValue = Math.min(
                Math.max(
                    newValue,
                    min
                ),
                max
            );


            if (
                nextValue === currentValue
            ) {
                return;
            }


            if (
                value === undefined
            ) {
                setInternalValue(
                    nextValue
                );
            }


            onChange?.(
                nextValue
            );
        };


        // =================================================
        // Increment
        // =================================================

        const increment = () => {

            if (
                disabled ||
                readOnly
            ) {
                return;
            }

            updateValue(
                currentValue + step
            );
        };


        // =================================================
        // Decrement
        // =================================================

        const decrement = () => {

            if (
                disabled ||
                readOnly
            ) {
                return;
            }

            updateValue(
                currentValue - step
            );
        };


        // =================================================
        // Button Size
        // =================================================

        const buttonSize =
            size === "sm"
                ? "h-9 w-9"
                : size === "lg"
                    ? "h-13 w-13"
                    : "h-11 w-11";


        const valueSize =
            size === "sm"
                ? "min-w-10 text-sm"
                : size === "lg"
                    ? "min-w-16 text-lg"
                    : "min-w-12 text-base";


        // =================================================
        // Disabled States
        // =================================================

        const decrementDisabled =
            disabled ||
            readOnly ||
            currentValue <= min;


        const incrementDisabled =
            disabled ||
            readOnly ||
            currentValue >= max;


        // =================================================
        // Render
        // =================================================

        return (

            <div
                ref={ref}

                className={cn(
                    counterVariants({
                        variant,
                        size,
                    }),

                    disabled &&
                    "cursor-not-allowed opacity-50",

                    className
                )}

                {...props}
            >


                {/* =============================================
            Decrement
        ============================================= */}

                {!hideDecrement && (

                    <button
                        type="button"

                        onClick={
                            decrement
                        }

                        disabled={
                            decrementDisabled
                        }

                        aria-label="Decrease value"

                        className={cn(
                            buttonSize,

                            "inline-flex",
                            "items-center",
                            "justify-center",
                            "rounded-md",
                            "transition-colors",

                            variant === "dark"
                                ? "text-gray-200 hover:bg-slate-800"
                                : "text-gray-700 hover:bg-gray-100",

                            "disabled:pointer-events-none",
                            "disabled:opacity-40"
                        )}
                    >

                        {decrementIcon ?? (
                            <Minus
                                className="h-4 w-4"
                            />
                        )}

                    </button>

                )}


                {/* =============================================
            Value
        ============================================= */}

                {showValue && (

                    <div
                        className={cn(
                            valueSize,

                            "flex",
                            "items-center",
                            "justify-center",
                            "select-none",
                            "font-semibold",

                            variant === "dark"
                                ? "text-white"
                                : "text-gray-800"
                        )}
                        aria-live="polite"
                    >

                        {renderValue
                            ? renderValue(
                                currentValue
                            )
                            : currentValue}

                    </div>

                )}


                {/* =============================================
            Increment
        ============================================= */}

                {!hideIncrement && (

                    <button
                        type="button"

                        onClick={
                            increment
                        }

                        disabled={
                            incrementDisabled
                        }

                        aria-label="Increase value"

                        className={cn(
                            buttonSize,

                            "inline-flex",
                            "items-center",
                            "justify-center",
                            "rounded-md",
                            "transition-colors",

                            variant === "dark"
                                ? "text-gray-200 hover:bg-slate-800"
                                : "text-gray-700 hover:bg-gray-100",

                            "disabled:pointer-events-none",
                            "disabled:opacity-40"
                        )}
                    >

                        {incrementIcon ?? (
                            <Plus
                                className="h-4 w-4"
                            />
                        )}

                    </button>

                )}

            </div>
        );
    }
);


Counter.displayName =
    "Counter";


// =====================================================
// Export
// =====================================================

export {
    Counter,
    counterVariants,
};

export type {
    CounterProps,
};