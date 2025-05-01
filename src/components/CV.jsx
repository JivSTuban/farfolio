import { Briefcase, Code2, GraduationCap, Lightbulb, Mail, MapPin, Phone, Star, User, Monitor, Bike, ScrollText } from 'lucide-react'
import Experience from './Experience'
import Certifications from './Certifications'
import { experiences } from '../constants'

export default function CV() {
  return (
    <div className="text-gray-800 min-h-screen bg-gray-100">
      <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[1600px] xl:max-w-[1600px] 2xl:max-w-[1600px]">
        <div className="grid gap-4 sm:gap-6 grid-cols-[25%_75%] shadow-lg rounded-lg overflow-hidden">
          {/* Sidebar */}
          <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 text-white">
            <div className="mb-6 sm:mb-6 md:mb-8 text-center">
              <div className="mb-3 sm:mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/162428952?v=4"
                  alt="Profile"
                  className="mx-auto rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover border-4 border-zinc-700"
                />
              </div>
              <h1 className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider">JIV TUBAN</h1>
              <p className="text-sm text-zinc-400">
                FOUNDER | <a href="https://www.rotosystems.net" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">ROTO</a>
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg md:text-lg lg:text-lg font-semibold">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" /> Contact
                </h2>
                <div className="space-y-2 text-sm md:text-sm lg:text-sm text-zinc-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 flex-shrink-0" /> 
                    <span className="break-all">+639292862564</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 flex-shrink-0" /> 
                    <span className="break-all">jivtuban14@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 flex-shrink-0" /> 
                    <span className="break-words">Babag, Lapu-Lapu City, Cebu, Philippines</span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg md:text-lg lg:text-lg font-semibold">
                  <Bike className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" /> Hobbies
                </h2>
                <ul className="list-inside list-disc space-y-1 text-sm md:text-sm lg:text-sm text-zinc-400">
                  <li>Cycling</li>
                  <li>Coding</li>
                  <li>Scripting</li>
                  <li>Sprinting</li>
                  <li>Walking</li>
                  <li>Automation</li>
                  <li>Weight Lifting</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 sm:mb-3 flex items-center gap-2 text-base sm:text-lg md:text-lg lg:text-lg font-semibold">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" /> Skills
                </h2>
                <div className="space-y-3 text-sm md:text-sm lg:text-sm text-zinc-400">
                
                  <div>
                    <h3 className="text-white mb-1">AI & Automation</h3>
                    <p>AI Automation (n8n, zapier, make), AI Agents, AI Integration, AI Tools</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Business & Administrative</h3>
                    <p>Data Entry, Data Analysis, Admin Assistant, Admin Tasks, Admin Support, Email Management, Skip Tracing, Lead Generation, Real Estate Assistant, Real Estate Admin, CRM</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Customer Service</h3>
                    <p>Chat Support, Phone Support, Cold Calling, Customer Support</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Marketing</h3>
                    <p>Social Media Marketing, Social Media Manager, Search Engine Optimization, Email Marketing, Creative Writing</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Other Skills</h3>
                    <p>Communication, Micro Services, Git, Scraping, Debugging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-5 md:pl-2 md:pr-6 lg:pl-3 lg:pr-8 md:pt-6 md:pb-6 lg:pt-8 lg:pb-8">
            <div className="space-y-6 sm:space-y-6 md:space-y-8">
              <section>
                <h2 className="mb-3 sm:mb-3 md:mb-4 flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" /> About Me
                </h2>
                <p className="text-sm md:text-sm lg:text-base text-gray-600 leading-relaxed">
                  Full-stack web developer specializing in creating intuitive user experiences and robust backend systems. 
                  Proven track record in building efficient web solutions. 
                  Strong problem-solving skills with a focus on writing clean, maintainable code. 
                  Enthusiastic team player who thrives in collaborative environments and stays current with emerging technologies.
                </p>
              </section>

              <section>
                <h2 className="mb-3 sm:mb-3 md:mb-4 flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
                  <Code2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" /> Experience
                </h2>
                <div className="space-y-2 md:space-y-3">
                  {experiences.map((experience, index) => (
                    <Experience
                      key={index}
                      title={experience.title}
                      company={experience.company}
                      date={experience.date}
                      location={experience.location}
                      description={experience.description}
                      certificateUrl={experience.title === "Internship" ? "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_Ebhii2CfGr9wRxNEF_1731330290797_completion_certificate.pdf" : undefined}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-3 sm:mb-3 md:mb-4 flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" /> Featured Work
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-zinc-900 flex items-center gap-1">
                        roto
                        <span className="inline-block w-2 h-2 mt-2 bg-yellow-400 rounded-full"></span>
                      </h3>
                      <p className="text-sm md:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
                        A business automation platform helping companies run on autopilot. Features AI-powered solutions for lead generation, skip tracing, and lead conversion, enabling businesses to focus on closing deals while automating tedious tasks.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-black text-white rounded-full">Next.js 15</span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">Tailwind</span>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
                        <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">Supabase</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://www.rotosystems.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Monitor className="h-5 w-5" />
                        Live Site
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-zinc-900 flex items-center gap-2">
                        Austin McClain
                      </h3>
                      <p className="text-sm md:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
                        A commissioned professional portfolio website designed and developed for client Austin McClain. Features a clean, modern interface showcasing the client's work, services, and contact information with responsive design for optimal viewing across all devices.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">React</span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">Tailwind</span>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Vite</span>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-800 text-white rounded-full">shadcn-ui</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://austinmcclain.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Monitor className="h-5 w-5" />
                        Live Site
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" /> Education
                </h2>
                <h3 className="text-base sm:text-lg font-semibold">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Majoring in Software Development</p>
              </section>

              <Certifications/>

              <section>
                <h2 className="mb-6 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">
                  <Monitor className="h-6 w-6 sm:h-7 sm:w-7" /> Tech Stack
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-3">Backend Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-medium">Spring Boot</span>
                      <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-medium">Django</span>
                      <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-medium">FastAPI</span>
                      <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-lg font-medium">Flask</span>
                      <span className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg font-medium">ASP.NET Core</span>
                      <span className="px-3 py-1.5 bg-red-100 text-red-800 rounded-lg font-medium">Laravel</span>
                      <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg font-medium">Supabase</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-3">Frontend Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-lg font-medium">JavaScript</span>
                      <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-medium">TypeScript</span>
                      <span className="px-3 py-1.5 bg-cyan-100 text-cyan-800 rounded-lg font-medium">Tailwind</span>
                      <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-medium">Bootstrap</span>
                      <span className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg font-medium">Blazor</span>
                      <span className="px-3 py-1.5 bg-black text-white rounded-lg font-medium">Next.js</span>
                      <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-medium">React</span>
                      <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-medium">Vue.js</span>
                      <span className="px-3 py-1.5 bg-red-100 text-red-800 rounded-lg font-medium">Angular</span>
                      <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-medium">Svelte</span>
                    </div>
                  </div>
                 
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
