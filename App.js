import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Hello work React Native");

  return (
    <View style={{padding: 50}}>
      <View
        style={{
          // flexDirection: 'colum', //column top to down
          flexDirection: 'row', //row left to right
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextInput 
          placeholder="Input..." 
          style={{ 
            borderColor: 'grey',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            width: '80%'
          }}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
