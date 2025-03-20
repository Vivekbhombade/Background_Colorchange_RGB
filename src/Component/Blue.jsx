import { useState } from "react";

const Blue = ({ setBlue }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
    setBlue(e.target.value);
  };

  return (
    <div>
      <label>Blue: {value}</label>
      <input type="range" min="0" max="255" value={value} onChange={handleChange} />
    </div>
  );
};

export default Blue;
