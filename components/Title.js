import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Title, Right, Body } from 'native-base'

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        padding: 15
    },
    title: {
        textAlign: 'center',        
    }
})

const MyTitle = () => {
    return (
        <Header>          
            <Body>
                <Title style={styles.title}>Todo Listo</Title>
            </Body>              
        </Header>        
    )
}

export default MyTitle