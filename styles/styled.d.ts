import 'styled-components';

/**
 * For more information whey we need this file @see https://styled-components.com/docs/api#create-a-declarations-file
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue50: string;
      orange50: string;
      red: string;
      highlightText: string;
    };
  }
}
