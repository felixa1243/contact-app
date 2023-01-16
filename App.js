import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CourseList from "./src/components/CourseList/Index";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'blue'}/>
            <View style={{
                height: 50,
                justifyContent: 'space-between',
                backgroundColor: 'blue',
                width: '100%',
                padding: 10,
                flexDirection: 'row'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 24, marginLeft: 10, fontWeight: 'bold'}}>Contacts</Text>
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
const box =  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
}