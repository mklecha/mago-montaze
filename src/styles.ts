import {StyleSheet} from 'react-native';

const colors = {
    blue: '#2289DC',
    white: '#fff',
    gray: '#777',
    black: '#000'
}

export const headerStyles = StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    settingsIcon: {
        justifyContent: 'center'
    }
});

export const containerStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    innerContainer: {
        padding: 10
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export const summaryStyles = StyleSheet.create({
    field: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 3
    },
    fieldValue: {
        fontWeight: 'bold'
    },
    button: {
        borderWidth: 1,
        borderColor: colors.white,
    },
    photosContainer: {
        borderStyle: 'dashed',
        borderColor: colors.gray,
        borderWidth: 1,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    }
});

export const inputStyles = StyleSheet.create({
    colorBlack: {
        color: colors.black
    },
    label: {
        marginTop: 10,
        color: colors.black
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gray,
        padding: 8,
    },
    numberInput: {
        padding: 8
    },
    multiline: {
        textAlignVertical: 'top'
    },
    button: {
        marginTop: 20
    }
});

export const photoPickerStyles = StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,

        borderStyle: 'dashed',
        borderColor: colors.gray,
        borderWidth: 1,
        alignItems: 'center',
    },
    photosContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    photoContainer: {
        width: '33%',
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 5,
        marginBottom: 10
    },
    photo: {
        height: 100
    },
    orButton: {
        margin: 10
    }
});
