import React from 'react';
import {StatusBar, View, Text, Image, Pressable, StyleProp, TextStyle} from 'react-native';
import {headerStyles} from '../styles';

export interface MyHeaderProps {
    title: string;
    openConfig?: () => void;
}

export default function MyHeader(props: MyHeaderProps) {

    const rightComponent = (
        <Pressable style={headerStyles.settingsIconButton} onPress={props.openConfig}>
            {!props.openConfig ? undefined : (
                <Image style={headerStyles.settingsIcon} source={require('./../settings.png')}/>
            )}
        </Pressable>
    )

    const optionalTextMargin: StyleProp<TextStyle> = !props.openConfig ? {} : {marginRight: -35};

    return (
        <View style={[headerStyles.container, {paddingTop: StatusBar.currentHeight, paddingBottom: 15}]}>
            <View style={headerStyles.titleBar}>
                <Text style={[headerStyles.title, optionalTextMargin]}>{props.title}</Text>
                {rightComponent}
            </View>
        </View>
    );
}

