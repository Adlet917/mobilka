import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes, AppTheme } from '../theme/themes';

export type ThemeMode = 'light' | 'dark';
export type FontScale = 'small' | 'normal' | 'large';

export type Settings = {
  theme: ThemeMode;
  fontScale: FontScale;
};

type SettingsContextValue = Settings & {
  colors: AppTheme;
  fontSize: number;
  setTheme: (value: ThemeMode) => void;
  setFontScale: (value: FontScale) => void;
  resetSettings: () => void;
};

const STORAGE_KEY = '@campus_hub_settings';

const initialSettings: Settings = {
  theme: 'light',
  fontScale: 'normal',
};

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setSettings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    if (!isReady) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings, isReady]);

  const setTheme = (theme: ThemeMode) => setSettings((prev) => ({ ...prev, theme }));
  const setFontScale = (fontScale: FontScale) => setSettings((prev) => ({ ...prev, fontScale }));
  const resetSettings = () => setSettings(initialSettings);

  const fontSizes = { small: 14, normal: 16, large: 20 };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        colors: themes[settings.theme],
        fontSize: fontSizes[settings.fontScale],
        setTheme,
        setFontScale,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
};