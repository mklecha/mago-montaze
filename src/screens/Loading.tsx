import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CONFIG_KEY} from "../vars";

export default function Loading() {
    const [config, setConfig] = useState({loaded: false, value: {} as any});

    useEffect(() => {
        AsyncStorage.getItem(CONFIG_KEY).then(data => {
            const configObj = data != null ? JSON.parse(data) : {};
            setConfig({loaded: true, value: configObj});
        });
    }, [])

    useEffect(() => {
        if (config.loaded) {
            if (!config.value.initialized) {
                // navigation.navigate(routes.config);
            } else {
                // navigation.navigate(routes.form, {config: config.value});
            }
        }
    })

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
            {/*<Button title={"Go to config"} onPress={() => navigation.navigate(routes.summary)}/>*/}
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
