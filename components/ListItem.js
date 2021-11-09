import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated,
    Easing,
} from 'react-native';
import { colors } from '../styles/Styles'

export default function ListItem(props) {

    const [item, setItem] = useState({ timeId: 0, title: '' });
    let left = new Animated.Value(0);
    let opacity = new Animated.Value(1);

    useEffect(() => {
        if (props.item) {
            setItem(props.item)
        }
    }, [props])

    function remove() {
        Animated.timing(left, {
            toValue: 300,
            duration: 1000,
            easing: Easing.back(1),
        }).start()
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1200
        }).start(() => {
            props.onRemove(item)
        })
    }

    return (
        <Animated.View style={[style.itemContainer, { left: left, opacity: opacity }]}>
            <Text style={[style.itemTitle]}>{item.title}</Text>
            <TouchableHighlight
                onPress={remove}
            >
                <Text style={[style.removeButton]}>X</Text>
            </TouchableHighlight>
        </Animated.View>
    );
}

const style = StyleSheet.create({
    itemContainer: {
        padding: 5,
        paddingLeft: 15,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },

    itemTitle: {
        flex: 1,
    },

    removeButton: {
        padding: 7,
        backgroundColor: colors.red,
        color: colors.white,
        textAlign: 'center'
    },

})