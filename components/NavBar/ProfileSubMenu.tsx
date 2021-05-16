import {CaretDownOutlined, SnippetsOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';

import {useTranslation} from '../shared/hooks/useTranslation';
import SubMenuItem from './SubMenuItem';
import {ProfileMenuTitle} from './shared/ProfileMenuTitle';
import {StyledAntdMenu, StyledAntdSubMenu} from './shared/sharedStyles';

/**
 * TODO: fix Submenu bug @see https://github.com/ant-design/ant-design/issues/27176
 */
interface ProfileSubMenuProps {
  activeIndex: string;
  onClose?: () => void;
  onLogout?: () => void;
  onLogin?: () => void;
  className?: string;
}

const ProfileSubMenu: React.FC<ProfileSubMenuProps> = ({
  activeIndex,
  className,
  onClose,
  onLogin,
  onLogout,
}) => {
  const {t} = useTranslation();

  return (
    <StyledAntdMenu
      className={className}
      data-testid="profile-tablet-submenu"
      mode="horizontal"
      selectedKeys={[activeIndex]}
    >
      <StyledAntdSubMenu
        icon={<SnippetsOutlined />}
        key="profileMenu"
        title={
          <ProfileMenuTitle>
            {t('navbar.settings')} <CaretDownOutlined />
          </ProfileMenuTitle>
        }
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
        <Menu.Divider />
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
        <Menu.Divider />
        <SubMenuItem label={t('navbar.logout')} onClick={onLogout} />
        <SubMenuItem label={t('navbar.login')} onClick={onLogin} />
      </StyledAntdSubMenu>
    </StyledAntdMenu>
  );
};

export default ProfileSubMenu;
