import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import InquiryForm from './components/InquiryForm'

function App() {
  const formRef = useRef(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight">Blue Ridge Landscapes</div>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
            <a href="/test" className="hover:text-gray-600">System Test</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero onCta={scrollToForm} />
        <Features />
        <Portfolio />
        <div ref={formRef} id="contact">
          <InquiryForm />
        </div>
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Blue Ridge Landscapes. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
