import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        padding: 15
    },
    title: {
        textAlign: 'center',
        color: 'white'
    }
})

const Title = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo Listo</Text>
        </View>
    )
}

export default Title