import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { requestProducts } from '../../store/products/thunks'
import { requestCategories } from '../../store/categories/thunks'

import { View, Text, FlatList, ActivityIndicator, Picker } from 'react-native'
import Loader from '../../components/loader'
import styles from './components/styles'

const renderItem = ({ item }) => (
  <View style={styles.card}>
    {console.log(item)}
    <Text>{item.tradingName}</Text>
    <Text>{item.phone.phoneNumber}</Text>
  </View>
);

const Products = (props) => {
  const { maps, requestProducts, products, categories } = props

  const fetchData = async () => {
    await requestProducts(maps.list.results[0].geometry.location.lat, maps.list.results[0].geometry.location.lng)
    await requestCategories()
  }

  useEffect(() => { 
    fetchData()
  }, []);

  return (
      <View style={styles.container} >
        {
          products.loading && <ActivityIndicator size="large" color="#F0FF00" />
        }
        <Text style={styles.title}>List Products</Text>
        <Picker
          style={{height: 50, width: 100}}
          // onValueChange={(itemValue, itemIndex) =>
          //   this.setState({language: itemValue})}
          >
          {
            categories.list && categories.list.allCategory.map((c) => 
              <Picker.Item label={c.title} value={c.id} />
            ) 
          }
        </Picker>
        {
          products.list && 
            <FlatList
              data={products.list.pocSearch}
              keyExtractor={result => result.id}
              //ItemSeparatorComponent={}
              renderItem={renderItem}
            />
        }
        {
          products.list && console.log(products.list.pocSearch)
        }
    </View>
  )
}

const mapStateToProps = (state) => ({
  maps: state.maps,
  products: state.products,
  categories: state.categories
})

export default connect(mapStateToProps, {
  requestProducts,
  requestCategories
})(Products)