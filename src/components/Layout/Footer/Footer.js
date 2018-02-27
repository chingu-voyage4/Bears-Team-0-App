import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    const links = ["about", "privacy", "team", "github repo", "contact"];
    return (
      <div className="footer">
        <ul>
          {links.map(e => (
            <li>
              <a routerLink={"/" + e}>{e}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
