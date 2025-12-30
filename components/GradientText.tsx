/**
 * GradientText Component
 *
 * Renders text with a linear gradient fill using background-clip technique.
 * Follows claude.md: type safety, modularity, reusability, responsive design.
 *
 * Usage:
 *   <GradientText text="CLAVIS" />
 *   <GradientText text="Your Vision" className="text-3xl" as="h2" />
 */

import React from 'react'

interface GradientTextProps {
  /**
   * The text content to display with gradient styling
   */
  text: string

  /**
   * Optional additional Tailwind CSS classes
   * @example "text-3xl mb-4"
   */
  className?: string

  /**
   * HTML element to render as
   * @default "h1"
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
}

/**
 * GradientText - Renders text with a purple-white gradient fill
 *
 * Gradient: linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #8b5cf6 100%)
 * Responsive font sizes: text-4xl → sm:text-5xl → md:text-6xl → lg:text-7xl
 *
 * @param props - Component props
 * @returns Styled text element with gradient fill
 */
export default function GradientText({
  text,
  className = '',
  as: Element = 'h1'
}: GradientTextProps): React.ReactElement {
  // Base gradient styles (required for background-clip text technique)
  // 90deg = left to right, gradual transition reaching full purple at end
  const gradientStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #ffffff 0%, #e9d5ff 25%, #c4b5fd 50%, #a78bfa 75%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  }

  // Default responsive font sizes and weight
  const defaultClasses = 'font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'

  // Merge default classes with custom className
  const combinedClasses = `${defaultClasses} ${className}`.trim()

  return (
    <Element
      className={combinedClasses}
      style={gradientStyle}
    >
      {text}
    </Element>
  )
}

/**
 * Usage Examples:
 *
 * 1. Default (h1 with responsive sizing):
 * ```tsx
 * <GradientText text="CLAVIS" />
 * ```
 *
 * 2. Custom heading level:
 * ```tsx
 * <GradientText text="Regulatory Intelligence" as="h2" />
 * ```
 *
 * 3. With additional Tailwind classes:
 * ```tsx
 * <GradientText
 *   text="AI-Powered Compliance"
 *   className="text-center mb-8"
 * />
 * ```
 *
 * 4. Smaller text as span:
 * ```tsx
 * <GradientText
 *   text="Premium"
 *   as="span"
 *   className="text-2xl font-semibold"
 * />
 * ```
 *
 * 5. Multi-word gradient in Hero:
 * ```tsx
 * <div className="text-center">
 *   <GradientText text="Transform Regulatory Compliance" />
 *   <p className="text-gray-400 mt-4">
 *     AI agents monitoring Vietnamese regulations 24/7
 *   </p>
 * </div>
 * ```
 */
