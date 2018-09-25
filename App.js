import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { connect } from 'react-redux'
// import { addNote, removeNote } from './actions/index'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      noteTitle: ''
    }
  }

  handleSubmit = () => {
    this.setState({
      noteTitle: this.state.input
    }, () => console.log(this.state))
  }

  handleChange = (text) => {
    this.setState({
      input: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add a Note!</Text>
        <TextInput 
          placeholder="do it..."
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChange}
          value={this.state.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     notes: state.notes
//   }
// }

export default App
// export default connect(mapStateToProps, { addNote, removeNote })(App)
