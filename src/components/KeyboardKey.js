import React, { Component } from "react";

export default class KeyboardKey extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <span className="KeyboardKey">{this.props.symbol}</span>;
  }
}
