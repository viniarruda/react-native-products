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
    marginBottom: 15,
    flex: 1
  },
  header: {
    flexDirection: 'row',
  },
  btnBack: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 15,
    flex: 1
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
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
    alignItems: 'center',
  },
  textFilterButton: {
    color: '#fff',
  },
  content: {
    flex: 4,
  },
  card: {
    backgroundColor: '#f6f8fa',
    shadowOffset: {  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  cardImage: {
    minHeight: 40,
    width: 60,
    alignSelf: 'center'
  },
  cardTitle: {
    fontSize: 20
  },
  cardPrice: {
    fontWeight: 'bold',
    fontSize: 16
  },
  cardDescription: {
    fontSize: 14
  },
  containerPicker: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginHorizontal: 10,
    flex: 1,
    height: 48
  },
  picker: {
    fontSize: 16,
  },
  empty: {
    flex: 4,
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  }
})

export default styles