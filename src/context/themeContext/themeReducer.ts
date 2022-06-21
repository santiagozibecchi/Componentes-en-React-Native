import { DarkTheme, Theme } from "@react-navigation/native";

type ThemeAction =
     | { type: 'set_light_theme' }
     | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
     currentTheme: 'light' | 'dark',
     dividerColor: string,
}

export const lightTheme: ThemeState = {
     currentTheme: 'light',
     dark: false,
     dividerColor: '#084F',
     colors: {
          primary: '#084F6A',
          background: 'white',
          card: 'white',
          text: 'black',
          border: 'orange',
          notification: 'teal',
     },
};

export const darkTheme: ThemeState = {
     currentTheme: 'dark',
     dark: true,
     dividerColor: '#084F',
     colors: {
          primary: '#75CEDB',
          background: 'black',
          card: 'black',
          text: 'white',
          border: 'black',
          notification: 'teal',
     },
};


export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

     switch (action.type) {
          case 'set_light_theme':
               return {
                    ...lightTheme,
               };

          case 'set_dark_theme':
               return {
                    ...darkTheme,
               };

          default:
               return state;

     }
};
