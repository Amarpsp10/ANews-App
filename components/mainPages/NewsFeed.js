import React, { Component,useState} from 'react';
import {Text, View,StyleSheet,SafeAreaView,TouchableOpacity, Alert} from 'react-native';
import {MaterialIcons} from 'react-native-vector-icons'
import NewsList from './NewsList'

export default function NewsFeed({navigation,route}){
       
    

        return(
            <View>
           <SafeAreaView style={styles.Container}>
               <Text style={styles.HeadLine}>
                {route.params.name}
               </Text>
               <TouchableOpacity style={styles.reload} onPress={()=>Alert.alert('News Updated')} >
               <MaterialIcons name='cached' size={35} />
               </TouchableOpacity>
           </SafeAreaView>
           <View >
             <NewsList  category={route.params.name}/>
           </View>

            </View>
           
               
           
        );
    
}


const styles= StyleSheet.create(
    {
        Container:{
            backgroundColor:'white',
            height:70,
            
        },
        HeadLine:{
            marginTop:29,
            fontSize:22,
            fontWeight:'bold',
            textAlign:'center'
        },
        reload:{
            position:'absolute',
            right:5,
            top:29
        }
    }
    );


    
  