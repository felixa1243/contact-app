import {StyleSheet} from "react-native";
import {getRandomColor} from "../../utils/randomColor";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 15
    },
    text: {
        fontSize: 18,
        margin: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dedede'
    },
    row: {
        flexDirection: 'row'
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: getRandomColor(),
        borderRadius:100,
        width:150,
        height:150,
        alignSelf:'center',
        overflow:'hidden'
    }
})