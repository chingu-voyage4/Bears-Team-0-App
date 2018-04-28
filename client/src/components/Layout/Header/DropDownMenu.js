import React from 'react';

const DropDownMenu = ({isDDMenuShowing}) => {
  return (
    <div className="dropdownmenu" hidden={!isDDMenuShowing}>
      <ul>
        <a href="/dashboard"><li>Dashboard</li></a>
        <a href="/analysis"><li>Quiz Analysis</li></a>
        <a href="/api/logout"><li>Log Out</li></a>
      </ul>
    </div>
  );
};

export default DropDownMenu;
