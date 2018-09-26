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
    render() {        
        return (
            <ScrollView>
                {this.props.notes.map((note, i) => {
                    return (
                        <View key={i} style={styles.item}>
                            <Text>{note.title}</Text>
                            <View style={styles.rightSection}>
                                <Checkbox index={i} 
                                    onToggleCompleted={this.props.onToggleCompleted} 
                                    isToggled={note.isToggled} 
                                />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

export default List