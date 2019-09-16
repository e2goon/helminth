import React, {
  createContext,
  useContext,
  ReactElement,
  ReactNode
} from 'react'

import {
  createClient,
  CreateClientParams,
  ContentfulClientApi
} from 'contentful'

const ContentfulContext = createContext(null)

export function contentfulClient(opts: CreateClientParams) {
  return createClient(opts)
}

export function ContentfulProvider({
  value,
  children
}: {
  value: ContentfulClientApi
  children: ReactNode
}): ReactElement {
  return (
    <ContentfulContext.Provider value={value}>
      {children}
    </ContentfulContext.Provider>
  )
}

export function useContentful(): ContentfulClientApi {
  return useContext(ContentfulContext)
}
