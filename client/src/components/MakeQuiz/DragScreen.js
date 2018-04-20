import React from 'react';
import DecoratedBox from './Box';

const DragScreen = () => {
  return (
    <div className="drag-screen">
      <p>Pick a question type!</p>
      <DecoratedBox text="Multiple Choice" name="Multiple Choice" />
      <DecoratedBox text="True Or False" name="TrueFalse" />
      {/* Dropdown component */}
      <DecoratedBox text="Dropdown" name="Dropdown" />
    </div>
  );
};

export default DragScreen;
