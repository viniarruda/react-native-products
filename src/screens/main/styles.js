import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 30,
    backgroundColor: '#808080'
  },
  logo: {
    height: 80,
    width: 250,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 30
  },
  button: {
    height: 48,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: { 
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  }
})

export default styles