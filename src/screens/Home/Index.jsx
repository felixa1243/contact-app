import {ContactList} from "../Index";
import {Text, View} from "react-native";
import style from "./style";
import {Button} from "../../components/Index";

const Home = () => {
    return (
        <View style={style.container}>
            <Button style={style.btn}><Text style={[style.text,{color:'white'}]}>Go to Feed</Text></Button>
            <ContactList/>
        </View>
    )
}
export default Home