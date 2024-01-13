import { View, Text,StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is Profile</Text>
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

export default Profile
