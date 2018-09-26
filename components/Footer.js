import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    footer: {
        paddingVertical: 15,
        alignItems: 'center'
    },
    remove: {
        color: 'orange'
    }
})

const Footer = (props) => {
    return (
        <TouchableOpacity style={styles.footer}>
            <Text style={styles.remove}>Remove Completed Items</Text>
        </TouchableOpacity>
    )
}

export default Footer