import React, { useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import {
    Check,
    CheckCircle2,
    CircleCheck,
    MailCheck,
    ShieldCheck,
    UserCheck,
} from "lucide-react";

const successVariants = cva(
    "flex flex-col items-center justify-center text-center",
    {
        variants: {
            variant: {
                default: "text-gray-800",
                success: "text-green-600",
                dark: "text-white",
                outline:
                    "rounded-xl border border-green-200 bg-white text-gray-800",
            },

            size: {
                sm: "gap-2 p-4",
                md: "gap-4 p-6",
                lg: "gap-6 p-10",
            },
        },

        defaultVariants: {
            variant: "success",
            size: "md",
        },
    }
);

interface SuccessProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof successVariants> {
    title?: string;
    description?: string;

    successType?:
    | "default"
    | "payment"
    | "email"
    | "profile"
    | "security";

    showIcon?: boolean;

    action?: React.ReactNode;

    onContinue?: () => void;

    continueText?: string;

    fullPage?: boolean;

    autoHide?: boolean;

    duration?: number;
}

const Success = React.forwardRef<HTMLDivElement, SuccessProps>(
    (
        {
            title,
            description,
            successType = "default",
            showIcon = true,
            action,
            onContinue,
            continueText = "Continue",
            fullPage = false,
            autoHide = false,
            duration = 3000,
            variant,
            size,
            className,
            ...props
        },
        ref
    ) => {
        useEffect(() => {
            if (!autoHide || !onContinue) return;

            const timer = setTimeout(() => {
                onContinue();
            }, duration);

            return () => clearTimeout(timer);
        }, [autoHide, duration, onContinue]);

        const successConfig = {
            default: {
                title: "Success!",
                description: "Your action has been completed successfully.",
                icon: CheckCircle2,
            },

            payment: {
                title: "Payment Successful!",
                description:
                    "Your payment has been processed successfully.",
                icon: CircleCheck,
            },

            email: {
                title: "Email Verified!",
                description:
                    "Your email address has been verified successfully.",
                icon: MailCheck,
            },

            profile: {
                title: "Profile Updated!",
                description:
                    "Your profile has been updated successfully.",
                icon: UserCheck,
            },

            security: {
                title: "Security Verified!",
                description:
                    "Your security settings have been updated successfully.",
                icon: ShieldCheck,
            },
        };

        const config = successConfig[successType];

        const Icon = config.icon;

        const content = (
            <div
                ref={ref}
                role="status"
                aria-live="polite"
                className={cn(
                    successVariants({
                        variant,
                        size,
                    }),
                    className
                )}
                {...props}
            >
                {/* Success Icon */}

                {showIcon && (
                    <div
                        className={cn(
                            "flex items-center justify-center rounded-full bg-green-100",

                            size === "sm" && "h-10 w-10",
                            size === "md" && "h-14 w-14",
                            size === "lg" && "h-20 w-20",

                            variant === "dark" &&
                            "bg-green-900/40"
                        )}
                    >
                        <Icon
                            className={cn(
                                "text-green-600",

                                size === "sm" && "h-5 w-5",
                                size === "md" && "h-7 w-7",
                                size === "lg" && "h-10 w-10",

                                variant === "dark" &&
                                "text-green-400"
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
                    {title || config.title}
                </h2>

                {/* Description */}

                {(description || config.description) && (
                    <p
                        className={cn(
                            "max-w-md",

                            size === "sm" && "text-sm",
                            size === "md" && "text-base",
                            size === "lg" && "text-lg",

                            variant === "dark"
                                ? "text-gray-300"
                                : "text-gray-500"
                        )}
                    >
                        {description || config.description}
                    </p>
                )}

                {/* Continue Button */}

                {onContinue && (
                    <button
                        type="button"
                        onClick={onContinue}
                        className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                    >
                        <Check className="h-4 w-4" />

                        {continueText}
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

Success.displayName = "Success";

export {
    Success,
    successVariants,
};