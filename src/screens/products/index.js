import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { requestProducts } from '../../store/products/thunks'

import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import styles from './components/styles'

const renderItem = ({ item }) => (
  <Text>
    {item.geometry.location.lat}
  </Text>
);

const Products = (props) => {
  const { maps, requestProducts, products } = props

  fetchData = async () => {
    requestProducts(maps.list.results[0].geometry.location.lat, maps.list.results[0].geometry.location.lng)
  }

  useEffect(() => {
    fetchData()
  })

  return (
      <View style={styles.container} >
        {
          maps.loading && <ActivityIndicator size="large" color="#F0FF00" />
        }
        <Text>List Products</Text>
        {
          products.list && console.log(products.list, 'products')
            // <FlatList
            //   data={maps.list.results}
            //   keyExtractor={result => result.plus_code.global_code}
            //   //ItemSeparatorComponent={}
            //   renderItem={renderItem}
            // />
        }
    </View>
  )
}

const mapStateToProps = (state) => ({
  maps: state.maps,
  products: state.products
})

export default connect(mapStateToProps, {
  requestProducts
})(Products)