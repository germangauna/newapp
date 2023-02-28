import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('items', items);
  }, [items]);
  
  const onChangeText = (text) => {
    setItemText(text);
  };
  
  const addItem = () => {
    setItems(oldArry => [...oldArry, {id: Date.now(), value: itemText }]);
    setItemText('');
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de Lista"
          style={styles.Input}
          onChangeText={onChangeText}/>
        <Button
          title="Agregar"
          onPress={addItem}  />
      </View>
      <View style={styles.itemsContainer}>
        {/* {items.map(item => <Text key={item.id} style={styles.item}>{item.value}</Text>)} */}
        <FlatList
          data={items}
          renderItem={(itemData) => (
            <View stile={stiles.contentList}>
              <Text>{itemData.item.value}</Text>
              <Button title='delete' onPress={() => onHandleDelete(intemData.item.id)}></Button>
          </View> ) } >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
      padding:30,
  },
  inputContainer:{
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        
  },
 Input:{
          width: 200,
          height:30,
          borderBottomColor:"black",
          borderBottomWidth: 1,
  },
  itemsContainer: {
   marginTop:30,
  },
  item: {
    padding: 10,
    textAlign: 'center',
    color: 'green',
    fontFamily: '',
  },
});
