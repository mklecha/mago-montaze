import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import Configure from "./screens/Configure";

export default function Application() {
    return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <Configure/>
            </TouchableWithoutFeedback>
    );
}
