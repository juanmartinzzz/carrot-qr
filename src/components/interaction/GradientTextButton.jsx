const GradientTextButton = ({ children, onClick }) => {
  return (
    <button className="rounded-full cursor-pointer" onClick={onClick}>
      <span className="gradient-text">{children}</span>
    </button>
  );
};

export default GradientTextButton;