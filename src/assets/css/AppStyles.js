import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const AppStyles = StyleSheet.create({
    aubtn:{
        height: 57,
        paddingTop: 10,
        paddingBottom: 12,
        fontSize: 23,
        // borderRadius: 50,
        width: width - 27,
        // backgroundColor: 'red',
        // color: 'white'
    },
    dhtoie:{
        height: 57,
        paddingTop: 10,
        paddingBottom: 12,
        fontSize: 23,
        // borderRadius: 50,
        width: width - width - 37,
        backgroundColor: '#929292',
        marginTop: 20,
        marginLeft: '0.1%'
    },
    dfnt: {
        fontSize: 24,
    },
    lgnlogo:{
        fontSize: 34,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: "900",
        backgroundColor: '#9d00ff',
        color:'#fff',
        width: 165,
        paddingLeft: 7,
        paddingBottom: 7
    },
    smallHding: {
        paddingTop:15,
        fontSize: 34,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: "900"
    },
    btn: {
        backgroundColor: 'grey',
        borderRadius: 15,
        fontWeight: '900',
        width: '100%',
        height: 49,
    },
    input: {
        borderRadius: 15,
        height: 49,
        color:'orange',
        width: '100%'
    },
    fitView: {
        backgroundColor: 'green',
    },
    notaBtn: {
        width: 45
    }
})
export default AppStyles;