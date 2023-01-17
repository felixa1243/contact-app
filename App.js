import {Platform, SafeAreaView, StatusBar, StyleSheet, UIManager} from 'react-native';
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
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