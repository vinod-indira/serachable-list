import React from "react";
import {View , Image , StyleSheet} from 'react-native' ;
  
const GifImage = () => {
    return (
        <View style={Styles.container}>
          <Image
            style ={{width: "100%", height:200}}
            source={require('../img/doggo_walk.gif')}
          />
        </View>
      );
}

const Styles = StyleSheet.create({
    container :{
        marginBottom:10
    }
})
  
export default GifImage;