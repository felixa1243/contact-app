import {Text, View} from "react-native";
import style from "./style";
import data from '../../fixture/dummyUser.json'

const Details = (props) => {
    const {id} = props.route.params
    const people = data.find(i => i.id === id)
    return (
        <View style={style.container}>
            <Text style={style.text}>{people?.firstName}</Text>
            <Text style={style.text}>{people?.phone}</Text>
            <Text style={style.text}>{people?.address?.city}</Text>
        </View>
    )
}
export default Details