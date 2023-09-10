import axios from 'axios'

// Request
import { IExampleCatalogPayload } from '@infrastructure/entities'

// Response
import { IExampleCatalogResponse } from '@infrastructure/entities'

export const getExampleCatalog = async (payload: IExampleCatalogPayload): Promise<IExampleCatalogResponse> => {
  return axios.get('/examplecatalog')
}
