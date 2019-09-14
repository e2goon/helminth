import { createContext } from 'react'
import {
  createClient,
  CreateClientParams,
  ContentfulClientApi
} from 'contentful'

let clientAPI

export function createContentfulClient(
  opts: CreateClientParams
): ContentfulClientApi {
  clientAPI = createClient(opts)
  return clientAPI
}

export default createContext(clientAPI)
