import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')} style={{width: 150, height:200}}/>
      <Text style={{fontSize: 25}}>Olá alunos do 4TADS!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b6c1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
