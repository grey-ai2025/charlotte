import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AnalyticsProvider from './components/AnalyticsProvider'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-sage-100/40 blur-[120px] animate-float-1" />
        <div className="absolute top-[60%] right-[5%] w-[400px] h-[400px] rounded-full bg-rose-100/30 blur-[120px] animate-float-2" />
      </div>

      <ScrollToTop />
      <AnalyticsProvider />
      <Header />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
