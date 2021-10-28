import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { colors } from '../styles/Styles'

export default function ListItem(props) {

    const [item, setItem] = useState({ timeId: 0, title: '' })

    useEffect(() => {
        if (props.item) {
            setItem(props.item)
        }

    }, [props])

    return (
        <View style={[style.itemContainer]}>
            <Text style={[style.itemTitle]}>{item.title}</Text>
            <TouchableHighlight>
                <Text style={[style.removeButton]}>X</Text>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    itemContainer: {
        padding: 5,
        paddingLeft: 15,
    },

    itemTitle: {

    },

    removeButton: {
        padding: 7,
        backgroundColor: colors.red,
        color: colors.white,
        textAlign: 'center'
    },

})