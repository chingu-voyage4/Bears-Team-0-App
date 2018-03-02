import React, { Component } from "react";

const Footer = () => {

  const links = ["about", "privacy", "team", "github repo", "contact"];

  return (
    <div className="footer">
      <ul>
        {links.map(e => (
          <li key={e}>
            <a href={"/" + e}>{e}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;