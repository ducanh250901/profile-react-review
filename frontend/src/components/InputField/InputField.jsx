const InputField = (props) => {
  const { inputType, data, setData, label } = props;
console.log(label)
  return (   
    <>
    <label>{label}</label>
      {inputType === "textarea" ? (
          <textarea
            type="text"
            placeholder={data}
            onChange={(e) => setData(e.target.value)}
          />
      ) : (
          <input
            type="text"
            placeholder={data}
            onChange={(e) => setData(e.target.value)}
          />
      )}
    </>
  );
};

export default InputField;
