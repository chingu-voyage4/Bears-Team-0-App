import React, { Component } from 'react';
import Delete from './Delete';
import Option from './Option';
import {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
} from '../../../actions/multipleChoice';
import { connect } from 'react-redux';

class OptionQuestion extends Component {
  render() {
    const {
        questionData,
        addOption,
        changeOption,
        toggleCorrectOption,
        changeQuestion,
        deleteOption
      } = this.props,
      { options, id, question } = questionData;

    const styles = {
      optionQuestion: {
        width: '100%'
      },
      button: {
        background: 'inherit',
        border: 0,
        color: '#215fe9',
        fontWeight: 'bold',
        width: '20%'
      },
      input: {
        background: 'inherit',
        border: 0,
        width: '60%'
      }
    };

    return (
      <div className="optionQuestion" style={styles.optionQuestion}>
        <input
          placeholder="Question"
          style={styles.input}
          value={question}
          onChange={e => changeQuestion(e, id)}
        />
        <button style={styles.button} onClick={() => addOption(id)}>
          Add Option
        </button>
        <Delete questionId={id} style={styles.button} />
        {options.map(option => (
          <Option
            key={option.id}
            change={e => changeOption(id, option.id, e)}
            toggleCorrectOption={() => toggleCorrectOption(id, option.id)}
            deleteOption={() => deleteOption(id, option.id)}
            questionId={id}
            id={option.id}
            val={option.val}
          />
        ))}
      </div>
    );
  }
}

export default connect(state => ({}), {
  addOption,
  changeOption,
  toggleCorrectOption,
  changeQuestion,
  deleteOption
})(OptionQuestion);
