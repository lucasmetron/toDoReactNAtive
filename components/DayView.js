import React, { useEffect, useState } from "react";
import { StyleSheet, Animated } from 'react-native'

export default function DayView(props) {

    const y = new Animated.Value(0);
    // const [pageHeight, setPageHeight] = useState(900)
    const pageHeight = 900

    useEffect(() => {
        y.setValue(props.scrollY)
    }, [props.scrollY])

    useEffect(() => {
        setPageHeight(props.height)
    }, [props.height])

    function getContainerStyle() {
        const backgroundColor = y.interpolate({
            inputRange: [0, pageHeight * 0.4, pageHeight * 0.8, pageHeight * 0.9, pageHeight],
            outputRange: ['#1e237f', '#47b9ff', '#901570', '#86009e', '#1e237f'],
        })
        return {
            backgroundColor
        }
    }

    function getSunMoonStyle() {
        return {

        }
    }

    return (
        <Animated.View
            onStartShouldSetResponder={() => true}
            onResponderGrant={props.onOpen}
            style={[styles.dayContainer, getContainerStyle()]}
        >
            <Animated.View style={[styles.sunMoon, getSunMoonStyle()]}></Animated.View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    dayContainer: {
        backgroundColor: 'blue',
        height: 100,
        width: '100%',
    },

    sunMoon: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 100
    }
})