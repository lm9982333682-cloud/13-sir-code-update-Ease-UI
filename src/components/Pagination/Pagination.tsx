"use client";

import React, {
    forwardRef,
    useMemo,
} from "react";

import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

import { cn } from "@/libs/utils";


// =====================================================
// Pagination Variants
// =====================================================

const paginationVariants = cva(
    "inline-flex items-center gap-1",
    {
        variants: {
            variant: {
                default:
                    "text-gray-700",

                outline:
                    "text-gray-700",

                dark:
                    "text-gray-200",

                filled:
                    "rounded-lg bg-gray-100 p-1",
            },

            size: {
                sm:
                    "text-xs",

                md:
                    "text-sm",

                lg:
                    "text-base",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);


// =====================================================
// Pagination Props
// =====================================================

interface PaginationProps
    extends Omit<
        React.HTMLAttributes<HTMLElement>,
        "onChange"
    >,
    VariantProps<typeof paginationVariants> {

    /**
     * Total number of pages
     */
    totalPages: number;

    /**
     * Current active page
     */
    currentPage?: number;

    /**
     * Default page for uncontrolled pagination
     */
    defaultPage?: number;

    /**
     * Called whenever page changes
     */
    onPageChange?: (
        page: number
    ) => void;

    /**
     * Number of page buttons visible around current page
     */
    siblingCount?: number;

    /**
     * Show first page button
     */
    showFirst?: boolean;

    /**
     * Show last page button
     */
    showLast?: boolean;

    /**
     * Show previous button
     */
    showPrevious?: boolean;

    /**
     * Show next button
     */
    showNext?: boolean;

    /**
     * Text for previous button
     */
    previousText?: string;

    /**
     * Text for next button
     */
    nextText?: string;

    /**
     * Disable complete pagination
     */
    disabled?: boolean;
}


// =====================================================
// Pagination Component
// =====================================================

const Pagination = forwardRef <
    HTMLElement,
    PaginationProps
> (
    (
        {
            totalPages,

            currentPage,

            defaultPage = 1,

            onPageChange,

            siblingCount = 1,

            showFirst = true,
            showLast = true,
            showPrevious = true,
            showNext = true,

            previousText,
            nextText,

            disabled = false,

            variant,
            size,

            className,
            ...props
        },
        ref
    ) => {

        // =================================================
        // Current Page
        // =================================================

        const page =
            currentPage ?? defaultPage;


        // =================================================
        // Safe Values
        // =================================================

        const safeTotalPages =
            Math.max(
                1,
                Math.floor(totalPages)
            );

        const safeCurrentPage =
            Math.min(
                Math.max(
                    1,
                    Math.floor(page)
                ),
                safeTotalPages
            );


        // =================================================
        // Change Page
        // =================================================

        const changePage = (
            nextPage: number
        ) => {

            if (
                disabled ||
                nextPage < 1 ||
                nextPage > safeTotalPages ||
                nextPage === safeCurrentPage
            ) {
                return;
            }

            onPageChange?.(
                nextPage
            );
        };


        // =================================================
        // Page Range
        // =================================================

        const pages = useMemo(() => {

            const totalNumbers =
                siblingCount * 2 + 5;

            if (
                totalNumbers >=
                safeTotalPages
            ) {
                return Array.from(
                    {
                        length:
                            safeTotalPages,
                    },
                    (_, index) =>
                        index + 1
                );
            }


            const leftSiblingIndex =
                Math.max(
                    safeCurrentPage -
                    siblingCount,
                    1
                );

            const rightSiblingIndex =
                Math.min(
                    safeCurrentPage +
                    siblingCount,
                    safeTotalPages
                );


            const showLeftDots =
                leftSiblingIndex > 2;

            const showRightDots =
                rightSiblingIndex <
                safeTotalPages - 1;


            if (
                !showLeftDots &&
                showRightDots
            ) {

                const leftItemCount =
                    3 +
                    siblingCount * 2;

                const leftRange =
                    Array.from(
                        {
                            length:
                                leftItemCount,
                        },
                        (_, index) =>
                            index + 1
                    );

                return [
                    ...leftRange,
                    "...",
                    safeTotalPages,
                ];
            }


            if (
                showLeftDots &&
                !showRightDots
            ) {

                const rightItemCount =
                    3 +
                    siblingCount * 2;

                const rightRange =
                    Array.from(
                        {
                            length:
                                rightItemCount,
                        },
                        (_, index) =>
                            safeTotalPages -
                            rightItemCount +
                            index +
                            1
                    );

                return [
                    1,
                    "...",
                    ...rightRange,
                ];
            }


            if (
                showLeftDots &&
                showRightDots
            ) {

                const middleRange =
                    Array.from(
                        {
                            length:
                                rightSiblingIndex -
                                leftSiblingIndex +
                                1,
                        },
                        (_, index) =>
                            leftSiblingIndex +
                            index
                    );

                return [
                    1,
                    "...",
                    ...middleRange,
                    "...",
                    safeTotalPages,
                ];
            }


            return [];

        }, [
            safeCurrentPage,
            safeTotalPages,
            siblingCount,
        ]);


        // =================================================
        // Button Classes
        // =================================================

        const buttonSize =
            size === "sm"
                ? "h-8 min-w-8 px-2"
                : size === "lg"
                    ? "h-11 min-w-11 px-3"
                    : "h-9 min-w-9 px-2.5";


        const iconSize =
            size === "sm"
                ? "h-3.5 w-3.5"
                : size === "lg"
                    ? "h-5 w-5"
                    : "h-4 w-4";


        const baseButton =
            cn(
                buttonSize,

                "inline-flex",
                "items-center",
                "justify-center",
                "rounded-md",
                "font-medium",
                "transition-colors",
                "select-none",

                "disabled:pointer-events-none",
                "disabled:opacity-40",

                variant === "dark"
                    ? "text-gray-200 hover:bg-slate-800"
                    : "text-gray-700 hover:bg-gray-100"
            );


        const activeButton =
            variant === "dark"
                ? "bg-blue-600 text-white hover:bg-blue-600"
                : "bg-blue-600 text-white hover:bg-blue-700";


        // =================================================
        // Render
        // =================================================

        return (

            <nav
                ref={ref}

                aria-label="Pagination"

                className={cn(
                    paginationVariants({
                        variant,
                        size,
                    }),

                    disabled &&
                    "pointer-events-none opacity-50",

                    className
                )}

                {...props}
            >


                {/* =============================================
            First
        ============================================= */}

                {showFirst && (

                    <button
                        type="button"

                        onClick={() =>
                            changePage(1)
                        }

                        disabled={
                            disabled ||
                            safeCurrentPage === 1
                        }

                        aria-label="First page"

                        className={baseButton}
                    >

                        <ChevronsLeft
                            className={iconSize}
                        />

                    </button>

                )}


                {/* =============================================
            Previous
        ============================================= */}

                {showPrevious && (

                    <button
                        type="button"

                        onClick={() =>
                            changePage(
                                safeCurrentPage - 1
                            )
                        }

                        disabled={
                            disabled ||
                            safeCurrentPage === 1
                        }

                        aria-label="Previous page"

                        className={cn(
                            baseButton,

                            previousText &&
                            "gap-1.5"
                        )}
                    >

                        <ChevronLeft
                            className={iconSize}
                        />

                        {previousText && (
                            <span>
                                {previousText}
                            </span>
                        )}

                    </button>

                )}


                {/* =============================================
            Page Numbers
        ============================================= */}

                {pages.map(
                    (item, index) => {

                        if (
                            item === "..."
                        ) {

                            return (

                                <span
                                    key={`ellipsis-${index}`}
                                    className={cn(
                                        buttonSize,
                                        "inline-flex",
                                        "items-center",
                                        "justify-center",
                                        "text-gray-400"
                                    )}
                                    aria-hidden="true"
                                >
                                    ...
                                </span>

                            );
                        }


                        const pageNumber = item as number;


                        const isActive = pageNumber === safeCurrentPage;


                        return (

                            <button
                                key={pageNumber}

                                type="button"

                                onClick={() =>
                                    changePage(
                                        pageNumber
                                    )
                                }

                                disabled={disabled}

                                aria-label={`Page ${pageNumber}`}

                                aria-current={
                                    isActive
                                        ? "page"
                                        : undefined
                                }

                                className={cn(
                                    baseButton,

                                    isActive &&
                                    activeButton
                                )}
                            >

                                {pageNumber}

                            </button>

                        );
                    }
                )}


                {/* =============================================
            Next
        ============================================= */}

                {showNext && (

                    <button
                        type="button"

                        onClick={() =>
                            changePage(
                                safeCurrentPage + 1
                            )
                        }

                        disabled={
                            disabled ||
                            safeCurrentPage ===
                            safeTotalPages
                        }

                        aria-label="Next page"

                        className={cn(
                            baseButton,

                            nextText &&
                            "gap-1.5"
                        )}
                    >

                        {nextText && (
                            <span>
                                {nextText}
                            </span>
                        )}

                        <ChevronRight
                            className={iconSize}
                        />

                    </button>

                )}


                {/* =============================================
            Last
        ============================================= */}

                {showLast && (

                    <button
                        type="button"

                        onClick={() =>
                            changePage(
                                safeTotalPages
                            )
                        }

                        disabled={
                            disabled ||
                            safeCurrentPage ===
                            safeTotalPages
                        }

                        aria-label="Last page"

                        className={baseButton}
                    >

                        <ChevronsRight
                            className={iconSize}
                        />

                    </button>

                )}

            </nav>
        );
    }
);


Pagination.displayName =
    "Pagination";


// =====================================================
// Export
// =====================================================

export {
    Pagination,
    paginationVariants,
   
};
