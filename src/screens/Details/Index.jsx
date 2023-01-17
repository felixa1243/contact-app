import {Image, Text, View} from "react-native";
import style from "./style";
import data from '../../fixture/dummyUser.json'
import {Icon} from "../../components/Index";

const Details = (props) => {
    const {id} = props.route.params
    const people = data.find(i => i.id === id)
    const {firstName, phone, address, image} = people
    const basicInfo = [{title: 'firstName', value: firstName, icon: null}, {
        title: 'Mobile', value: phone, icon: 'call'
    }, {
        title: 'Address', value: address?.city, icon: 'md-navigate'
    }]
    return (
        <View style={style.container}>
            <View style={[style.card, {width: '100%'}]}>
                    <Image source={{uri: image}} style={style.imageContainer}/>
                <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                    {
                        basicInfo.map((p, i) => {
                            return (
                                <View style={[style.row, {alignItems: 'center'}]} key={i}>
                                    {p.icon && <Icon name={p.icon}/>}
                                    <View style={{width: '100%', alignItems: 'flex-start'}}>
                                        <Text style={[style.text, {
                                            marginLeft: 20,
                                            color: 'gray'
                                        }]}>{i !== 0 && p.title}</Text>
                                        <Text style={[style.text, i === 0 && {
                                            alignSelf: 'center',
                                            fontSize: 24
                                        }, {marginLeft: 20}]}>{p.value}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}
export default Details