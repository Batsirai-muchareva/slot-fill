import * as React from 'react';
import { SettingsProvider } from "./context";
import { SlotFillProvider } from '@wordpress/components';
import SearchComponent from "./components/Search";
import Header from "./components/Header";

export const App = () => {
    return (
        <SlotFillProvider>
            <SettingsProvider>
                <Header />
                <SearchComponent />
            </SettingsProvider>
        </SlotFillProvider>
    );
}
