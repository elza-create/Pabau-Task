import OptionsList from "./OptionsList";
import SelectedOption from "./SelectedOption";
const RenderContent = ({ selectedOption, options, handleOptionSelect }) => {
  if (selectedOption === "") {
    return (
      <OptionsList options={options} handleOptionSelect={handleOptionSelect} />
    );
  } else {
    return <SelectedOption selectedOption={selectedOption} options={options} />;
  }
};

export default RenderContent;
