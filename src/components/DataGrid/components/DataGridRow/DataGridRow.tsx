import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { DataGridRowProps } from './types';

export const DataGridRow: React.FC<DataGridRowProps> = ({ row, fields }) => {
  return (
    <TableRow>
      {fields.map((field) => (
        <TableCell key={field.id}>{row[field.name]}</TableCell>
      ))}
    </TableRow>
  );
};
