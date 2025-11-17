export default function Portfolio() {
  const items = [
    { id: 1, title: 'Hillside Poolscape', img: 'https://images.unsplash.com/photo-1505692794403-34d4982b4d9b?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Modern Courtyard', img: 'https://images.unsplash.com/photo-1594141860904-552f9da01a4f?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Stonework Terrace', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Outdoor Kitchen', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop' }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Signature work</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">A glimpse into recent transformations. Each build is fully tailored to the home and lifestyle.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <figure key={it.id} className="group overflow-hidden rounded-2xl shadow-sm bg-white">
              <img src={it.img} alt={it.title} className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="p-4 text-sm font-medium text-gray-800">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
