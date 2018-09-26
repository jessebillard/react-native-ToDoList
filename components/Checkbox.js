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
        <TouchableOpacity>
            <View style={styles.box}>

            </View>
        </TouchableOpacity>
    )
}

export default Checkbox