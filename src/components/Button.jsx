const Button = ({ name, isBeam = false, containerClass = '', onClick }) => {
    return (
      <button type="button" onClick={onClick} className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3" aria-hidden="true">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </button>
    );
  };

  export default Button;
