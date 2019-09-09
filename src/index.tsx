import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

interface Opts {
  container: string;
  props: object;
}

const defaults: Opts = {
  container: '.helminth',
  props: {}
};

export class Helminth {
  private opts: Opts;
  constructor(opts: Opts) {
    this.opts = Object.assign(defaults, opts);
  }
  render() {
    ReactDOM.render(
      <App {...this.opts.props} />,
      document.querySelector(this.opts.container)
    );
  }
}
