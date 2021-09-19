import React from 'react';
import { Button, TableCell, TableRow, Theme } from '@material-ui/core';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { DataGridHeadRowProps } from './types';

export const DataGridHeadRow: React.FC<DataGridHeadRowProps> = ({
  fields,
  handleColumnHeaderClkCb,
  sortField,
  sortAsc,
  disabled,
  actionColumnTitle,
}) => {
  const handleColumnClkCreator = (fieldName: string) => () => {
    handleColumnHeaderClkCb(fieldName);
  };

  const arrow = (fieldName: string) => {
    if (fieldName !== sortField) {
      return null;
    }
    return sortAsc ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
  };

  return (
    <TableRow>
      <ActionColumnTableCell disabled={disabled}>№</ActionColumnTableCell>
      <ActionColumnTableCell disabled={disabled}>
        {actionColumnTitle.toUpperCase()}
      </ActionColumnTableCell>
      {fields.map((field) => (
        <TableCell key={field.id}>
          <ColumnBtn
            disableRipple={true}
            onClick={handleColumnClkCreator(field.name)}
            disabled={disabled}
          >
            {field.title.toUpperCase()}&nbsp;{arrow(field.name)}
          </ColumnBtn>
        </TableCell>
      ))}
    </TableRow>
  );
};

const ColumnBtn = styled(Button)`
  justify-content: start;
`;

const ActionColumnTableCell = styled(TableCell)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled
      ? (theme as Theme).palette.text.disabled
      : (theme as Theme).palette.text.primary};
`;
