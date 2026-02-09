"use client"

// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ

import { useTextPressureAnimation } from "@/hooks/useTextPressureAnimation"
import { useTextPressureResize } from "@/hooks/useTextPressureResize"

interface TextPressureProps {
    text?: string
    fontFamily?: string
    fontUrl?: string
    width?: boolean
    weight?: boolean
    italic?: boolean
    alpha?: boolean
    flex?: boolean
    stroke?: boolean
    scale?: boolean
    textColor?: string
    strokeColor?: string
    strokeWidth?: number
    className?: string
    minFontSize?: number
    charWidth?: number
}

const TextPressure: React.FC<TextPressureProps> = ({
    text = "Compressa",
    fontFamily = "Compressa VF",
    fontUrl = "https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",
    width = true,
    weight = true,
    italic = true,
    alpha = false,
    flex = true,
    stroke = false,
    scale = false,
    textColor = "#FFFFFF",
    strokeColor = "#FF0000",
    strokeWidth = 2,
    className = "",
    minFontSize = 24,
    charWidth = 0.5,
}) => {
    const chars = text.split("")

    // Resize management
    const { containerRef, titleRef: resizeTitleRef, fontSize, scaleY, lineHeight } = useTextPressureResize({
        charsLength: chars.length,
        minFontSize,
        charWidth,
        scale,
    })

    // Animation management
    const { titleRef: animTitleRef, spansRef } = useTextPressureAnimation({
        width,
        weight,
        italic,
        alpha,
        charsLength: chars.length,
    })

    // Merge refs
    const setTitleRef = (el: HTMLHeadingElement | null) => {
        resizeTitleRef.current = el
        animTitleRef.current = el
    }

    return (
        <div className="relative w-full h-full overflow-visible bg-transparent" ref={containerRef}>
            <style>{`
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

            <h1
                className={`text-pressure-title ${className} ${flex ? "flex justify-between" : ""} ${stroke ? "stroke" : ""} uppercase text-center`}
                ref={setTitleRef}
                style={{
                    fontFamily,
                    fontSize,
                    lineHeight,
                    transform: `scale(1, ${scaleY})`,
                    transformOrigin: "center top",
                    margin: 0,
                    fontWeight: 100,
                    color: stroke ? undefined : textColor,
                }}
            >
                {chars.map((char, i) => (
                    <span
                        className="inline-block"
                        data-char={char}
                        key={i}
                        ref={el => {
                            spansRef.current[i] = el
                        }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    )
}

export default TextPressure
