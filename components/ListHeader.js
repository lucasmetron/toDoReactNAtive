import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { colors } from '../styles/Styles'

export default function ListHeader(props) {

    const [item, setItem] = useState({ id: 0, title: '' })

    useEffect(() => {
        if (props.item) {
            setItem(props.item)
        }
        console.log('adasd', props.item)

    }, [props])

    return (
        <View >
            <Text style={{ backgroundColor: 'blue' }}>{item.title}</Text>
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