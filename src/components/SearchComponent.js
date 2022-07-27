import React, { useState, useContext} from 'react'
import {
  Button,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import GifImage from '../components/GifImage';
import { MyContext } from '../screens/Home';
export default function Home() {
    const [context, setContext] = useContext(MyContext);
    const [text, setText] = useState(context);
    return (
        <View>
            <View>
                <GifImage/>
            </View>
        <MyContext.Provider value={[context, setContext]}>
        <View>
            <TextInput
            style={styles.textInput}
            onChangeText={(text) => 
                {
                    setText(text)
                    setContext(text)}
            }
            value={text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            />
            <Button
            title="Re-render"
            onPress={() =>  {setText('')
                setContext('')}}
            />
        </View>
        </MyContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
 
    textInput: {
      textAlign: 'center',
      height: 42,
      borderWidth: 1,
      marginBottom:10,
      borderColor: '#009688',
      borderRadius: 8,
      backgroundColor: '#333',
    },
  });