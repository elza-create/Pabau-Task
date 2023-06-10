import Button from "./Button";
const SelectedOption = ({ options, selectedOption, handleBack }) => {
  const selectedOptionObj = options.find(
    (optionObj) => optionObj.option === selectedOption
  );
  return (
    <div>
      <Button onClick={handleBack}>Back</Button>
      <div>
        <img src={selectedOptionObj.image} alt={selectedOptionObj.option} />
        <h1>{selectedOption}</h1>
      </div>
    </div>
  );
};

export default SelectedOption;
