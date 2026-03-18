import { User, Briefcase, Shield, Users, Scale, Globe, BookOpen } from 'lucide-react'
import ScrollFloat from './ScrollFloat'
import FadeContent from './FadeContent'

const expertise = [
  { icon: Globe, label: 'Global Expansion', text: 'Development and scaling of cutting-edge technologies worldwide' },
  { icon: Briefcase, label: 'Operations', text: 'Operationalizing and scaling processes' },
  { icon: Shield, label: 'Risk Mitigation', text: 'Business, reputation and regulatory risk management' },
  { icon: Users, label: 'Inclusive AI', text: 'Enabling the development of inclusive AI' },
  { icon: Scale, label: 'AI Counsel', text: 'Advising on risks and rewards of generative AI' },
  { icon: BookOpen, label: 'Author', text: "Published children's book on AI: Brainy Billy Builds a Bot" },
]

const About = () => {
  return (
    <section id="about" className="section bg-warm-100/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">About</span>
          <ScrollFloat
            containerClassName="!my-0"
            textClassName="font-serif !text-[clamp(2rem,5vw,3.5rem)] !leading-[1.2] font-semibold text-charcoal-800"
          >
            About Charlotte
          </ScrollFloat>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <FadeContent duration={800} threshold={0.2} blur>
            <div className="space-y-6">
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Charlotte Lewis Jones is a seasoned technology executive and strategic advisor
                with deep expertise in product, privacy and AI governance. She is also a creator
                and mother of three.
              </p>
              <p className="text-charcoal-700/80 leading-relaxed">
                Charlotte is the owner of{' '}
                <span className="font-semibold text-sage-600">Grey AI</span>, a company that
                advises companies, funds and individuals on matters of AI strategy, literacy,
                policy, governance and implementation.
              </p>
              <p className="text-charcoal-700/80 leading-relaxed">
                Before Grey AI, she served as a senior executive at a global SaaS company,
                where she built and led its product, privacy and regulatory strategy and legal
                functions, embedding innovation and direction into the company's core product
                and global expansion strategy.
              </p>
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={200} threshold={0.2} blur>
            <div className="relative">
              {/* Photo placeholder */}
              <div className="aspect-[4/5] rounded-2xl bg-sage-50 border-2 border-dashed border-sage-200 flex flex-col items-center justify-center text-sage-300">
                <User size={64} strokeWidth={1} />
                <span className="mt-4 text-sm font-medium">Author Photo</span>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-sage-100 -z-10" />
            </div>
          </FadeContent>
        </div>

        {/* Expertise icon cards */}
        <FadeContent duration={800} delay={300} threshold={0.2} blur>
          <div className="mt-20">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-sage-500 mb-8">
              Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-5 border border-sage-100 shadow-sm hover:shadow-md hover:border-sage-200 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-sage-50 flex items-center justify-center group-hover:bg-sage-100 group-hover:scale-110 transition-all duration-300">
                    <item.icon size={22} className="text-sage-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-charcoal-800 text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-charcoal-600/70 text-xs leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

export default About
