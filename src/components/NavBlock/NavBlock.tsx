import React, { useEffect } from 'react';
import { Box, Drawer, Paper, Theme } from '@material-ui/core';
import styled from 'styled-components';
import { logger } from '../../utils/logger';
import { AppNav } from '../AppNav';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';
import { MenuBtn } from '../MenuBtn';

export const NavBlock: React.FC = () => {
  const isOpenMenu = useAppSelector(appSelectors.getIsOpenMenu);
  const dispatch = useAppDispatch();
  const isSmallWidth = useAppSelector(appSelectors.getIsSmallWidth);

  useEffect(() => {
    const handleResize = () => {
      const innerWidthWhenSidebarIsHidden = 1100;
      const result = window.innerWidth < innerWidthWhenSidebarIsHidden;
      dispatch(appActions.setIsSmallWidth(result));
      //если при изменении размера ширина экрана большая то открываем меню
      //в противном случае закрываем
      dispatch(appActions.setIsOpenMenu(!result));
    };

    //делаем дополнительную проверку при загрузке
    handleResize();

    window.addEventListener('resize', handleResize);
    logger('add resize listener');
    return () => {
      logger('remove resize listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDrawerClose = () => {
    dispatch(appActions.setIsOpenMenu(false));
  };

  const navBig = () => (
    <NavBigWrap show={isOpenMenu}>
      <NavWrap>
        <StyledPaper square={true}>
          <AppNav />
        </StyledPaper>
      </NavWrap>
    </NavBigWrap>
  );

  const navSmall = () => (
    <Drawer
      open={isOpenMenu}
      onClose={handleDrawerClose}
      transitionDuration={300}
    >
      <DrawerInternalWrap>
        <MenuBtn />
      </DrawerInternalWrap>
      <NavWrap>
        <StyledBox>
          <AppNav />
        </StyledBox>
      </NavWrap>
    </Drawer>
  );

  return isSmallWidth ? navSmall() : navBig();
};

const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => (theme as Theme).spacing(1)}px;
  display: flex;
  flex-grow: 1;
`;

const StyledBox = styled(Box)`
  padding: ${({ theme }) => (theme as Theme).spacing(1)}px;
  display: flex;
  flex-grow: 1;
`;

const NavBigWrap = styled.div<{ show: boolean }>`
  display: flex;
  margin-left: ${({ show }) => (show ? '0' : '-250px')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: margin-left 0.3s ease, visibility 0.4s ease;
`;

const NavWrap = styled(Box)`
  width: 250px;
  display: flex;
  flex-grow: 1;
  padding: ${({ theme }) => (theme as Theme).spacing(1, 1, 1, 0)};
`;

const DrawerInternalWrap = styled(Box)`
  padding: 10px 20px;
`;
