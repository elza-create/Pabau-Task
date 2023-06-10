const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="back-button">
      {children}
    </button>
  );
};

export default Button;
