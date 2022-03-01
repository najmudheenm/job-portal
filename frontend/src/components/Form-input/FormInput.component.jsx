const FormInput = ({ label, children, ...otherProps }) => {
  return (
    <div className="group">
       {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label+" "}
        </label>
      )}
      <input {...otherProps} />
     
    </div>
  );
};

export default FormInput;
