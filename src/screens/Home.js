import React, { useState} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import SearchComponent from '../components/SearchComponent'
import PostComponent from '../components/PostComponent';


export const MyContext = React.createContext("text");


export default function Home() {
  const [context, setContext] = useState("");
    return (
    <View>
     <MyContext.Provider value={[context, setContext]}>
        <View style={styles.MainContainer}>
          <SearchComponent/>
           <PostComponent />
        </View>
        </MyContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 5,
    flex: 1,
    margin: 5,
    minHeight: 800,
  },
});