import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function Home(props){
  //console.log(props)

  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is Home Screen</Text>
      <Button title='Make a call' onPress={() => props.navigation.navigate('CallScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ebdcf4",
  },
  content: {
    fontSize: 24,
    color: "black",
  }
})

export default Home
