import React from 'react';
import { BrightnessHigh, BrightnessLow } from '@material-ui/icons';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';

const StyledButton = styled(Button)`
  border-radius: 50%;
  min-width: auto;
  padding: 10px;
`;

export const ThemeModeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(appSelectors.getIsDarkMode);

  const handleTestBtnClk = () => {
    dispatch(appActions.toggleDarkMode());
  };

  return (
    <>
      <StyledButton type="button" onClick={handleTestBtnClk}>
        {isDarkMode ? <BrightnessLow /> : <BrightnessHigh />}
      </StyledButton>
    </>
  );
};
