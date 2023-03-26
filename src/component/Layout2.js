import React from "react";

function Layout2(props) {
  return (
    <div>
      <h1>Header 2</h1>
      {props.children}
      <h1>Footer 2</h1>
    </div>
  );
}

export default Layout2;
