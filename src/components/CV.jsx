/* eslint-disable react/prop-types */
import { Briefcase, Code2, GraduationCap, Lightbulb, Mail, MapPin, Phone, Star, User, Bike, Linkedin, Github, Globe, Trophy } from 'lucide-react'
import Experience from './Experience'
import Certifications from './Certifications'
import { person, experience, projects, award, education, skills } from '../data/profile'

const heading = 'mb-3 md:mb-4 flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800'
const icon = 'h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7'

const StackTags = ({ items }) => (
  <div className="flex flex-wrap gap-2 mt-3">
    {items.map((s) => (
      <span key={s} className="px-3 py-1 text-xs font-medium bg-zinc-200 text-zinc-800 rounded-full">{s}</span>
    ))}
  </div>
)

const Bullets = ({ items }) => (
  <ul className="mt-2 space-y-2 text-sm lg:text-base text-gray-600 leading-relaxed">
    {items.map((b) => (
      <li key={b.slice(0, 24)} className="flex items-start">
        <span className="mt-2.5 mr-3 w-1.5 h-1.5 bg-black-500 rounded-full flex-shrink-0"></span>
        <span>{b}</span>
      </li>
    ))}
  </ul>
)

const SidebarLink = ({ href, icon: Icon, children }) => (
  <p className="flex items-center gap-2">
    <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
    <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className="break-all hover:text-zinc-300 transition-colors">{children}</a>
  </p>
)

export default function CV() {
  return (
    <div className="text-gray-800 min-h-screen bg-gray-100">
      <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[1600px] xl:max-w-[1600px] 2xl:max-w-[1600px]">
        {/* 1 column below md, then sidebar + minmax(0,1fr): a plain 25%/75% split clipped the cards (PR #3). The 240px floor keeps the LinkedIn URL on one line at ~1000px. */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-[minmax(240px,25%)_minmax(0,1fr)] shadow-lg rounded-lg overflow-hidden">
          {/* Sidebar */}
          <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 text-white">
            <div className="mb-6 sm:mb-6 md:mb-8 text-center">
              <div className="mb-3 sm:mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/162428952?v=4"
                  alt="Jiv Tuban"
                  className="mx-auto rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover border-4 border-zinc-700"
                />
              </div>
              <h1 className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">JIV TUBAN</h1>
              <p className="text-sm text-zinc-400">{person.roles.join(' | ')}</p>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg font-semibold">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /> Contact
                </h2>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span className="break-all">+639292862564</span>
                  </p>
                  <SidebarLink href={`mailto:${person.email}`} icon={Mail}>{person.email}</SidebarLink>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span className="break-words">{person.location}</span>
                  </p>
                  <SidebarLink href={person.linkedin} icon={Linkedin}>linkedin.com/in/jiv-tuban</SidebarLink>
                  <SidebarLink href={person.github} icon={Github}>github.com/JivSTuban</SidebarLink>
                  <SidebarLink href="https://farfolio.vercel.app" icon={Globe}>farfolio.vercel.app</SidebarLink>
                </div>
              </div>

              <div>
                <h2 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg font-semibold">
                  <Bike className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /> Hobbies
                </h2>
                <ul className="list-inside list-disc space-y-1 text-sm text-zinc-400">
                  {['Cycling', 'Coding', 'Scripting', 'Sprinting', 'Walking', 'Automation', 'Weight Lifting'].map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg font-semibold">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /> Skills
                </h2>
                <div className="space-y-3 text-sm text-zinc-400">
                  {skills.map((s) => (
                    <div key={s.group}>
                      <h3 className="text-white mb-1">{s.group}</h3>
                      <p>{s.items.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-5 md:pl-2 md:pr-6 lg:pl-3 lg:pr-8 md:pt-6 md:pb-6 lg:pt-8 lg:pb-8">
            <div className="space-y-6 md:space-y-8">
              <section>
                <h2 className={heading}><User className={icon} aria-hidden="true" /> About Me</h2>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{person.summary}</p>
              </section>

              <section>
                <h2 className={heading}><Code2 className={icon} aria-hidden="true" /> Experience</h2>
                <div className="divide-y divide-gray-200">
                  {experience.map((job) => (
                    <Experience
                      key={job.code}
                      title={job.role}
                      company={job.company}
                      date={`${job.start} to ${job.end}`}
                      location={`${job.place} · ${job.mode}`}
                      description={job.bullets}
                      logo={job.logo}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className={heading}><Lightbulb className={icon} aria-hidden="true" /> Selected Projects</h2>
                <div className="space-y-4">
                  {projects.map((p) => (
                    <div key={p.name} className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg border border-gray-100">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-zinc-900">
                          {p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">{p.name}</a> : p.name}
                        </h3>
                        <span className="text-sm text-zinc-500">{p.when}</span>
                      </div>
                      <p className="text-sm text-zinc-600">{p.tagline}</p>
                      <StackTags items={p.stack} />
                      <Bullets items={p.bullets} />
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={heading}><Trophy className={icon} aria-hidden="true" /> Awards & Competitions</h2>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">{award.title} | {award.team}</h3>
                <p className="text-sm text-gray-500">{award.when}</p>
                <Bullets items={award.bullets} />
                <StackTags items={award.stack} />
              </section>

              <section>
                <h2 className={heading}><GraduationCap className={icon} aria-hidden="true" /> Education</h2>
                <h3 className="text-base sm:text-lg font-semibold">{education.degree}</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">{education.school}</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Graduated {education.graduated} · {education.place}</p>
                <p className="mt-1 text-sm text-gray-500">Relevant coursework: {education.coursework}</p>
              </section>

              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
