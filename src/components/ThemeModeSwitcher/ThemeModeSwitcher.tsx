import React from 'react';
import { BrightnessHigh, BrightnessLow } from '@material-ui/icons';
import styled from 'styled-components';
import { Box, Button, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';

export const ThemeModeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(appSelectors.getIsDarkMode);

  const handleTestBtnClk = () => {
    dispatch(appActions.toggleDarkMode());
  };

  return (
    <Wrap>
      <StyledButton type="button" onClick={handleTestBtnClk}>
        <Typography>
          {isDarkMode ? (
            <BrightnessLow color={'inherit'} />
          ) : (
            <BrightnessHigh color={'inherit'} />
          )}
        </Typography>
      </StyledButton>
    </Wrap>
  );
};

const StyledButton = styled(Button)`
  min-width: 40px;
  min-height: 40px;
`;

const Wrap = styled(Box)``;
