import { useState, useEffect, useCallback, useRef } from 'react'
import { Mic, Database, Users, AlertTriangle, Lock, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollFloat from './ScrollFloat'
import FadeContent from './FadeContent'

const topics = [
  { icon: Database, text: 'Data acquisition risks and opportunities' },
  { icon: Users, text: 'Hurdles to target and acquire diverse datasets' },
  { icon: AlertTriangle, text: 'Liability of poorly designed and non-inclusive AI' },
  { icon: Lock, text: 'Tension between privacy and "good" data' },
]

const galleryPhotos = [
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773945687/9133b314-4cc4-421b-8ff2-5bef5530f5a2.png',
    alt: 'Charlotte Lewis Jones at a speaking event',
  },
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773943825/2cf4e1c9-d509-47e6-91e5-de4d8cdfbaf4.png',
    alt: 'Charlotte Lewis Jones at a speaking event',
  },
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773950565/ceda3699-30d8-47b4-836a-85cd5ccf6873.png',
    alt: 'Charlotte Lewis Jones at a speaking event',
  },
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773949910/02a32343-9d26-4ced-9b74-003d39910204.png',
    alt: 'Charlotte Lewis Jones at a speaking event',
  },
]

const speakingPhotos = [
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773892173/speking_1_pukyrt.jpg',
    alt: 'Charlotte Lewis Jones keynote presentation',
  },
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773950462/cdc1d108-721e-4cca-83b6-616553b238c6.png',
    alt: 'Charlotte Lewis Jones speaking at an event',
  },
  {
    src: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773946239/44e9b6ef-e9c2-4b1d-823f-b33241e3297b.png',
    alt: 'Charlotte Lewis Jones speaking at an event',
  },
]

const SWIPE_THRESHOLD = 50

const Speaking = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const dragStart = useRef(null)

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % speakingPhotos.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + speakingPhotos.length) % speakingPhotos.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const handlePointerDown = (e) => {
    dragStart.current = e.clientX
  }

  const handlePointerUp = (e) => {
    if (dragStart.current === null) return
    const diff = dragStart.current - e.clientX
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
    dragStart.current = null
  }

  return (
    <section id="speaking" className="section bg-warm-100/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeContent duration={800} threshold={0.2} blur>
            <div>
              <span className="section-label mb-4 inline-block">Speaking</span>
              <ScrollFloat
                containerClassName="!my-0 !mb-6"
                textClassName="font-serif !text-[clamp(1.5rem,4vw,2.5rem)] !leading-[1.2] font-semibold text-charcoal-800"
              >
                AI Speaking Engagements
              </ScrollFloat>

              <p className="text-charcoal-700/80 leading-relaxed mb-6">
                Charlotte has spoken as a keynote, panelist, and featured speaker about
                artificial intelligence since 2018. Some key topics include:
              </p>

              <ul className="space-y-3">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-sage-50 flex items-center justify-center flex-shrink-0">
                      <topic.icon size={16} className="text-sage-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-charcoal-700/80 text-sm leading-relaxed pt-1">
                      {topic.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary text-sm inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                  Inquire About Speaking
                </Link>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={200} threshold={0.2} blur>
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing select-none touch-pan-y"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onDragStart={(e) => e.preventDefault()}
              >
                {speakingPhotos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo.src}
                    alt={photo.alt}
                    draggable={false}
                    className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ease-in-out ${
                      i === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {speakingPhotos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`View photo ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-sage-100 -z-10" />
            </div>
          </FadeContent>
        </div>

        <FadeContent duration={800} delay={300} threshold={0.1} blur>
          <div className="mt-16 columns-2 md:columns-3 gap-4 space-y-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-xl overflow-hidden group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover rounded-xl scale-105 transition-transform duration-500 group-hover:scale-100"
                />
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

export default Speaking
