"use client";

import React from "react";

import {
    ImageGallery,
    type GalleryImage,
} from "@/components/ImageGallery/ImageGallery";

import ComponentDemo from "../ComponentsDemo";

import PropsTable from "@/components/Personal/PropsTable";


// =====================================================
// Demo Images
// =====================================================

const images: GalleryImage[] = [

    {
        id: 1,
        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        alt: "Mountain landscape",
        title: "Mountain",
        caption: "Beautiful mountain landscape",
    },

    {
        id: 2,
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        alt: "Beach",
        title: "Beach",
        caption: "Beautiful ocean view",
    },

    {
        id: 3,
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        alt: "Nature",
        title: "Nature",
        caption: "Peaceful nature",
    },

    {
        id: 4,
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        alt: "Mountain lake",
        title: "Lake",
        caption: "Mountain lake view",
    },

    {
        id: 5,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        alt: "Forest",
        title: "Forest",
        caption: "Green forest",
    },

    {
        id: 6,
        src: "https://images.unsplash.com/photo-1511497584788-876760111969",
        alt: "Trees",
        title: "Trees",
        caption: "Beautiful trees",
    },

];


// =====================================================
// Page
// =====================================================

const ImageGalleryPage = () => {


    // ===================================================
    // Basic
    // ===================================================

    const basicCode = `
import {
  ImageGallery,
} from "@/components/ImageGallery/ImageGallery";

const images = [
  {
    id: 1,
    src: "image-url",
    alt: "Mountain",
  },
  {
    id: 2,
    src: "image-url",
    alt: "Beach",
  },
];

<ImageGallery
  images={images}
/>
`;


    // ===================================================
    // Caption
    // ===================================================

    const captionCode = `
<ImageGallery
  images={images}
  showCaption
/>
`;


    // ===================================================
    // Columns
    // ===================================================

    const columnsCode = `
<ImageGallery
  images={images}
  columns={4}
  gap={4}
/>
`;


    // ===================================================
    // Aspect Ratio
    // ===================================================

    const aspectCode = `
<ImageGallery
  images={images}
  aspectRatio="video"
/>
`;


    // ===================================================
    // Variants
    // ===================================================

    const variantsCode = `
<div className="space-y-8">

  <ImageGallery
    images={images}
    variant="default"
  />

  <ImageGallery
    images={images}
    variant="bordered"
  />

  <ImageGallery
    images={images}
    variant="dark"
  />

  <ImageGallery
    images={images}
    variant="muted"
  />

</div>
`;


    // ===================================================
    // Without Lightbox
    // ===================================================

    const noLightboxCode = `
<ImageGallery
  images={images}
  lightbox={false}
/>
`;


    // ===================================================
    // Props
    // ===================================================

    const propsData = [

        {
            prop: "images",
            type: "GalleryImage[]",
            default: "-",
            description:
                "Array of images displayed inside the gallery.",
        },

        {
            prop: "columns",
            type: "1 | 2 | 3 | 4 | 5 | 6",
            default: "3",
            description:
                "Controls the number of gallery columns.",
        },

        {
            prop: "gap",
            type: "1 | 2 | 3 | 4 | 5 | 6 | 8",
            default: "4",
            description:
                "Controls the spacing between images.",
        },

        {
            prop: "aspectRatio",
            type:
                '"square" | "video" | "portrait" | "auto"',
            default: '"square"',
            description:
                "Controls the aspect ratio of gallery images.",
        },

        {
            prop: "rounded",
            type:
                '"none" | "sm" | "md" | "lg" | "xl"',
            default: '"lg"',
            description:
                "Controls image border radius.",
        },

        {
            prop: "showOverlay",
            type: "boolean",
            default: "true",
            description:
                "Shows hover overlay and zoom animation.",
        },

        {
            prop: "showCaption",
            type: "boolean",
            default: "false",
            description:
                "Displays image title and caption.",
        },

        {
            prop: "lightbox",
            type: "boolean",
            default: "true",
            description:
                "Opens a fullscreen image preview when an image is clicked.",
        },

        {
            prop: "showNavigation",
            type: "boolean",
            default: "true",
            description:
                "Displays previous and next buttons in the lightbox.",
        },

        {
            prop: "closeOnBackdrop",
            type: "boolean",
            default: "true",
            description:
                "Closes the lightbox when clicking the backdrop.",
        },

        {
            prop: "onImageClick",
            type:
                "(image: GalleryImage, index: number) => void",
            default: "-",
            description:
                "Callback executed when an image is clicked.",
        },

        {
            prop: "onChange",
            type:
                "(image: GalleryImage, index: number) => void",
            default: "-",
            description:
                "Callback executed when the selected image changes.",
        },

        {
            prop: "variant",
            type:
                '"default" | "bordered" | "dark" | "muted"',
            default: '"default"',
            description:
                "Controls the gallery container style.",
        },

        {
            prop: "size",
            type:
                '"sm" | "md" | "lg"',
            default: '"md"',
            description:
                "Controls the gallery component size.",
        },

        {
            prop: "className",
            type: "string",
            default: "-",
            description:
                "Additional custom CSS classes.",
        },

    ];


    return (

        <div
            className="
        max-w-4xl
        mx-auto
        p-4
        space-y-12
      "
        >

            {/* =================================================
          Header
      ================================================= */}

            <header className="space-y-4">

                <h1
                    className="
            text-4xl
            font-bold
            tracking-tight
          "
                >
                    Image Gallery
                </h1>

                <p
                    className="
            text-xl
            text-gray-600
          "
                >
                    A responsive and reusable
                    image gallery with lightbox
                    preview and navigation.
                </p>

            </header>


            {/* =================================================
          Usage
      ================================================= */}

            <section className="space-y-6">

                <h2
                    className="
            text-2xl
            font-semibold
          "
                >
                    Usage
                </h2>


                <div
                    className="
            flex
            flex-col
            gap-12
          "
                >


                    {/* =============================================
              Basic
          ============================================= */}

                    <ComponentDemo
                        code={basicCode}
                    >

                        <ImageGallery
                            images={images}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Caption
          ============================================= */}

                    <ComponentDemo
                        code={captionCode}
                    >

                        <ImageGallery
                            images={images}
                            showCaption
                        />

                    </ComponentDemo>


                    {/* =============================================
              Columns
          ============================================= */}

                    <ComponentDemo
                        code={columnsCode}
                    >

                        <ImageGallery
                            images={images}
                            columns={4}
                            gap={4}
                        />

                    </ComponentDemo>


                    {/* =============================================
              Aspect Ratio
          ============================================= */}

                    <ComponentDemo
                        code={aspectCode}
                    >

                        <ImageGallery
                            images={images}
                            aspectRatio="video"
                        />

                    </ComponentDemo>


                    {/* =============================================
              Variants
          ============================================= */}

                    <ComponentDemo
                        code={variantsCode}
                    >

                        <div
                            className="
                space-y-8
              "
                        >

                            <ImageGallery
                                images={images}
                                variant="default"
                            />

                            <ImageGallery
                                images={images}
                                variant="bordered"
                            />

                            <ImageGallery
                                images={images}
                                variant="dark"
                            />

                            <ImageGallery
                                images={images}
                                variant="muted"
                            />

                        </div>

                    </ComponentDemo>


                    {/* =============================================
              No Lightbox
          ============================================= */}

                    <ComponentDemo
                        code={noLightboxCode}
                    >

                        <ImageGallery
                            images={images}
                            lightbox={false}
                        />

                    </ComponentDemo>


                </div>

            </section>


            {/* =================================================
          API Reference
      ================================================= */}

            <section className="space-y-4">

                <h2
                    className="
            text-2xl
            font-semibold
          "
                >
                    API Reference
                </h2>

                <PropsTable
                    data={propsData}
                />

            </section>

        </div>
    );
};


export default ImageGalleryPage;