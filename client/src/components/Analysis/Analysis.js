import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayAnalysis from './DisplayAnalysis';
import { fetchYourQuizzes } from '../../actions/quizzes';

class Analysis extends Component {
  componentDidMount() {
    this.props.fetchYourQuizzes();
  }

  displayQuizzes(yourQuizzes) {
    return yourQuizzes.map((quiz) => {
      return <React.Fragment key={quiz._id}><DisplayAnalysis quiz={quiz} /></React.Fragment>;
    });
  }

  render() {
    const { yourQuizzes } = this.props.allQuizzes;
    return (
      <div className="analysis">
        <h1>Quiz Results</h1>
        {this.displayQuizzes(yourQuizzes)}
      </div>
    );
  }
}

function mapStateToProps({ allQuizzes }) {
  return { allQuizzes };
}

export default connect(mapStateToProps, { fetchYourQuizzes })(Analysis);
