/**
 * GradientText Component Demo Page
 *
 * Demonstrates all usage patterns for the GradientText component
 * following claude.md responsive design and accessibility principles.
 */

import GradientText from '@/components/GradientText'

export default function GradientTextDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <GradientText text="CLAVIS" />
          <p className="text-gray-300 text-lg">
            Regulatory Intelligence Platform
          </p>
        </section>

        {/* Multi-word Gradient Examples */}
        <section className="space-y-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Multi-Word Examples
          </h2>

          <div className="space-y-6">
            <GradientText text="Transform Regulatory Compliance" />

            <GradientText
              text="AI-Powered Vietnamese Regulations"
              as="h2"
            />

            <GradientText
              text="24/7 Autonomous Monitoring"
              as="h3"
              className="text-3xl sm:text-4xl md:text-5xl"
            />
          </div>
        </section>

        {/* Heading Hierarchy */}
        <section className="space-y-6">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Semantic Heading Hierarchy
          </h2>

          <div className="space-y-4">
            <GradientText
              text="H1: Main Headline"
              as="h1"
            />

            <GradientText
              text="H2: Secondary Headline"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <GradientText
              text="H3: Tertiary Headline"
              as="h3"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            />

            <GradientText
              text="Span: Inline Gradient"
              as="span"
              className="text-xl font-semibold"
            />
          </div>
        </section>

        {/* Custom Styling Examples */}
        <section className="space-y-6">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Custom Styling
          </h2>

          <div className="space-y-4">
            {/* Center aligned */}
            <GradientText
              text="Centered Gradient"
              className="text-center"
            />

            {/* With margins */}
            <GradientText
              text="With Custom Margins"
              className="my-8 text-center"
            />

            {/* Smaller size */}
            <GradientText
              text="Smaller Premium Badge"
              as="span"
              className="text-xl sm:text-2xl font-bold inline-block"
            />

            {/* Left aligned with padding */}
            <GradientText
              text="Left Aligned with Padding"
              className="pl-4 border-l-4 border-purple-500"
            />
          </div>
        </section>

        {/* Real-World Hero Example */}
        <section className="bg-black/30 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/20">
          <div className="text-center space-y-6">
            <GradientText text="Regulatory Intelligence Platform" />

            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              AI agents monitoring Vietnamese regulations 24/7, delivering real-time
              compliance insights for your business
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Responsive Showcase */}
        <section className="space-y-6">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Responsive Font Scaling
          </h2>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              Resize browser to see responsive scaling: text-4xl → sm:text-5xl → md:text-6xl → lg:text-7xl
            </p>

            <GradientText text="Responsive Gradient Text" />
          </div>
        </section>

        {/* Component Props Reference */}
        <section className="bg-white/5 p-8 rounded-lg border border-white/10">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Component Props
          </h2>

          <div className="space-y-4 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-purple-400 font-semibold mb-2">text</h3>
                <p className="text-sm">Type: <code className="text-purple-300">string</code></p>
                <p className="text-sm">Required: Yes</p>
                <p className="text-sm text-gray-400 mt-1">The text to display with gradient</p>
              </div>

              <div>
                <h3 className="text-purple-400 font-semibold mb-2">className</h3>
                <p className="text-sm">Type: <code className="text-purple-300">string</code></p>
                <p className="text-sm">Required: No</p>
                <p className="text-sm text-gray-400 mt-1">Additional Tailwind classes</p>
              </div>

              <div>
                <h3 className="text-purple-400 font-semibold mb-2">as</h3>
                <p className="text-sm">Type: <code className="text-purple-300">h1 | h2 | ... | span</code></p>
                <p className="text-sm">Default: <code className="text-purple-300">h1</code></p>
                <p className="text-sm text-gray-400 mt-1">HTML element to render</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
