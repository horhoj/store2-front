import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import React from 'react';
import { DataGridProps } from './types';
import { DataGridRow } from './components/DataGridRow';

export const DataGrid: React.FC<DataGridProps> = ({ fields, rows }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {fields.map((field) => (
              <TableCell key={field.id}>{field.title.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <DataGridRow key={row.id} row={row} fields={fields} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};
