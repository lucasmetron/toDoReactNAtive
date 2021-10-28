import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Intro(props) {

    return (
        <LinearGradient
            colors={['#146fa0', '#71c5df']}
            style={[styles.container]}
        >
            <TouchableHighlight style={[styles.timeContainer]} >
                <Text style={styles.time} >09:41</Text>
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
        top: '40%',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 15
    },
    time: {
        fontSize: 50,
        color: 'white'
    }
})