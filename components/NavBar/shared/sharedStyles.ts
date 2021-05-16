import {Menu} from 'antd';
import styled, {css} from 'styled-components';

const spaceXSmall = css`
  padding: 0 1.4rem;
`;

const navItemFontSize = css`
  font-size: 1.1rem !important;
`;

const menuItemStyle = css`
  &&.ant-menu-item,
  &&.ant-menu-submenu {
    top: 0px;
    height: 100%;
    margin-top: 0px;
  }
`;

const StyledAntdMenu = styled(Menu).withConfig({
  shouldForwardProp: (prop) => !['mobileVersion'].includes(prop),
})<{mobileVersion?: boolean}>((props) => {
  const {mobileVersion} = props;

  return `
  ${mobileVersion ? '' : 'height: 100%;'}
  font-size: 1.2rem;
  border-bottom: 0;
  .anticon svg {
    ${navItemFontSize}
  }
`;
});

const StyledAntdSubMenu = styled(Menu.SubMenu)`
  ${menuItemStyle}
  .anticon svg {
    ${navItemFontSize}
  }
`;

export {
  spaceXSmall,
  navItemFontSize,
  StyledAntdSubMenu,
  StyledAntdMenu,
  menuItemStyle,
};
