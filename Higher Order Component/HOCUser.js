import React from "react";
import { render } from 'react-dom';

const OldComponent = ({ name }) => <h1>"OldComponent" {name}!</h1>;

// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

const NewComponent = simpleHOC(OldComponent);

const HOCUser = () =>
  <div>
    <NewComponent name=" => Nu er jeg en ny komponent! NewComponent" />
  </div>;

export default HOCUser;