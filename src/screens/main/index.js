import React, { Component } from 'react'
import { connect } from 'react-redux'

import { requestGeocode } from '../../store/maps/thunks'

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'
import logo from '../../assets/logo.png'

class Main extends Component {
  state = {
    newSearch: ''
  }

  handleSearch = async () => {
    await this.props.requestGeocode(this.state.newSearch)

    await this.props.navigation.navigate('Products')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />

        <TextInput
          style={styles.input}
          placeholder="Av. Paulista, 2700"
          placeholderTextColor="#999"
          autoCapitalize="none" 
          autoCorrect={false} 
          underlineColorAndroid="transparent"
          value={this.state.newSearch}
          onChangeText={text => this.setState({ newSearch: text })}
          />

          <TouchableOpacity onPress={this.handleSearch} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, {
  requestGeocode
})(Main)