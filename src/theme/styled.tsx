import styled from 'styled-components';

export const StyledFieldSet = styled('fieldset')<{ fullWidth: boolean }>`
  border: none;
  padding: 0;
  margin: 0;
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
`;
