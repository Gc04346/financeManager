import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Routes from "./src/routes";
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
            <StatusBar barStyle="light-content" backgroundColor="#42bc3f"/>
            <Routes/>
        </PaperProvider>
    );
}