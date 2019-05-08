import axios from 'axios'
import api from '../../utils/api'

export const listCategories = () => {
  return axios.post(api.graphql.url, {
    query: `
      query allCategoriesSearch {
        allCategory{
          title
          id
        }
      }
    `
  })
  .then(res => res.data)
  .catch(err => err.response.data)
}
