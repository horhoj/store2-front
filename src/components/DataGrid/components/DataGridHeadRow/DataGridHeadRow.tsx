import React from 'react';
import { Button, TableCell, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { DataGridHeadRowProps } from './types';

export const DataGridHeadRow: React.FC<DataGridHeadRowProps> = ({
  fields,
  handleColumnHeaderClkCb,
  sortField,
  sortAsc,
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
      {fields.map((field) => (
        <TableCell key={field.id}>
          <ColumnBtn
            disableRipple={true}
            onClick={handleColumnClkCreator(field.name)}
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
