import react from 'react';
import React,{Component} from 'react'
import {View,Text,FlatList,Image,Alert,ActivityIndicator,StyleSheet,Dimensions } from "react-native"

import {mainUrl,country,api_key,language} from './../../config/rest-config'
import NewsItem from './NewsItem'

export default class NewsList extends Component{
        
    constructor(props){
        super(props);
         
         this.state={
         isLoading:true,
         data: null,
         animating:true
        }
    }

   componentDidMount(){
         getNews(this.props.category).then(data=>{
             this.setState({
                isLoading:false,
                data:data,
                animating:false
             });
         },
         error=>{
             Alert.alert('Error','Something went wrong!');
         })         
        }
    render(){
        return(
            <View>
            <ActivityIndicator style={{height:this.state.animating?((Dimensions.get('window').height)/2):0}} animating={this.state.animating} size="large" color="#000000" />
            <FlatList 
               data={this.state.data}

               renderItem={({item})=>(
                
                   <NewsItem value={item}/>
                
                )}
            />
            </View>
                
                
        );
    }
     


}

const styles=StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center'
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      },
    //   indicator:{
    //        height: this.state.animating? 100:0
    //   }
});

 async function getNews(category){

    try{
    //    let newsData = await fetch(`${mainUrl}?language=${language}&counrty=${country}&category=${category}&apikey=${api_key}`);
    let newsData = await fetch(`${mainUrl}?language=${language}&country=${country}&category=${category}&apikey=${api_key}`);

       let result = await newsData.json();
       return result.articles;
    }
    catch(error){
        throw error;
    }
}