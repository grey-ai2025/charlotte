import { Mic, Database, Users, AlertTriangle, Lock, Image, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollFloat from './ScrollFloat'
import FadeContent from './FadeContent'

const topics = [
  { icon: Database, text: 'Data acquisition risks and opportunities' },
  { icon: Users, text: 'Hurdles to target and acquire diverse datasets' },
  { icon: AlertTriangle, text: 'Liability of poorly designed and non-inclusive AI' },
  { icon: Lock, text: 'Tension between privacy and "good" data' },
]

const Speaking = () => {
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
              {/* Speaking photo placeholder */}
              <div className="aspect-[4/5] rounded-2xl bg-sage-50 border-2 border-dashed border-sage-200 flex flex-col items-center justify-center text-sage-300">
                <Mic size={48} strokeWidth={1} />
                <span className="mt-3 text-sm font-medium">Speaking Photo</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-sage-100 -z-10" />
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Speaking
