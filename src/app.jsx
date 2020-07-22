import React, { Component } from "react";
import {
  FunctionalComponent,
  CreateElementComponent,
  ClassComponent,
  PureClassComponent,
} from "./components";

class App extends Component {
  render() {
    return (
      <>
        <FunctionalComponent />
        <CreateElementComponent />
        <ClassComponent />
        <PureClassComponent />
      </>
    );
  }
}

export default App;
