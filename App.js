import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, UIManager, View} from 'react-native';
import {Home, Settings} from "./src/screens/Index";
import BottomTab from "./src/navigations/BottomTab";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={{
                height: 60,
                justifyContent: 'space-between',
                width: '100%',
                padding: 10,
                flexDirection: 'row'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, marginLeft: 10, fontWeight: 'bold'}}>Contacts</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 18, marginRight: 10, fontWeight: 'bold'}}>menu</Text>
                </View>
            </View>
            <MainNavigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
});