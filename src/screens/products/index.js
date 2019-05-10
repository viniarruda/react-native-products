import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { requestPoc, requestProducts } from '../../store/products/thunks'
import { requestCategories } from '../../store/categories/thunks'

import { View, Text, FlatList, Image, Picker, TextInput, TouchableOpacity, Button } from 'react-native'
import Loader from '../../components/loader'
import styles from './components/styles'

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={{uri: item.productVariants[0].imageUrl ? item.productVariants[0].imageUrl : 'http://chittagongit.com/download/296961'}} />
    <Text style={styles.cardTitle}>{item.productVariants[0].title}</Text>
    <Text style={styles.cardPrice}>R${item.productVariants[0].price}</Text>
    {
      item.productVariants[0].description &&
      <Text style={styles.cardDescription}>{item.productVariants[0].description}</Text>
    }
  </View>
);

const Products = (props) => {
  const { maps, requestPoc, requestProducts, requestCategories, products, categories } = props
  const [pickerValue, setPickerValue] = useState()
  const [searchValue, setSearchValue] = useState("")

  const handleChange = async (value) => {
    await setPickerValue(value)
  }

  const handleFilter = async () => {
    await requestProducts(searchValue, pickerValue)
    await setSearchValue("")
  }

  const handleBack = () => {
    props.navigation.navigate('Main')
  }

  const fetchData = async () => {
    await requestPoc(maps.list.results[0].geometry.location.lat, maps.list.results[0].geometry.location.lng)
    let initialCategory = 0
    let search = ""
    await requestCategories()
    await requestProducts(search, initialCategory)
  }

  useEffect(() => { 
    fetchData()
  }, []);

  return (
      <View style={styles.container} >
        <Loader loading={!categories.list || !products.list || !products.poc} />
        <View style={styles.header}>
          <Text style={styles.btnBack} onPress={handleBack}>Back</Text>
          <Text style={styles.title}>List Products</Text>
        </View>
        <View style={styles.filter}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#fff"
            autoCapitalize="none" 
            autoCorrect={false} 
            underlineColorAndroid="transparent"
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            />
            <View style={styles.containerPicker}>
              <Picker
                style={styles.picker}
                itemStyle={styles.pickerSelect}
                selectedValue={pickerValue}
                onValueChange={(itemValue, itemIndex) =>
                  handleChange(itemValue)
                }
              >
                {
                  categories.list && [
                    <Picker.Item key="none" label="Select..." value="0" />,
                    ...(categories.list.allCategory.map((c) => 
                      <Picker.Item key={c.id} label={c.title} value={c.id} />
                  ))
                  ]
                }
              </Picker>
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
              <Text style={styles.textFilterButton}>Filter</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
        {
          products.list && products.list.poc.products.length > 0 ?
            <FlatList
              data={products.list.poc.products}
              keyExtractor={result => result.productVariants[0].productVariantId}
              //ItemSeparatorComponent={}
              renderItem={renderItem}
              style={styles.cardList}
            /> : <Text style={styles.empty}>No products found</Text>
        }
        </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  maps: state.maps,
  products: state.products,
  categories: state.categories
})

export default connect(mapStateToProps, {
  requestPoc,
  requestProducts,
  requestCategories
})(Products)