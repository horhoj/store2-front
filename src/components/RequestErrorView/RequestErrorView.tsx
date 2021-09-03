import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import styled from 'styled-components';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { RequestErrorViewProps } from './types';
import { useErrorMessage } from './hooks';

export const RequestErrorView: React.FC<RequestErrorViewProps> = ({
  requestError,
}) => {
  const t = useAppTranslation();
  const getErrorMessage = useErrorMessage();
  return (
    <>
      <StyledAlert severity={'error'}>
        <AlertTitle>{t('app__request-error-view__title')}</AlertTitle>
        {getErrorMessage(requestError)}
      </StyledAlert>
    </>
  );
};

const StyledAlert = styled(Alert)`
  width: 100%;
  max-width: 600px;
`;
