import React from 'react';
import { Box, MenuItem, Select } from '@material-ui/core';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LANG_EN, LANG_RU } from '../../i18n';

export const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(e.target.value as string);
  };

  return (
    <Wrap>
      <StyledSelect value={i18n.language} onChange={handleChange}>
        <MenuItem value={LANG_RU}>РУС</MenuItem>
        <MenuItem value={LANG_EN}>ENG</MenuItem>
      </StyledSelect>
    </Wrap>
  );
};

const StyledSelect = styled(Select)``;

const Wrap = styled(Box)`
  padding: 0 10px;
`;
