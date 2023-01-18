import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View,SafeAreaView } from 'react-native';

export default function App() {

  const [luku1, setLuku1] = useState();
  const [luku2, setLuku2] = useState();
  const [tulos ,setTulos] = useState();
  const [lista, setLista] = useState([]);


  const plus = () => {
    setTulos(luku1 + luku2);
    setLista([...lista, {key: `${luku1} + ${luku2} = ${luku1 + luku2}`}]);
    setLuku1('');
    setLuku2('');
    
  }
  const minus = () => {
    setTulos(luku1 - luku2);
    setLista([...lista, {key: `${luku1} - ${luku2} = ${luku1 - luku2}`}]);
    setLuku1('');
    setLuku2('');
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.inputfield}>
        <Text>Result: {tulos}</Text>
        <TextInput style={styles.textinput}
        onChangeText={luku1 => setLuku1(Number(luku1))}
        value={luku1}
        />
        <TextInput style={styles.textinput}
        onChangeText={luku2 => setLuku2(Number(luku2))}
        value={luku2}
        />
      </View>

      <View style={styles.buttonfield}>
        <Button title= ' + ' onPress={plus} />
        <Button title= ' - ' onPress={minus} />
      </View>

      <View style={styles.listfield}>
        <FlatList 
          data={lista}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: 200,
    borderWidth: 1,
    borderColor: 'grey'
  },
  buttonfield: {
    flexDirection: 'row'
  },
  inputfield: {
    
    flexDirection: 'column',
    alignItems: 'center'
  },
  listfield: {
    flex: 2
  }
});
