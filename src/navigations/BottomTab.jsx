import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Settings} from "../screens/Index";
import {Icon} from "../components/Index";

const TabNavigator = createBottomTabNavigator()
const BottomTab = () => {
    const navList = [
        {name: 'Home screen', component: Home, icon: "home"},
        {name: 'Settings', component: Settings, icon: "md-cog"}
    ]
    return (
        <TabNavigator.Navigator>
            {
                navList.map((item, index) => {
                    return (
                        <TabNavigator.Screen
                            name={item.name}
                            component={item.component}
                            options={
                                {
                                    lazy: true,
                                    tabBarLabel: () => null,
                                    title: item.name,
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