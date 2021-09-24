import {StyleSheet} from "react-native";

export const headerStyles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: "bold"
    },
    settingsIcon: {
        justifyContent: "center"
    }
});

export const containerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    innerContainer: {
        padding: 10
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export const summaryStyles = StyleSheet.create({
    field: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 3
    },
    fieldValue: {
        fontWeight: "bold"
    },
    button: {
        borderWidth: 1,
        borderColor: '#fff',
    }
})

export const inputStyles = StyleSheet.create({
    colorBlack: {
        color: '#000'
    },
    label: {
        marginTop: 10,
        color: '#000'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
    },
    numberInput: {
        padding: 8
    },
    multiline: {
        textAlignVertical: "top"
    },
    button: {
        marginTop: 20
    }
})
