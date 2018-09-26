import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Footer } from 'native-base'

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
        <Footer>
            <TouchableOpacity>
                <Text style={styles.remove}>Remove Completed Items</Text>
            </TouchableOpacity>
        </Footer>
    )
}

export default Footer