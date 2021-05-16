import {Menu} from 'antd';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {menuItemStyle, navItemFontSize} from './shared/sharedStyles';
import {mediumGathomFontStyle} from '../shared/sharedStyles';

const StyledLink = styled(Link)`
  ${mediumGathomFontStyle};
`;

const StyledAntdMenuItem = styled(Menu.Item)`
  ${menuItemStyle}
  ${navItemFontSize}
`;
interface ItemLinkProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ItemLink: React.FC<ItemLinkProps> = (props) => {
  const {to, label, ...reset} = props;
  return (
    <StyledAntdMenuItem {...reset} data-testid="navbar-item">
      <StyledLink href={to}>{label}</StyledLink>
    </StyledAntdMenuItem>
  );
};

export default ItemLink;
