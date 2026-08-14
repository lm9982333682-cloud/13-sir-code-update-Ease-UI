"use client";

import React, {
    forwardRef,
    useEffect,
    useState,
} from "react";

import {
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import { cn } from "@/libs/utils";


// =====================================================
// Gallery Variants
// =====================================================

const imageGalleryVariants = cva(
    "w-full",
    {
        variants: {
            variant: {
                default: "",

                bordered:
                    "rounded-xl border border-gray-200 bg-white p-3",

                dark:
                    "rounded-xl bg-slate-900 p-3",

                muted:
                    "rounded-xl bg-gray-100 p-3",
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


// =====================================================
// Image Item
// =====================================================

export interface GalleryImage {
    id: string | number;

    src: string;

    alt?: string;

    title?: string;

    caption?: string;
}


// =====================================================
// Props
// =====================================================

export interface ImageGalleryProps
    extends Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "onChange"
    >,
    VariantProps<
        typeof imageGalleryVariants
    > {

    images: GalleryImage[];

    columns?: 1 | 2 | 3 | 4 | 5 | 6;

    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8;

    aspectRatio?:
    | "square"
    | "video"
    | "portrait"
    | "auto";

    rounded?:
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl";

    showOverlay?: boolean;

    showCaption?: boolean;

    lightbox?: boolean;

    showNavigation?: boolean;

    closeOnBackdrop?: boolean;

    onImageClick?: (
        image: GalleryImage,
        index: number
    ) => void;

    onChange?: (
        image: GalleryImage,
        index: number
    ) => void;
}


// =====================================================
// Component
// =====================================================

const ImageGallery = forwardRef<
    HTMLDivElement,
    ImageGalleryProps
>(
    (
        {
            images,

            columns = 3,

            gap = 4,

            aspectRatio = "square",

            rounded = "lg",

            showOverlay = true,

            showCaption = false,

            lightbox = true,

            showNavigation = true,

            closeOnBackdrop = true,

            onImageClick,

            onChange,

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

        const [
            selectedIndex,
            setSelectedIndex,
        ] = useState<number | null>(null);


        const [
            loadedImages,
            setLoadedImages,
        ] = useState<
            Record<string | number, boolean>
        >({});


        const [
            failedImages,
            setFailedImages,
        ] = useState<
            Record<string | number, boolean>
        >({});


        // =================================================
        // Grid Classes
        // =================================================

        const columnClasses = {
            1: "grid-cols-1",

            2: "grid-cols-1 sm:grid-cols-2",

            3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",

            4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",

            5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",

            6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
        };


        const gapClasses = {
            1: "gap-1",
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
            5: "gap-5",
            6: "gap-6",
            8: "gap-8",
        };


        // =================================================
        // Image Classes
        // =================================================

        const aspectClasses = {
            square: "aspect-square",

            video: "aspect-video",

            portrait: "aspect-[3/4]",

            auto: "aspect-auto",
        };


        const roundedClasses = {
            none: "rounded-none",

            sm: "rounded-sm",

            md: "rounded-md",

            lg: "rounded-lg",

            xl: "rounded-xl",
        };


        // =================================================
        // Open Image
        // =================================================

        const openImage = (
            image: GalleryImage,
            index: number
        ) => {

            onImageClick?.(
                image,
                index
            );

            onChange?.(
                image,
                index
            );

            if (lightbox) {
                setSelectedIndex(index);
            }
        };


        // =================================================
        // Close Lightbox
        // =================================================

        const closeLightbox = () => {
            setSelectedIndex(null);
        };


        // =================================================
        // Previous
        // =================================================

        const previousImage = () => {

            if (
                selectedIndex === null ||
                images.length === 0
            ) {
                return;
            }

            const nextIndex =
                selectedIndex === 0
                    ? images.length - 1
                    : selectedIndex - 1;

            setSelectedIndex(
                nextIndex
            );
        };


        // =================================================
        // Next
        // =================================================

        const nextImage = () => {

            if (
                selectedIndex === null ||
                images.length === 0
            ) {
                return;
            }

            const nextIndex =
                selectedIndex ===
                    images.length - 1
                    ? 0
                    : selectedIndex + 1;

            setSelectedIndex(
                nextIndex
            );
        };


        // =================================================
        // Keyboard Navigation
        // =================================================

        useEffect(() => {

            if (
                selectedIndex === null
            ) {
                return;
            }


            const handleKeyDown = (
                event: KeyboardEvent
            ) => {

                if (
                    event.key === "Escape"
                ) {
                    closeLightbox();
                }

                if (
                    event.key === "ArrowLeft"
                ) {
                    previousImage();
                }

                if (
                    event.key === "ArrowRight"
                ) {
                    nextImage();
                }
            };


            document.addEventListener(
                "keydown",
                handleKeyDown
            );


            document.body.style.overflow =
                "hidden";


            return () => {

                document.removeEventListener(
                    "keydown",
                    handleKeyDown
                );

                document.body.style.overflow =
                    "";
            };

        }, [
            selectedIndex,
        ]);


        // =================================================
        // Selected Image
        // =================================================

        const selectedImage =
            selectedIndex !== null
                ? images[selectedIndex]
                : null;


        // =================================================
        // Render
        // =================================================

        return (
            <>

                {/* =================================================
            Gallery
        ================================================= */}

                <div
                    ref={ref}

                    className={cn(
                        imageGalleryVariants({
                            variant,
                            size,
                        }),

                        className
                    )}

                    {...props}
                >

                    <div
                        className={cn(
                            "grid",

                            columnClasses[
                            columns
                            ],

                            gapClasses[gap]
                        )}
                    >

                        {images.map(
                            (
                                image,
                                index
                            ) => {

                                const isLoaded =
                                    loadedImages[
                                    image.id
                                    ];

                                const hasError =
                                    failedImages[
                                    image.id
                                    ];


                                return (

                                    <button
                                        key={image.id}

                                        type="button"

                                        onClick={() =>
                                            openImage(
                                                image,
                                                index
                                            )
                                        }

                                        className={cn(
                                            "group relative overflow-hidden text-left",

                                            aspectClasses[
                                            aspectRatio
                                            ],

                                            roundedClasses[
                                            rounded
                                            ],

                                            "bg-gray-100",

                                            "focus:outline-none",

                                            "focus-visible:ring-2",

                                            "focus-visible:ring-blue-500",

                                            "focus-visible:ring-offset-2"
                                        )}

                                        aria-label={
                                            image.title ||
                                            image.alt ||
                                            `Open image ${index + 1}`
                                        }
                                    >

                                        {/* =====================================
                        Loading
                    ===================================== */}

                                        {!isLoaded &&
                                            !hasError && (
                                                <div
                                                    className="
                            absolute
                            inset-0
                            animate-pulse
                            bg-gray-200
                          "
                                                />
                                            )}


                                        {/* =====================================
                        Error
                    ===================================== */}

                                        {hasError ? (

                                            <div
                                                className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          bg-gray-100
                          text-sm
                          text-gray-500
                        "
                                            >
                                                Image unavailable
                                            </div>

                                        ) : (

                                            <img
                                                src={image.src}

                                                alt={
                                                    image.alt ||
                                                    image.title ||
                                                    ""
                                                }

                                                onLoad={() => {

                                                    setLoadedImages(
                                                        (prev) => ({
                                                            ...prev,

                                                            [image.id]:
                                                                true,
                                                        })
                                                    );

                                                }}

                                                onError={() => {

                                                    setFailedImages(
                                                        (prev) => ({
                                                            ...prev,

                                                            [image.id]:
                                                                true,
                                                        })
                                                    );

                                                }}

                                                className={cn(
                                                    "absolute inset-0 h-full w-full object-cover",

                                                    "transition-transform duration-500",

                                                    showOverlay &&
                                                    "group-hover:scale-110"
                                                )}
                                            />

                                        )}


                                        {/* =====================================
                        Overlay
                    ===================================== */}

                                        {showOverlay &&
                                            !hasError && (

                                                <div
                                                    className="
                            absolute
                            inset-0
                            bg-black/0
                            transition-colors
                            duration-300
                            group-hover:bg-black/30
                          "
                                                />

                                            )}


                                        {/* =====================================
                        Caption
                    ===================================== */}

                                        {showCaption &&
                                            (image.title ||
                                                image.caption) && (

                                                <div
                                                    className="
                            absolute
                            inset-x-0
                            bottom-0
                            bg-gradient-to-t
                            from-black/80
                            to-transparent
                            p-4
                            pt-10
                            text-white
                          "
                                                >

                                                    {image.title && (

                                                        <p
                                                            className="
                                font-semibold
                              "
                                                        >
                                                            {image.title}
                                                        </p>

                                                    )}

                                                    {image.caption && (

                                                        <p
                                                            className="
                                mt-1
                                text-sm
                                text-gray-200
                              "
                                                        >
                                                            {image.caption}
                                                        </p>

                                                    )}

                                                </div>

                                            )}

                                    </button>

                                );
                            }
                        )}

                    </div>

                </div>


                {/* =================================================
            Lightbox
        ================================================= */}

                {selectedImage && (

                    <div
                        className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
            "

                        onClick={() => {

                            if (
                                closeOnBackdrop
                            ) {
                                closeLightbox();
                            }

                        }}
                    >

                        {/* ===========================================
                Close
            =========================================== */}

                        <button
                            type="button"

                            onClick={
                                closeLightbox
                            }

                            className="
                absolute
                right-5
                top-5
                z-20
                rounded-full
                bg-white/10
                p-2
                text-white
                backdrop-blur
                transition
                hover:bg-white/20
              "

                            aria-label="Close image preview"
                        >

                            <X
                                className="
                  h-6
                  w-6
                "
                            />

                        </button>


                        {/* ===========================================
                Previous
            =========================================== */}

                        {showNavigation &&
                            images.length > 1 && (

                                <button
                                    type="button"

                                    onClick={(event) => {

                                        event.stopPropagation();

                                        previousImage();

                                    }}

                                    className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    -translate-y-1/2
                    rounded-full
                    bg-white/10
                    p-3
                    text-white
                    backdrop-blur
                    transition
                    hover:bg-white/20
                  "

                                    aria-label="Previous image"
                                >

                                    <ChevronLeft
                                        className="
                      h-6
                      w-6
                    "
                                    />

                                </button>

                            )}


                        {/* ===========================================
                Image
            =========================================== */}

                        <div
                            className="
                relative
                max-h-[90vh]
                max-w-[90vw]
              "

                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >

                            <img
                                src={
                                    selectedImage.src
                                }

                                alt={
                                    selectedImage.alt ||
                                    selectedImage.title ||
                                    ""
                                }

                                className="
                  max-h-[85vh]
                  max-w-[90vw]
                  rounded-lg
                  object-contain
                  shadow-2xl
                "
                            />


                            {(selectedImage.title ||
                                selectedImage.caption) && (

                                    <div
                                        className="
                    mt-3
                    text-center
                    text-white
                  "
                                    >

                                        {selectedImage.title && (

                                            <p
                                                className="
                        font-semibold
                      "
                                            >
                                                {
                                                    selectedImage.title
                                                }
                                            </p>

                                        )}

                                        {selectedImage.caption && (

                                            <p
                                                className="
                        mt-1
                        text-sm
                        text-gray-300
                      "
                                            >
                                                {
                                                    selectedImage.caption
                                                }
                                            </p>

                                        )}

                                    </div>

                                )}

                        </div>


                        {/* ===========================================
                Next
            =========================================== */}

                        {showNavigation &&
                            images.length > 1 && (

                                <button
                                    type="button"

                                    onClick={(event) => {

                                        event.stopPropagation();

                                        nextImage();

                                    }}

                                    className="
                    absolute
                    right-4
                    top-1/2
                    z-20
                    -translate-y-1/2
                    rounded-full
                    bg-white/10
                    p-3
                    text-white
                    backdrop-blur
                    transition
                    hover:bg-white/20
                  "

                                    aria-label="Next image"
                                >

                                    <ChevronRight
                                        className="
                      h-6
                      w-6
                    "
                                    />

                                </button>

                            )}

                    </div>

                )}

            </>
        );
    }
);


ImageGallery.displayName =
    "ImageGallery";


export {
    ImageGallery,

    imageGalleryVariants,
};