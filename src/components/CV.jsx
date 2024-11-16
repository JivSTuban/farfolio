import { Briefcase, Code2, GraduationCap, Lightbulb, Mail, MapPin, Phone, Star, User, Monitor, Award, ScrollText } from 'lucide-react'

export default function CV() {
  return (
    <div className="text-gray-800 min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] lg:grid-cols-[400px_1fr] bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Sidebar */}
          <div className="bg-zinc-900 p-6 md:p-8 text-white">
            <div className="mb-8 text-center">
              <div className="mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/162428952?v=4"
                  alt="Profile"
                  className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-4 border-zinc-700"
                />
              </div>
              <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-wider">JIV TUBAN</h1>
              <p className="text-lg sm:text-xl text-zinc-400">WEB DEVELOPER</p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <Briefcase className="h-5 w-5" /> Contact
                </h2>
                <div className="space-y-2 text-sm sm:text-base text-zinc-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" /> 
                    <span className="break-all">+639292862564</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" /> 
                    <span className="break-all">jivtuban14@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" /> 
                    <span>Babag 2, Lapu-Lapu City, Cebu, Philippines</span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <GraduationCap className="h-5 w-5" /> Hobbies
                </h2>
                <ul className="list-inside list-disc space-y-1 text-sm sm:text-base text-zinc-400">
                  <li>Coding</li>
                  <li>Scripting</li>
                  <li>Web Designing</li>
                  <li>Weight Lifting</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <Star className="h-5 w-5" /> Skills
                </h2>
                <ul className="list-inside list-disc space-y-1 text-sm sm:text-base text-zinc-400">
                  <li>Photo Editing</li>
                  <li>Web Design</li>
                  <li>Backend-End Development</li>
                  <li>Front-End Development</li>
                  <li>Debugging</li>
                  <li>Communication</li>
                  <li>Video Editing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8 bg-white">
            <div className="space-y-6 md:space-y-8">
              <section>
                <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
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
                <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" /> Education
                </h2>
                <h3 className="text-md sm:text-lg font-semibold">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</h3>
                <p className="mt-1 text-sm sm:text-base text-gray-600">CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY</p>
                <p className="mt-1 text-sm sm:text-base text-gray-600">Majoring in Web Development</p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
                  <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" /> Projects
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-semibold">TJ - HUMAN RESOURCE</h3>
                    <a 
                      href="https://github.com/jivstuban/tj-human-resource.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 break-all"
                    >
                      HTTPS://GITHUB.COM/JIVSTUBAN/TJ-HUMAN-RESOURCE.GIT
                    </a>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      A Django web app that is built to aid companies in their human resource processes
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-semibold">HKOTISK_BACKEND</h3>
                    <a 
                      href="https://github.com/jivstuban/hkotisk_backend.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 break-all"
                    >
                      HTTPS://GITHUB.COM/JIVSTUBAN/HKOTISK_BACKEND.GIT
                    </a>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      A Spring Boot REST API made to streamline our school canteen's ordering process
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
                  <Code2 className="h-6 w-6 sm:h-7 sm:w-7" /> Experience
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold">INTERNSHIP - JPMORGAN CHASE & CO</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">REMOTE (VIRTUAL), NOVEMBER 2024</p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
                  <ScrollText className="h-6 w-6 sm:h-7 sm:w-7" /> Certifications
                </h2>
                <ul className="list-inside list-disc space-y-2 text-sm sm:text-base text-gray-600">
                  <li>PYTHON AND DJANGO FULL STACK WEB DEVELOPER BOOTCAMP - UDEMY</li>
                  <li>THE COMPLETE 2023 PHP FULL STACK WEB DEVELOPER BOOTCAMP - UDEMY</li>
                  <li>DIGITAL SKILLS: USER EXPERIENCE - ACCENTURE</li>
                  <li>JAVA OBJECT ORIENTED PROGRAMMING CERTIFICATION 2024 - CODECHUM</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
                  <Monitor className="h-6 w-6 sm:h-7 sm:w-7" /> Tech Stack
                </h2>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold">FRAMEWORKS/LIBRARIES</h3>
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