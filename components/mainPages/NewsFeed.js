import React, { Component } from 'react';
import {Text, View,StyleSheet,SafeAreaView} from 'react-native';

import NewsList from './NewsList'

export default function NewsFeed({navigation,route}){
       
    

        return(
            <View>
           <SafeAreaView style={styles.Container}>
               <Text style={styles.HeadLine}>
                {route.params.name}
               </Text>
           </SafeAreaView>
           <View >
             <NewsList category={route.params.name}/>
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
        
    }
    );


    
  