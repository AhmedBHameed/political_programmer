import {SnippetsOutlined, UserOutlined} from '@ant-design/icons';
import {Drawer} from 'antd';
import React from 'react';

import styled from 'styled-components';
import NAVIGATION_ROUTES from '../../config/NavigationRoutes';
import {useTranslation} from '../shared/hooks/useTranslation';
import ItemLink from './ItemLink';
import SubMenuItem from './SubMenuItem';
import NavBrand from './NavBrand';
import {ProfileMenuTitle} from './shared/ProfileMenuTitle';
import {
  spaceXSmall,
  StyledAntdSubMenu,
  StyledAntdMenu,
} from './shared/sharedStyles';

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    ${spaceXSmall}
  }
  .ant-drawer-body {
    padding: 2.4rem 0;
  }
`;

const StyledNavBrand = styled(NavBrand)`
  margin: 0.7rem 0;
`;

interface MenuProps {
  open: boolean;
  activeIndex: string;
  onClose?: () => void;
  onLogout?: () => void;
  onLogin?: () => void;
}

const Menu: React.FC<MenuProps> = ({
  open,
  activeIndex,
  onClose,
  onLogout,
  onLogin,
}) => {
  const {t} = useTranslation();

  return (
    <StyledDrawer
      closable={false}
      data-testid="drawer-navigation"
      key="drawer-menu"
      onClose={onClose}
      placement="left"
      title={<StyledNavBrand />}
      visible={open}
    >
      <StyledAntdMenu
        mobileVersion
        inlineCollapsed={false}
        mode="inline"
        selectedKeys={[activeIndex]}
      >
        <ItemLink
          key="1"
          icon={<SnippetsOutlined />}
          label={t('navbar.blog')}
          onClick={onClose}
          to={NAVIGATION_ROUTES.blog.path}
        />
        {/* <ItemLink
          key="2"
          label={t('navbar.patients')}
          onClick={onClose}
          to={NAVIGATION_ROUTES.patients.path}
        />
        <ItemLink
          key="3"
          label={t('navbar.orderAnalysis')}
          onClick={onClose}
          to={NAVIGATION_ROUTES.orderAnalysis.path}
        /> */}

        <StyledAntdSubMenu
          icon={<UserOutlined />}
          key="mobile-sub-menu"
          title={<ProfileMenuTitle>{t('navbar.settings')}</ProfileMenuTitle>}
        >
          {/* <ItemLink
            key="4"
            label={t('navbar.profileAccount')}
            onClick={onClose}
            to={NAVIGATION_ROUTES.profileAccount.path}
          />
          <ItemLink
            key="5"
            label={t('navbar.profileSettings')}
            onClick={onClose}
            to={NAVIGATION_ROUTES.profileAccount.path}
          />
          <AntdMenu.Divider />
          <ItemLink
            key="6"
            label={t('navbar.profileHelp')}
            onClick={onClose}
            to={NAVIGATION_ROUTES.profileAccount.path}
          />
          <ItemLink
            key="7"
            label={t('navbar.profileSupport')}
            onClick={onClose}
            to={NAVIGATION_ROUTES.profileAccount.path}
          /> */}
          <StyledAntdMenu.Divider />
          <SubMenuItem label={t('navbar.logout')} onClick={onLogout} />
          <SubMenuItem label={t('navbar.login')} onClick={onLogin} />
        </StyledAntdSubMenu>
      </StyledAntdMenu>
    </StyledDrawer>
  );
};

export default Menu;
