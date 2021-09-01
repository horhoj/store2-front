import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useAppTranslation } from '../../i18n/useAppTranslation';

export const AppFooter: React.FC = () => {
  const t = useAppTranslation();

  return (
    <StyledAppBar position="static" color={'inherit'}>
      <StyledToolBar>
        <Typography noWrap={true}>
          {t('app__footer__copyright-msg1', {
            year: new Date().getFullYear().toString(),
          })}
          &nbsp;
        </Typography>
        <Typography noWrap={true}>
          {t('app__footer__copyright-msg2')}
        </Typography>
      </StyledToolBar>
    </StyledAppBar>
  );
};

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledAppBar = styled(AppBar)``;
