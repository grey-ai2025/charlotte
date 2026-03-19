import { useState } from 'react'
import { Briefcase, Shield, Users, Scale, Globe, BookOpen, ChevronDown, GraduationCap } from 'lucide-react'
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

const experiences = [
  {
    company: 'Grey AI',
    role: 'Founder & Chief Executive Officer',
    period: '2025 - Present',
    duration: '1 yr 3 mos',
    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893098/web-app-manifest-512x512_rdfzau.png',
    description: 'Elevated AI solutions that clarify, cater to, and multiply your execution.',
  },
  {
    company: 'Five9',
    role: 'Head of Product, Privacy & Regulatory Legal',
    period: '2022 - 2024',
    duration: '2 yrs',
    details: [
      'Reporting to the Chief Legal Officer, built the company\'s Privacy Program, AI Governance Program and Responsible AI strategy. Chair, AI Risk Committee (ARC). Chair, AI Governance Steering Committee.',
      'Set company\'s global product, privacy, and regulatory legal strategy, working closely with executive staff on AI systems, data privacy and security.',
      'Provided strategic counsel on regulatory matters including HR support, marketing clearances, global compliance, cybersecurity and product trust and safety.',
    ],
  },
  {
    company: 'Sun Kissed Press',
    role: 'Owner & Author, Brainy Billy Builds a Bot',
    period: '2022 - 2024',
    duration: '2 yrs',
    description: 'The Brainy Billy book series teaches AI literacy to the next generation — covering inclusive data acquisition, quality assurance, and the technical development process, alongside family and art themes.',
  },
  {
    company: 'Twitter',
    role: 'Senior Product Counsel',
    period: '2020 - 2022',
    duration: '2 yrs',
    location: 'San Francisco Bay Area',
    details: [
      'Led material revisions to the company\'s privacy policy and app store "nutrition label" privacy disclosures; created scalable resources for knowledge management and consistent legal counsel.',
      'Partnered cross-functionally to advise on product launches, focusing on inclusive AI and alignment with privacy principles. Developed guardrails and co-created product solutions within UI/UX design.',
    ],
  },
  {
    company: 'Facebook (Meta)',
    role: 'Associate General Counsel - AR/VR Team (Building 8/Portal)',
    period: '2016 - 2020',
    duration: '4 yrs',
    location: 'San Francisco Bay Area',
    details: [
      '#2 legal hire at Building 8 (internal incubator). Advised on all legal matters for the launch of the company\'s first Facebook-branded hardware products. Covered IP protection, product liability, training data acquisition, and global privacy.',
      'Created the hardware product counseling playbook; built scalable legal frameworks to support global hardware testing and enable QA teams to build inclusive products.',
    ],
  },
  {
    company: 'Flex',
    role: 'Legal Head of Global Strategic Partnerships',
    period: '2014 - 2016',
    duration: '2 yrs',
    location: 'San Francisco Bay Area',
    details: [
      'Managed cross-functional global team through complex global structures and transactions. Counseled C-suite on corporate governance and regulatory risk.',
      'Advised on IP strategy. Negotiated commercial collaborations, partnerships, joint ventures, and licensing deals with strategic partners.',
    ],
  },
  {
    company: 'Lewis Jones LLC',
    role: 'Principal',
    period: '2012 - 2014',
    duration: '2 yrs',
    location: 'New York / San Francisco',
    details: [
      'Advised product managers and startups on business, consumer protection, privacy and disclosure matters for technology businesses.',
      'Counseled on copyright and trademark matters, including licensing, prosecution, and commercial agreements.',
    ],
  },
  {
    company: 'Skadden, Arps, Slate, Meagher & Flom LLP',
    role: 'Corporate Associate',
    period: '2008 - 2012',
    duration: '4 yrs',
    location: 'New York, New York',
    details: [
      'Assisted in structuring private investment funds that raised billions in capital. Drafted and negotiated investment and governance documents.',
      'Advised clients on consumer protection matters, the Dodd-Frank Act and the Investment Advisory Act. Drafted SEC disclosures for public and private companies.',
    ],
  },
  {
    company: 'MetLife',
    role: 'Compliance',
    period: '2003 - 2005',
    duration: '2 yrs',
    details: [
      'Created, implemented and enforced a risk monitoring system to protect against regulatory infractions. Developed trainings for all new sales representatives.',
      'Conducted quarterly audits and monitoring programs. Provided reports to senior management outlining issues, trends and solutions.',
    ],
  },
]

