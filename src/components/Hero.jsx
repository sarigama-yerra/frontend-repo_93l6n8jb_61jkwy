import { motion } from 'framer-motion'

export default function Hero({ onCta }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          High‑End Bespoke Landscaping & Hardscaping
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl"
        >
          We transform backyards into resort‑level outdoor living—stonework, lighting, pools, kitchens, fire features, and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button onClick={onCta} className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:shadow-lg transition">Start Your Project</button>
          <a href="#portfolio" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition">View Portfolio</a>
        </motion.div>
      </div>
    </section>
  )
}
