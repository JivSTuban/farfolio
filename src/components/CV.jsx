import { Briefcase, Code2, GraduationCap, Lightbulb, Mail, MapPin, Phone, Star, User, Monitor, Bike, ScrollText } from 'lucide-react'
import Experience from './Experience'
import Certifications from './Certifications'

export default function CV() {
  return (
    <div className="text-gray-800 min-h-screen bg-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-4 cv:gap-6 grid-cols-1 cv:grid-cols-[320px_1fr] shadow-lg rounded-lg overflow-hidden">
          {/* Sidebar */}
          <div className="bg-zinc-900 p-4 sm:p-6 cv:p-8 text-white">
            <div className="mb-8 text-center">
              <div className="mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/162428952?v=4"
                  alt="Profile"
                  className="mx-auto rounded-full w-28 h-28 sm:w-32 sm:h-32 cv:w-40 cv:h-40 object-cover border-4 border-zinc-700"
                />
              </div>
              <h1 className="mb-2 text-2xl sm:text-3xl cv:text-4xl font-bold tracking-wider">JIV TUBAN</h1>
              <p className="text-base sm:text-lg cv:text-xl text-zinc-400">WEB DEVELOPER</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-lg sm:text-xl font-semibold">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" /> Contact
                </h2>
                <div className="space-y-2 text-sm sm:text-base text-zinc-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> 
                    <span className="break-all">+639292862564</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> 
                    <span className="break-all">jivtuban14@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" /> 
                    <span className="break-words">Babag 2, Lapu-Lapu City, Cebu, Philippines</span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-3 flex items-center gap-2 text-lg sm:text-xl font-semibold">
                  <Bike className="h-5 w-5 sm:h-6 sm:w-6" /> Hobbies
                </h2>
                <ul className="list-inside list-disc space-y-1 text-sm sm:text-base text-zinc-400">
                  <li>Cycling</li>
                  <li>Coding</li>
                  <li>Scripting</li>
                  <li>Sprinting</li>
                  <li>Looksmaxxing</li>
                  <li>Web Designing</li>
                  <li>Weight Lifting</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 flex items-center gap-2 text-lg sm:text-xl font-semibold">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6" /> Skills
                </h2>
                <ul className="list-inside list-disc space-y-1 text-sm sm:text-base text-zinc-400">
                  <li>API Integration</li>
                  <li>Web Design</li>
                  <li>Backend-End Development</li>
                  <li>Front-End Development</li>
                  <li>Photo Editing</li>
                  <li>Debugging</li>
                  <li>Communication</li>
                  <li>Video Editing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 cv:p-8">
            <div className="space-y-8">
              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl cv:text-3xl font-bold text-zinc-800">
                  <User className="h-6 w-6 sm:h-7 sm:w-7" /> About Me
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Full-stack web developer specializing in creating intuitive user experiences and robust backend systems. 
                  Proven track record in building efficient web solutions. 
                  Strong problem-solving skills with a focus on writing clean, maintainable code. 
                  Enthusiastic team player who thrives in collaborative environments and stays current with emerging technologies.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl cv:text-3xl font-bold text-zinc-800">
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" /> Education
                </h2>
                <h3 className="text-base sm:text-lg font-semibold">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Majoring in Software Development</p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl cv:text-3xl font-bold text-zinc-800">
                  <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" /> Projects
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">TJ - Human Resource</h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                        A comprehensive HR system that improved employee management efficiency by 150%. Features include goal tracking, time and attendance monitoring, user profile management, and automated leave processing, all integrated through a user-friendly interface built with Django-Templates and enhanced with Crispy Forms.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Django</span>
                        <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Python</span>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">SQLite</span>
                        <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">JavaScript</span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Bootstrap</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://jiv.aetherrflare.studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Monitor className="h-5 w-5" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">HKOTISK - Canteen Management</h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                        A Spring Boot REST API that streamlined school canteen operations by 200%. Features real-time order tracking via WebSocket, staff product management, and an efficient cart checkout system for seamless ordering process.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Spring Boot</span>
                        <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Java</span>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Docker</span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">MySQL</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://github.com/jivstuban/hkotisk_backend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <Code2 className="h-5 w-5" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl cv:text-3xl font-bold text-zinc-800">
                  <Code2 className="h-6 w-6 sm:h-7 sm:w-7" /> Experience
                </h2>
                <div className="space-y-4">
                  <Experience
                    title="INTERNSHIP"
                    company="JPMORGAN CHASE & CO"
                    date="NOVEMBER 2024"
                    location="REMOTE (VIRTUAL)"
                    certificateUrl="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_Ebhii2CfGr9wRxNEF_1731330290797_completion_certificate.pdf"
                  />
                </div>
              </section>

              <Certifications/>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-xl sm:text-2xl cv:text-3xl font-bold text-zinc-800">
                  <Monitor className="h-6 w-6 sm:h-7 sm:w-7" /> Tech Stack
                </h2>
                <h3 className="mb-2 text-base sm:text-lg font-semibold">FRAMEWORKS/LIBRARIES</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ASP.NET CORE
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    BLAZOR
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    LARAVEL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    DJANGO
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    SPRING BOOT
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    REACT
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
