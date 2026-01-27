'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function ImageWithFallback({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  // If Next.js Image fails, fall back to regular img
  if (imgError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setImgLoaded(true)}
        onError={() => console.error(`Failed to load image: ${src}`)}
        style={{ display: imgLoaded ? 'block' : 'none' }}
      />
    )
  }

  // Try Next.js Image first
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onLoad={() => setImgLoaded(true)}
      onError={() => {
        console.warn(`Next.js Image failed for ${src}, falling back to regular img`)
        setImgError(true)
      }}
    />
  )
}
