import {memo, useState} from "react";
import {Image, LayoutAnimation, Text, TouchableOpacity, View} from "react-native";
import {getRandomColor} from "../../../utils/randomColor";
import {useNavigate} from "../../../hook/useNavigate";
import style from "../style";

const RenderImage = memo((props) => {
    return (
        <View style={style.imageContainer}>
            <Image source={{uri: props.item.image}}
                   style={{width: "100%", height: 50, borderRadius: 100}}/>
        </View>
    )
})
const RenderContact = (props) => {
    const [selectedId, setSelected] = useState("")
    const navigate = useNavigate()
    const onPressHandler = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        setSelected(selectedId === "" ? props.item.id : "")
    }
    const onLongPressHandler = () => {
        navigate("Details", {
            id: props.item.id
        })
    }
    return (
        <View>
            <TouchableOpacity
                onPress={onPressHandler}
                onLongPress={onLongPressHandler}
                activeOpacity={1}
                style={style.container}
            >
                <RenderImage item={props.item}/>
                <View style={style.image}>
                    <View style={{height: 50}}>
                        <Text
                            style={[style.text, {fontWeight: "bold"}]}>{props.item.firstName}</Text>
                        <Text style={[style.text, {marginTop: 4, color: "gray"}]}>{props.item.phone}</Text>
                    </View>
                    {selectedId === props.item.id && (
                        <View style={{height: 50}}>
                            <Text style={{
                                fontSize: 16,
                                marginLeft: 20,
                                marginTop: 4,
                                color: "gray"
                            }}>{props.item.address?.city}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default RenderContact