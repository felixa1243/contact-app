import {FlatList, Image, Text, View} from "react-native";
import user from '../../fixture/dummyUser.json'
import {GroupBy} from "../../utils/groupBy";

const CourseList = () => {
    console.log(GroupBy(user,"firstName"))
    return (
        <FlatList
            style={{width: '100%', height: '100%'}}
            initialNumToRender={5}
            data={user}
            renderItem={(user) => (
                <View style={{
                    flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'flex-start',
                    borderBottomWidth: 1,
                    borderBottomColor: '#dedede'
                }}>
                    <View style={{
                        backgroundColor: '#dedede',
                        borderRadius: 50,
                        height: 60,
                        width: 60,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}>
                        <Image source={{uri: user.item.image}}
                               style={{width: '100%', height: 50, borderRadius: 100}}/>
                    </View>
                    <View style={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        width: '100%',
                        height: '100%',
                        padding: 10
                    }}>
                        <View style={{height: 50}}>
                            <Text
                                style={{fontSize: 20, marginLeft: 20, fontWeight: "bold"}}>{user.item.firstName}</Text>
                            <Text style={{
                                fontSize: 16,
                                marginLeft: 20,
                                marginTop: 4,
                                color: 'grey'
                            }}>{user.item.address.city}</Text>
                        </View>
                    </View>
                </View>
            )}
            keyExtractor={(data) => data.id}
        />
    )
}
export default CourseList