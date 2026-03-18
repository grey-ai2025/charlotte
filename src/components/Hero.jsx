import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Linkedin, Mail, ChevronDown } from 'lucide-react'
import BlurText from './BlurText'
import SplitText from './SplitText'

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-label">AI Executive &middot; Thought Leader &middot; Creator</span>
        </motion.div>

        <BlurText
          text="Charlotte Lewis Jones"
          delay={150}
          animateBy="words"
          direction="top"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal-900 leading-[1.1] justify-center mb-8"
        />

        <div className="mb-6">
          <SplitText
            text="Helping leaders navigate AI strategy, governance, and ethics — so technology works for everyone."
            className="text-lg md:text-xl text-charcoal-700/80 max-w-2xl mx-auto leading-relaxed font-sans"
            delay={30}
            duration={0.8}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-sm md:text-base text-sage-500 font-medium tracking-wide mb-10"
        >
          Former Meta executive &middot; AI speaker since 2018 &middot; Founder of Grey AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#about"
            onClick={(e) => handleScroll(e, '#about')}
            className="btn-primary text-base"
          >
            Explore My Work
          </a>
          <Link
            to="/contact"
            className="btn-secondary text-base"
          >
            Book a Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://linkedin.com/in/charlottelewisjones"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-sage-50 text-sage-500 hover:bg-sage-100 hover:text-sage-600 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@charlottelewisjones.com"
            className="p-3 rounded-full bg-sage-50 text-sage-500 hover:bg-sage-100 hover:text-sage-600 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-16"
        >
          <a
            href="#about"
            onClick={(e) => handleScroll(e, '#about')}
            className="inline-flex items-center justify-center text-sage-300 hover:text-sage-500 transition-colors"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={28} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
