import React, { Component } from "react";
import { connect } from "react-redux";
export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.loggedIn ? (
      <div className="header">
        <a href="/">Quizzly Bear</a>
        <div className="logout">
          <a href="/logout">Log Out</a>
          <img src={this.props.userImage} />
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
