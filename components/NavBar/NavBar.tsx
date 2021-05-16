import {SnippetsOutlined} from '@ant-design/icons';
import {Layout} from 'antd';
import React, {useCallback, useState} from 'react';

import styled from 'styled-components';
import NAVIGATION_ROUTES from '../../config/NavigationRoutes';

import devices from '../../styles/mediaQueries';
import {useTranslation} from '../shared/hooks/useTranslation';
import useViewport from '../WindowViewport/hooks/windowViewportHook';
import BurgerButton from './BurgerButton';
import useLogout from './hooks/logoutHook';
import useObtainActiveNavLink from './hooks/obtainActiveNavLinkHook';
import ItemLink from './ItemLink';
import MobileMenu from './MobileMenu';
import NavBrand from './NavBrand';
import ProfileSubMenu from './ProfileSubMenu';
import {spaceXSmall, StyledAntdMenu} from './shared/sharedStyles';

const {Header} = Layout;

/**
 * workaround solution see L:116
 */
const StyledProfileSubMenu = styled(ProfileSubMenu)`
  display: none;
  @media ${devices.mdMediaQuery} {
    display: block;
  }
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  ${spaceXSmall}
`;

const ItemsContainer = styled.div`
  display: flex;
  height: 100%;
`;

const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const {t} = useTranslation();
  const {handleLogout} = useLogout();
  const {activeIndex} = useObtainActiveNavLink();
  const {isTabletOrLarger} = useViewport();

  const openMobileMenu = useCallback(() => {
    setOpenMenu(true);
  }, [setOpenMenu]);

  const closeMobileMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  return (
    <>
      <StyledHeader className="header">
        <NavBrand />
        <ItemsContainer>
          {isTabletOrLarger && (
            <StyledAntdMenu
              data-testid="tablet-navbar"
              mode="horizontal"
              selectedKeys={[activeIndex]}
            >
              <ItemLink
                key="1"
                icon={<SnippetsOutlined />}
                label={t('navbar.blog')}
                to={NAVIGATION_ROUTES.blog.path}
              />
              {/* <ItemLink
                key="2"
                label={t('navbar.patients')}
                to={NAVIGATION_ROUTES.patients.path}
              />
              <ItemLink
                key="3"
                label={t('navbar.orderAnalysis')}
                to={NAVIGATION_ROUTES.orderAnalysis.path}
              /> */}
            </StyledAntdMenu>
          )}

          <StyledProfileSubMenu
            activeIndex={activeIndex}
            onLogout={handleLogout}
          />
          {!isTabletOrLarger && <BurgerButton onClick={openMobileMenu} />}
        </ItemsContainer>
        {/*
          /**
              {isTabletOrLarger ? (
                <ProfileSubMenu
                  activeIndex={activeIndex}
                  onLogout={handleLogout}
                />
              ) : (
                <BurgerButton onClick={openMobileMenu} />
              )}
           * 
           */}

        {/*
         * TODO: This is a workaround till ant design team solve their issue
         * @see https://github.com/ant-design/ant-design/issues/27176#issuecomment-812059154
         * If they solve the issue, please use the code above.
         */}
      </StyledHeader>

      {!isTabletOrLarger && (
        <MobileMenu
          activeIndex={activeIndex}
          onClose={closeMobileMenu}
          onLogout={handleLogout}
          open={openMenu}
        />
      )}
    </>
  );
};

export default NavBar;
