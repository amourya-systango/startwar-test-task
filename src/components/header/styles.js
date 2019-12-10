import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/index';
import colors from '../../utils/constants/colors';

export default StyleSheet.create({
    container: {
        marginVertical: 5, 
        borderBottomWidth: 0.5, 
        elevation: 2.5, 
        borderBottomColor: Colors.WHITE, 
        backgroundColor: Colors.HEADER
    },
    row: {
        flexDirection: 'row', 
        marginVertical: 5, 
        marginBottom: 10,
        marginTop: 30
    },
    backView: {
        alignSelf: 'center' 
    },
    leftIcon: {
        width: 25, 
        height: 25, 
        alignSelf: 'center', 
        marginLeft: 10
    },
    rightIcon: {
        width: 25, 
        height: 25, 
        position:'absolute',
        right: 20
    },
    userIcon: {
        width: 25, 
        height: 25, 
        alignSelf: 'center', 
        marginLeft: 10
    },
    headerIcon: {
        width: 30, 
        height: 30, 
        alignSelf: 'flex-end', 
        marginRight: 15, 
        marginTop: 25
    },
    subContent: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        marginLeft: 10,
    },
    title: {
        textAlign: 'center', 
        color: Colors.WHITE, 
        left: 5, 
        alignSelf: 'center',
        fontSize: 16,
        fontWeight:'bold'
    },
});