// import React, { useState } from "react";
// import { cn } from "@/libs/utils";

// interface TooltipProps {
//     children: React.ReactNode;
//     content: React.ReactNode;
//     position?: "top" | "bottom" | "left" | "right";
//     delay?: number;
//     className?: string;
//     disabled?: boolean;
// }

// const Tooltip = ({
//     children,
//     content,
//     position = "top",
//     delay = 200,
//     className,
//     disabled = false,
// }: TooltipProps) => {
//     const [isVisible, setIsVisible] = useState(false);

//     let timeout: ReturnType<typeof setTimeout>;

//     const handleMouseEnter = () => {
//         if (disabled) return;

//         timeout = setTimeout(() => {
//             setIsVisible(true);
//         }, delay);
//     };

//     const handleMouseLeave = () => {
//         clearTimeout(timeout);
//         setIsVisible(false);
//     };

//     const positionClasses = {
//         top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
//         bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
//         left: "right-full top-1/2 -translate-y-1/2 mr-2",
//         right: "left-full top-1/2 -translate-y-1/2 ml-2",
//     };

//     return (
//         <div
//             className="relative inline-flex"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             {children}

//             {!disabled && (
//                 <div
//                     role="tooltip"
//                     className={cn(
//                         "absolute z-50 whitespace-nowrap rounded-md",
//                         "bg-slate-900 px-3 py-2 text-sm text-white shadow-lg",
//                         "pointer-events-none transition-all duration-200",
//                         positionClasses[position],
//                         isVisible
//                             ? "visible translate-y-0 scale-100 opacity-100"
//                             : "invisible scale-95 opacity-0",
//                         className
//                     )}
//                 >
//                     {content}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default  Tooltip ;



















import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/libs/utils";

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
    className?: string;
    disabled?: boolean;
}

const Tooltip = ({
    children,
    content,
    position = "top",
    delay = 200,
    className,
    disabled = false,
}: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (disabled) return;

        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setIsVisible(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <div
            className="relative inline-flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {!disabled && (
                <div
                    role="tooltip"
                    className={cn(
                        "absolute z-50 whitespace-nowrap rounded-md",
                        "bg-slate-900 px-3 py-2 text-sm text-white shadow-lg",
                        "pointer-events-none transition-all duration-200",
                        positionClasses[position],
                        isVisible
                            ? "visible scale-100 opacity-100"
                            : "invisible scale-95 opacity-0",
                        className
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;