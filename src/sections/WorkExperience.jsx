import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experience, proof } from '../data/profile.js';

// The page used to show experience only inside the CV modal. This section puts the
// numbers and the jobs on the page. Only the first bullet of each job is visible by
// default (the strongest result); the rest sit behind a real button.
const WorkExperience = () => {
  const [expanded, setExpanded] = useState(() => new Set());

  const toggle = (code) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });

  return (
    <section className="c-space my-20">
      <h2 className="head-text">Work Experience</h2>

      <div className="work-container">
        <div className="work-canvas">
          <dl className="p-5 sm:p-7 flex flex-col gap-6">
            {proof.map((n) => (
              <div key={n.value + n.of}>
                <dt className="text-3xl sm:text-4xl font-semibold text-white tabular-nums">{n.value}</dt>
                <dd className="mt-1 text-white-600">{n.label}</dd>
                <dd className="text-xs uppercase tracking-widest text-white-600">{n.of}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="work-content">
          <div className="sm:p-10 px-5 py-10 flex flex-col">
            {experience.map((job) => {
              const isOpen = expanded.has(job.code);
              const [first, ...rest] = job.bullets;
              return (
                <div key={job.code} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full object-contain rounded-2xl" src={job.logo} alt="" width="64" height="64" loading="lazy" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <h3 className="font-bold text-white-800 text-lg">{job.company}</h3>
                    <p className="text-sm text-white-600 mb-4">
                      {job.role} · {job.start} to {job.end} · {job.place}
                    </p>
                    <ul className="space-y-3 text-white-600 group-hover:text-white-800 transition-colors duration-200">
                      <li>{first}</li>
                    </ul>
                    {rest.length > 0 && (
                      // The button stays put when pressed: the extra bullets open BELOW it,
                      // so a second press on the same spot closes them again.
                      <button
                        type="button"
                        onClick={() => toggle(job.code)}
                        aria-expanded={isOpen}
                        className="my-3 inline-flex items-center gap-1 text-sm text-white-800 hover:text-white active:scale-[0.97] transition-[color,transform] duration-150">
                        {isOpen ? 'Show less' : `Show ${rest.length} more`}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-150 ease-out ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                    {isOpen && (
                      <ul className="space-y-3 text-white-600 group-hover:text-white-800 transition-colors duration-200">
                        {rest.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
