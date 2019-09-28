import 'core-js'

import React from 'react'
import ReactDOM from 'react-dom'

import App from '@/App'

interface Opts {
  container: string
  props: object
}

export class Helminth {
  private opts: Opts
  private client: any
  constructor(opts: Opts) {
    const defaults: Opts = {
      container: '.helminth',
      props: {}
    }
    this.opts = Object.assign(defaults, opts)
  }
  render() {
    ReactDOM.render(
      <App {...this.opts.props} />,
      document.querySelector(this.opts.container)
    )
  }
}
