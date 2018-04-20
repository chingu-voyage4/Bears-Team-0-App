import React from 'react';

const Option = ({
  id,
  val,
  change,
  checked,
  toggleCorrectOption,
  deleteOption
}) => {
  return (
    <div key={id} className="ds-opt">
      <input type="text" value={val} onChange={change} />
      <label htmlFor={id}>Right answer?</label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onClick={toggleCorrectOption}
      />
      <button className="ds-x-button" onClick={deleteOption}>x</button>
    </div>
  );
}

export default Option;
