import React from 'react';

const Footer = () => {
  const links = ['about', 'privacy', 'team', 'contact'];

  return (
    <div className="footer">
      <ul>
        {links.map(href => (
          <li key={href}>
            <a href={`/${href}`}>{href}</a>
          </li>
        ))}
        <li key="gh">
            <a href="https://github.com/chingu-voyage4/Bears-Team-0-App">github repo</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
