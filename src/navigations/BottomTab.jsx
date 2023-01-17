import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Settings} from "../screens/Index";
import {Icon} from "../components/Index";
import HomeStack from "./stack/HomeStack";

const TabNavigator = createBottomTabNavigator()
const BottomTab = () => {
    const navList = [
        {name: 'Home', component: HomeStack, icon: "home", showHeader: false},
        {name: 'Settings', component: Settings, icon: "md-cog", showHeader: true}
    ]
    return (
        <TabNavigator.Navigator>
            {
                navList.map((item) => {
                    return (
                        <TabNavigator.Screen
                            name={item.name}
                            component={item.component}
                            options={
                                {
                                    lazy: true,
                                    tabBarLabel: () => null,
                                    title: item.name,
                                    headerShown: item.showHeader,
                                    tabBarIcon: ({focused}) => <Icon name={item.icon} focused={focused}/>
                                }
                            }
                        />
                    )
                })
            }
        </TabNavigator.Navigator>
    )
}
export default BottomTab