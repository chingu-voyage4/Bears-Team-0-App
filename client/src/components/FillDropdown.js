import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { sendOption, finishQuiz } from '../actions/takeQuiz';

class FillDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedText: null,
    };
  }
  render() {
    const {
      question: { question: questionTitle, options },
      sendOption,
      almostComplete,
      finishQuiz,
      history
    } = this.props;
    const selectOptions = options.map(option => ({
      value: option.val,
      label: option.val,
    }));

    return (
      <div>
        <h1 className="fill-dd">{questionTitle}</h1>
        {this.state.selectedText ? (
          <h2 className="fill-dd">{this.state.selectedText}</h2>
        ) : (
          <Select
            className="dd-select-style"
            name={questionTitle}
            value="value"
            options={selectOptions}
            onChange={(e) => {
              this.setState(
                {
                  selectedText: e.value,
                },
                () => {
                  setTimeout(() => {
                    sendOption(this.state.selectedText);
                    if (almostComplete) {
                      finishQuiz();
                      history.push('/results');
                    }
                  }, 1000);
                },
              );
            }}
          />
        )}
      </div>
    );
  }
}

export default connect(null, { sendOption, finishQuiz })(withRouter(FillDropdown));
