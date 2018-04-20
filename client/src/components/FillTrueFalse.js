import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendOption } from '../actions/takeQuiz';
import TrueFalseOption from './TrueFalseOption';

class FillTrueFalse extends Component {
  render() {
    const { question } = this.props.question;

    return (
      <div className="fill-tf">
        <h1>{question}</h1>
        <TrueFalseOption text="True" value handleClick={() => sendOption(true)} />
        <TrueFalseOption text="False" value={false} handleClick={() => sendOption(false)} />
      </div>
    );
  }
}

// FillTrueFalse.propTypes = {
//   question: PropTypes.string.isRequired,
// };

export default connect(() => ({}), { sendOption })(FillTrueFalse);
