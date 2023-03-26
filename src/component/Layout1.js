import React from "react";

function Layout1(props) {
  return (
    <div>
      <h1>Header 1</h1>
      {props.children}
      <h1>Footer 1</h1>
    </div>
  );
}

export default Layout1;
