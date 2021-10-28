import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Intro(props) {

    let [top, setTop] = useState(0)
    let [timeTop, setTimeTop] = useState(1)

    useEffect(() => {
        timeStart()
    }, [])

    function timeStart() {
        if (timeTop <= 10) {
            setTimeTop(timeTop++)
            setTimeout(() => {
                timeStart()
            }, 100)
        }
    }

    function open() {
        if (top <= 10) {
            setTop(top++)
            setTimeout(() => {
                open()
            }, 100)
        } else {
            props.onOpen()
        }
    }

    function containerStyle() {
        return {
            transform: [
                { translateY: -45 * top },
                { rotateX: `${8.9 * top}deg` }
            ]
        }
    }

    function timeStyle() {
        return {
            top: `${timeTop * 4}%`
        }
    }

    return (
        <LinearGradient
            colors={['#146fa0', '#71c5df']}
            style={[styles.container, containerStyle()]}
        >
            <TouchableHighlight
                style={[styles.timeContainer, timeStyle()]}
                onPress={open}
            >
                <Text style={[styles.time]} >09:41</Text>
            </TouchableHighlight>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        zIndex: 200
    },
    timeContainer: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 15
    },
    time: {
        fontSize: 50,
        color: 'white',
    }
})