import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/user';
import DropDownMenu from './DropDownMenu';

class Header extends Component {
  state = {
    isDDMenuShowing: false
  };

  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  renderDDMenu() {
    this.setState({
      isDDMenuShowing: !this.state.isDDMenuShowing
    });
  }

  render() {
    if (this.props.user.currentUser) {
      // Logged In
      return (
        <div className="header-wrapper">
          <div
            className="overlay"
            hidden={!this.state.isDDMenuShowing}
            onClick={() => this.renderDDMenu()}
          />
          <DropDownMenu isDDMenuShowing={this.state.isDDMenuShowing} />
          <div className="header">
            <a href="/dashboard">Quizzly Bear</a>
            <div className="header-right">
              <a href="/api/logout">Log Out</a>
              <img
                onClick={() => this.renderDDMenu()}
                src={this.props.user.userImage}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      );
    } else {
      // Not Logged In
      return (
        <div className="header">
          <a href="/">Quizzly Bear</a>
          <div className="header-right">
            <a href="/api/google">Log In</a>
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
