import { View, Text, StyleSheet } from 'react-native';

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is History</Text>
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

export default History
