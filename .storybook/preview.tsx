import '@mantine/core/styles.css';


import { themeFactory } from '@/shared/config/mantine/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const theme = themeFactory()

export const parameters = {
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (Story: any, context: any) => {
    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider theme={theme} forceColorScheme={scheme}>
        <ColorSchemeScript />
        <Story/>
      </MantineProvider>
    );
  },]
