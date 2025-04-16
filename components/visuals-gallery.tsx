"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function VisualsGallery() {
  const images = [
    {
      title: "Dashboard: Pricing & Promotion Insights",
      description: "Visualize pricing strategies and promotion performance in one view",
      src: "/images/gallery/pricing-dashboard.png",
    },
    {
      title: "Assortment Planner: Optimize by region, season, and performance",
      description: "Plan your product mix with AI-powered recommendations",
      src: "/images/gallery/assortment-planner.png",
    },
    {
      title: "Campaign Builder: AI-generated recommendations with budget tracking",
      description: "Create and track campaigns with intelligent suggestions",
      src: "/images/gallery/campaign-builder.png",
    },
    {
      title: "Visual Merchandising: Planogram previews with predicted impact",
      description: "See how your shelf layouts will perform before implementation",
      src: "/images/gallery/visual-merchandising.png",
    },
    {
      title: "Revenue Simulator: Forecast lift, margin, and cannibalization",
      description: "Predict the impact of your pricing and promotion decisions",
      src: "/images/gallery/revenue-simulator.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            See What's Possible with Your Copilot
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Here's a preview of the workflows and dashboards coming to beta users.
          </motion.p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        width={600}
                        height={338}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg">{image.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{image.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={600}
                    height={338}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{image.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

