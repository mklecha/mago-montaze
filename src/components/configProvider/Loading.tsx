import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
