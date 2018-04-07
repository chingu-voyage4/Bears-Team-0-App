import React, { Component } from 'react';
import DecoratedBox from './Box';

export class DragScreen extends Component {
  render() {
    return (
      <div
        className="drag_screen"
        style={{
          color: '#c7c7c7',
          backgroundColor: '#fff',
          letterSpacing: '0.05rem',
          width: '30%',
          height: '100%',
          flexBasis: 'auto'
        }}
      >
        <p style={{ color: 'black', fontWeight: 'bolder' }}>
          Pick a question type!
        </p>
        <DecoratedBox text="Multiple Choice" name="Multiple Choice" />
        <DecoratedBox text="True Or False" name="TrueFalse" />
        {/* Dropdown component */}
        <DecoratedBox text="Dropdown" name="Dropdown" />
      </div>
    );
  }
}
