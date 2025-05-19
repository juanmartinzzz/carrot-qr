const BlackButton = ({ children, onClick }) => {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer" onClick={onClick}>{children}</button>
  );
};

export default BlackButton;