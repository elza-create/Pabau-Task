const Option = ({ optionObj, handleOptionSelect }) => {
  const { option, image } = optionObj;
  return (
    <button onClick={() => handleOptionSelect(option)}>
      <div>
        <img src={image} alt={option} />
        <span>{option}</span>
      </div>
    </button>
  );
};

export default Option;
