import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import Home from './screens/Home';
import History from './screens/History';
import Profile from './screens/Profile';

//Icons
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator()

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#6707aa',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Group screenOptions={{
          headerShown: false,
        }}>
          <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name='home' size={25} color={color} />
            ),
          }} />
          <Tab.Screen name='History' component={History} options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.middleHistory}>
                <Foundation name='graph-bar' size={25} color={color} />
              </View>
            ),
          }} />
          <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name='user' size={25} color={color} />
            ),
          }} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 0,
    height: 60,
    left: 20,
    right: 20,
    bottom: 20,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    shadowColor: "#ebdcf4",
  },
  middleHistory: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    overflow: 'hidden',
    top: -35,
    borderWidth: 6,
    borderColor: "#ebdcf4",
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
