import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#e8e8e8',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    fontSize: 16,
  },
  filterButton: {
    height: 48,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFilterButton: {
    color: '#fff',
  },
  cardList: {
    paddingTop: 20
  },
  card: {
    backgroundColor: '#f6f8fa',
    shadowOffset: {  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    padding: 20,
    borderRadius: 5,
    marginTop: 15
  },
  cardImage: {
    height: 40,
    alignSelf: 'center'
  },
  picker: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 20,
    height: 48
  },
  pickerSelect: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
  }
})

export default styles