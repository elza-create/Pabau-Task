import Button from "./Button";

const SelectedOption = ({ selectedOption, options, handleBack }) => {
  const selectedOptionObj = options.find(
    (optionObj) => optionObj.option === selectedOption
  );

  return (
    <div>
      <Button onClick={handleBack}>Back</Button>
      <div className="selected-option">
        <img
          src={selectedOptionObj.image}
          alt={selectedOptionObj.option}
          className="selected-option-image"
        />
        <h1 className="selected-option-name">{selectedOption}</h1>
      </div>
    </div>
  );
};
export default SelectedOption;
