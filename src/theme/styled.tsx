import styled from 'styled-components';
import Link from '@material-ui/core/Link';
import { Theme } from '@material-ui/core';

export const StyledLink = styled(Link)`
  ${({ theme }) => {
    return (theme as Theme).palette.type === 'dark' ? 'color: #5ba6fa' : '';
  }};
`;
