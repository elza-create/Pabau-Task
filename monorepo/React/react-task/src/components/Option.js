const Option = ({ optionObj, handleOptionSelect }) => {
  const { option, image } = optionObj;

  return (
    <button
      className="option-button"
      onClick={() => handleOptionSelect(option)}
      style={{ justifyContent: "space-between" }}
    >
      <div className="option-content">
        <img
          src={image}
          alt={option}
          className="option-icon"
          style={{ marginRight: "10px" }}
        />
        <span className="option-name">{option}</span>

        <span className="option-arrow" style={{ marginLeft: "auto" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default Option;
