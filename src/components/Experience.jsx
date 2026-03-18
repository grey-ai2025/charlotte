import { Cpu, Code, Brain, Image } from 'lucide-react'
import ScrollFloat from './ScrollFloat'
import FadeContent from './FadeContent'

const tags = [
  { icon: Brain, label: 'AI' },
  { icon: Code, label: 'Software' },
  { icon: Cpu, label: 'Hardware' },
]

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeContent duration={800} threshold={0.2} blur>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dnv13bm7j/image/upload/v1773841760/poto2_fj4ya0.png"
                  alt="Facebook Portal Device"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-sage-100 -z-10" />
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={200} threshold={0.2} blur>
            <div>
              <span className="section-label mb-4 inline-block">Background</span>
              <ScrollFloat
                containerClassName="!my-0 !mb-4"
                textClassName="font-serif !text-[clamp(1.5rem,4vw,2.5rem)] !leading-[1.2] font-semibold text-charcoal-800"
              >
                Legal Technology Executive
              </ScrollFloat>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-50 text-sage-600 text-sm font-medium"
                  >
                    <tag.icon size={14} strokeWidth={1.5} />
                    {tag.label}
                  </span>
                ))}
              </div>

              <p className="text-charcoal-700/80 leading-relaxed">
                After working for a hardware manufacturer, Charlotte expanded into software
                and earned her stripes as a tech lawyer at Facebook (Meta). There, she
                counseled the team building the company's first Facebook-branded hardware
                product Portal. Portal leveraged AI to build its smart mic and smart camera.
              </p>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Experience
