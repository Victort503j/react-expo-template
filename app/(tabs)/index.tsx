import React from 'react';
import { Button } from 'react-native-paper';
import { Text, View } from '../../components/Themed';
import { Alert } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hola Mundo</Text>

      <Button className='mt-20'
        mode='contained'
        onPress={() => Alert.alert('¡El botón funciona!')}
      >
        Botón de Paper
      </Button>
    </View>
  );
}
