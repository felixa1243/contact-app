import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, UIManager, View} from 'react-native';
import CourseList from "./src/components/CourseList/Index";

export default function App() {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={{
                height: 80,
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
            <CourseList/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const box = {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
}