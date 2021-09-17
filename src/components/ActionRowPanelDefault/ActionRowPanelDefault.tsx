import React from 'react';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { ActionRowPanelDefaultProps } from './types';

export const ActionRowPanelDefault: React.FC<ActionRowPanelDefaultProps> = ({
  id,
  handleDeleteCb,
  handleEditCb,
  disabled,
}) => {
  const t = useAppTranslation();

  const handleDeleteBtnClk = () => {
    if (
      confirm(t('component__action-row-panel-default__delete-request-message'))
    ) {
      handleDeleteCb(id);
    }
  };

  return (
    <Wrap>
      <StyledButton onClick={() => handleEditCb(id)} disabled={disabled}>
        <EditIcon color={disabled ? 'disabled' : 'primary'} />
      </StyledButton>
      <StyledButton onClick={handleDeleteBtnClk} disabled={disabled}>
        <DeleteForeverIcon color={disabled ? 'disabled' : 'secondary'} />
      </StyledButton>
    </Wrap>
  );
};

const Wrap = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
`;

const StyledButton = styled(Button)`
  min-width: 40px;
`;
