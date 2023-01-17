import {StyleSheet} from "react-native";
import {getRandomColor} from "../../utils/randomColor";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: "#dedede"
    },
    image: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        padding: 10
    },
    text: {
        fontSize: 20,
        marginLeft: 20
    },
    imageContainer: {
        backgroundColor: getRandomColor(),
        borderRadius: 50,
        height: 60,
        width: 60,
        justifyContent: "flex-end",
        alignItems: "center",
        overflow: "hidden"
    }
})