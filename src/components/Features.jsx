import { Hammer, Flame, Trees, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Hammer, title: 'Hardscapes', desc: 'Custom patios, walkways, retaining walls, and pool decks in premium natural stone.' },
    { icon: Trees, title: 'Landscapes', desc: 'Specimen plantings, grading, drainage, irrigation, and soil engineering.' },
    { icon: Flame, title: 'Outdoor Living', desc: 'Kitchens, fire pits, pergolas, water features, and lighting for year-round enjoyment.' },
    { icon: Sparkles, title: 'Bespoke Detailing', desc: 'Hand-set stone, custom metalwork, and tailored finishes with artisan craftsmanship.' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we craft</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">Every project is engineered and executed to the highest standard, built to last and designed to wow.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl border border-gray-200 hover:shadow-md transition bg-white">
              <it.icon className="w-6 h-6 text-gray-900" />
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
