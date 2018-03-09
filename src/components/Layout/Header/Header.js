import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return this.props.loggedIn ? (
      <div className="header">
        <a href="/">Quizzly Bear</a>
        <div className="header-right">
          <a href="/logout">Log Out</a>
          <img src={this.props.userImage} alt="Profile" />
        </div>
      </div>
    ) : (
      <div className="header">Logged Out! {this.props.loggedIn}</div>
    );
  }
}
export default connect(
  state => ({
    loggedIn: state.login.isLoggedIn,
    userImage: state.login.userImage
  }),
  () => ({})
)(Header);
