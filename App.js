import { Button, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);
  
  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems(oldArry => [...oldArry, {id: Date.now(), value: itemText }]);
    setItemText('');
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const removeItem = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
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
        <FlatList
              data={items}
              renderItem={(itemData) => (
              <Pressable stile={styles.contentList} onPress={() => {
              selectItem(itemData.item)
              }}>
              <Text stile={styles.item}>{itemData.item.value}</Text>
            </Pressable>)} keyExtractor = {(item)  => item.id.toString()} >
        </FlatList>
        <Modal
              animacionType='slider'//mirar animaciones en la doc variedades
              transparent={true}
              visible={modalVisible}>
           <View style={styles.modalContainer}>    
          <View tyle={styles.modaltitle}>
            <Text style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>eliminar Item</Text>
          </View>
          <View style={styles.modalContent}>
              <View >
              <Text>esta seguro de que quiere eliminar el items {selectItem?.    value}?</Text>
              {/* //el signo . value  es por las dudas que tengas un error */}
              </View>
              <View tyle={styles.modalAction}>
              <Button title='CANCELAR' onPress={() => { 
              setModalVisible(false)
              setSelectItem(null);
              }}></Button>
              <Button title='ELIMINAR' onPress={() => { 
              removeItem(selectItem.id)
                }}></Button>
                </View> 
            </View>
          </View>
        </Modal>
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
  contentList: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  modalContainer: {
    height: 250,
    width: 250,
    marginTop: 100,
    alignSelf: 'center',
    backgroundColor:'red',
  },
  modaltitle: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  modalContent: {
    padding: 10,
    width: '50%',
  },
  modalAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalAction: {
   textAlign:'center',
  },
  
});
