import 'core-js'

import React from 'react'
import ReactDOM from 'react-dom'

import App from '@/App'
import { contentfulClient, ContentfulProvider } from '@/context/contentful'

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
    this.client = contentfulClient({
      space: 'ueof42gwmyfh',
      accessToken: '_4E9FBxzMbTB74ed6FQWCgNzZFvzUyOOePtAgXorVkI'
    })
    this.opts = Object.assign(defaults, opts)
  }
  render() {
    ReactDOM.render(
      <ContentfulProvider value={this.client}>
        <App {...this.opts.props} />
      </ContentfulProvider>,
      document.querySelector(this.opts.container)
    )
  }
}
