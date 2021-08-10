import styled from 'styled-components';

// export const StyledLink = styled(Link)`
//   ${({ theme }) => {
//     return (theme as Theme).palette.type === 'dark' ? 'color: #5ba6fa' : '';
//   }};
// `;

export const StyledFieldSet = styled('fieldset')<{ fullWidth: boolean }>`
  border: none;
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
`;
