import {Image, LayoutAnimation, SectionList, Text, TouchableOpacity, View} from "react-native";
import user from '../../fixture/dummyUser.json'
import {groupAlphabetBy} from "../../utils/groupAlphabetBy";
import {memo, useState} from "react";
import {getRandomColor} from "../../utils/randomColor";
import RenderContact from "./components/RenderContact";
import RenderHeader from "./components/RenderHeader";

const ContactList = () => {
    return (
        <SectionList
            style={{width:'100%', height: '100%'}}
            initialNumToRender={5}
            sections={groupAlphabetBy(user, "firstName")}
            renderItem={(data) => RenderContact(data)}
            renderSectionHeader={(data) => RenderHeader(data.section)}
            keyExtractor={(_, index) => index}
            stickySectionHeadersEnabled
        />
    )
}

export default ContactList