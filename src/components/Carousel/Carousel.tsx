import React, {
    Children,
    useEffect,
    useRef,
    useState,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const carouselVariants = cva(
    "relative w-full overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                light: "bg-white",
                dark: "bg-slate-900",
            },
            radius: {
                none: "rounded-none",
                sm: "rounded-md",
                md: "rounded-lg",
                lg: "rounded-xl",
            },
        },

        defaultVariants: {
            variant: "default",
            radius: "md",
        },
    }
);

interface CarouselProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
    children: React.ReactNode;

    autoPlay?: boolean;
    interval?: number;

    infinite?: boolean;

    showArrows?: boolean;
    showDots?: boolean;

    slidesPerView?: number;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
    (
        {
            children,
            className,
            variant,
            radius,

            autoPlay = false,
            interval = 3000,

            infinite = true,

            showArrows = true,
            showDots = true,

            slidesPerView = 1,

            ...props
        },
        ref
    ) => {
        const slides = Children.toArray(children);

        const [currentIndex, setCurrentIndex] = useState(0);

        const intervalRef =
            useRef<ReturnType<typeof setInterval> | null>(null);

        const totalSlides = slides.length;

        const maxIndex = Math.max(
            0,
            totalSlides - slidesPerView
        );

        const nextSlide = () => {
            setCurrentIndex((prev) => {
                if (prev >= maxIndex) {
                    return infinite ? 0 : prev;
                }

                return prev + 1;
            });
        };

        const prevSlide = () => {
            setCurrentIndex((prev) => {
                if (prev <= 0) {
                    return infinite ? maxIndex : prev;
                }

                return prev - 1;
            });
        };

        const goToSlide = (index: number) => {
            setCurrentIndex(index);
        };

        useEffect(() => {
            if (!autoPlay || totalSlides <= slidesPerView) {
                return;
            }

            intervalRef.current = setInterval(() => {
                nextSlide();
            }, interval);

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [
            autoPlay,
            interval,
            totalSlides,
            slidesPerView,
            maxIndex,
            infinite,
        ]);

        if (!totalSlides) {
            return null;
        }

        const slideWidth = `${100 / slidesPerView}%`;

        return (
            <div
                ref={ref}
                className={cn(
                    carouselVariants({
                        variant,
                        radius,
                    }),
                    className
                )}
                {...props}
            >

                {/* Slides */}

                <div className="overflow-hidden">

                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / slidesPerView)
                                }%)`,
                        }}
                    >

                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="shrink-0"
                                style={{
                                    width: slideWidth,
                                }}
                            >
                                {slide}
                            </div>
                        ))}

                    </div>

                </div>


                {/* Previous Button */}

                {showArrows && (
                    <button
                        type="button"
                        onClick={prevSlide}
                        disabled={!infinite && currentIndex === 0}
                        aria-label="Previous slide"
                        className={cn(
                            "absolute left-3 top-1/2 -translate-y-1/2",
                            "z-10 flex h-9 w-9 items-center justify-center",
                            "rounded-full bg-black/50 text-white",
                            "transition hover:bg-black/70",
                            "disabled:cursor-not-allowed disabled:opacity-40"
                        )}
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}


                {/* Next Button */}

                {showArrows && (
                    <button
                        type="button"
                        onClick={nextSlide}
                        disabled={
                            !infinite &&
                            currentIndex >= maxIndex
                        }
                        aria-label="Next slide"
                        className={cn(
                            "absolute right-3 top-1/2 -translate-y-1/2",
                            "z-10 flex h-9 w-9 items-center justify-center",
                            "rounded-full bg-black/50 text-white",
                            "transition hover:bg-black/70",
                            "disabled:cursor-not-allowed disabled:opacity-40"
                        )}
                    >
                        <ChevronRight size={20} />
                    </button>
                )}


                {/* Dots */}

                {showDots && maxIndex > 0 && (
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">

                        {Array.from({
                            length: maxIndex + 1,
                        }).map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={cn(
                                    "h-2.5 w-2.5 rounded-full transition-all",
                                    index === currentIndex
                                        ? "w-6 bg-white"
                                        : "bg-white/50 hover:bg-white/80"
                                )}
                            />
                        ))}

                    </div>
                )}

            </div>
        );
    }
);

Carousel.displayName = "Carousel";

export {
    Carousel,
    carouselVariants,
};