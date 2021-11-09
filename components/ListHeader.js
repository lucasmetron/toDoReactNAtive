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

    function onPress() {
        props.onPress(item)
    }

    useEffect(() => {
        if (props.item) {
            setItem(props.item)
        }
    }, [props])

    return (
        <View style={style.header}>
            <Text style={style.headerText} onPress={onPress}>{item.title}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        backgroundColor: colors.blue
    },

    headerText: {
        color: colors.white,
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16
    },

})