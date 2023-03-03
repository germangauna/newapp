import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react';

const List = ({
    items,
    openModal,
}) => {
  return (
    <View>
     <FlatList
        data={items}
        renderItem={(itemData) => {   
          return <Item itemData={itemData} openModal={openModal} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  )
}
export default List

const styles = StyleSheet.create({


})