import React from 'react';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import Theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
    <ThemeProvider theme={Theme}>
         <GlobalStyles/>
        {element}
    </ThemeProvider>
    </Provider>
)