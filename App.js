import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Title from './components/Title';
import List from './components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    padding: 15,
    margin: 25
  },
  divider: {
    height: 2,
    backgroundColor: 'whitesmoke'
  },
  footer: {
    paddingVertical: 15,
    alignItems: 'center'
  },
  remove: {
      color: 'orange'
  }
});

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',      
      notes: [],      
    }
  }

  handleSubmit = () => {
    const newNote = {
      title: this.state.input,
      isToggled: false
    }
    this.setState({
      notes: [newNote, ...this.state.notes],
      input: ''
    })
  }

  handleChange = (text) => {
    this.setState({
      input: text
    })
  }

  removeCompleted = () => {
    const notesCopy = [...this.state.notes]
    const filteredNotes = notesCopy.filter(note => !note.isToggled)
    this.setState({
      notes: filteredNotes
    })
  }

  toggleItemCompleted = (index) => {
    const notesCopy = [...this.state.notes]
    const updatedNote = notesCopy.find((note, noteIndex) => index === noteIndex )
    updatedNote.isToggled = !updatedNote.isToggled
    this.setState({
      notes: notesCopy
    }, () => console.log(this.state))
  }

  render() {
    return (
      <View style={styles.container}>
        <Title />   
        <TextInput
          // style={styles.input} 
          placeholder="do it..."
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChange}
          value={this.state.input}
        />
        <View style={styles.divider} />
        <List notes={this.state.notes} onToggleCompleted={this.toggleItemCompleted}/>
        <View>
          <TouchableOpacity style={styles.footer} onPress={this.removeCompleted} >
            <Text style={styles.remove}>Remove Completed Items</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App
