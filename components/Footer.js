import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Footer } from 'native-base'

const styles = StyleSheet.create({
    footer: {
        paddingVertical: 15,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'whitesmoke'
    },
    remove: {        
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',    
    }
})

const MyFooter = (props) => {
    return (
        <Footer>   
            <TouchableOpacity onPress={props.removeCompleted}>
                <Text style={styles.remove}>Remove Completed Items</Text>                            
            </TouchableOpacity>         
        </Footer>
    )
}

export default MyFooter