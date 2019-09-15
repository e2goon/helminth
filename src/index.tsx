import 'core-js'

import React from 'react'
import ReactDOM from 'react-dom'

import Contentful, { createContentfulClient } from '@/context/contentful'
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
    this.client = createContentfulClient({
      space: 'ueof42gwmyfh',
      accessToken: 'XEBRS-gPFt6kEKixUDGSctLAkjoRuUNu6YjkTAHnFHI',
      host: 'localhost:8080'
    })
    this.opts = Object.assign(defaults, opts)
  }
  render() {
    ReactDOM.render(
      <Contentful.Provider value={this.client}>
        <App {...this.opts.props} />
      </Contentful.Provider>,
      document.querySelector(this.opts.container)
    )
  }
}
