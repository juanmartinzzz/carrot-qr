const OutlineButton = ({ children, onClick }) => {
  return (
    <button className="bg-white text-black px-4 py-2 rounded-full cursor-pointer border-2 border-black hover:bg-black hover:text-white transition-colors" onClick={onClick}>{children}</button>
  );
};

export default OutlineButton;