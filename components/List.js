import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Checkbox from './Checkbox';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke'
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    remove: {
        marginLeft: 10,
        marginBottom: 2,
        color: 'green',
        fontSize: 26
    },
    completed: {
        backgroundColor: 'whitesmoke'
    }
})

class List extends React.Component {

    renderItems(item, i) {
        return (
            <View key={i} style={styles.item}>
                <Text>{item}</Text>
                <View style={styles.rightSection}>
                    <Checkbox />
                </View>
            </View>
        )
    }

    render() {
        console.log(this.props.notes)
        return (
            <ScrollView>
                {this.props.notes.map(this.renderItems)}
            </ScrollView>
        )
    }
}

export default List