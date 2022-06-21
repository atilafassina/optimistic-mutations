import { XataClient } from './xata.codegen'

const XATA_API_KEY = process.env.XATA_API_KEY

export const xata = new XataClient({
  branch: 'main',
  apiKey: XATA_API_KEY,
})
