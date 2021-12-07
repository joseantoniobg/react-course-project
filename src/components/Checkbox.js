import React from "react";

const Checkbox = ({ options, values, setValues }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValues([...values, target.value]);
    } else {
      setValues(values.filter((v) => v !== target.value));
    }
  };

  return (
    <div>
      {options.map((opt) => (
        <label key={opt.id}>
          <input
            type="checkbox"
            value={opt.id}
            checked={values.includes(opt.id)}
            onChange={handleChange}
          />
          {opt.name}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
