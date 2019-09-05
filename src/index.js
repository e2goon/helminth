import "core-js";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export class Helminth {
  constructor(opts) {
    const defaults = {
      container: "",
      props: {}
    };
    this.opts = Object.assign(defaults, opts);
  }
  render() {
    ReactDOM.render(
      <App {...this.opts.props} />,
      document.querySelector(this.opts.container)
    );
  }
}
