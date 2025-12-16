import { Briefcase, Code2, GraduationCap, Lightbulb, Mail, MapPin, Phone, Star, User, Monitor, Bike, ScrollText, Linkedin, Github, Globe } from 'lucide-react'
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
                Full Stack Software Developer | FOUNDER
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
                  <p className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 flex-shrink-0" /> 
                    <a href="https://linkedin.com/in/jiv-tuban-b43b44314" target="_blank" rel="noopener noreferrer" className="break-all hover:text-zinc-300 transition-colors">linkedin.com/in/jiv-tuban</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Github className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 flex-shrink-0" /> 
                    <a href="https://github.com/JivSTuban" target="_blank" rel="noopener noreferrer" className="break-all hover:text-zinc-300 transition-colors">github.com/JivSTuban</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 flex-shrink-0" /> 
                    <a href="https://farfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="break-all hover:text-zinc-300 transition-colors">farfolio.vercel.app</a>
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
                    <h3 className="text-white mb-1">Backend Development</h3>
                    <p>Spring Boot, Django, FastAPI, Flask, ASP.NET Core, Laravel, Supabase</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Frontend Development</h3>
                    <p>JavaScript, TypeScript, Tailwind, Bootstrap, Blazor, Next.js, React, Vue.js, Angular, Svelte</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">AI & Automation</h3>
                    <p>OpenAI API Integration, Knowledge Base Systems, AI-Powered Automation, Prompt Engineering, Natural Language Processing, Email Automation, Workflow Automation, Web Scraping (Playwright), Machine Learning (TensorFlow), Data Analysis (SQL, Pandas, Power BI), AI Ethics, Deep Learning (PyTorch, Keras), Retrieval-Augmented Generation (LangChain), AI Automation (Zapier, Make, n8n), AI Agents</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Cloud Platforms & Infrastructure</h3>
                    <p>Amazon Web Services (AWS), AWS Architecture, AWS Core Services, AWS Cloud, AWS Pricing, AWS Support, Google Cloud Platform (GCP), Cloud Run, Pub/Sub, Secret Manager, Cloud Storage</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Blockchain & Web</h3>
                    <p>Solana blockchain, @solana/web3.js</p>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Tools & Methodologies</h3>
                    <p>Git/Github, Microservices, Debugging, Communication</p>
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
                  Full stack web developer and founder focused on intuitive user experiences and dependable backend systems. Leverages automation and Artificial Intelligence to streamline workflows and deliver maintainable, high-quality software.
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
                      logo={experience.logo}
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
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-zinc-900 flex items-center gap-2">
                        Austin McClain Portfolio
                      </h3>
                      <p className="text-sm md:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
                        Built high-performance real estate portfolio with TypeScript, React (Vite), and Supabase, achieving 95+ Lighthouse performance score and reducing initial load time by 60% through optimized bundle splitting and lazy loading. Integrated real-time MLS feed automation and lead capture system processing 119+ active listings worth $13.5M, resulting in 25% increase in qualified inquiries through automated notifications and form workflows. Implemented responsive property showcase with advanced filtering, testimonials management, and automated lead nurturing using Supabase real-time subscriptions and Edge Functions.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">React (Vite)</span>
                        <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">Supabase</span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Cloudinary</span>
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

                  <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-zinc-900 flex items-center gap-2">
                        Keilah's Cakes and Pastries
                      </h3>
                      <p className="text-sm md:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
                        Developed full-stack bakery e-commerce platform using Next.js 13 App Router, TypeScript, Tailwind CSS, and Supabase (PostgreSQL with Row Level Security), achieving 95+ Lighthouse performance scores and 40% faster page loads through server-side rendering and code splitting. Architected dynamic category-based menu browsing and featured orders showcase, with customer testimonial management and admin moderation using Supabase's real-time database and authentication. Optimized image delivery pipeline via Cloudinary and Next/Image, reducing bandwidth usage by 50% and implementing lazy loading for enhanced Core Web Vitals performance.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-black text-white rounded-full">Next.js 13</span>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">Tailwind CSS</span>
                        <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">Supabase</span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Cloudinary</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://keilahs.shop"
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
                <h2 className="mb-3 sm:mb-3 md:mb-4 flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
                  <ScrollText className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" /> Awards & Competitions
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-900">GCash ImaGnation 2025 Hackathon Winner | CAT5 Team</h3>
                    <p className="text-sm text-gray-500">Philippines, November 2025</p>
                    <ul className="list-disc list-inside mt-2 text-sm md:text-sm lg:text-base text-gray-600 leading-relaxed space-y-1">
                      <li>Won top prize among 196 competing teams (980 students) from leading Philippine universities for "GAssure", a blockchain-backed escrow solution designed to eliminate middle-man scams and payment fraud</li>
                      <li>Architected a trustless escrow system that locks funds on GCash while recording 100% of transaction states on the Solana blockchain, providing an immutable audit trail that resolves disputes with indisputable on-chain facts</li>
                      <li>Designed end-to-end architecture (React, Supabase, Solana) to secure P2P and B2B deals, preventing financial losses from cancelled deliveries by ensuring funds are only released upon verified completion</li>
                      <li>Led Quality Assurance for the multi-party escrow engine, validating real-time balance tracking and blockchain confirmations to ensure zero state discrepancies across the full transaction lifecycle</li>
                    </ul>
                    <p className="mt-2 text-sm font-medium text-gray-700">Tech stack: React, TypeScript, Supabase, PostgreSQL, Solana blockchain, @solana/web3.js</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" /> Education
                </h2>
                <h3 className="text-base sm:text-lg font-semibold">Bachelor of Science in Information Technology</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Cebu Institute of Technology - University</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">July 2022 - May 2026 (Expected) Cebu, Philippines</p>
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
