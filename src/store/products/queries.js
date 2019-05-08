import axios from 'axios'
import api from '../../utils/api'

export const searchPoc = (lat, long, now) => {
  return axios.post(api.graphql.url, {
    query: `
      query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
        pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
          __typename
          id
          status
          tradingName
          officialName
          deliveryTypes {
            __typename
            pocDeliveryTypeId
            deliveryTypeId
            price
            title
            subtitle
            active
          }
          paymentMethods {
            __typename
            pocPaymentMethodId
            paymentMethodId
            active
            title
            subtitle
          }
          pocWorkDay {
            __typename
            weekDay
            active
            workingInterval {
              __typename
              openingTime
              closingTime
            }
          }
          address {
            __typename
            address1
            address2
            number
            city
            province
            zip
            coordinates
          }
          phone {
            __typename
            phoneNumber
          }
        }
      }
    `,
    variables: {
      "algorithm": "NEAREST",
      "lat": lat,
      "long": long,
      "now": now
    }
  })
  .then(res => res.data)
  .catch(err => err.response.data)
}


export const searchProducts = (poc, search, categoryId) => {
  console.log(poc, search, categoryId)
  return axios.post(api.graphql.url, {
    query: `
      query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
        poc(id: $id) {
          products(categoryId: $categoryId, search: $search) {
            productVariants{
              title
              description
              imageUrl
              price
            }
          }
        }
      }
    `,
    variables: {
      "id": poc,
      "search": search,
      "categoryId": categoryId
    }
  })
  .then(res => res.data)
  .catch(err => err.response.data)
}