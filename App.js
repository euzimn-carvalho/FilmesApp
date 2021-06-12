import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListaFilme from './src/Filmes'
import api from './src/services/api';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: []
    }
  }

  async componentDidMount(){
    const getFilmes = await api.get();    
    this.setState({filmes: getFilmes.data.results});
    //alert(this.state.filmes)
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>FILMES POPULARES</Text>
        <FlatList 
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ListaFilme filme={item} />}
        />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    borderWidth: .4,
    borderColor: '#000'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center'
  }
});