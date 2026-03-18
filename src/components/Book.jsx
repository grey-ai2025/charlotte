import { BookOpen, Star, Instagram, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollFloat from './ScrollFloat'
import FadeContent from './FadeContent'

const Book = () => {
  return (
    <section id="book" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Featured Book</span>
          <ScrollFloat
            containerClassName="!my-0"
            textClassName="font-serif !text-[clamp(2rem,5vw,3.5rem)] !leading-[1.2] font-semibold text-charcoal-800"
          >
            Meet Brainy Billy
          </ScrollFloat>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeContent duration={800} threshold={0.2} blur>
            {/* Book cover placeholder */}
            <div className="relative max-w-sm mx-auto md:mx-0">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-sage-100 to-warm-200 border border-sage-200 flex flex-col items-center justify-center p-8 shadow-soft">
                <BookOpen size={48} className="text-sage-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-semibold text-charcoal-800 text-center italic leading-tight">
                  Brainy Billy<br />Builds a Bot
                </h3>
                <p className="mt-3 text-sm text-sage-500 font-medium">
                  Charlotte Lewis Jones
                </p>
                <span className="mt-4 text-xs text-sage-400">Book Cover</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-sage-100 -z-10" />
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={200} threshold={0.2} blur>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-semibold text-charcoal-800 mb-2">
                  Brainy Billy Builds a Bot
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="genre-tag">Children&apos;s Book</span>
                  <span className="genre-tag">AI &amp; Technology</span>
                  <span className="genre-tag">Family</span>
                </div>
              </div>

              <p className="text-charcoal-700/80 leading-relaxed">
                Meet Brainy Billy, a renaissance kid who LOVES solving problems and spending time
                with his family. Like most kids, he really wants to do what he wants to do — so
                much that he builds a robot to handle the boring stuff so he can get to the fun
                stuff!
              </p>

              <p className="text-charcoal-700/80 leading-relaxed">
                The book teaches children about artificial intelligence and includes additional
                themes around art and family.
              </p>

              {/* Review Quote */}
              <blockquote className="border-l-4 border-sage-300 pl-5 py-2">
                <p className="text-charcoal-700/70 italic leading-relaxed">
                  &ldquo;Billy is a thoughtful, curious, creative, and loving character who is
                  easy to root for, especially as he navigates troubleshooting and figuring out
                  what he doesn&apos;t want to miss out on, like spending time with his
                  family.&rdquo;
                </p>
                <cite className="flex items-center gap-1.5 mt-3 text-sm text-sage-500 not-italic font-medium">
                  <Star size={14} className="text-sage-400" />
                  BookLife Review
                </cite>
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-primary text-sm inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Get Your Copy
                </Link>
                <a
                  href="https://instagram.com/kidsbooksjunkie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm inline-flex items-center gap-2"
                >
                  <Instagram size={16} />
                  @KidsBooksJunkie
                </a>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Book
