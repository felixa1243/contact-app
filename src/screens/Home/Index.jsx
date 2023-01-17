import {ContactList} from "../Index";
import {View} from "react-native";
import style from "./style";
import {useNavigate} from "../../hook/useNavigate";

const Home = (props) => {
    const navigate = useNavigate()
    return (
        <ContactList/>
    )
}
export default Home