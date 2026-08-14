import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const formVariants = cva(
    "w-full",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                card: "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
                dark: "rounded-lg bg-slate-900 p-6 text-white",
            },

            layout: {
                vertical: "flex flex-col",
                horizontal: "grid grid-cols-1 md:grid-cols-2",
            },

            gap: {
                sm: "gap-3",
                md: "gap-5",
                lg: "gap-8",
            },
        },

        defaultVariants: {
            variant: "default",
            layout: "vertical",
            gap: "md",
        },
    }
);

interface FormProps
    extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
    children: React.ReactNode;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
    (
        {
            children,
            className,
            variant,
            layout,
            gap,
            ...props
        },
        ref
    ) => {
        return (
            <form
                ref={ref}
                className={cn(
                    formVariants({
                        variant,
                        layout,
                        gap,
                    }),
                    className
                )}
                {...props}
            >
                {children}
            </form>
        );
    }
);

Form.displayName = "Form";

export { Form, formVariants };