import OptionsList from "./OptionsList";
import SelectedOption from "./SelectedOption";
const RenderContent = ({
  selectedOption,
  options,
  handleOptionSelect,
  handleBack,
}) => {
  if (selectedOption === "") {
    return (
      <OptionsList options={options} handleOptionSelect={handleOptionSelect} />
    );
  } else {
    return (
      <SelectedOption
        selectedOption={selectedOption}
        options={options}
        handleBack={handleBack}
      />
    );
  }
};

export default RenderContent;
