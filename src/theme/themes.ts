export const themes = {
  light: {
    background: '#F4F8FC',
    card: '#FFFFFF',
    text: '#102A43',
    primary: '#0B66E4',
    border: '#E4E8EE',
  },
  dark: {
    background: '#101827',
    card: '#1B2638',
    text: '#F7FAFC',
    primary: '#20C5F5',
    border: '#2A384C',
  },
};

export type AppTheme = typeof themes.light;