import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const layoutVariants = cva(
    "w-full min-h-screen flex",
    {
        variants: {
            variant: {
                default: "bg-white text-gray-900",
                light: "bg-gray-50 text-gray-900",
                dark: "bg-slate-900 text-white",
            },
            direction: {
                row: "flex-row",
                column: "flex-col",
            },
            spacing: {
                none: "",
                sm: "gap-2",
                md: "gap-4",
                lg: "gap-6",
            },
        },
        defaultVariants: {
            variant: "default",
            direction: "column",
            spacing: "none",
        },
    }
);

interface LayoutProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    sidebarWidth?: string;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
    (
        {
            header,
            sidebar,
            footer,
            children,
            variant,
            direction,
            spacing,
            sidebarWidth = "w-64",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    layoutVariants({
                        variant,
                        direction,
                        spacing,
                    }),
                    className
                )}
                {...props}
            >
                {/* Header */}
                {header && (
                    <header className="w-full border-b border-gray-200">
                        {header}
                    </header>
                )}

                {/* Main Layout */}
                <div className="flex flex-1 w-full">

                    {/* Sidebar */}
                    {sidebar && (
                        <aside
                            className={cn(
                                sidebarWidth,
                                "shrink-0 border-r border-gray-200 p-4"
                            )}
                        >
                            {sidebar}
                        </aside>
                    )}

                    {/* Content */}
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>

                {/* Footer */}
                {footer && (
                    <footer className="w-full border-t border-gray-200 p-4">
                        {footer}
                    </footer>
                )}
            </div>
        );
    }
);

Layout.displayName = "Layout";

export { Layout, layoutVariants };