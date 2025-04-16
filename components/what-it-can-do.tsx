"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

export function WhatItCanDo() {
  const features = [
    "Generate campaign plans based on goals and inventory availability",
    "Suggest promotion strategies that improve margin, not just volume",
    "Visualize planograms and shelf layouts using performance data",
    "Recommend optimal product assortments for each location or season",
    "Drive collaboration across teams with shared live dashboards",
  ]

  return (
    <section id="features" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Smart Assistant for Smarter Retail Decisions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Purpose-built intelligence to power day-to-day execution and long-term planning.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <Image
                src="/images/retailcpg2.png"
                alt="RetailMax Pro Dashboard Interface"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

