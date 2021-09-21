import React, {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Keyboard, StyleSheet, TextInput} from "react-native";
import {texts} from "../../../texts";

export interface MyDatePickerProps {
    setDate: (date: Date) => void
}

export default function MyDatePicker(props: MyDatePickerProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(new Date());

    const handleChange = (event: any, selectedDate: any) => {
        setOpen(false);
        setValue(selectedDate);

        if (selectedDate) {
            props.setDate(selectedDate);
        }
        Keyboard.dismiss();
    };


    return (
        <>
            <TextInput
                value={!!value ? value.toLocaleDateString() : texts.datePicker.selectDate}
                style={styles.input}
                onFocus={() => setOpen(true)}/>
            {open && (<DateTimePicker
                    testID="dateTimePicker"
                    value={value || new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={handleChange}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
