import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyTitle from './components/Title';
import List from './components/List';
import { Container, Input, Item } from 'native-base'
import MyFooter from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {   
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
    if (this.state.input) {
      if (this.state.input.length >= 44) {
        const trimmedNote = this.state.input.slice(0, -43)
        const newNote = {
          title: trimmedNote += '...',
          isToggled: false
        }
        this.setState({
          notes: [newNote, ...this.state.notes],
          input: ''
        })
      } else {
          const newNote = {
            title: this.state.input,
            isToggled: false
          } 
          this.setState({
            notes: [newNote, ...this.state.notes],
            input: ''
          })
      }
    }
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
      <Container> 
        <MyTitle/> 
          <View style={styles.input}>
            <Item rounded>
              <Input 
                placeholder="today I have to..."
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChange}
                value={this.state.input}
              />
            </Item>
          </View>           
        <List notes={this.state.notes} onToggleCompleted={this.toggleItemCompleted}/>
        <MyFooter removeCompleted={this.removeCompleted} />
      </Container>
    );
  }
}

export default App
