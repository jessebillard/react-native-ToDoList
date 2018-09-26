import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    box: {
      height: 20,
      width: 20,
      borderWidth: 2,
      borderColor: 'black',
    },
    inner: {
      flex: 1,
      margin: 2,
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
})

const Checkbox = (props) => {    
    return (
        <TouchableOpacity onPress={() => props.onToggleCompleted(props.index)}>
            <View style={styles.box}>
                { props.isToggled && <View style={styles.inner}/> }
            </View>
        </TouchableOpacity>
    )
}

export default Checkbox