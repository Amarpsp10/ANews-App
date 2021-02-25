import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View,TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FeedScreen from './components/mainPages/NewsFeed';
// const stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
        //  <NavigationContainer>
        //    <stack.Navigator initialRouteName="Landing">
        //      <stack.Screen name = "Landing" component ={LandingScreen} options = {{headerShown:false}}/>
        //      <stack.Screen name = "Register" component ={RegisterScreen} options = {{headerShown:false}}/>
        //    </stack.Navigator>
        //  </NavigationContainer>
        
        
        <NavigationContainer>
          
        <Tab.Navigator  initialRouteName="General" backBehavior="initialRoute" lazy="true" tabBarOptions={{style:{height:60}}}>
          <Tab.Screen name="General" component={FeedScreen}
              options={{
                tabBarIcon:({color,size})=>(
                 <MaterialComunityIcons name="home" color={color} size={26} />
                )
              }}
              initialParams={{name:'General'}}

                />
          <Tab.Screen name="Business" component={FeedScreen} 
              options={{
                tabBarIcon:({color,size})=>(
                 <MaterialComunityIcons name="handshake" color={color} size={26} />
              )
               }}
               initialParams={{name:'Business'}}
               />
          <Tab.Screen name="Sports" component={FeedScreen}
                options={{
                  tabBarIcon:({color,size})=>(
                   <MaterialComunityIcons name="run-fast" color={color} size={26} />
                )
                 }}
                 initialParams={{name:'Sports'}}
                 />
          <Tab.Screen name="Entertainment" component={FeedScreen}
               options={{
                tabBarIcon:({color,size})=>(
                 <MaterialComunityIcons name="filmstrip" color={color} size={26} />
              )
               }}
               initialParams={{name:'Entertainment'}}
               />
          <Tab.Screen name="Science" component={FeedScreen}
               options={{
                tabBarIcon:({color,size})=>(
                 <MaterialComunityIcons name="react" color={color} size={26} />
              )
               }}
               initialParams={{name:'Science'}}
               /> 
          <Tab.Screen name="Health" component={FeedScreen}
               options={{
                tabBarIcon:({color,size})=>(
                 <MaterialComunityIcons name="hospital-box" color={color} size={26} />
              )
               }}
               initialParams={{name:'Health'}}
               />
          <Tab.Screen name="Technology" component={FeedScreen}
               options={{
                tabBarIcon:({color,size})=>(
                 <MaterialComunityIcons name="brain" color={color} size={26} />
              )
               }}
               initialParams={{name:'Technology'}}
              />         
        </Tab.Navigator>
        </NavigationContainer> 

        
  );
}


