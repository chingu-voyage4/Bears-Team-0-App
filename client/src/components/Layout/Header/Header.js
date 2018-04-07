import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/user';

class Header extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const headerStyle = {
      background: '#0f1538',
      height: '64px',
      zIndex: 1
    };

    if (!!this.props.user.currentUser) {
      // Logged In
      return (
        <div className="header" style={headerStyle}>
          <a href="/">Quizzly Bear</a>
          <div className="header-right">
            <a href="/api/logout">Log Out</a>
            <img src={this.props.user.userImage} alt="Profile" />
          </div>
        </div>
      );
    } else {
      // Not Logged In
      return (
        <div className="header">
          <a href="/">Quizzly Bear</a>
          <div className="header-right">
            <a href="http://quizzly-bear-app/api/google">Log In</a>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Header);
