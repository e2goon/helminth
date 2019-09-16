import React, { createContext, useContext, ReactNode } from 'react'
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
}) {
  return (
    <ContentfulContext.Provider value={value}>
      {children}
    </ContentfulContext.Provider>
  )
}

export function useContentful() {
  return useContext(ContentfulContext)
}
