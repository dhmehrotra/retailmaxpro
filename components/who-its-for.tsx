"use client"

import { motion } from "framer-motion"
import { ShoppingBag, BarChart3, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhoItsFor() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="who" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Built for Modern Retail & CPG Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our copilot is designed to help cross-functional teams make faster, smarter, and more aligned decisions.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Merchandising Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Plan and execute seasonal or event-based campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Align visual merchandising with sales goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Collaborate with store ops and marketing teams</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Category Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    <span>Manage product mix and assortment planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    <span>Identify gaps and opportunities by region</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">•</span>
                    <span>Optimize inventory across channels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Revenue & Trade Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    <span>Price effectively with elasticity-aware tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    <span>Design and evaluate trade promotions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    <span>Forecast revenue by mix, promo, and channel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
