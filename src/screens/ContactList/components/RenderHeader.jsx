import {Text, View} from "react-native";

const RenderHeader = (item) => (
    <View style={{backgroundColor: "#dedede", paddingHorizontal: 20, paddingVertical: 10}}>
        <Text>{item.title}</Text>
    </View>
)
export default RenderHeader