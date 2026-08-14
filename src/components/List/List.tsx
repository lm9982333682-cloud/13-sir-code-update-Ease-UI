"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";


// =====================================================
// List Variants
// =====================================================

const listVariants = cva(
    "w-full",
    {
        variants: {
            variant: {
                default:
                    "rounded-lg border border-gray-200 bg-white",

                bordered:
                    "rounded-lg border border-gray-200 bg-white",

                divided:
                    "divide-y divide-gray-200",

                striped:
                    "[&>li:nth-child(even)]:bg-gray-50",

                minimal:
                    "",
            },

            size: {
                sm:
                    "[&>li]:px-3 [&>li]:py-2",

                md:
                    "[&>li]:px-4 [&>li]:py-3",

                lg:
                    "[&>li]:px-6 [&>li]:py-5",
            },

            hover: {
                true:
                    "[&>li]:transition-colors [&>li:hover]:bg-gray-50",

                false:
                    "",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
            hover: true,
        },
    }
);


// =====================================================
// List Item
// =====================================================

export interface ListItem<T> {
    id?: string | number;

    data: T;

    disabled?: boolean;

    className?: string;
}


// =====================================================
// List Props
// =====================================================

export interface ListProps<T>
    extends Omit<
        React.HTMLAttributes<HTMLUListElement>,
        "children"
    >,
    VariantProps<typeof listVariants> {

    items: ListItem<T>[];

    renderItem: (
        item: T,
        index: number
    ) => React.ReactNode;

    onItemClick?: (
        item: T,
        index: number
    ) => void;

    loading?: boolean;

    loadingMessage?: React.ReactNode;

    emptyMessage?: React.ReactNode;

    ordered?: boolean;

    itemClassName?: string;

    itemKey?: (
        item: T,
        index: number
    ) => string | number;
}


// =====================================================
// List Component
// =====================================================

function List<T>({
    items,
    renderItem,
    variant,
    size,
    hover,
    onItemClick,
    loading = false,
    loadingMessage = "Loading...",
    emptyMessage = "No items found.",
    ordered = false,
    itemClassName,
    itemKey,
    className,
    ...props
}: ListProps<T>) {

    const getItemKey = (
        item: ListItem<T>,
        index: number
    ) => {

        if (item.id !== undefined) {
            return item.id;
        }

        if (itemKey) {
            return itemKey(
                item.data,
                index
            );
        }

        return index;
    };


    const ListElement =
        ordered ? "ol" : "ul";


    return (
        <ListElement
            className={cn(
                listVariants({
                    variant,
                    size,
                    hover,
                }),
                className
            )}
            {...props}
        >

            {/* ================================================= */}
            {/* Loading */}
            {/* ================================================= */}

            {loading ? (

                <li
                    className="
            px-4
            py-8
            text-center
            text-gray-500
          "
                >
                    {loadingMessage}
                </li>

            ) : items.length === 0 ? (

                /* =================================================
                   Empty
                ================================================= */

                <li
                    className="
            px-4
            py-8
            text-center
            text-gray-500
          "
                >
                    {emptyMessage}
                </li>

            ) : (

                /* =================================================
                   Items
                ================================================= */

                items.map(
                    (item, index) => (

                        <li
                            key={getItemKey(
                                item,
                                index
                            )}
                            onClick={() => {

                                if (
                                    !item.disabled &&
                                    onItemClick
                                ) {
                                    onItemClick(
                                        item.data,
                                        index
                                    );
                                }

                            }}
                            className={cn(
                                "flex items-center gap-3",
                                itemClassName,
                                item.className,

                                item.disabled
                                    ? "cursor-not-allowed opacity-50"
                                    : onItemClick
                                        ? "cursor-pointer"
                                        : ""
                            )}
                        >

                            {renderItem(
                                item.data,
                                index
                            )}

                        </li>

                    )
                )

            )}

        </ListElement>
    );
}


List.displayName = "List";


// =====================================================
// Exports
// =====================================================

export {
    List,
    listVariants,
};