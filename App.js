import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Title from './components/Title';
import List from './components/List';
// import Footer from './components/Footer';
// import { connect } from 'react-redux'
// import { addNote, removeNote } from './actions/index'

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
      noteTitle: '',
      untoggledNotes: [],
      toggledNotes: []
    }
  }

  handleSubmit = () => {
    this.setState({
      untoggledNotes: [this.state.input, ...this.state.untoggledNotes],
      input: ''
    }, () => console.log(this.state))
  }

  handleChange = (text) => {
    this.setState({
      input: text
    })
  }

  removeCompleted = () => {
    console.log('brah')
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
        <List notes={this.state.untoggledNotes}/>
        <View>
          <TouchableOpacity style={styles.footer} onPress={this.removeCompleted} >
            <Text style={styles.remove}>Remove Completed Items</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     notes: state.notes
//   }
// }

export default App
// export default connect(mapStateToProps, { addNote, removeNote })(App)
