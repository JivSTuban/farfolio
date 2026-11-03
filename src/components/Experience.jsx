/* eslint-disable react/prop-types */
// One job in the CV modal. No card or pills: a logo, the title, the company, one meta line,
// then the bullets. The parent separates entries with a hairline (divide-y).
const Experience = ({ title, company, date, location, certificateUrl, description, logo }) => {
  const companyName = certificateUrl ? (
    <a href={certificateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">{company}</a>
  ) : company;

  return (
    <article className="py-6 first:pt-0 last:pb-0">
      <div className="flex items-start gap-4">
        {logo && (
          <img
            src={logo}
            alt=""
            width="48"
            height="48"
            className="w-12 h-12 flex-shrink-0 object-contain rounded-lg bg-white border border-gray-200 p-1"
          />
        )}
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">{title}</h3>
          <p className="text-base text-zinc-700">{companyName}</p>
          <p className="text-sm text-zinc-500">{date} · {location}</p>
        </div>
      </div>

      {description && (
        <ul className="mt-4 sm:pl-16 space-y-2 text-sm sm:text-base text-gray-600">
          {description.map((item) => (
            <li key={item.slice(0, 24)} className="flex items-start">
              <span className="mt-2.5 mr-3 w-1.5 h-1.5 bg-black-500 rounded-full flex-shrink-0"></span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Experience;
