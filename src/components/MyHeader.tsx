import React from 'react';
import {Header} from "react-native-elements";
import {headerStyles} from '../styles';

export interface MyHeaderProps {
    title: string;
    openConfig?: () => void;
}

export default function MyHeader(props: MyHeaderProps) {

    const rightComponent = !props.openConfig ? undefined : {
        icon: 'settings',
        color: '#fff',
        onPress: props.openConfig
    }

    return (
        <Header
            centerComponent={{text: props.title, style: headerStyles.title}}
            rightComponent={rightComponent}
            rightContainerStyle={headerStyles.settingsIcon}
        />
    );
}

