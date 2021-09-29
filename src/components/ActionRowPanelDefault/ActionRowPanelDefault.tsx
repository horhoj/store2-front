import React from 'react';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { ActionRowPanelDefaultProps } from './types';

export const ActionRowPanelDefault: React.FC<ActionRowPanelDefaultProps> = ({
  id,
  handleDeleteCb = null,
  handleEditCb = null,
  disabled,
  isDeleteBtn,
  isEditBtn,
}) => {
  const t = useAppTranslation();

  const handleDeleteBtnClk = () => {
    if (!handleDeleteCb) {
      return;
    }
    if (
      confirm(t('component__action-row-panel-default__delete-request-message'))
    ) {
      handleDeleteCb(id);
    }
  };

  const handleEditBtnClk = () => {
    if (!handleEditCb) {
      return;
    }
    handleEditCb(id);
  };

  return (
    <Wrap>
      {isEditBtn ? (
        <StyledButton onClick={handleEditBtnClk} disabled={disabled}>
          <EditIcon color={disabled ? 'disabled' : 'primary'} />
        </StyledButton>
      ) : null}

      {isDeleteBtn ? (
        <StyledButton onClick={handleDeleteBtnClk} disabled={disabled}>
          <DeleteForeverIcon color={disabled ? 'disabled' : 'secondary'} />
        </StyledButton>
      ) : null}
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
