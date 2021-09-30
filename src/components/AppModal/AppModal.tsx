import React from 'react';
import { Modal, Paper, Theme } from '@material-ui/core';
import styled from 'styled-components';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppModalProps } from './types';

export const AppModal: React.FC<AppModalProps> = ({
  closeCb,
  open,
  children,
}) => {
  return (
    <StyledModal
      open={open}
      onClose={closeCb}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <StyledPaper>{children}</StyledPaper>
      </Fade>
    </StyledModal>
  );
};

const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => (theme as Theme).spacing(2)}px;
  max-width: 80%;
  max-height: 90%;
  overflow: auto;
  @media screen and (max-width: 600px) {
    max-width: 95%;
    max-height: 95%;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
