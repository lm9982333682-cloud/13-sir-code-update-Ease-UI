"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";


// =====================================================
// Table Variants
// =====================================================

const tableVariants = cva(
    "w-full caption-bottom text-sm",
    {
        variants: {
            variant: {
                default:
                    "border-separate border-spacing-0",

                bordered:
                    "border border-gray-200 rounded-lg",

                striped:
                    "[&_tbody_tr:nth-child(even)]:bg-gray-50",

                minimal:
                    "border-separate border-spacing-0",
            },

            size: {
                sm:
                    "[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2",

                md:
                    "[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3",

                lg:
                    "[&_th]:px-6 [&_th]:py-4 [&_td]:px-6 [&_td]:py-4",
            },

            hover: {
                true:
                    "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-gray-100",

                false: "",
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
// Column Type
// =====================================================

export interface TableColumn<T> {
    key: keyof T | string;

    header: React.ReactNode;

    render?: (
        value: unknown,
        row: T,
        index: number
    ) => React.ReactNode;

    className?: string;

    headerClassName?: string;

    sortable?: boolean;
}


// =====================================================
// Table Props
// =====================================================

export interface TableProps<T>
    extends Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "children"
    >,
    VariantProps<typeof tableVariants> {

    data: T[];

    columns: TableColumn<T>[];

    loading?: boolean;

    emptyMessage?: React.ReactNode;

    loadingMessage?: React.ReactNode;

    onRowClick?: (
        row: T,
        index: number
    ) => void;

    responsive?: boolean;

    caption?: React.ReactNode;

    rowKey?: (
        row: T,
        index: number
    ) => string | number;
}


// =====================================================
// Table Component
// =====================================================

function Table<T>({
    data,
    columns,
    variant,
    size,
    hover,
    loading = false,
    emptyMessage = "No data found.",
    loadingMessage = "Loading...",
    onRowClick,
    responsive = true,
    caption,
    rowKey,
    className,
    ...props
}: TableProps<T>) {

    const getRowKey = (
        row: T,
        index: number
    ) => {

        if (rowKey) {
            return rowKey(row, index);
        }

        return index;
    };


    const getCellValue = (
        row: T,
        key: keyof T | string
    ) => {

        return (row as Record<string, unknown>)[
            key as string
        ];
    };


    return (
        <div
            className={cn(
                responsive &&
                "w-full overflow-x-auto rounded-lg",
                className
            )}
            {...props}
        >

            <table
                className={cn(
                    tableVariants({
                        variant,
                        size,
                        hover,
                    })
                )}
            >

                {/* ================================================= */}
                {/* Caption */}
                {/* ================================================= */}

                {caption && (
                    <caption className="mb-3 text-left text-sm text-gray-500">
                        {caption}
                    </caption>
                )}


                {/* ================================================= */}
                {/* Header */}
                {/* ================================================= */}

                <thead
                    className="
            bg-gray-100
            text-left
            text-gray-700
          "
                >

                    <tr>

                        {columns.map(
                            (column, index) => (

                                <th
                                    key={index}
                                    scope="col"
                                    className={cn(
                                        "font-semibold",
                                        column.headerClassName
                                    )}
                                >
                                    {column.header}
                                </th>

                            )
                        )}

                    </tr>

                </thead>


                {/* ================================================= */}
                {/* Body */}
                {/* ================================================= */}

                <tbody>

                    {/* ===============================================
              Loading
          =============================================== */}

                    {loading ? (

                        <tr>

                            <td
                                colSpan={columns.length}
                                className="
                  px-4
                  py-10
                  text-center
                  text-gray-500
                "
                            >
                                {loadingMessage}
                            </td>

                        </tr>

                    ) : data.length === 0 ? (

                        /* =============================================
                           Empty
                        ============================================= */

                        <tr>

                            <td
                                colSpan={columns.length}
                                className="
                  px-4
                  py-10
                  text-center
                  text-gray-500
                "
                            >
                                {emptyMessage}
                            </td>

                        </tr>

                    ) : (

                        /* =============================================
                           Data
                        ============================================= */

                        data.map(
                            (row, rowIndex) => (

                                <tr
                                    key={getRowKey(
                                        row,
                                        rowIndex
                                    )}
                                    onClick={() =>
                                        onRowClick?.(
                                            row,
                                            rowIndex
                                        )
                                    }
                                    className={cn(
                                        "border-b border-gray-200 last:border-b-0",
                                        onRowClick &&
                                        "cursor-pointer"
                                    )}
                                >

                                    {columns.map(
                                        (
                                            column,
                                            columnIndex
                                        ) => {

                                            const value =
                                                getCellValue(
                                                    row,
                                                    column.key
                                                );


                                            return (
                                                <td
                                                    key={columnIndex}
                                                    className={cn(
                                                        "text-gray-700",
                                                        column.className
                                                    )}
                                                >

                                                    {column.render
                                                        ? column.render(
                                                            value,
                                                            row,
                                                            rowIndex
                                                        )
                                                        : String(
                                                            value ?? ""
                                                        )}

                                                </td>
                                            );

                                        }
                                    )}

                                </tr>

                            )
                        )

                    )}

                </tbody>

            </table>

        </div>
    );
}


// =====================================================
// Display Name
// =====================================================

Table.displayName = "Table";


// =====================================================
// Exports
// =====================================================

export {
    Table,
    tableVariants,
};