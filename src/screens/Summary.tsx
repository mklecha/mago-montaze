import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Summary() {

    return (
        <View style={styles.container}>
            <Text>Summary</Text>
            {/*<Text>{JSON.stringify(route.params.config, undefined, "\t")}</Text>*/}
            {/*<Text>{JSON.stringify(route.params.formValues, undefined, "\t")}</Text>*/}
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
