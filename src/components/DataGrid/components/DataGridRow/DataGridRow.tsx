import React from 'react';
import { TableCell, TableRow, Theme } from '@material-ui/core';
import styled from 'styled-components';
import { DataGridRowProps } from './types';
import { CellValue } from './components/CellValue';

export const DataGridRow: React.FC<DataGridRowProps> = ({
  row,
  fields,
  searchStr,
}) => {
  return (
    <TableRow>
      {fields.map((field) => (
        <TableBodyCell key={field.id}>
          <CellValue value={row[field.name]} searchStr={searchStr} />
        </TableBodyCell>
      ))}
    </TableRow>
  );
};

const TableBodyCell = styled(TableCell)`
  padding: ${({ theme }) => (theme as Theme).spacing(2, 3)};
`;
