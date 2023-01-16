import {Image, SectionList, Text, View} from "react-native";
import user from '../../fixture/dummyUser.json'
import {groupAlphabetBy} from "../../utils/groupAlphabetBy";

function RenderContact(props) {
    return (
        <View style={{
            flexDirection: "row", padding: 20, alignItems: "center", justifyContent: "flex-start",
            borderBottomWidth: 1,
            borderBottomColor: "#dedede"
        }}>
            <View style={{
                backgroundColor: "#dedede",
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
                        fontSize: 16,
                        marginLeft: 20,
                        marginTop: 4,
                        color: "grey"
                    }}>{props.item.address.city}</Text>
                </View>
            </View>
        </View>
    )
}

const CourseList = () => {
    return (
        <SectionList
            style={{width: '100%', height: '100%'}}
            initialNumToRender={5}
            sections={groupAlphabetBy(user, "firstName")}
            renderItem={(data) => RenderContact(data)}
            renderSectionHeader={(data) => RenderHeader(data.section)}
            keyExtractor={(_, index) => index}
            stickySectionHeadersEnabled={true}
        />
    )
}
const RenderHeader = (item) => (
    <View style={{backgroundColor: "#efefef", paddingHorizontal: 20, paddingVertical: 10}}>
        <Text>{item.title}</Text>
    </View>
)
export default CourseList