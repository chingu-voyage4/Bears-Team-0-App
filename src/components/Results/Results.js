import React, { Component } from 'react';

class Results extends Component {
  render() {
    const resultsStyle = {
      position: 'absolute',
      top: '64px'
    };

    return <div style={resultsStyle}>Results</div>;
  }
}

export default Results;
// export default connect(state => {}, {})(Results);
