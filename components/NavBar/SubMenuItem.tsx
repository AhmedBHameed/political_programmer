import {Menu} from 'antd';
import React from 'react';
import {navItemFontSize} from './shared/sharedStyles';
import styled from 'styled-components';

interface SubMenuProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const StyledLabel = styled.span`
  font-size: 0.9rem;
`;

const SubMenuItem: React.FC<SubMenuProps> = (props) => {
  const {label, ...reset} = props;

  return (
    <Menu.Item {...reset} data-testid="navbar-item">
      <StyledLabel>{label}</StyledLabel>
    </Menu.Item>
  );
};

export default SubMenuItem;
