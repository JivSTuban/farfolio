import React from 'react'

const Experience = ({ title, company, date, location, certificateUrl, description }) => {
  return (
    <div className=" bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-800">
          {certificateUrl ? (
            <a href={certificateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              {company ? (
                <>
                  <span className="text-zinc-900">{title}</span>
                  <span className="text-zinc-600"> - </span>
                  <span className="text-zinc-800">{company}</span>
                </>
              ) : title}
            </a>
          ) : (
            <>
              {company ? (
                <>
                  <span className="text-zinc-900">{title}</span>
                  <span className="text-zinc-600"> - </span>
                  <span className="text-zinc-800">{company}</span>
                </>
              ) : title}
            </>
          )}
        </h3>
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
          <span className="bg-zinc-100 px-3 py-1 rounded-full">{location}</span>
          <span className="bg-zinc-100 px-3 py-1 rounded-full">{date}</span>
        </div>
      </div>
      {description && (
        <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-600">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mt-2.5 mr-3 w-1.5 h-1.5 bg-black-500 rounded-full flex-shrink-0"></span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Experience
