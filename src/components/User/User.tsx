import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors, authWorkers } from '../../store/auth';

export const User: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(authSelectors.getUserData);

  const handleLogout = () => {
    dispatch(authWorkers.authSignOut());
  };
  return userData ? (
    <Wrap>
      <Box>
        <Typography>{JSON.stringify(userData, null, 2)}</Typography>
      </Box>
      <Box>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    </Wrap>
  ) : null;
};

const Wrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-content: center;
  & > div {
    margin: auto;
  }
`;
