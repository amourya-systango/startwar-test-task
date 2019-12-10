import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../utils/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APPBACKGROUND,
  },
  text: {
    color: Colors.BLACK,
    fontSize: 18,
    fontWeight:'bold',
    left: 10,
    right: 10,
    top:8,
    bottom:2
  },
  carTitle: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight:'bold',
    marginTop: 30,
    left: 10,
  },
  model: {
    color: Colors.BLACK,
    fontSize: 12,
    marginTop: 5,
    left: 10,
  },
  quantity: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight:'bold',
    marginTop: 5,
    right: 10,
  },
  rating: {
    flexDirection:'row', 
    marginLeft: 10, 
    top: 3
  },
  review: {
    color: Colors.BLACK,
    fontSize: 11,
    left: 10,
    bottom: 1
  },
  class: {
    color: Colors.BLACK,
    fontSize: 12,
    bottom: 1  
  },
  quantityRow: {
    flexDirection:'row', 
    justifyContent:'space-between',
    marginBottom: 10
  },
  price: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight:'bold',
    marginTop: 30,
    right: 10,
  },
  waitText: { 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 25, top: 20
  },
  feedBox: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  card: {
    flex: 1,
    marginTop: 4,
    marginHorizontal: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 13,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    borderColor: Colors.CARDBORDER,
    borderWidth: 1,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      height: 5,
      width: 5
    },
    elevation: 5,
  },
  fltImg: {
    alignSelf: 'flex-start', 
    width: 320,
    resizeMode: 'contain',
    borderRadius: 8,
    height:150,
    borderWidth: 0.5,
    left: 9,
    right: 9,
    top: 15
  },
  textInput: {
    flexDirection: 'row',
    width: Metrics.screenWidth - 20,
    borderRadius: 5.2,
    height: 35,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    flex: 1,
    backgroundColor: Colors.INPUT,
    height: 35,
    borderRadius: 5.2,
    fontSize: 17,
    textAlign:'center',
    color: Colors.Gray,
  },
  searchimg: {
    position:'absolute',
    left: 10,
    top: 10
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'center',
    marginBottom: 10
  },
  exclusiveView: {
    backgroundColor: Colors.HEADER,
    width: Metrics.screenWidth * 0.80,
    height: 35,
    borderRadius: 3,
    justifyContent: 'center',
    margin: 1
  },
  exclusive: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold'
  },
  offerView: {
    backgroundColor: Colors.STAR,
    width: Metrics.screenWidth * 0.12,
    height: 45,
    borderRadius: 3,
    justifyContent: 'center',
    margin: 5
  },
  content: {
    marginTop: 10,
  },
  row: {
    flexDirection:'row', justifyContent:'space-between'
  },
  searchIcon: {
    width:16,
    height: 16
  }
});