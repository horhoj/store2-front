import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import styled from 'styled-components';
import { Box, Theme } from '@material-ui/core';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { RequestErrorViewProps } from './types';
import { useErrorMessage } from './hooks';

export const RequestErrorView: React.FC<RequestErrorViewProps> = ({
  requestError,
  localOverrideRequestErrorMessageList = null,
  children,
}) => {
  const t = useAppTranslation();
  const getErrorMessage = useErrorMessage();
  return (
    <>
      <StyledAlert severity={'error'}>
        <AlertTitle>{t('app__request-error-view__title')}</AlertTitle>
        <ChapterWrap>
          {getErrorMessage(requestError, localOverrideRequestErrorMessageList)}
        </ChapterWrap>
        <ChapterWrap>{children}</ChapterWrap>
      </StyledAlert>
    </>
  );
};

const StyledAlert = styled(Alert)`
  width: 100%;
  max-width: 600px;
`;

const ChapterWrap = styled(Box)`
  margin-top: ${({ theme }) => (theme as Theme).spacing(1)}px;
`;
