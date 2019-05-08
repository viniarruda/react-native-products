import axios from 'axios'
import api from '../../utils/api'

export const searchProducts = (lat, long, now) => {
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
