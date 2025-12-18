import Image from 'next/image'
import React, { useState } from 'react'

const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends Omit<React.ComponentProps<typeof Image>, 'src'> {
    src?: string | null
    fallbackSrc?: string
    fallbackClassName?: string
}

export function ImageWithFallback({
    src,
    alt,
    style,
    className,
    fallbackSrc = ERROR_IMG_SRC,
    fallbackClassName,
    ...rest
}: ImageWithFallbackProps) {
    const [didError, setDidError] = useState(false)

    const handleError = () => {
        setDidError(true)
    }

    // If no src is provided, show fallback immediately
    if (!src || didError) {
        return (
            <div
                className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
                style={style}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <Image
                        width={88}
                        height={88}
                        src={fallbackSrc}
                        alt={alt || "Error loading image"}
                        className={fallbackClassName || className}
                        {...rest}
                        data-original-url={src || ''}
                    />
                </div>
            </div>
        )
    }

    return (
        <Image
            key={src} // Key ensures component resets when src changes
            src={src}
            alt={alt}
            className={className}
            style={style}
            {...rest}
            onError={handleError}
            width={800}
            height={800}
        />
    )
}
