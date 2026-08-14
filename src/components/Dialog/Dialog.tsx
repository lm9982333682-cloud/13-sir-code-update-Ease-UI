"use client";

import React, {
    useEffect,
    useState,
} from "react";

import {
    createPortal,
} from "react-dom";

import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import {
    X,
} from "lucide-react";

import { cn } from "@/libs/utils";


// =====================================================
// Dialog Variants
// =====================================================

const dialogVariants = cva(
    "relative w-full rounded-xl bg-white shadow-2xl",
    {
        variants: {

            size: {
                sm: "max-w-sm",
                md: "max-w-lg",
                lg: "max-w-2xl",
                xl: "max-w-4xl",
                full: "max-w-[95vw]",
            },

            variant: {
                default:
                    "border border-gray-200",

                outline:
                    "border-2 border-gray-300",

                dark:
                    "border border-slate-700 bg-slate-900 text-white",

                glass:
                    "border border-white/20 bg-white/90 backdrop-blur-xl",
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

interface DialogProps
    extends Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "title"
    >,
    VariantProps<typeof dialogVariants> {

    /**
     * Initially open
     */
    defaultOpen?: boolean;

    /**
     * Controlled open state
     */
    open?: boolean;

    /**
     * Callback when dialog state changes
     */
    onOpenChange?: (
        open: boolean
    ) => void;

    /**
     * Dialog title
     */
    title?: React.ReactNode;

    /**
     * Dialog description
     */
    description?: React.ReactNode;

    /**
     * Element which opens dialog
     */
    trigger?: React.ReactNode;

    /**
     * Dialog footer
     */
    footer?: React.ReactNode;

    /**
     * Show close button
     */
    showCloseButton?: boolean;

    /**
     * Close when clicking overlay
     */
    closeOnOverlayClick?: boolean;

    /**
     * Close when pressing Escape
     */
    closeOnEscape?: boolean;

    /**
     * Disable dialog
     */
    disabled?: boolean;

    /**
     * Dialog content
     */
    children?: React.ReactNode;
}


// =====================================================
// Dialog
// =====================================================

const Dialog = React.forwardRef<
    HTMLDivElement,
    DialogProps
>(
    (
        {
            defaultOpen = false,

            open,
            onOpenChange,

            title,
            description,

            trigger,
            footer,

            size,
            variant,

            showCloseButton = true,

            closeOnOverlayClick = true,

            closeOnEscape = true,

            disabled = false,

            className,

            children,

            ...props
        },
        ref
    ) => {

        // =================================================
        // State
        // =================================================

        const [
            internalOpen,
            setInternalOpen,
        ] = useState(defaultOpen);


        const isControlled =
            open !== undefined;


        const isOpen =
            isControlled
                ? open
                : internalOpen;


        // =================================================
        // Mounted
        // =================================================

        const [
            mounted,
            setMounted,
        ] = useState(false);


        useEffect(() => {
            setMounted(true);

            return () => {
                setMounted(false);
            };
        }, []);


        // =================================================
        // Open / Close
        // =================================================

        const handleOpenChange = (
            nextOpen: boolean
        ) => {

            if (disabled) {
                return;
            }


            if (!isControlled) {
                setInternalOpen(
                    nextOpen
                );
            }


            onOpenChange?.(
                nextOpen
            );
        };


        const openDialog = () => {
            handleOpenChange(true);
        };


        const closeDialog = () => {
            handleOpenChange(false);
        };


        // =================================================
        // Escape Key
        // =================================================

        useEffect(() => {

            if (
                !isOpen ||
                !closeOnEscape
            ) {
                return;
            }


            const handleKeyDown = (
                event: KeyboardEvent
            ) => {

                if (
                    event.key === "Escape"
                ) {

                    closeDialog();

                }

            };


            document.addEventListener(
                "keydown",
                handleKeyDown
            );


            return () => {

                document.removeEventListener(
                    "keydown",
                    handleKeyDown
                );

            };

        }, [
            isOpen,
            closeOnEscape,
        ]);


        // =================================================
        // Body Scroll Lock
        // =================================================

        useEffect(() => {

            if (!isOpen) {
                return;
            }


            const originalOverflow =
                document.body.style.overflow;


            document.body.style.overflow =
                "hidden";


            return () => {

                document.body.style.overflow =
                    originalOverflow;

            };

        }, [isOpen]);


        // =================================================
        // Trigger
        // =================================================

        const triggerElement =
            trigger
                ? React.cloneElement(
                    trigger as React.ReactElement<{
                        onClick?: (
                            event: React.MouseEvent
                        ) => void;
                    }>,
                    {
                        onClick: (
                            event: React.MouseEvent
                        ) => {
                            const originalOnClick =
                                (
                                    trigger as React.ReactElement<{
                                        onClick?: (
                                            event: React.MouseEvent
                                        ) => void;
                                    }>
                                ).props.onClick;

                            originalOnClick?.(event);

                            if (!event.defaultPrevented) {
                                openDialog();
                            }
                        },
                    }
                )
                : null;


        // =================================================
        // Dialog UI
        // =================================================

        const dialogContent = (

            <div
                className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          p-4
        "
                role="presentation"
            >

                {/* Overlay */}

                <div
                    className="
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm
            animate-in
            fade-in
            duration-200
          "
                    onMouseDown={() => {

                        if (
                            closeOnOverlayClick
                        ) {

                            closeDialog();

                        }

                    }}
                />


                {/* Dialog */}

                <div
                    ref={ref}

                    role="dialog"

                    aria-modal="true"

                    aria-labelledby={
                        title
                            ? "dialog-title"
                            : undefined
                    }

                    aria-describedby={
                        description
                            ? "dialog-description"
                            : undefined
                    }

                    className={cn(
                        dialogVariants({
                            size,
                            variant,
                        }),

                        "z-10",

                        "animate-in",
                        "fade-in",
                        "zoom-in-95",
                        "duration-200",

                        className
                    )}

                    onMouseDown={(
                        event
                    ) => {
                        event.stopPropagation();
                    }}

                    {...props}
                >


                    {/* ==========================================
              Header
          ========================================== */}

                    {(title ||
                        description ||
                        showCloseButton) && (

                            <div
                                className="
                flex
                items-start
                justify-between
                gap-4
                border-b
                border-gray-200
                px-5
                py-4
              "
                            >

                                <div className="min-w-0">

                                    {title && (

                                        <h2
                                            id="dialog-title"
                                            className="
                      text-lg
                      font-semibold
                      text-gray-900
                    "
                                        >
                                            {title}
                                        </h2>

                                    )}


                                    {description && (

                                        <p
                                            id="dialog-description"
                                            className="
                      mt-1
                      text-sm
                      text-gray-500
                    "
                                        >
                                            {description}
                                        </p>

                                    )}

                                </div>


                                {showCloseButton && (

                                    <button
                                        type="button"

                                        onClick={
                                            closeDialog
                                        }

                                        className="
                    shrink-0
                    rounded-md
                    p-1.5
                    text-gray-500
                    transition
                    hover:bg-gray-100
                    hover:text-gray-900
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "

                                        aria-label="Close dialog"
                                    >

                                        <X
                                            className="
                      h-5
                      w-5
                    "
                                        />

                                    </button>

                                )}

                            </div>

                        )}


                    {/* ==========================================
              Content
          ========================================== */}

                    <div
                        className="
              max-h-[70vh]
              overflow-y-auto
              px-5
              py-5
            "
                    >

                        {children}

                    </div>


                    {/* ==========================================
              Footer
          ========================================== */}

                    {footer && (

                        <div
                            className="
                flex
                items-center
                justify-end
                gap-2
                border-t
                border-gray-200
                px-5
                py-4
              "
                        >

                            {footer}

                        </div>

                    )}

                </div>

            </div>
        );


        // =================================================
        // Render
        // =================================================

        return (

            <>
                {triggerElement}

                {mounted &&
                    isOpen &&
                    createPortal(
                        dialogContent,
                        document.body
                    )}

            </>
        );
    }
);


Dialog.displayName =
    "Dialog";


// =====================================================
// Export
// =====================================================

export {
    Dialog,
    dialogVariants,
};

export type {
    DialogProps,
};