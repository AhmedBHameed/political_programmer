/**
 * The number 50 is the scale of the color according to Figma
 * @see https://www.figma.com/file/WCipxn54SiYJSVpZ3uTUW5/BiomeDx-Styleguide-und-Report-%234?node-id=13%3A140
 */

const blue50 = '#047CB3';
const orange50 = '#BF5502';
const red = '#ff0000';
const highlightText = '#ffc069';

const theme = {
  colors: {
    blue50,
    orange50,
    red,
    highlightText,
  },
};

export type ThemeProps = typeof theme;
export default theme;
