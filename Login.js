import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, SafeAreaView, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
// import "@fontsource/poppins/700-italic.css"; 

const Login = ({ navigation }) => {
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
                    style={styles.title}>Login here</Text>
                <Text
                    style={styles.subTitle}>Welcome back you've been missed!</Text>
            </View>

            <View style={styles.textInputContainer}>
                <TouchableOpacity onPress={handleEmailFocus}>
                    <TextInput
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailBlur}
                        style={[styles.textInput, emailActive && styles.textInputFocus]}
                        placeholder="Email"
                        placeholderTextColor='#626262'
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePasswordFocus}>
                    <TextInput
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                        style={[styles.textInput, passwordActive && styles.textInputFocus]}
                        placeholder="Password"
                        placeholderTextColor='#626262'
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => 'null'}>
                    <Text style={styles.forgotPassword}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => 'null'}>
                    <Text style={styles.signInTitle}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.createNewAccountTitle}>Create new account</Text>
                </TouchableOpacity>

                <Text style={styles.continueWithTitle}>Or continue with</Text>
                
            </View>


            {/* <View>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />

            </View> */}

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {

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
});

export default Login;