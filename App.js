import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Item de Lista" style={styles.Input} />
        <Button title="Agregar"/>
      </View>
        <View style={styles.itemsContainer}>
        <Text style={styles.item}> texto 1 </Text>
        <Text style={styles.item}> texto 2 </Text>
        <Text style={styles.item}> texto 3 </Text>
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
