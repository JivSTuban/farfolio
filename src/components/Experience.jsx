import React from 'react'

const Experience = ({ title, company, date, location, certificateUrl }) => {
  return (
    <div className="mb-4 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold">
        {certificateUrl ? (
            <a href={certificateUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {title} - {company}
            </a>
        ) : (
            <>
            {title} - {company}
            </>
        )}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
        {location}, {date}
        </p>
    </div>
  )
}

export default Experience