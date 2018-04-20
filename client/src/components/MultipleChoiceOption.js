import React from 'react';

const MultipleChoiceOption = ({ text, handleClick, id }) => {
  return (
    <button onClick={() => handleClick(text, id)} className="multiple-choice-option">
      {text}
    </button>
  );
};

export default MultipleChoiceOption;
