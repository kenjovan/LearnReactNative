import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, SafeAreaView, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    const handleEmailFocus = () => {
        setEmailActive(true);
    };

    const handleEmailBlur = () => {
        setEmailActive(false);
    };

    const handlePasswordFocus = () => {
        setPasswordActive(true);
    };

    const handlePasswordBlur = () => {
        setPasswordActive(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text
                    style={styles.title}>Home</Text>
                <Text
                    style={styles.subTitle}>This is the Home Page</Text>
            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        width: 225,
        // height: 131,
        // borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center'
        // flex:1
    },
    title: {
        // textAlign: 'center',
        paddingVertical: 40,
        lineHeight: 45,
        fontSize: 30,
        fontWeight: '700',
        color: '#064BB5'
    },
    subTitle: {
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 20,
        fontWeight: '600',
    },
    textInputContainer: {
        width: 357,
        height: 157,
        gap: 29,
        paddingVertical: 40,
        alignSelf: 'center'

    },
    textInput: {
        width: 357,
        // height: 64,
        // top: 309,
        // left: 16,
        gap: 10,
        backgroundColor: '#F1F4FF',
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 35,
        paddingBottom: 20,
        paddingLeft: 20,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
    },
    textInputFocus: {
        width: 357,
        // height: 64,
        // top: 309,
        // left: 16,
        gap: 10,
        borderColor: '#064BB5',
        backgroundColor: '#F1F4FF',
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 35,
        paddingBottom: 20,
        paddingLeft: 20,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        borderWidth: 2
    },
    forgotPassword: {
        textAlign: 'right',
        lineHeight: 21,
        fontSize: 14,
        fontWeight: '600',
        color: '#064BB5'
    },
    signInButton: {
        width: 357,
        gap: 10,
        backgroundColor: '#064BB5',
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 35,
        paddingBottom: 20,
        paddingLeft: 20,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        // alignItems:'center'
    },
    signInTitle: {
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    createNewAccountTitle: {
        textAlign: 'center',
        lineHeight: 21,
        fontSize: 14,
        fontWeight: '600',
        color: '#494949'
    },
    continueWithTitle: {
        textAlign: 'center',
        lineHeight: 21,
        fontSize: 14,
        fontWeight: '600',
        color: '#064BB5'
    },
    autoLoginContainer: {
        width: 200,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    autoLoginBG: {
        width: 60,
        height: 44,
        backgroundColor: '#ECECEC',
        gap: 10,
        borderRadius: 10,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    autoLoginIcon: {
        width: 18.75,
        height: 18.75
    }
});

export default Dashboard;