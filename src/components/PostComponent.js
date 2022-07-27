import React, { useReducer, useEffect, useContext } from 'react'
import {
  FlatList,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios';
import { MyContext } from '../screens/Home';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  loading: true,
  error: '',
  post: {}
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
     for (let len = Object.keys(action.payload).length, i = len; i < len * 30; i++) {
        Object.assign(action.payload, {[i]: JSON.parse(JSON.stringify(action.payload[i -len]))});
      }
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong!'
      }
    default:
      return state
  }
}
export default function PostComponent() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [context, setContext] = useContext(MyContext);
  const min=1000000000;
  const max=9000000000;
  function randomNumber() {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  const fetchAPI = async () => {
    context === '' ?
    await axios.get(API_URL)
    .then(response => {
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_ERROR' })
    }):[]
    
  };
  useEffect(() => {
    fetchAPI();
  }, []); // use `[]` to avoid multiple side effect

  const filterdData = context // based on text, filter data and use filtered data
    ? state.post?.filter(item => {
        const itemData = item.body.toUpperCase();
        const textData = context.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    :  state.post; //  on text, u can return all data

  const itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  return (

    <View>
          <FlatList
            data={filterdData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={itemSeparator}
            renderItem={({ item }) => (
              <View>
               <View style={{flexDirection:'row'}}><Text style={styles.row}>{item.id}</Text>
              <Text style={styles.row}>{item.title}</Text></View>
              <Text style={styles.row}>{item.body}</Text>
              <Text style={styles.rowNumber}>{randomNumber()}</Text>
              </View>

            )}
            style={{ marginTop: 10 }}
          />
        </View>
  );
}

const styles = StyleSheet.create({
   row: {
    fontSize: 18,
    padding: 12,
  },
  rowNumber:
  {
    fontSize: 18,
    padding: 12,
    fontWeight:'bold',
  },
 
});