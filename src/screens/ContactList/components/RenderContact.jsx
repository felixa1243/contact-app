import {memo, useState} from "react";
import {Image, LayoutAnimation, Text, TouchableOpacity, View} from "react-native";
import {getRandomColor} from "../../../utils/randomColor";
import {useNavigate} from "../../../hook/useNavigate";

const RenderImage = memo((props) => {
    return (
        <View style={{
            backgroundColor: getRandomColor(),
            borderRadius: 50,
            height: 60,
            width: 60,
            justifyContent: "flex-end",
            alignItems: "center",
            overflow: "hidden"
        }}>
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
        navigate("Details",{
            id:props.item.id
        })
    }
    return (
        <TouchableOpacity style={{
            flexDirection: "row", padding: 20, alignItems: "center", justifyContent: "flex-start",
            borderBottomWidth: 1,
            borderBottomColor: "#dedede"
        }}
                          onPress={onPressHandler}
                          onLongPress={onLongPressHandler}
                          activeOpacity={1}
        >
            <RenderImage item={props.item}/>
            <View style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "100%",
                height: "100%",
                padding: 10
            }}>
                <View style={{height: 50}}>
                    <Text
                        style={{fontSize: 20, marginLeft: 20, fontWeight: "bold"}}>{props.item.firstName}</Text>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 20,
                        marginTop: 4,
                        color: "gray"
                    }}>{props.item.phone}</Text>
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
    )
}
export default RenderContact