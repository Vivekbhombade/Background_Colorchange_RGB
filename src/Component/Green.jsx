import { useState } from "react";

const Green = ({ setGreen }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
    setGreen(e.target.value);
  };

  return (
    <div>
      <label>Green: {value}</label>
      <input type="range" min="0" max="255" value={value} onChange={handleChange} />
    </div>
  );
};

export default Green;
