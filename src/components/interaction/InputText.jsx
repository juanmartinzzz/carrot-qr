const InputText = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-lg font-medium">{label}</label>

      <input
        type="text"
        value={value || ''}
        onChange={onChange}
        className="w-full text-lg p-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-500 rounded-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;