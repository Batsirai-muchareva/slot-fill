import { createContext, useContext } from "@wordpress/element";

type Setting = Window & {
    myPluginData: {
        menus: any
    }
}

function getSettings() {
    const browserWindow = window as unknown as Setting;

    return browserWindow.myPluginData
}

const SettingsContext = createContext( undefined );

export const SettingsProvider = ({ children }) => {
    const settings = getSettings();

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};
