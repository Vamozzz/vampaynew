"use client"
import React from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6C54FF' },
    secondary: { main: '#ff4081' },
    background: { default: 'white', paper: 'white' },
    text: { primary: '#333333', secondary: '#666666' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
  },
});

const darkModeTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark',
    primary: { main: '#6C54FF' },
    secondary: { main: '#ff80ab' },
    background: { default: 'grey', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#a0a0a0' },
  },
});

interface ThemedComponentProps {
  mode: 'light' | 'dark';
  children: React.ReactNode;
}

const ThemedComponent: React.FC<ThemedComponentProps> = ({ mode, children }) => {
  const selectedTheme: Theme = mode === 'dark' ? darkModeTheme : theme;

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default ThemedComponent;