const ExperienceItem = ({ exp, isLast }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasExpandable = exp.details || exp.description

  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[23px] top-12 bottom-0 w-px bg-sage-200" />
      )}

      {/* Timeline dot */}
      <div className="relative flex-shrink-0 mt-1">
        {exp.logo ? (
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-sage-200 flex items-center justify-center overflow-hidden">
            <img src={exp.logo} alt={exp.company} className="w-6 h-6 md:w-7 md:h-7 object-contain" />
          </div>
        ) : (
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage-50 border-2 border-sage-200 flex items-center justify-center">
            <Briefcase size={16} className="text-sage-500" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <button
          onClick={() => hasExpandable && setIsOpen(!isOpen)}
          className={`w-full text-left ${hasExpandable ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-semibold text-charcoal-800 text-sm md:text-base leading-tight">
                {exp.role}
              </h4>
              <p className="text-sage-600 font-medium text-sm mt-0.5">{exp.company}</p>
              <p className="text-charcoal-500 text-xs mt-1">
                {exp.period} · {exp.duration}
                {exp.location && <span className="text-charcoal-400"> · {exp.location}</span>}
              </p>
            </div>
            {hasExpandable && (
              <ChevronDown
                size={16}
                className={`text-charcoal-400 flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            )}
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          {exp.description && (
            <p className="text-charcoal-700/70 text-sm leading-relaxed">{exp.description}</p>
          )}
          {exp.details && (
            <ul className="space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-charcoal-700/70 text-sm leading-relaxed pl-3 border-l-2 border-sage-100">
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

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
                Charlotte is the founder of{' '}
                <span className="font-semibold text-sage-600">Grey AI</span>, a company that
                advises companies, funds and individuals on matters of AI strategy, literacy,
                policy, governance and implementation.
              </p>
              <p className="text-charcoal-700/80 leading-relaxed">
                After working for a hardware manufacturer, Charlotte expanded into software and
                earned her stripes as a tech lawyer at Facebook (Meta), where she counseled the
                team building the company's first Facebook-branded hardware product, Portal —
                a device that leveraged AI to power its smart mic and camera.
              </p>
              <p className="text-charcoal-700/80 leading-relaxed">
                She then served as a senior executive at a global SaaS company, where she built
                and led its product, privacy and regulatory strategy and legal functions,
                embedding innovation and direction into the company's core product and global
                expansion strategy.
              </p>
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={200} threshold={0.2} blur>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dnv13bm7j/image/upload/v1773837702/author_acyf3j.webp"
                  alt="Charlotte Lewis Jones"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-sage-100 -z-10" />

              {/* Floating school logos */}
              <div className="hidden md:flex flex-col gap-4 absolute -right-20 top-1/2 -translate-y-1/2">
                {[
                  {
                    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893719/columbia_law_school_logo_bowh6u.jpg',
                    alt: 'Columbia Law School',
                    school: 'Columbia Law School',
                    degree: 'Doctor of Law (JD)',
                  },
                  {
                    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893721/1631385636084_yhltta.jpg',
                    alt: 'Yale University',
                    school: 'Yale University',
                    degree: 'BA, Economics',
                  },
                  {
                    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893722/1631312619853_q8ugkg.jpg',
                    alt: 'University of Southern California',
                    school: 'USC',
                    degree: 'Screenwriting',
                  },
                ].map((edu, i) => (
                  <div
                    key={i}
                    className="group/edu relative flex items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-sage-100 shadow-md flex items-center justify-center overflow-hidden group-hover/edu:scale-110 transition-transform duration-300 z-10">
                      <img src={edu.logo} alt={edu.alt} className="w-9 h-9 object-contain" />
                    </div>
                    <div className="absolute left-16 whitespace-nowrap bg-white rounded-lg px-3 py-2 border border-sage-100 shadow-lg opacity-0 -translate-x-2 pointer-events-none group-hover/edu:opacity-100 group-hover/edu:translate-x-0 transition-all duration-300 z-20">
                      <p className="font-semibold text-charcoal-800 text-sm leading-tight">{edu.school}</p>
                      <p className="text-sage-500 text-xs">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: horizontal row below photo */}
              <div className="flex md:hidden justify-center gap-3 mt-6">
                {[
                  {
                    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893719/columbia_law_school_logo_bowh6u.jpg',
                    alt: 'Columbia Law School',
                  },
                  {
                    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893721/1631385636084_yhltta.jpg',
                    alt: 'Yale University',
                  },
                  {
                    logo: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1773893722/1631312619853_q8ugkg.jpg',
                    alt: 'University of Southern California',
                  },
                ].map((edu, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-white border-2 border-sage-100 shadow-sm flex items-center justify-center overflow-hidden"
                    title={edu.alt}
                  >
                    <img src={edu.logo} alt={edu.alt} className="w-8 h-8 object-contain" />
                  </div>
                ))}
              </div>
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

        {/* Experience Timeline */}
        <FadeContent duration={800} delay={400} threshold={0.1} blur>
          <div className="mt-20">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-sage-500 mb-10">
              Experience
            </h3>
            <div className="max-w-2xl mx-auto">
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  exp={exp}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

export default About
