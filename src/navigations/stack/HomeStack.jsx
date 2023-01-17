import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack'
import {Details, Home} from "../../screens/Index";

const Stack = createStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.ScaleFromCenterAndroid}}>
            <Stack.Screen
                name={"Homes"}
                component={Home}
                options={{
                    title: "Home"
                }}/>
            <Stack.Screen
                name={"Details"}
                component={Details}/>
        </Stack.Navigator>
    )
}
export default HomeStack