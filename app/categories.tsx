import { Link } from "expo-router";
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { typography } from './styles';

export default function Categories() {
    return (
        <SafeAreaView>
            <Link href="/home" style={styles.back}>Back</Link>
            <Text style={typography.header}>Categories</Text>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.tile}
                    source={require('../assets/images/react-logo.png')}
                />
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,


    },
    tile: {
        borderRadius: 8
    },
    back: {
        marginLeft: 20,
        marginBottom: 10

    }

});