import Option from "./Option";

const OptionsList = ({ options, handleOptionSelect }) => {
  return (
    <div className="container">
      <div className="inner-container">
        {options.map((optionObj, index) => (
          <Option
            key={index}
            optionObj={optionObj}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
      </div>
      <div className="gap-div">
        <p className="gap-div-text">
          Not sure about the consultation type? Please call{" "}
          <span className="number">0203 7959063</span>
        </p>
      </div>
    </div>
  );
};

export default OptionsList;
