'use client'
import store from '@/state';
import { createTheme, localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ThemeProvider } from './ThemeProvider';
import ToastProvider from './ToastProvider';
const RootProvider = ({ children }: { children: ReactNode }) => {
    const theme = createTheme({
        colors: {
            dark: ['#ffffff', '#000000','#000000','#0000','#191919','#000000','#020817','#000000','#000000','#000000'],
        }
    });
    const colorSchemeManager = localStorageColorSchemeManager({
        key: 'igit-mca-theme',
    });

    return (
        <MantineProvider theme={theme}
            colorSchemeManager={colorSchemeManager}
            defaultColorScheme='auto'
        >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ReduxProvider store={store}>
                    <ToastProvider>
                        {children}
                    </ToastProvider>
                </ReduxProvider>
            </ThemeProvider>
        </MantineProvider>
    )
}

export default RootProvider