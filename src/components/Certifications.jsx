import React from 'react';
import { ScrollText } from 'lucide-react';

const certifications = [
    
    {
        title: "Foundational C# with Microsoft",
        company: "freeCodeCamp",
        url: "https://www.freecodecamp.org/certification/fcc85b5b5e9-022c-432e-83b0-35818759be8a/foundational-c-sharp-with-microsoft"
    },
    {
        title: "Java Object Oriented Programming Certification 2024",
        company: "Codechum",
        url: "https://github.com/JivSTuban/farfolio/blob/main/public/certificates/Tuban_OOP_CertificationExam"
    },
    {
        title: "Digital Skills: User Experience",
        company: "Accenture",
        url: "https://github.com/JivSTuban/farfolio/blob/main/public/certificates/Tuban_UXUI_Cert.pdf"
    },
    {
        title: "Python and Django Full Stack Web Developer Bootcamp",
        company: "Udemy",
        url: "https://github.com/JivSTuban/farfolio/blob/main/public/certificates/Tuban_Django_Cert.pdf"
    },
    {
        title: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
        company: "Udemy",
        url: "https://github.com/JivSTuban/farfolio/blob/main/public/certificates/Tuban_PHP_cert.pdf"
    },
    {
        title: "Complete Guide to Web API in .NET 8: Master API Development",
        company: "Udemy",
        url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c58b53d0-8d58-4548-8446-b773102b99f6.pdf"
    },
    {
        title: "Angular - The Complete Guide (2025 Edition)",
        company: "Udemy",
        url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a487006a-637e-4e7b-b781-8df5bbdf932a.pdf"
    },
];

const Certifications = () => (
  <section>
    <h2 className="mb-4 flex items-center gap-2 text-2xl sm:text-3xl font-bold text-zinc-800">
      <ScrollText className="h-7 w-7 sm:h-8 sm:w-8" /> Certifications
    </h2>
    <ul className="list-inside list-disc space-y-2 text-sm sm:text-base text-gray-600">
      {certifications.map((cert, index) => (
        <li key={index}>
          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {cert.title}
          </a> - {cert.company}
        </li>
      ))}
    </ul>
  </section>
);

export default Certifications;
