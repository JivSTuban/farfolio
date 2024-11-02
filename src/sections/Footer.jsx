const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/jivstuban" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.facebook.com/hart.break.31337" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://img.icons8.com/m_rounded/200/FFFFFF/facebook.png" alt="facebook" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.linkedin.com/in/jiv-tuban-b43b44314/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt="linkedIn" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Jiv Tuban. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;