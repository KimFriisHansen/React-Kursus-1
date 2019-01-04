
import React from "react";

const hoc = (WrappedComponent) => (props) => {
    return (
      <div>
        <WrappedComponent {...props}>
       
        </WrappedComponent>
      </div>
    )
  }
  const Username = (props) => (
    <div>{props.children}</div>
  )

  const UpperCaseUsername = hoc(Username)

  const AppHOC = () => (
    <div>
      <UpperCaseUsername>dette havner som "uppercase"</UpperCaseUsername>
    </div>
  );

  export default AppHOC;