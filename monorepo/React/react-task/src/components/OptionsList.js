import Option from "./Option";
const OptionsList = ({ options, handleOptionSelect }) => {
  return (
    <div>
      <div>
        {options.map((optionObj, index) => (
          <Option
            key={index}
            optionObj={optionObj}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
      </div>
      <div>
        <p>
          {" "}
          Not sure about the consultation type? Please call{" "}
          <span>0203 7959063</span>
        </p>
      </div>
    </div>
  );
};

export default OptionsList;
