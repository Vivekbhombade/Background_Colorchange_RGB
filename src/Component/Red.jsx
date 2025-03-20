import { useState } from "react";

const Red = ({ setRed }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
    setRed(e.target.value);
  };

  return (
    <div>
      <label>Red: {value}</label>
      <input type="range" min="0" max="255" value={value} onChange={handleChange} />
    </div>
  );
};

export default Red;
