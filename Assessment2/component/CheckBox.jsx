import React, { useState } from "react";

function CheckBox() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      {checked && <p>You checked the box!</p>}
    </div>
  );
}

export default CheckBox;
