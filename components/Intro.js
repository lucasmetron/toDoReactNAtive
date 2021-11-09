import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Intro(props) {

    // let [top, setTop] = useState(0)
    // let [timeTop, setTimeTop] = useState(1)
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
    const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight)
    let top = new Animated.Value(0)
    let timeTop = new Animated.Value(0)

    useEffect(() => {
        timeStart()
    }, [])

    function timeStart() {
        timeTop.setValue(0);
        Animated.timing(timeTop, {
            toValue: 1,
            duration: 2000
        }).start();

    }

    function open() {
        top.setValue(0);
        Animated.timing(top, {
            toValue: 1,
            duration: 1000
        }).start(props.onOpen); //executa a função onOpen após finalizar a animação
    }

    function containerStyle() {
        return {
            transform: [
                {
                    translateY: top.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -450]
                    })
                },
                {
                    rotateX: top.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '89deg']
                    })
                }
            ]
        }
    }

    function timeStyle() {
        return {
            top: timeTop.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '40%']
            })
        }
    }

    return (
        <AnimatedLinearGradient
            colors={['#146fa0', '#71c5df']}
            style={[styles.container, containerStyle()]}
        >
            <AnimatedTouchableHighlight
                style={[styles.timeContainer, timeStyle()]}
                onPress={open}
            >
                <Text style={[styles.time]} >09:41</Text>
            </AnimatedTouchableHighlight>
        </AnimatedLinearGradient>
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