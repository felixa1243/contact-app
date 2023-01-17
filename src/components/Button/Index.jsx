import {Pressable} from "react-native";

const Index = (props) => {
    return (
        <Pressable {...props}>
            {props.children}
        </Pressable>
    )
}
export default Index