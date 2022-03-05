import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Routes from "./src/routes";

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#33FFA2"/>
            <Routes/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
