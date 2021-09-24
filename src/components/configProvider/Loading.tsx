import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {containerStyles} from '../../styles';

export default function Loading() {
    return (
        <View style={[containerStyles.container, containerStyles.center]}>
            <ActivityIndicator size={40} color="#2289DC"/>
        </View>
    );
}
