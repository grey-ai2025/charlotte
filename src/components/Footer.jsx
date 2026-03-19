import { Link } from 'react-router-dom'
import { Linkedin, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Kid Lit', to: '/book' },
  { label: 'Contact', to: '/contact' },
]

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-sage-100 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-serif text-xl font-semibold text-charcoal-800"
            >
              Charlotte Lewis Jones
            </Link>
            <p className="mt-1 text-sm text-charcoal-700/50">
              Silicon Valley–Trained Attorney. &middot; AI Founder &middot; Kid Lit Author
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-charcoal-700/60 hover:text-sage-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/charlottelewisjones"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-sage-50 text-sage-400 hover:bg-sage-100 hover:text-sage-600 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
           
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sage-100 text-center">
          <p className="text-sm text-charcoal-700/40">
            &copy; {new Date().getFullYear()} Charlotte Lewis Jones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
