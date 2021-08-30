import React from 'react';
import { TableCell, TableRow, Theme } from '@material-ui/core';
import styled from 'styled-components';
import { DataGridRowProps } from './types';

export const DataGridRow: React.FC<DataGridRowProps> = ({ row, fields }) => {
  return (
    <TableRow>
      {fields.map((field) => (
        <TableBodyCell key={field.id}>{row[field.name]}</TableBodyCell>
      ))}
    </TableRow>
  );
};

const TableBodyCell = styled(TableCell)`
  padding: ${({ theme }) => (theme as Theme).spacing(2, 3)};
`;
