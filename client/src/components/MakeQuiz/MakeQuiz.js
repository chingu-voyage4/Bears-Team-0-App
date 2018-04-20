import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DragScreen from './DragScreen';
import DropScreen from './DropScreen';

export default class MakeQuiz extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="make-quiz">
          <DragScreen />
          <DropScreen />
        </div>
      </DragDropContextProvider>
    );
  }
}
