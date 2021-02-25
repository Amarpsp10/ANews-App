import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity, Linking, Dimensions} from 'react-native'

export default function NewsItem(props) {
       
    return(
        <TouchableOpacity onPress={()=>(Linking.openURL(props.value.url))}>
        <View style={styles.container}>
         
         <Image style={{width:100,height:100}}  resizeMethod={'resize'}
            source={{uri:props.value.urlToImage}}
         />
         <View style={{width:Dimensions.get('window').width,flexShrink:1,paddingLeft:4}}>
             <Text numberOfLines={2} style={{fontWeight:'bold'}} ellipsizeMode={'head'}>{props.value.title}</Text>
             <Text numberOfLines={3} ellipsizeMode={'head'} >{props.value.content}</Text>
         </View>
         
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        flexDirection:'row',
        flex:1,
        padding:8,
        paddingHorizontal:10,
        borderWidth:0.5,
        borderRadius:15,
        margin:5,
        backgroundColor:'white'
    }
});