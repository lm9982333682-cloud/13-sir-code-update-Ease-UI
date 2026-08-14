"use client";

import React, {
    useCallback,
    useEffect,
    useState,
} from "react";
import {
    cva,
    type VariantProps,
} from "class-variance-authority";
import {
    Check,
    Copy,
    RefreshCw,
} from "lucide-react";
import { cn } from "@/libs/utils";

const randomColorVariants = cva(
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

interface RandomColorProps
    extends Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "onChange"
    >,
    VariantProps<typeof randomColorVariants> {
    initialColor?: string;
    format?: "hex" | "rgb" | "hsl";
    showValue?: boolean;
    showCopy?: boolean;
    showGenerateButton?: boolean;
    buttonText?: string;
    autoGenerate?: boolean;
    interval?: number;

    onChange?: (color: string) => void;
}

const generateRandomHex = (): string => {
    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {
        color +=
            letters[
            Math.floor(
                Math.random() * letters.length
            )
            ];
    }

    return color;
};

const hexToRgb = (
    hex: string
): {
    r: number;
    g: number;
    b: number;
} => {
    const cleanHex = hex.replace("#", "");

    const bigint = parseInt(cleanHex, 16);

    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
};

const rgbToHsl = (
    r: number,
    g: number,
    b: number
): {
    h: number;
    s: number;
    l: number;
} => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0;
    let s = 0;

    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;

        s =
            l > 0.5
                ? d / (2 - max - min)
                : d / (max + min);

        switch (max) {
            case r:
                h =
                    (g - b) / d +
                    (g < b ? 6 : 0);
                break;

            case g:
                h =
                    (b - r) / d + 2;
                break;

            case b:
                h =
                    (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
};

const getColorValue = (
    color: string,
    format: "hex" | "rgb" | "hsl"
): string => {
    const rgb = hexToRgb(color);

    switch (format) {
        case "rgb":
            return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

        case "hsl": {
            const hsl = rgbToHsl(
                rgb.r,
                rgb.g,
                rgb.b
            );

            return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
        }

        case "hex":
        default:
            return color;
    }
};

const RandomColor = React.forwardRef<
    HTMLDivElement,
    RandomColorProps
>(
    (
        {
            initialColor = "#3B82F6",
            format = "hex",
            showValue = true,
            showCopy = true,
            showGenerateButton = true,
            buttonText = "Generate Color",
            autoGenerate = false,
            interval = 3000,
            onChange,
            variant,
            size,
            className,
            ...props
        },
        ref
    ) => {
        const [color, setColor] =
            useState<string>(initialColor);

        const [copied, setCopied] =
            useState<boolean>(false);

        const generateColor = useCallback(() => {
            const newColor =
                generateRandomHex();

            setColor(newColor);
            setCopied(false);

            onChange?.(newColor);
        }, [onChange]);

        useEffect(() => {
            if (!autoGenerate) {
                return;
            }

            const timer: ReturnType<
                typeof setInterval
            > = setInterval(() => {
                generateColor();
            }, interval);

            return () => {
                clearInterval(timer);
            };
        }, [
            autoGenerate,
            interval,
            generateColor,
        ]);

        const colorValue = getColorValue(
            color,
            format
        );

        const handleCopy = async (): Promise<void> => {
            try {
                await navigator.clipboard.writeText(
                    colorValue
                );

                setCopied(true);

                window.setTimeout(() => {
                    setCopied(false);
                }, 1500);
            } catch (error) {
                console.error(
                    "Failed to copy color:",
                    error
                );
            }
        };

        const previewHeight =
            size === "sm"
                ? "h-32"
                : size === "lg"
                    ? "h-64"
                    : "h-48";

        return (
            <div
                ref={ref}
                className={cn(
                    randomColorVariants({
                        variant,
                        size,
                    }),
                    className
                )}
                {...props}
            >
                {/* Color Preview */}

                <div
                    className={cn(
                        "w-full rounded-lg border shadow-inner",
                        previewHeight
                    )}
                    style={{
                        backgroundColor: color,
                    }}
                    aria-label={`Selected color ${color}`}
                />

                {/* Color Information */}

                {showValue && (
                    <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                            <p
                                className={cn(
                                    "text-xs uppercase tracking-wide",
                                    variant === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                )}
                            >
                                Color
                            </p>

                            <code
                                className={cn(
                                    "block truncate text-lg font-semibold",
                                    variant === "dark"
                                        ? "text-white"
                                        : "text-gray-800"
                                )}
                            >
                                {colorValue}
                            </code>
                        </div>

                        {showCopy && (
                            <button
                                type="button"
                                onClick={handleCopy}
                                className={cn(
                                    "shrink-0 rounded-md p-2 transition",
                                    variant === "dark"
                                        ? "text-gray-300 hover:bg-slate-800"
                                        : "text-gray-500 hover:bg-gray-100"
                                )}
                                aria-label="Copy color"
                            >
                                {copied ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    <Copy className="h-5 w-5" />
                                )}
                            </button>
                        )}
                    </div>
                )}

                {/* Generate Button */}

                {showGenerateButton && (
                    <button
                        type="button"
                        onClick={generateColor}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
                    >
                        <RefreshCw className="h-4 w-4" />

                        {buttonText}
                    </button>
                )}
            </div>
        );
    }
);

RandomColor.displayName =
    "RandomColor";

export {
    RandomColor,
    randomColorVariants,
};