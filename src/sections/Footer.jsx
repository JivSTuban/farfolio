import { person } from '../data/profile.js';

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <a href={`mailto:${person.email}`} className="text-white-600 hover:text-white transition-colors">
          {person.email}
        </a>

        <div className="flex gap-3">
          <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
            <img src="/assets/github.svg" alt="" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.facebook.com/hart.break.31337" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
            <img src="https://img.icons8.com/m_rounded/200/FFFFFF/facebook.png" alt="" className="w-1/2 h-1/2" />
          </a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="12" height="12" className="w-1/2 h-1/2 text-white" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </div>

        <p className="text-white-600">© {new Date().getFullYear()} {person.name}</p>
      </footer>
    );
  };

  export default Footer;
